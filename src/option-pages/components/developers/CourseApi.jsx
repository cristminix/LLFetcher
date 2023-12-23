import _fetchWithRetry_ from 'fetch-retry'
import { useEffect, useState } from 'react'
import { devApiUrl } from './fn'
import jQuery from 'jquery'
import { getCourseXmlParentElement, el2Obj, getThumbUrlFromArtifact } from '../../../global/course-api/course_fn'

const fetchWithRetry = _fetchWithRetry_(fetch)




const CourseApi = ({ config, store })=>{
    const [slug,setSlug]=useState('')
    const [courseXml,setCourseXml] = useState(null)
    
    const loadXmlDs = async()=>{
        const xmlDsUrl = devApiUrl('course-info-ds.xml')
        const xmlStr = await fetch(xmlDsUrl).then(r=>r.text())
        setCourseXml(xmlStr)
        // console.log(xmlStr)
    }

    const getCourseInfo=()=>{
        const courseXmlDoc = jQuery(courseXml)
        const [p,urn] = getCourseXmlParentElement(courseXmlDoc)
        console.log(p)
        if(p){
            const thumbRootUrl = p.find('primaryThumbnail rootUrl').text().trim() 
            const thumbRootUrlV2 = p.find('primaryThumbnailV2 rootUrl').text().trim() 
            const thumbs  = p.find('primaryThumbnail artifacts')
            const thumbV2s = p.find('primaryThumbnailV2 artifacts')
            console.log(thumbs,thumbRootUrl)
            console.log(thumbV2s,thumbRootUrlV2)
            if(thumbs.length > 0){
                for(const artifactEl of thumbs){
                    const artifact = el2Obj(artifactEl)
                    if(artifact){
                        const thumbUrl = getThumbUrlFromArtifact(artifact, thumbRootUrl)
                        console.log(thumbUrl)
                        const size = `${artifact.width}x${artifact.height}`
                        const expiresAt = parseInt(artifact.expiresat)
                        // const thumbnail = await mThumbnail.create(course.id, size, thumbUrl, expiresAt)
                    }
                }
            }else if(thumbV2s.length > 0){
                for(const artifactEl of thumbV2s){
                    const artifact = el2Obj(artifactEl)
                    if(artifact){
                        const thumbUrl = getThumbUrlFromArtifact(artifact, thumbRootUrlV2)
                        console.log(thumbUrl)
                        const size = `${artifact.width}x${artifact.height}`
                        const expiresAt = parseInt(artifact.expiresat)
                        // const thumbnail = await mThumbnail.create(course.id, size, thumbUrl, expiresAt)
                    }
                }
            }
            
        }
    }
    
    useEffect(f=>{
        loadXmlDs()
    },[slug])

    useEffect(f=>{
        getCourseInfo()
    },[courseXml])

    return <>
        <h4 className="font-bold">Course Api</h4>
    </>
}

export default CourseApi