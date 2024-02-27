import videojs from "video.js"
import "video.js/dist/video-js.css"
import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import CourseApi from "../../../global/course-api/CourseApi"
import PlaylistControl from "./video-player/PlaylistControl"
import { niceScrollbarCls } from "../../../components/shared/ux/cls"
import Button from "../../../components/shared/ux/Button"
import { isTimeExpired } from "../../../global/course-api/course_fn"
import { getCode, getName as getCountryName } from "country-list"
import DropdownMenu from "../../../components/shared/ux/DropdownMenu"
import DropdownSelect from "../../../components/shared/ux/DropdownSelect"
import { HSDropdown } from "preline"

const VideoPlayer = ({ store, config, options, onReady }) => {
  const location = useLocation()
  const qs = location.search
  const qp = new URLSearchParams(qs)
  const [slug, setSlug] = useState(qp.get("slug"))
  const [course, setCourse] = useState(null)
  const [sections, setSections] = useState(null)
  const [tocs, setTocs] = useState(null)
  const [streamLocations, setStreamLocations] = useState(null)
  const [transcripts, setTranscripts] = useState(null)
  const [playlistData, setPlaylistData] = useState(null)
  const [videoTitle, setVideoTitle] = useState("")
  const [courseApi, setCourseApi] = useState(null)
  const [hideSidebar, setHideSidebar] = useState(false)
  const [blockMainContent, setBlockMainContent] = useState(false)
  const [availableFmtList, setAvailableFmtList] = useState([])
  const [dmsetup, setDmsetup] = useState(null)
  const [playIndex, setPlayIndex] = useState(0)
  const [selectedFmtConf, setSelectedFmtConf] = useState(null)
  const videoRef = useRef(null)
  const playerRef = useRef(null)
  const playIndexRef = useRef(playIndex)
  const selectedFmtRef = useRef(selectedFmtConf)
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    // responsive: true,
    fluid: true,
    // sources: [{
    //   src: '/path/to/video.mp4',
    //   type: 'video/mp4'
    // }]
  }

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js")

      videoElement.classList.add("vjs-big-play-centered")
      videoRef.current.appendChild(videoElement)

      const player = (playerRef.current = videojs(videoElement, videoJsOptions, () => {
        videojs.log("player is ready")

        onReady && onReady(player)
      }))

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current

      player.autoplay(options.autoplay)
      player.src(options.sources)
    }
    setHideSidebar(config.getUiConfig().getHiddenSidebarStatus())
  }, [options, videoRef])

  const startVideoPlayer = (f) => {}

  const loadPlaylist = (f) => {}

  const generatePlaylist = async () => {
    if (generatePlaylist.RUNNING) {
      return
    }
    generatePlaylist.RUNNING = true
    const courseApi = new CourseApi(store)
    const course = await courseApi.getCourseInfo(slug)
    const sections = await courseApi.getCourseSections(slug)
    const tocs = await courseApi.getCourseTocs(slug)
    const dmsetup = store.get("DMSetup").getByCourseId(course.id)
    if (dmsetup) {
      setSelectedFmtConf(dmsetup.selectedFmt)
      setAvailableFmtList(dmsetup.availableFmt)
    }
    setDmsetup(dmsetup)
    setCourse(course)
    setSections(sections)
    setTocs(tocs)
    setCourseApi(courseApi)
    // console.log(course,sections,tocs)

    const playlistData = {}

    for (const section of sections) {
      playlistData[section.slug] = {
        title: section.title,
        path: section.id,
        hasChild: true,
        iconCls: "bi bi-bookmark",
        childItems: {},
      }

      for (const toc of tocs[section.slug]) {
        playlistData[section.slug].childItems[toc.slug] = {
          title: toc.title,
          path: toc.id,
          iconCls: "bi bi-play",
        }
      }
    }
    setPlaylistData(playlistData)
  }

  const loadPlayerData = async () => {
    // await generatePlaylist()
    // loadPlaylist()
    // startVideoPlayer()
  }
  const loadCourseData = async () => {
    await generatePlaylist()
  }
  useEffect(() => {
    if (slug) {
      loadCourseData()
    }
  }, [slug])

  useEffect(() => {
    if (course && tocs && sections && playlistData) {
      // loadPlayerData()
      if (playerRef.current) {
        playerRef.current.off("ended")
        playerRef.current.on("ended", (event) => {
          //chrome fix
          // if (event.currentTarget.currentTime == event.currentTarget.duration) {
          console.log("video ended")
          onVideoEnded()
          // }
        })
      }
    }
  }, [course, tocs, sections, playlistData])
  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])

  const pickSloc = (slocs, fmt = null) => {
    if (Array.isArray(slocs)) {
      if (!fmt) {
        return slocs[0]
      } else {
        let slocPicks = slocs.filter((sloc) => sloc.fmt === fmt)
        if (slocPicks.length > 0) {
          return slocPicks[0]
        }
      }
    } else if (typeof slocs === "object" && slocs !== null) {
      const keys = Object.keys(slocs)
      if (keys.length > 0) {
        if (keys.includes(fmt)) {
          return slocs[fmt]
        } else {
          return slocs[keys[0]]
        }
      }
    }
    return null
  }
  const onSelectItem = async (sectionId = null, tocId = null, playAtIndex = null, fmt = null) => {
    let playIdx = 0
    setBlockMainContent(true)
    // console.log(sectionId,tocId)
    let mustBreak = false
    let selectedSection = null
    let selectedToc = null
    playIndexRef.current = playIdx
    for (const section of sections) {
      for (const toc of tocs[section.slug]) {
        if (playAtIndex === null && sectionId && tocId) {
          if (section.id == sectionId && toc.id == tocId) {
            selectedSection = section
            selectedToc = toc
            mustBreak = true

            break
          }
        } else {
          if (playAtIndex === playIdx) {
            selectedSection = section
            selectedToc = toc
            mustBreak = true
            break
          }
        }
        playIdx += 1
      }
      if (mustBreak) {
        playIndexRef.current = playIdx
        setPlayIndex(playIdx)
        break
      }
    }
    // playIdx += 1

    setVideoTitle(selectedToc.title)
    let refresh = false
    let streamLocs = await courseApi.getStreamLocs(selectedToc)

    const { selectedFmt, selectedTrans } = dmsetup
    let choosenFmt = selectedFmtRef.current
    if (fmt) {
      choosenFmt = fmt
    }
    if (!choosenFmt) {
      choosenFmt = selectedFmt
    }
    let sloc = pickSloc(streamLocs, choosenFmt)
    if (sloc) {
      const isExpired = isTimeExpired(sloc.expiresAt)
      if (isExpired) {
        console.log(`SLOC:expired`)
        refresh = true
        streamLocs = await courseApi.getStreamLocs(selectedToc, refresh)
      }
    }
    let selectedTranscript = null
    let transcripts = await courseApi.getTranscripts(selectedToc)
    if (transcripts) {
      selectedTranscript = transcripts.id
    }
    if (streamLocs) {
      sloc = pickSloc(streamLocs, choosenFmt)
      if (sloc) {
        const isExpired = isTimeExpired(sloc.expiresAt)
        if (isExpired) {
          console.error(`SLOC:expired(2)`)
          alert(`SLOC:expired(2)`)
          setBlockMainContent(false)
          // refresh = true
          // streamLocs = await courseApi.getStreamLocs(selectedToc, refresh)
          return
        }
      }

      if (sloc) {
        const player = playerRef.current

        player.autoplay(true)
        // player.src(null)
        player.src({
          src: sloc.url,
          type: "video/mp4",
        })
        var tracks = player.remoteTextTracks()
        var numTracks = tracks.length
        for (var i = numTracks - 1; i >= 0; i--) {
          player.removeRemoteTextTrack(tracks[i])
        }
        console.log(transcripts)
        Object.keys(transcripts).map((lang) => {
          const dflt = lang == selectedTrans
          const tr = transcripts[lang]
          const language = getCountryName(lang)
          const track = { src: tr.url, language, default: dflt }
          player.addRemoteTextTrack(track, true)
        })
      } else {
        alert(`Could not find a suitable stream location`)
      }
      console.log(sloc)
    } else {
      alert(`Could not find stream location list`)
    }
    setBlockMainContent(false)

    console.log(streamLocs)
    console.log(selectedSection, selectedToc)
  }

  const onSetHideSidebar = (e) => {
    let status = config.getUiConfig().getHiddenSidebarStatus()
    config.getUiConfig().setHiddenSidebarStatus(!status)
    setHideSidebar(status)
  }
  const playNext = () => {
    onSelectItem(null, null, playIndexRef.current + 1)
  }
  const onVideoEnded = () => {
    playNext()
  }

  const onChangeMediaFmt = (fmt) => {
    setSelectedFmtConf(fmt)
    selectedFmtRef.current = fmt
    onSelectItem(null, null, playIndex, fmt)
  }
  useEffect(() => {
    HSDropdown.autoInit()
  }, [])
  return (
    <div className="video-player py-4 ">
      <div className="flex gap-2 py-2">
        <Button onClick={(e) => onSetHideSidebar(e)} icon="fa fa-cog" caption={`Toggle Sidebar`} />
        <DropdownSelect selected="Select Fmt" data={availableFmtList} onSelect={(fmt) => onChangeMediaFmt(fmt)} />
      </div>

      <div className="player-container flex" data-vjs-player>
        <div className="relative w-full">
          {blockMainContent ? (
            <>
              <div className="absolute top-0 start-0 w-full h-full bg-white/[.5] rounded-lg dark:bg-gray-800/[.4] z-10"></div>

              <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div
                  className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </>
          ) : null}
          <div ref={videoRef} className=""></div>
          <h4 className="text-lg py-2 px-4">{videoTitle}</h4>
        </div>

        <div className={`playlist-container  w-[275px] h-screen flex-none overflow-auto ${niceScrollbarCls}`}>
          {playlistData ? <PlaylistControl data={playlistData} onSelectItem={(a, b) => onSelectItem(a, b)} /> : null}
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
