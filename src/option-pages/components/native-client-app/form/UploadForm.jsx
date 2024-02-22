import { useEffect, useRef, useState } from "react"
import { crc32 } from "crc"
import { getFile64, isEmpty } from "../../../../global/fn"
import jQuery from "jquery"

import { apiUrl } from "../fn"
import { btnCls, modalCls, modalBtnCloseCls, modalBtnFrmCloseCls, modalBtnFrmSaveCls } from "../../ux/cls"
import CryptoJS from "crypto-js"

import { FormRow, FormRowImageValidation, FormRowValidation } from "./Form"
import { Prx } from "../../../../global/fn"

const createUntitledUpload = () => {
  const idx = crc32(new Date().getTime().toString()).toString(16)
  const title = `Untitled-${idx}`
  const description = `About ${title}`
  const video = ``
  const category = "uncategory"
  const tags = "sample"
  const thumbnail = null

  return { title, description, video, category, tags, thumbnail }
}

const UploadForm = ({
  requestToken,
  getRequestToken,
  setRequestToken,
  data = null,
  className,
  hideForm,
  updateList,
  formId = "hs-basic-modal-upload",
  modalBtnId = "basic-modal-upload-clicker",
  modalCloseBtnId = "basic-modal-upload-closer-x",
  goToLastPage,
  toast,
}) => {
  const [pk, setPk] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [video, setVideo] = useState("")
  const [category, setCategory] = useState("")
  const [tags, setTags] = useState("")
  const [thumbnail, setThumbnail] = useState("")
  const [thumbnailValid, setThumbnailValid] = useState(false)
  const [thumbnailUrl, setThumbnailUrl] = useState("")
  const thumbnailRef = useRef(null)
  const formRef = useRef(null)
  const onTabExecutedRef = useRef(false)
  let onTabNextIndexRef = useRef(0)

  const [validationErrors, setValidationErrors] = useState({})
  const [formChecksum, setFormChecksum] = useState("")

  const calculateFormChecksum = (data = null) => {
    let formDataItem = null
    if (data) {
      const { id, title, description, video, category, tags, thumbnail } = data
      formDataItem = { id, title, description, video, category, tags, thumbnail }
    } else {
      formDataItem = { id: pk, title, description, video, category, tags, thumbnail }
    }
    if (!formDataItem.id) {
      formDataItem.id = null
    }
    let values = []
    const keys = Object.keys(formDataItem)
    for (const key of keys) {
      const value = formDataItem[key]
      values.push(key + "=" + value)
    }
    // console.log(values)
    var formString = values.join("&")
    return CryptoJS.SHA256(formString).toString()
  }
  const updateFormChecksum = (data = null) => {
    const newFormChecksum = calculateFormChecksum(data)
    setFormChecksum(newFormChecksum)
  }
  const isFormDirty = () => {
    const currentFormChecksum = calculateFormChecksum(null)
    return currentFormChecksum !== formChecksum
  }
  const hideModalForm = (e) => {
    thumbnailRef.current.value = ""
    const modalIdSelector = `#${formId}`
    HSOverlay.close(modalIdSelector)
    hideForm()

    if (e) {
      return e.preventDefault()
    }
  }
  const onCancelForm = (e) => {
    if (isFormDirty()) {
      if (confirm("Data might not being saved, Are you sure to cancel?")) {
        hideModalForm(e)
      }
    } else {
      hideModalForm(e)
    }
    if (e) {
      return e.preventDefault()
    }
  }
  const saveForm = async (f) => {
    let pk = null
    if (data.id) {
      pk = data.id
    }
    const formDataItem = { id: pk, title, description, video, category, tags }
    const formData = new FormData()
    const [file] = thumbnailRef.current.files
    if (file) {
      formData.append("thumbnail", file)
    }
    Object.keys(formDataItem).map((key) => {
      formData.append(key, formDataItem[key])
    })
    const url = apiUrl(["yt-upload", pk ? `update/${pk}` : "create"])
    const method = pk ? "put" : "post"
    try {
      const { data, validJson, code, text } = await Prx[method](url, requestToken, formData)
      if (validJson) {
        let hasErrors = false
        if (data.errors) {
          if (data.errors.length > 0) {
            hasErrors = 1
          }
        }
        if (hasErrors) {
          const { errors } = data
          let newValidationErrors = {}
          let firstField = null
          errors.map((item) => {
            if (!firstField) {
              firstField = item.path
            }
            newValidationErrors[item.path] = { message: item.msg }
          })
          setValidationErrors(newValidationErrors)
          toast("Error processing form", "error")

          // focus first field
          jQuery(`#${formId}`).find(`.${firstField}:first`).trigger("focus")
        } else {
          // console.log(data)
          hideModalForm()
          updateFormChecksum(data)
          setValidationErrors({})
          if (!pk) {
            toast("Record created", "success")
            goToLastPage()
          } else {
            toast("Record updated", "success")
            updateList()
          }
        }
      } else {
        toast(`Failed to create record server sent http ${code} ${text}`, "error")
      }
    } catch (e) {
      toast(e.toString(), "error")
    }
  }
  const setThumbnailFile = async (target) => {
    const file64 = await getFile64(target.files[0])
    const [file] = target.files
    setThumbnail(file.name)
    const fileType = file.type.split("/")[0]
    if (fileType === "image") {
      setThumbnailValid(true)
      setThumbnailUrl(file64)
      const newValidationErrors = { ...validationErrors }
      delete newValidationErrors.thumbnail
      setValidationErrors(newValidationErrors)
    } else {
      alert("Only image file is allowed")
      thumbnailRef.current.value = ""
    }
  }
  const getRemoteRowData = async () => {
    const pk = data.id
    const url = apiUrl(["yt-upload", pk])

    try {
      const { data, validJson, code, text } = await Prx.get(url, requestToken)
      if (validJson) {
        const { thumbnail } = data.row
        const thumbnailUrl = apiUrl(["yt-uploads/thumbnails", thumbnail])
        setThumbnailUrl(thumbnailUrl)
        setFormChecksum(calculateFormChecksum(data.row))
      } else {
        toast(`Failed to get record id:${pk} server sent http ${code} ${text}`, "error")
      }
    } catch (e) {
      toast(e.toString(), "error")
    }
  }
  const initFormData = (data) => {
    if (data) {
      const { id, title, description, video, category, tags, thumbnail } = data
      setPk(id)
      setTitle(title)
      setDescription(description)
      setVideo(video)
      setCategory(category)
      setTags(tags)
      setThumbnail(thumbnail)
      if (isEmpty(thumbnail)) {
        setThumbnailValid(false)
      } else {
        setThumbnailUrl(apiUrl(["yt-uploads/thumbnails", thumbnail]))
        setThumbnailValid(true)
      }
      setTimeout(() => {
        const initialFormChecksum = calculateFormChecksum(data)
        // console.log(initialFormChecksum)
        setFormChecksum(initialFormChecksum)
        setValidationErrors({})
      }, 256)
      if (data.id) {
        getRemoteRowData()
      }
    }
  }
  useEffect(() => {
    initFormData(data)
  }, [data])

  const onTab = (target, focusableElements) => {
    console.log(onTabExecutedRef.current)
    if (!onTabExecutedRef.current) {
      onTabExecutedRef.current = true
      // Your code here (will run only once)
      console.log(`onTab called`)
      if (!focusableElements.length) return false

      const focused = target.element.overlay.querySelector(":focus")
      const focusedIndex = Array.from(focusableElements).indexOf(focused)
      try {
        if (focusedIndex > -1) {
          onTabNextIndexRef.current = focusedIndex + 1
          focusableElements[onTabNextIndexRef.current].focus()
        } else {
          focusableElements[0].focus()
        }
      } catch (e) {
        focusableElements[0].focus()
        onTabNextIndexRef.current = 0
      }

      // jQuery(target.element).prop("hasOnTabHandler", 0)
      setTimeout(() => {
        onTabExecutedRef.current = false
      }, 256)
    } else {
      setTimeout(() => {
        onTabExecutedRef.current = false
      }, 256)
    }
  }
  useEffect(() => {
    onTabExecutedRef.current = false
    HSOverlay.onTabOverride = (t, e) => {
      onTab(t, e)
    }
    HSOverlay.onEscapeOverride = (t) => {
      // console.log(t)
      // onCancelForm()
      // HSOverlay.onEscapeDefault(t)
    }
    const $el = jQuery(`#${modalBtnId}`)
    if (!$el.prop("hasOverlay")) {
      $el.prop("hasOverlay", "yes")
      HSOverlay.autoInit()
    }
    return () => {
      onTabExecutedRef.current = false

      try {
        document.querySelector("div[data-hs-overlay-backdrop-template]").remove()
      } catch (e) {}
    }
  }, [])

  return (
    <>
      <button id={`${modalBtnId}`} type="button" className={btnCls} data-hs-overlay={`#${formId}`}>
        Open modal
      </button>
      <div id={formId} className={modalCls}>
        <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto ]">
          <div className="flex w-[700px] flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white">{title}</h3>
              <button type="button" id={`${modalCloseBtnId}`} onClick={(e) => onCancelForm(e)} className={modalBtnCloseCls}>
                <span className="sr-only">Close</span>
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <form className={"className"} ref={formRef}>
                <FormRowValidation
                  validationErrors={validationErrors}
                  label="Title"
                  value={title}
                  fieldname="title"
                  onChange={(e) => {
                    setTitle(e.target.value)
                  }}
                  autofocus="yes"
                />
                <FormRowValidation
                  validationErrors={validationErrors}
                  useTextArea={true}
                  label="Description"
                  value={description}
                  fieldname="description"
                  onChange={(e) => {
                    setDescription(e.target.value)
                  }}
                />

                <FormRow
                  label="Category"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value)
                  }}
                />
                <FormRow
                  label="Tags"
                  value={tags}
                  onChange={(e) => {
                    setTags(e.target.value)
                  }}
                />
                <FormRow
                  label="Video"
                  value={video}
                  onChange={(e) => {
                    setVideo(e.target.value)
                  }}
                />
                <FormRowImageValidation
                  validationErrors={validationErrors}
                  label="Thumbnail"
                  onChange={(e) => setThumbnailFile(e.target)}
                  fieldname="thumbnail"
                  inputRef={thumbnailRef}
                  imageUrl={thumbnailUrl}
                  validImage={thumbnailValid}
                />
              </form>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
              <button onClick={(e) => onCancelForm(e)} type="button" className={modalBtnFrmCloseCls}>
                Cancel
              </button>
              <button tabIndex={10} onClick={(e) => saveForm(e)} type="button" className={modalBtnFrmSaveCls}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { createUntitledUpload }
export default UploadForm
