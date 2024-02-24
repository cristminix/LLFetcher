import { courseUrlFromSlug, isTimeExpired } from "../../../../global/course-api/course_fn"
import { formatLeadingZeros } from "../../../../global/fn"
import { QueueResult } from "./Queue"
import JsFileDownloader from "js-file-downloader"
// import FileSaver from 'stream-writer'
import { sendMessage } from "../../../../global/fn"
import streamSaver from "streamsaver"
import UserData from "../../../../global/models/UserData"
const cdl_getOpeningIds = () => {
  var ids = []
  try {
    ids = JSON.parse(localStorage.openWhenComplete)
  } catch (e) {
    localStorage.openWhenComplete = JSON.stringify(ids)
  }
  return ids
}

const cdl_setOpeningIds = (ids) => {
  localStorage.openWhenComplete = JSON.stringify(ids)
}
let cdl_overwrite = (item, suggest) => {
  suggest({ filename: item.filename, conflict_action: "overwrite", conflictAction: "overwrite" })
  // Force all downloads to overwrite any existing files instead of inserting
  // ' (1)', ' (2)', etc.
  // conflict_action was renamed to conflictAction in
  // https://chromium.googlesource.com/chromium/src/+/f1d784d6938b8fe8e0d257e41b26341992c2552c
  // which was first picked up in branch 1580.
}
let cdl_changed = (delta) => {
  if (!delta.state || delta.state.current != "complete") {
    return
  }
  let ids = cdl_getOpeningIds()
  if (ids.indexOf(delta.id) < 0) {
    return
  }
  chrome.downloads.open(delta.id)
  ids.splice(ids.indexOf(delta.id), 1)
  cdl_setOpeningIds(ids)
}

const chromeDownload = async (url, filename, onProgressCallback = (f) => f) => {
  return new Promise((resolve, reject) => {
    chrome.downloads.onChanged.removeListener(cdl_changed)
    cdl_changed = (delta) => {
      if (!delta.state || delta.state.current != "complete") {
        return
      }
      let ids = cdl_getOpeningIds()
      if (ids.indexOf(delta.id) < 0) {
        return
      }
      // chrome.downloads.open(delta.id)
      resolve(true)
      ids.splice(ids.indexOf(delta.id), 1)
      cdl_setOpeningIds(ids)
    }
    chrome.downloads.onChanged.addListener(cdl_changed)

    chrome.downloads.onDeterminingFilename.removeListener(cdl_overwrite)
    cdl_overwrite = (item, suggest) => {
      suggest({ filename, conflict_action: "overwrite", conflictAction: "overwrite" })
    }
    chrome.downloads.onDeterminingFilename.addListener(cdl_overwrite)

    chrome.downloads.download({ url, filename }, function (downloadId) {
      var ids = cdl_getOpeningIds()
      if (ids.indexOf(downloadId) >= 0) {
        return
      }
      ids.push(downloadId)
      cdl_setOpeningIds(ids)
    })
  })
}
const downloadUsingStreamWriter = async (url, filename, onProgressCallback = (f) => f) => {
  return new Promise((resolve, reject) => {
    const fileStream = streamSaver.createWriteStream(filename)
    try {
      fetch(url).then((res) => {
        const readableStream = res.body

        // more optimized
        if (window.WritableStream && readableStream.pipeTo) {
          return readableStream.pipeTo(fileStream).then(() => {
            console.log("done writing")
            resolve(true)
          })
        }

        window.writer = fileStream.getWriter()

        const reader = res.body.getReader()
        const pump = () => reader.read().then((res) => (res.done ? writer.close() : writer.write(res.value).then(pump)))

        pump()
      })
    } catch (e) {
      reject(e)
    }
  })
}

const downloadUsingAria2c = async (url, filename, course, onProgressCallback = (f) => f) => {
  return new Promise(async (resolve, reject) => {
    let cookies = await chrome.cookies.getAll({ domain: "www.linkedin.com" })

    if (cookies) {
      try {
        sendMessage(`nm.download.aria2c`, { url, filename, cookies, course }, "background", (response) => {
          console.log({ response })
          resolve(response)
        })
      } catch (e) {
        reject(e)
      }
    } else {
      reject("No Cookies")
    }
  })
}

const checkSlocsExpired = (slocs) => {
  let countExpired = 0
  slocs.map((item) => {
    if (isTimeExpired(item.expiresAt)) {
      countExpired += 1
    }
  })

  return countExpired
}
// return sloc and trans url
const fetchQMeta = async (courseApi, toc) => {
  let slocs = null
  let transcripts = null
  let err = null
  let refresh = false
  try {
    slocs = await courseApi.getStreamLocs(toc, refresh)
    if (checkSlocsExpired(slocs) > 0) {
      console.error("EXPIRED")
      refresh = true
      slocs = await courseApi.getStreamLocs(toc, refresh)
    }
    transcripts = await courseApi.getTranscripts(toc, refresh)
    // let courseUrl = courseUrlFromSlug(slug)
  } catch (e) {
    err = e
    console.error(e)
  }

  return [slocs, transcripts, err]
}

const checkQueueIsAllFinished = async (courseId, tocArray = [], mQState) => {
  const records = mQState.getListByCourseId(courseId)
  if (records.length == 0 || !Array.isArray(tocArray)) {
    return false
  }
  const recordsFiltered = records.filter((rec) => rec.result === QueueResult.SUCCESS)
  return recordsFiltered.length === tocArray.length
}

const downloadController = async (
  url,
  idx,
  course,
  toc,
  store,
  downloaderRef,
  qState,
  provider,
  t,
  onProgressCallback = (e, idx, course, toc, opt, qState, t, provider) => null
) => {
  console.log(provider)

  return new Promise((resolve, reject) => {
    const dmsetup = getDmStup(course.id, store)

    if (!dmsetup) {
      console.error("No DM Setup")
      resolve(false)
      return
    }
    const { enableFilenameIndex, selectedFmt } = dmsetup
    const filenamePrefix = enableFilenameIndex ? `${formatLeadingZeros(idx + 1)}-` : ""
    const filename = `${filenamePrefix}${toc.slug}-${selectedFmt}.${t == "t" ? "vtt" : "mp4"}`
    // const url = vttUrl
    let downloader = null
    if (provider == "js-file-downloader") {
      downloader = new JsFileDownloader({
        url,
        autoStart: false,
        filename,
        timeout: 86400 * 1000,
        process: (e) => {
          onProgressCallback(e, idx, course, toc, { filename, url }, qState, t, provider)
        },
      })
      downloaderRef.current = downloader

      downloader
        .start()
        .then(function () {
          resolve(true)
        })
        .catch(function (error) {
          reject(error)
        })
    } else if (provider == "stream-writer") {
      downloadUsingStreamWriter(url, filename)
        .then((stt) => resolve(stt))
        .catch((e) => reject(e))
    } else if (provider == "direct") {
      chromeDownload(url, filename)
        .then((stt) => resolve(stt))
        .catch((e) => reject(e))
    } else if (provider == "aria2c") {
      downloadUsingAria2c(url, filename, course)
        .then((stt) => resolve(stt))
        .catch((e) => reject(e))
    }
  })
}
const downloadVtt = async (
  vttUrl,
  idx,
  course,
  toc,
  store,
  downloaderRef,
  qState,
  provider,
  onProgressCallback = (e, idx, course, toc, opt, qState, t, provider) => null
) => {
  return await downloadController(vttUrl, idx, course, toc, store, downloaderRef, qState, provider, "t", onProgressCallback)
}

const getDmStup = (courseId, store) => {
  const mDMSetup = store.get("DMSetup")
  return mDMSetup.getByCourseId(courseId)
}

const downloadMedia = async (
  mediaUrl,
  idx,
  course,
  toc,
  store,
  downloaderRef,
  qState,
  provider,
  onProgressCallback = (e, idx, course, toc, opt, qState, t, provider) => null
) => {
  return await downloadController(mediaUrl, idx, course, toc, store, downloaderRef, qState, provider, "m", onProgressCallback)
}

const selectMediaUrl = (slocs, courseId, store, defaultFmt = "720") => {
  const dmsetup = getDmStup(courseId, store)
  let isExpired = false
  if (!dmsetup) {
    return null
  }

  const { selectedFmt } = dmsetup
  let errWarnMsg = {
    match: false,
    prefered: defaultFmt,
    orig: selectedFmt,
  }
  console.log(selectedFmt, dmsetup)
  let mediaUrl = null
  let selectedSloc

  let filteredSlocs = slocs.filter((item) => item.fmt === selectedFmt)
  if (filteredSlocs.length > 0) {
    errWarnMsg.match = true
    selectedSloc = filteredSlocs[0]
  } else {
    filteredSlocs = slocs.filter((item) => item.fmt === defaultFmt)
    if (filteredSlocs.length > 0) {
      selectedSloc = filteredSlocs[0]
    } else {
      selectedSloc = slocs[slocs.length - 1]
    }
    errWarnMsg.match = false
    errWarnMsg.prefered = selectedSloc.fmt
  }
  if (selectedSloc) {
    isExpired = isTimeExpired(selectedSloc.expiresAt)
    if (isExpired) {
      console.error(`sloc url is expired`)
    }
    mediaUrl = selectedSloc.url
  }
  return [mediaUrl, errWarnMsg, isExpired]
}

const selectVttUrl = (transcripts, courseId, store, defaultLang = "en") => {
  const dmsetup = getDmStup(courseId, store)
  if (!dmsetup) {
    return null
  }

  const selectedLang = dmsetup.selectedTrans
  let errWarnMsg = {
    match: false,
    prefered: defaultLang,
    orig: selectedLang,
  }
  console.log(selectedLang, dmsetup)

  let vttUrl = null
  let selectedTrans = null

  let filteredTanscripts = transcripts.filter((item) => item.lang === selectedLang)
  if (filteredTanscripts.length > 0) {
    selectedTrans = filteredTanscripts[0]
    errWarnMsg.match = true
  } else {
    filteredTanscripts = transcripts.filter((item) => item.lang === defaultLang)
    if (filteredTanscripts.length > 0) {
      selectedTrans = filteredTanscripts[0]
    } else {
      //   selectedTrans = filteredTanscripts[transcripts.length - 1]
    }
    errWarnMsg.match = false
    errWarnMsg.prefered = selectedTrans ? selectedTrans.lang : selectedLang
  }
  if (selectedTrans) {
    vttUrl = selectedTrans.url
  }
  return [vttUrl, errWarnMsg]
}

const downloadHelperSh = async (courseId) => {}

const downloadHelperCmd = async (courseId) => {}

const downloadPlaylistM3u = async (courseId) => {}

const downloadExerciseFile = async (url) => {}

export {
  fetchQMeta,
  checkQueueIsAllFinished,
  downloadVtt,
  downloadMedia,
  selectMediaUrl,
  selectVttUrl,
  downloadExerciseFile,
  downloadHelperCmd,
  downloadHelperSh,
  downloadPlaylistM3u,
}
