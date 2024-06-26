import { useEffect, useRef, useState } from "react"
import Button from "@/components/shared/ux/Button"
// import DropdownSelect from "@/components/shared/ux/DropdownSelect"
import { CourseApi } from "@/global/class/course-api"
import CheckBox from "@/components/shared/ux/CheckBox"
import AdvancedSelect from "@/components/shared/ux/AdvancedSelect"
import { getCode, getName } from "country-list"

const QueueSetup = ({
  toast,
  setRefreshTable,
  logStatusBar,
  clearStatusBar,
  availableFmt,
  setAvailableFmt,
  availableTrans,
  setAvailableTrans,
  selectedFmt,
  setSelectedFmt,
  selectedTrans,
  setSelectedTrans,
  selectFmt,
  selectTrans,
  dmsetup,
  setDmsetup,
  store,
  course,
  sections,
  tocs,
  alreadySetup,
  setAlreadySetup,
  displaySetupUi,
  reconfigureSetup = false,
  setReconfigureSetup,
  runSetup,
  setRunSetup,
}) => {
  const [loadingFetchToc, setLoadingFetchToc] = useState(false)
  const [enableFilenameIndex, setEnableFilenameIndex] = useState(false)
  const mDMSetup = store.get("DMSetup")

  const getAvailableFmt = async (e) => {
    if (dmsetup) {
      const { availableFmt, availableTrans, enableFilenameIndex } = dmsetup
      setAvailableFmt(availableFmt)
      setAvailableTrans(availableTrans)
      setEnableFilenameIndex(enableFilenameIndex)
      return
    }
    setLoadingFetchToc(true)
    setAvailableFmt([])
    setAvailableTrans([])

    const courseApi = new CourseApi(store)
    const ncourse = await courseApi.getCourseInfo(course.slug)
    const ntocs = await courseApi.getCourseTocs(course.slug)

    let getFirstTocPassed = false
    let toc, tocSlug

    if (ntocs) {
      const tocKeys = Object.keys(ntocs)
      if (tocKeys.length > 0) {
        const sectionSlug = tocKeys.shift()
        const tocList = ntocs[sectionSlug]
        if (tocList.length > 0) {
          toc = tocList.shift()
          tocSlug = toc.slug
          if (toc) {
            getFirstTocPassed = true
          }
        }
      } else {
        const message = `tocKeys is empty`
        toast.add(message, "error")
        console.error()
      }
    }

    if (getFirstTocPassed) {
      console.log(tocSlug)
      const streamLocations = await courseApi.getStreamLocs(toc)
      let availableFmtList = streamLocations
        .filter((item) => item !== null)
        .map((row) => row.fmt)
      console.log(streamLocations)
      console.log(availableFmtList)
      let transcripts = await courseApi.getTranscripts(toc)
      let availableTransList = [
        { text: "Disabled (Not Available)", value: "unavailable" },
      ]
      const mPrxCache = store.get("PrxCache")
      await mPrxCache.unset(toc.url)
      if (transcripts && transcripts !== null) {
        availableTransList = Object.keys(transcripts).map((value) => {
          const countryCode = transcripts[value].lang.toUpperCase()
          const countryName = getName(countryCode)
          const autogen = transcripts[value].autoGenerated
            ? " - Auto Translated"
            : ""
          const text = `(${countryCode}) ${countryName} ${autogen}`
          return {
            value,
            text,
          }
        })
      }
      console.log(transcripts)
      console.log(availableTransList)
      const exerciseFiles = ncourse.exerciseFiles //.map(item=>item.id)
      console.log(exerciseFiles)

      // const selectedFmt = null
      // const selectedTrans = null
      const sourceRepo = ncourse.sourceCodeRepository
      const status = 1
      const finished = false

      setAvailableFmt(availableFmtList)
      setAvailableTrans(availableTransList)

      const dmsetup = await mDMSetup.create(
        ncourse.id,
        availableFmtList,
        selectedFmt,
        availableTransList,
        selectedTrans,
        sourceRepo,
        exerciseFiles,
        status,
        finished,
        enableFilenameIndex
      )
      setDmsetup(dmsetup)
    } else {
      const message = `Operation Canceled : Could not get first TOC in first Course Section`
      toast.add(message, "error")
    }

    setLoadingFetchToc(false)
  }
  useEffect(() => {
    if (dmsetup) {
      const savedFmtList = dmsetup.availableFmt
      const savedSelectedFmt = dmsetup.selectedFmt
      const savedTransList = dmsetup.availableTrans
      const savedSelectedTrans = dmsetup.selectedTrans
      const savedEnableFilenameIndex = dmsetup.enableFilenameIndex

      if (savedSelectedFmt) {
        setSelectedFmt(savedSelectedFmt)
      }
      if (savedSelectedTrans) {
        setSelectedTrans(savedSelectedTrans)
      }
      if (savedEnableFilenameIndex !== null) {
        setEnableFilenameIndex(savedEnableFilenameIndex)
      }

      setAvailableFmt(savedFmtList)
      setAvailableTrans(savedTransList)
    } else {
      setSelectedFmt("Select Media Format")
      setSelectedTrans("Select Transcript Language")
    }
  }, [dmsetup])
  const finishSetup = async () => {
    if (confirm("Are you sure want to finish setup")) {
      const row = {
        status: 2,
        selectedFmt,
        selectedTrans,
        enableFilenameIndex,
      }
      const dmsetup = await mDMSetup.updateByCourseId(course.id, row)
      setDmsetup(dmsetup)
      if (reconfigureSetup) {
        setReconfigureSetup(false)
      }
      setAlreadySetup(true)
      setRefreshTable(new Date().getTime())
    }
  }
  const cancelSetup = async () => {
    if (reconfigureSetup) {
      setReconfigureSetup(false)
    } else {
      setRunSetup(false)
    }
    // setAlreadySetup(false)
  }
  let subRenderState = false
  if (availableFmt) {
    subRenderState = !availableFmt.length
  }
  const fmtSelectorProps = {
    subRenderState,
    loadingFetchToc,
    getAvailableFmt,
    availableFmt,
    selectFmt,
    selectedFmt,
    setSelectedFmt,
    finishSetup,
  }
  const selectFmtMessage =
    selectedFmt == selectFmt
      ? "Please select desired video format"
      : `Selected format ${selectedFmt}`
  const chgSelectFmtMessage =
    selectedFmt == selectFmt
      ? "Not Already setted up"
      : `You select ${selectedFmt}`
  const message = alreadySetup
    ? `Selected video format is ${selectedFmt}`
    : chgSelectFmtMessage

  let showQueueSetup = false
  let showGetAvailableFmt = false
  let showConfigSetup = false

  let fmtAlreadyAvailable = false
  if (availableFmt) {
    fmtAlreadyAvailable = availableFmt.length > 0
  }

  if (!fmtAlreadyAvailable) {
    if (reconfigureSetup) {
      showGetAvailableFmt = true
    } else if (runSetup) {
      showGetAvailableFmt = true
    }
  }
  if (alreadySetup) {
    if (reconfigureSetup) {
      showQueueSetup = true
    }
  } else {
    if (runSetup) {
      showQueueSetup = true
    }
  }

  if (!showGetAvailableFmt) {
    showConfigSetup = true
  }
  useEffect(() => {}, [showQueueSetup, availableFmt, availableTrans])
  return (
    <>
      {/* <div>Show Queue Setup : {showQueueSetup ? "Y":"N" }</div>
    <div>Show Get Availble Fmt : {showGetAvailableFmt ? "Y":"N" }</div>
    <div>Show Config Setup : {showConfigSetup ? "Y":"N" }</div> */}
      {showQueueSetup ? (
        <div className="queue-setup w-[600px] border rounded-xl shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700">
          {showGetAvailableFmt ? (
            <div className="flex p-2 px-2">
              <Button
                onMouseOut={(e) => clearStatusBar()}
                onMouseOver={(e) =>
                  logStatusBar(
                    "QueueSetup",
                    `Click to retrieve available media format and subtitle lang`
                  )
                }
                loading={loadingFetchToc}
                icon="fa fa-cog"
                onClick={(e) => getAvailableFmt(e)}
                caption="Get Available Media Format & Subtitle"
              />
            </div>
          ) : (
            ""
          )}
          {showConfigSetup ? (
            <>
              <div className="flex  items-center p-2 px-2">
                <div className="w-[150px]">
                  <label className="font-bold">Select Format</label>
                </div>
                <div className="flex-grow">
                  <AdvancedSelect
                    disableSuffixPattern={"audio"}
                    onMouseOut={(e) => clearStatusBar()}
                    onMouseOver={(e) =>
                      logStatusBar("QueueSetup", `Select video size or format`)
                    }
                    data={availableFmt}
                    label="Select Media Format"
                    selected={selectedFmt}
                    onSelect={(fmt) => setSelectedFmt(fmt)}
                    captionSuffix="p"
                  />
                </div>
              </div>
              <div className="flex items-center p-2 px-2">
                <div className="w-[150px]">
                  <label className="font-bold">Select Language</label>
                </div>
                <div className="flex-grow">
                  <AdvancedSelect
                    onMouseOut={(e) => clearStatusBar()}
                    label="Select Subtitle Language"
                    onMouseOver={(e) =>
                      logStatusBar("QueueSetup", `Select Subtitle lang`)
                    }
                    data={availableTrans}
                    selected={selectedTrans}
                    onSelect={(trans) => setSelectedTrans(trans)}
                  />
                </div>
              </div>
              <div className="flex items-center p-2 px-2">
                <div className="w-[150px]">
                  <label className="font-bold">Enable Numbering</label>
                </div>
                <div>
                  <CheckBox
                    label=""
                    checked={enableFilenameIndex}
                    onChange={(checked) => setEnableFilenameIndex(checked)}
                  />
                </div>
              </div>
              <div className="flex p-2 gap-2">
                <Button
                  onMouseOut={(e) => clearStatusBar()}
                  onMouseOver={(e) =>
                    logStatusBar(
                      "QueueSetup",
                      `Cancel this setup and back to main queue`
                    )
                  }
                  caption="Cancel"
                  icon="fa fa-times"
                  onClick={(e) => cancelSetup(e)}
                />
                <Button
                  onMouseOut={(e) => clearStatusBar()}
                  onMouseOver={(e) =>
                    logStatusBar(
                      "QueueSetup",
                      `Finish this setup and back to main queue`
                    )
                  }
                  disabled={
                    selectedFmt == selectFmt || selectedTrans == selectTrans
                  }
                  icon="fa fa-save"
                  onClick={(e) => finishSetup(e)}
                  caption="Finish Setup"
                />
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default QueueSetup
