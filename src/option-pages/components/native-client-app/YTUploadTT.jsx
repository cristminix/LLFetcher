// import schema from "../../side_menu.json"

import { useEffect, useState, useRef } from "react"
import Pager from "@/components/shared/Pager"
import Grid from "@/components/shared/Grid"
import Button from "@/components/shared/ux/Button"
import UploadTTForm, { createUntitledUpload } from "./form/UploadTTForm"
import { apiUrl } from "./fn"

import jQuery from "jquery"
import { niceScrollbarCls } from "@/components/shared/ux/cls"

import Toast from "@/components/shared/ux/Toast"
import { Prx, requestIdentityToken } from "@/global/fn"
import { useLocation } from "react-router-dom"
const YTUploadTT = ({ store, config, pageNumber, uploadId }) => {
  const toastRef = useRef(null)
  const location = useLocation()
  const qs = location.search
  const qp = new URLSearchParams(qs)
  const [parentPage, setParentPage] = useState(parseInt(qp.get("parentPage")))
  const [lastParentPage, setLastParentPage] = useState(1)
  const [grid, setGrid] = useState({
    records: [],
    limit: 5,
    page: 1,
    total_pages: 0,
    total_records: 0,
    order_by: "id",
    order_dir: "asc",
  })

  const formId = "basic-modal-upload-tt"
  const modalBtnId = `${formId}-clicker`
  const modalCloseBtnId = `${formId}-clicker-closer-x`

  const [formData, setFormData] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [requestToken, setRequestToken] = useState(null)
  const onRefresh = (f) => updateList()
  const toast = (message, t) => {
    if (toastRef.current) {
      toastRef.current.add(message, t)
    }
  }
  const addForm = async (item, index) => {
    let parent = null
    if (item) {
      parent = item.slug
    }
    const defaultMenu = createUntitledUpload()
    defaultMenu.parent = parent
    setFormData(defaultMenu)
    setShowForm(true)

    jQuery(`#${modalBtnId}`).trigger("click")
  }
  const editForm = async (item, index) => {
    setFormData(item)
    setShowForm(true)
    jQuery(`#${modalBtnId}`).trigger("click")
  }
  const deleteForm = async (item, index) => {
    // console.log(item)
    if (confirm(`Are you sure want to delete this upload "${item.title}"`)) {
      const url = apiUrl(["yt-upload-tt/delete", item.id])

      try {
        const { data, validJson, code, text } = await Prx.delete(url, requestToken)
        if (validJson) {
          const { success, message } = data
          toast(message, success ? "success" : "error")

          if (success) {
            const listState = await getListState(grid.limit, grid.page)
            const { total_pages, record_count } = listState
            if (record_count === 0) {
              goToPage(total_pages)
            } else {
              updateList()
            }
          }
        } else {
          toast(`Failed to delete id:${item.id} server sent http ${code} ${text}`, "error")
        }
      } catch (e) {
        console.log(e)
        toast(e.toString(), "error")
      }
    }
  }

  const getListState = async (limit = null, page = null) => {
    let response = {}
    const url = apiUrl(["yt-upload-tt/states", uploadId], { limit, page })
    try {
      const { data, validJson, code, text } = await Prx.get(url, requestToken)
      if (validJson) {
        response = data
      } else {
        toast(`Failed to get states server sent http ${code} ${text}`, "error")
      }
    } catch (e) {
      toast(e.toString(), "error")
    }
    return response
  }
  const backToYtUpload = () => {
    document.location.hash = `/native-client-app/yt-upload/page/${lastParentPage}`
  }
  const goToPage = (pageNum) => {
    document.location.hash = `/native-client-app/yt-upload-tt/${uploadId}/page/${pageNum}?parentPage=${lastParentPage}`
    if (pageNum == grid.page) {
      updateList()
    }
  }
  const goToLastPage = async () => {
    try {
      const response = await getListState(grid.limit)
      const { total_pages } = response
      if (total_pages > 0) {
        goToPage(total_pages)
      }
      //   console.log(response)
    } catch (e) {
      toast(e.toString(), "error")
    }
  }
  const gridOptions = {
    numberWidthCls: "w-[10px]",
    actionWidthCls: "w-[50px]",
    widthCls: [""],
    headers: ["Title"],
    fields: ["title"],
    enableEdit: true,
    callbackFields: {
      title: (field, value, item, index) => {
        const thumbnailUrl = `${apiUrl(["yt-upload-tts", "thumbnails", item.thumbnail])}`

        return (
          <>
            <div className="flex text-left gap-2">
              <div className="w-1/4">
                <img src={thumbnailUrl} />
              </div>
              <div className="w-3/4">
                <h1 className="mb-2">{item.title}</h1>
                <p className="font-normal line-clamp-4" title={item.description}>
                  {item.description}
                </p>
              </div>
            </div>
          </>
        )
      },
    },
    callbackHeaders: {
      title: (field, index, fields) => {
        return "Upload"
      },
    },
    callbackActions: {
      edit: (item, index, options, linkCls, gridAction) => {
        return (
          <>
            <Button title="Edit" loading={false} icon="fa fa-edit" caption="" onClick={(e) => editForm(item, index)} />
            <Button title="Delete" loading={false} icon="fa fa-trash" caption="" onClick={(e) => deleteForm(item, index)} />
          </>
        )
      },
    },
  }

  const updateList = async () => {
    // console.log("updateList called")
    const page = parseInt(pageNumber) || 1

    const { limit, order_by, order_dir } = grid
    const url = apiUrl("yt-upload-tts", { uploadId, limit, page, order_by, order_dir })

    try {
      const { data, validJson, code, text } = await Prx.get(url, requestToken)
      if (validJson) {
        const nGrid = data
        setGrid((prevGrid) => {
          return {
            ...prevGrid,
            ...nGrid,
          }
        })
      } else {
        toast(`Failed to get list server sent http ${code} ${text}`, "error")
      }
    } catch (e) {
      console.log(e)
      toast(e.toString(), "error")
    }
  }
  useEffect(() => {
    if (requestToken) {
      updateList()
    }
  }, [pageNumber, requestToken])

  const retrieveIdentityToken = async () => {
    // console.log(`retrieveIdentityToken`)
    const appId = config.getAppId()
    const url = apiUrl("auth/generateToken")
    const token = await requestIdentityToken(appId, url, toast)
    if (token) {
      setRequestToken(token)
    }
  }

  useEffect(() => {
    retrieveIdentityToken()
  }, [])

  useState(() => {
    const parentPageNumber = parseInt(parentPage) || 0
    if (parentPageNumber) {
      setLastParentPage(parentPageNumber)
    }
  }, [parentPage])

  const containerCls = "border mb-2 rounded-xl shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700"
  return (
    <div className="min-h-screen">
      <Toast ref={toastRef} />
      <UploadTTForm
        uploadId={uploadId}
        requestToken={requestToken}
        setRequestToken={setRequestToken}
        getRequestToken={retrieveIdentityToken}
        showForm={showForm}
        toast={toast}
        goToLastPage={goToLastPage}
        updateList={(e) => updateList()}
        data={formData}
        className={containerCls}
        hideForm={(e) => setShowForm(false)}
        formId={formId}
        modalBtnId={modalBtnId}
        modalCloseBtnId={modalCloseBtnId}
      />

      <div className={`user-manager ${containerCls}`}>
        <div className="grid-toolbar pb-4">
          <div className="flex justify-between gap-2">
            {/* <Button onClick={e=>exportMenu(e)} caption="Export json" icon="fa fa-file-text"/> */}
            {!showForm ? (
              <>
                <Button onClick={(e) => backToYtUpload()} icon="fa fa-chevron-left" caption="" />
                <Button onClick={(e) => addForm()} icon="fa fa-plus" caption="" />
              </>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col ">
          <div className={`-m-1.5 overflow-x-auto ${niceScrollbarCls}`}>
            <div className="p-1.5 ">
              <div className="">{grid ? <Grid options={gridOptions} records={grid.records} page={grid.page} limit={grid.limit} /> : ""}</div>
            </div>
          </div>
          <div className="pager-container mt-3">
            {grid ? (
              <Pager
                path={`/native-client-app/yt-upload-tt/${uploadId}`}
                page={grid.page}
                total_pages={grid.total_pages}
                limit={grid.limit}
                onRefresh={(e) => onRefresh()}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default YTUploadTT
