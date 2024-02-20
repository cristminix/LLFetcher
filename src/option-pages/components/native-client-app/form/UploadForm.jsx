import { useEffect, useRef, useState } from "react"
import { crc32 } from "crc"
import {formatBytes, sendMessage, slugify, getFile64,isEmpty} from "../../../../global/fn"
import jQuery from "jquery"

import CheckBox from "../../../../components/shared/ux/CheckBox"
import { apiUrl } from "../fn"
import Button from "../../../../components/shared/ux/Button"
import { niceScrollbarCls, inputCls,inputClsError } from "../../ux/cls"
import CryptoJS from "crypto-js"
import { ValidationErrIcon } from "../../../../components/shared/ux/ValidationIcon"


const createUntitledUpload = ()=>{
    const idx = crc32((new Date).getTime().toString()).toString(16)
    const title = `Untitled-${idx}`
    const description = `About ${title}`
    const video = ``
    const category = 'uncategory'
    const tags = 'sample'
    const thumbnail= null

    return {title,description,video,category,tags,thumbnail}
}
const UploadForm = ({data=null, className,hideForm,updateList})=>{
    const [pk,setPk] = useState('')
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [video,setVideo] = useState('')
    const [category,setCategory] = useState('')
    const [tags,setTags] = useState('')
    const [thumbnail,setThumbnail] = useState('')
    const [thumbnailValid,setThumbnailValid] = useState(false)
    const [thumbnailUrl,setThumbnailUrl] = useState('')
    const thumbnailRef = useRef(null)
    const formRef = useRef(null)
    
    const [dirtyForm,setDirtyForm] = useState(false)
    const [formChecksum,setFormChecksum] = useState('')

    const calculateFormChecksum=(data=null) =>{

        let formDataItem = null
        if(data){
            const {id,title,description,video,category,tags,thumbnail} = data
            formDataItem = {id,title,description,video,category,tags,thumbnail}
        }else{
            formDataItem = {id:pk,title,description,video,category,tags,thumbnail}

        }
        // data? data : {pk,title,description,video,category,tags,thumbnail}

        // const formData = new FormData(formRef.current)
        let values = []
        const keys = Object.keys(formDataItem)
        for(const key of keys) {
            const value = formDataItem[key]
            values.push(key + '=' + value)
        }
        console.log(values)
        var formString = values.join('&')
        return CryptoJS.SHA256(formString).toString()
        
    }
    const updateFormChecksum = (data=null)=>{
        const newFormChecksum = calculateFormChecksum(data)
        console.log(`${formChecksum}===${formChecksum}`)

        setFormChecksum(newFormChecksum)
    }
    const isFormDirty=() =>{
        const currentFormChecksum = calculateFormChecksum(null)
        console.log(`${formChecksum}===${currentFormChecksum}`)
        return currentFormChecksum !== formChecksum
    }   
    const hideModalForm = (e)=>{
        thumbnailRef.current.value = ""
        const modalIdSelector="#hs-basic-modal-upload"
        HSOverlay.close(modalIdSelector)
        hideForm()

        if(e){
            return e.preventDefault()
        }
    }
    const onCancelForm = (e)=>{
        e.preventDefault()
        console.log('Hello')
        const modalIdSelector="#hs-basic-modal-upload"
        if(isFormDirty()){
            if(confirm("Data might not being saved, Are you sure to cancel?")){
                hideModalForm(e)
            }
        }else{
            hideModalForm(e)
        }
        return false
    }
    const saveForm = async(f) => {
        let pk=null
        if(data.id){
            pk = data.id
        }
        const formDataItem = {id:pk,title,description,video,category,tags}
        // sendMessage(`nm.api.cms.ytupload.${pk?'update':'create'}`, formData,'background',response=>{
        //     console.log({response})
        
        // })
        const formData = new FormData()
        const [file] = thumbnailRef.current.files
        if(file){
            formData.append('thumbnail',file)

        }
        Object.keys(formDataItem).map((key)=>{
            formData.append(key,formDataItem[key])
        })
        const url = apiUrl(['yt-upload',pk?`update/${pk}`:'create'])
        try{
            const data = await fetch(url, {
                method: 'POST',
                body: formData
            }).then(response => response.json())
            
            let hasErrors = false
            if(data.errors){
                if(data.errors.length > 0){
                    hasErrors = 1
                }
            }

            if(hasErrors){
                console.log(data)
                const {errors} = data
                let newValidationErrors = {}
                let firstField = null
                errors.map((item)=>{
                    if(!firstField){
                        firstField = item.path
                    }
                    newValidationErrors[item.path] = {message:item.msg}
                })
                setValidationErrors(newValidationErrors)

                // focus first field
                jQuery('#hs-basic-modal-upload').find(`input.${firstField}`).focus()
                

            }else{
                console.log(data)
                jQuery('#basic-modal-upload-closer').click()
                hideModalForm()
                updateFormChecksum(data)
                setValidationErrors({})

                updateList() 
            }
        }catch(error){
            console.error('Error:', error)
        }
         
        
    }
    const setThumbnailFile= async(target)=>{
        const file64 = await getFile64(target.files[0])
        const [file] = target.files
        console.log(file)
        setThumbnail(file.name)
        const fileType = file.type.split('/')[0]
        // console.log(file64)
        if(fileType === 'image'){
            setThumbnailValid(true)
            setThumbnailUrl(file64)
            const newValidationErrors = {...validationErrors}
            delete newValidationErrors.thumbnail
            setValidationErrors(newValidationErrors)
        }else{
            alert('Only image file is allowed')
            thumbnailRef.current.value = ""

        }
    }
    const getRemoteRowData = async()=>{
        // return
        const pk = data.id
        const url = apiUrl(['yt-upload',pk])
        const response = await fetch(url).then(r=>r.json())
        const {thumbnail} = response.data
        const thumbnailUrl = apiUrl(['yt-uploads/thumbnails',thumbnail])
        setThumbnailUrl(thumbnailUrl)
        setFormChecksum(calculateFormChecksum(response.data))
    }
    useEffect(()=>{
        if(data){
            // console.log(data)
            const  {id,title,description,video,category,tags,thumbnail} =data
            setPk(id)
            setTitle(title)
            setDescription(description)
            setVideo(video)
            setCategory(category)
            setTags(tags)
            setThumbnail(thumbnail)
            if(isEmpty(thumbnail)){
                setThumbnailValid(false)
            }else{
                setThumbnailUrl(apiUrl(['yt-uploads/thumbnails',thumbnail]))
                setThumbnailValid(true)
            }
            setTimeout(()=>{
                const initialFormChecksum = calculateFormChecksum(data)
                console.log(initialFormChecksum)
                setFormChecksum(initialFormChecksum)
                setValidationErrors({})
            
            },256)
            if(data.id){
                getRemoteRowData()
            }
        }
    },[data])
 
    
    useEffect(()=>{
        const el = HSOverlay.autoInit()
        console.log(el)
      },[])
    useEffect( () => () => {
      try{
        document.querySelector("div[data-hs-overlay-backdrop-template]").remove()
      }catch(e){
        // console.error(e)
      }
      console.log("unmount")
    }, [] )

    const [validationErrors,setValidationErrors] = useState({
        // title:{
        //     message : 'This is not a valid title'
        // }
    })
   
    return <>
    <button id="basic-modal-upload-clicker" type="button" className="hidden py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-basic-modal-upload">
  Open modal
</button>

<div id="hs-basic-modal-upload" className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden w-full h-full fixed top-0 start-0 z-[60] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none hs-overlay-backdrop-open:bg-blue-950/90  ">
  <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto ]">
    <div className="flex w-[700px] flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
        <h3 className="font-bold text-gray-800 dark:text-white">
          {title}({formChecksum})
        </h3>
        <button type="button" id="basic-modal-upload-closer-x" onClick={e=>onCancelForm(e)} className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
          <span className="sr-only">Close</span>
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
      <div className="p-4 overflow-y-auto">
      <form className={'className'} ref={formRef}>
    <div className="flex  items-center p-2 px-2">
        <div className="w-[70px]">
            <label className="font-bold">Title</label>
        </div>
        <div className="flex-grow">
            <div className="relative">
                <input  className={`${validationErrors.title?inputClsError:inputCls} title`} value={title} onChange={e=>{setTitle(e.target.value)}} autofocus="yes"/>
                { validationErrors.title && <ValidationErrIcon absolute="yes"/>}
            </div>

            { validationErrors.title && <p class="text-sm text-red-600 mt-2">{validationErrors.title.message }</p>}

        </div>
    </div>
    <div className="flex p-2 px-2 align-top">
        <div className="w-[70px] align-top">
            <label className="font-bold">Description</label>
        </div>
        <div className="flex-grow">
            <div className="relative">

            <textarea  className={`${validationErrors.description?inputClsError:inputCls} ${niceScrollbarCls} min-h-6 description`} value={description} onChange={e=>{setDescription(e.target.value)}}/>
            { validationErrors.description && <ValidationErrIcon/>}
            </div>
            { validationErrors.description && <p class="text-sm text-red-600 mt-2">{validationErrors.description.message}</p>}

        </div>
    </div>
    <div className="flex  items-center p-2 px-2">
        <div className="w-[70px]">
            <label className="font-bold">Category</label>
        </div>
        <div className="flex-grow">
            <input  className={inputCls} value={category} onChange={e=>{setCategory(e.target.value)}}/>
        </div>
    </div>
    
    
    <div className="flex  items-center p-2 px-2">
        <div className="w-[70px]">
            <label className="font-bold">Tags</label>
        </div>
        <div className="flex-grow">
            <input  className={inputCls} value={tags} onChange={e=>{setTags(e.target.value)}}/>
        </div>
    </div>
    <div className="flex  items-center p-2 px-2">
        <div className="w-[70px]">
            <label className="font-bold">Video</label>
        </div>
        <div className="flex-grow">
            <input  type="text" className={`${inputCls}`} value={video} onChange={e=>{setVideo(e.target.value)}}/>
        </div>
    </div>
    <div className="flex  p-2 px-2">
        <div className="w-[80px]">
            <label className="font-bold">Thumbnail</label>
        </div>
        <div className="flex-grow relative pl-2">
            <div className="absolute flex flex-row justify-end w-full items-center px-2">
                <Button icon="fa fa-upload" caption="Upload Image" className="thumbnail" onClick={e=>{
                    thumbnailRef.current.value = ""
                    thumbnailRef.current.click()
                    
                }}/>
            </div>
            <div className="">
            <div className="h-{30px} w-{30px} bg-white"></div>    
            <input  type="file" ref={thumbnailRef} className={`hidden ${inputCls}`}  onChange={e=>setThumbnailFile(e.target)}/>
        
        {
            thumbnailValid?<div className="flex-grow rounded rounded-md overflow-hidden mb-2">
                <img src={`${thumbnailUrl}`}/>
            </div>:null
        }
        
        
            </div>
            <div className="flex">
            { validationErrors.thumbnail && <ValidationErrIcon absolute="no"/>}{ validationErrors.thumbnail && <p class="text-sm text-red-600 mt-0">{validationErrors.thumbnail.message}</p>}
            </div>
           
        </div>
    </div>      
   
           
    </form>
      </div>
      <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
        <button  onClick={e=>onCancelForm(e)} type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-basic-modal-upload">
          Cancel
        </button>
        <button tabIndex={10} onClick={e=>saveForm(e)} type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
    </>
}

export {
    createUntitledUpload
}
export default UploadForm