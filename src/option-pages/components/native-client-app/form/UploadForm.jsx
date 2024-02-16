import { useEffect, useRef, useState } from "react"
import { crc32 } from "crc"
import {formatBytes, sendMessage, slugify, getFile64} from "../../../../global/fn"
import jQuery from "jquery"
const inputCls= "py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
import CheckBox from "../../../../components/shared/ux/CheckBox"
import { apiUrl } from "../fn"
const createUntitledUpload = ()=>{
    const idx = crc32((new Date).getTime().toString()).toString(16)
    const title = `Untitled-${idx}`
    const description = `About ${title}`
    const video = ``
    const category = 'uncategory'
    const tags = 'sample'
    const thumbnail= 'none'

    return {title,description,video,category,tags,thumbnail}
}
const UploadForm = ({data=null, className,hideForm,updateList})=>{
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [video,setVideo] = useState('')
    const [category,setCategory] = useState('')
    const [tags,setTags] = useState('')
    const [thumbnail,setThumbnail] = useState('')
    const thumbnailRef = useRef(null)
    const onEdit = f=> f
    const saveForm = async(f) => {
        let pk=null
        if(data.id){
            pk = data.id
        }
        const formDataItem = {pk,title,description,video,category,tags}
        // sendMessage(`nm.api.cms.ytupload.${pk?'update':'create'}`, formData,'background',response=>{
        //     console.log({response})
        
        // })
        const formData = new FormData()
        formData.append('thumbnail',thumbnailRef.current.files[0])
        Object.keys(formDataItem).map((key)=>{
            formData.append(key,formDataItem[key])
        })
        const url = apiUrl(['yt-upload',pk?`update/${pk}`:'create'])
        fetch(url, {
            method: 'POST',
            body: formData
          })
          .then(response => response.json())
          .then(data => {
            console.log(data)
            jQuery('#basic-modal-upload-closer').click()
            
            updateList()    
        })
        .catch(error => console.error('Error:', error))
        
    }
    const setThumbnailFile= async(target)=>{
        const file64 = await getFile64(target.files[0])
        console.log(target)
        console.log(file64)
        setThumbnail(file64)
    }
    const getRemoteRowData = async()=>{
        // return
        const pk = data.id
        const url = apiUrl(['yt-upload',pk])
        const response = await fetch(url).then(r=>r.json())
        const {thumbnail} = response.data
        apiUrl(['yt-uploads/thumbnails',thumbnail])
    }
    useEffect(()=>{
        if(data){
            // console.log(data)
            const  {title,description,video,category,tags,thumbnail} =data
            setTitle(title)
            setDescription(description)
            setVideo(video)
            setCategory(category)
            setTags(tags)
            setThumbnail(apiUrl(['yt-uploads/thumbnails',thumbnail]))
            if(data.id){
                getRemoteRowData()
            }
        }
    },[data])
 
    
    useEffect(()=>{
        HSOverlay.autoInit()
    },[])
    return <>
    <button id="basic-modal-upload-clicker" type="button" className="hidden py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-basic-modal-upload">
  Open modal
</button>

<div id="hs-basic-modal-upload" className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden w-full h-full fixed top-0 start-0 z-[60] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none">
  <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
    <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
        <h3 className="font-bold text-gray-800 dark:text-white">
          {title}
        </h3>
        <button type="button" id="basic-modal-upload-closer" onClick={e=>hideForm(e)} className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-basic-modal-upload">
          <span className="sr-only">Close</span>
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
      <div className="p-4 overflow-y-auto">
      <form className={'className'}>
    <div className="flex  items-center p-2 px-2">
        <div className="w-[70px]">
            <label className="font-bold">Title</label>
        </div>
        <div className="flex-grow">
            <input tabIndex={1} className={inputCls} defaultValue={title} onChange={e=>setTitle(e.target.value)}/>
        </div>
    </div>
    <div className="flex  items-center p-2 px-2">
        <div className="w-[70px]">
            <label className="font-bold">Description</label>
        </div>
        <div className="flex-grow">
            <textarea tabIndex={2} className={inputCls} defaultValue={description} onChange={e=>setDescription(e.target.value)}/>
        </div>
    </div>
    <div className="flex  items-center p-2 px-2">
        <div className="w-[70px]">
            <label className="font-bold">Category</label>
        </div>
        <div className="flex-grow">
            <input tabIndex={3} className={inputCls} defaultValue={category} onChange={e=>setCategory(e.target.value)}/>
        </div>
    </div>
    
    
    <div className="flex  items-center p-2 px-2">
        <div className="w-[70px]">
            <label className="font-bold">Tags</label>
        </div>
        <div className="flex-grow">
            <input tabIndex={4} className={inputCls} defaultValue={tags} onChange={e=>setTags(e.target.value)}/>
        </div>
    </div>
    <div className="flex  items-center p-2 px-2">
        <div className="w-[70px]">
            <label className="font-bold">Video</label>
        </div>
        <div className="flex-grow">
            <input tabIndex={5} type="text" className={`${inputCls}`} defaultValue={video} onChange={e=>setVideo(e.target.value)}/>
        </div>
    </div>
    <div className="flex  items-center p-2 px-2">
        <div className="w-[70px]">
            <label className="font-bold">Thumbnail</label>
        </div>
        <div className="flex-grow">
            <input tabIndex={6} type="file" ref={thumbnailRef} className={inputCls}  onChange={e=>setThumbnailFile(e.target)}/>
        </div>
        {
            thumbnail?<div className="flex-grow">
                <img src={`${thumbnail}`}/>
            </div>:null
        }
    </div>      
   
           
    </form>
      </div>
      <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
        <button tabIndex={9} onClick={e=>hideForm(e)} type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-basic-modal-upload">
          Close
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