import _fetchWithRetry_ from 'fetch-retry'
import { useEffect, useState } from 'react'
import { devApiUrl } from './fn'
import jQuery from 'jquery'
import { getCourseXmlParentElement } from '../../../global/course-api/course_fn'

const fetchWithRetry = _fetchWithRetry_(fetch)

const getThumbUrlFromArtifact = (artifact,rootUrl)=>{
    return `${rootUrl}/${artifact.fileidentifyingurlpathsegment}`
}
/**
 * Convert child element tagname and text to obj prop val
*/
const el2Obj = (el)=>{
    const childrens=jQuery(el).children()
    if(childrens.length==0){
        return null
    }
    let obj = {}
    childrens.map((i,c)=>{
        const prop = c.tagName.toLocaleLowerCase()
        const value = jQuery(c).text().trim()
        obj[prop]=value
    })
    return obj
}

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
        
        if(p.length>0){
            try{
                const thumbRootUrl = p.find('primaryThumbnail rootUrl').text().trim() 
                const thumbRootUrlV2 = p.find('primaryThumbnailV2 rootUrl').text().trim() 
                const thumbs  = p.find('primaryThumbnail artifacts')
                const thumbV2s = p.find('primaryThumbnailV2 artifacts')
                console.log(thumbs,thumbRootUrl)
                console.log(thumbV2s,thumbRootUrlV2)

                for(const artifactEl of thumbs){
                    const artifact = el2Obj(artifactEl)
                    if(artifact){
                        const thumbUrl = getThumbUrlFromArtifact(artifact, thumbRootUrl)
                        console.log(thumbUrl)
                    }
                }
                for(const artifactEl of thumbV2s){
                    const artifact = el2Obj(artifactEl)
                    if(artifact){
                        const thumbUrl = getThumbUrlFromArtifact(artifact, thumbRootUrlV2)
                        console.log(thumbUrl)
                    }
                }

            }catch(e){
                console.error(e)
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