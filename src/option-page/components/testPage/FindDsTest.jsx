import { useEffect , useState} from "react"
import {findDS,fetchCourseTocMeta,fetchCourseTocPage} from "../../components/learning_fn"
import $ from "jquery"
import xmlbuilder from 'xmlbuilder'
import Button from "../Button"
import { Link, useLoaderData } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const sanitizeKeys = (obj) => {
    if(Array.isArray(obj)){
        return obj.map(item=> {
            return typeof item === 'object'? sanitizeKeys(item) : item
        })
    }
    
    let sanitizedObj = {}

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          let sanitizedKey = key.replace(/^\$/, '')
          sanitizedKey = sanitizedKey.replace(/^\@/, '')
          sanitizedKey = sanitizedKey.replace(/^\#/, '')
          sanitizedKey = sanitizedKey.replace(/^\*/, 'star_')
          sanitizedKey = /^\d/.test(sanitizedKey) ? `child_element_${sanitizedKey}` : sanitizedKey
           if (typeof obj[key] === 'object') {
            sanitizedObj[sanitizedKey] = sanitizeKeys(obj[key])
          } else {
            sanitizedObj[sanitizedKey] = obj[key]
          }
        }
      }
    return sanitizedObj
  }
  const convertJsonToXml = (jsonObj) => {
    const root = xmlbuilder.create('root');
    const convert = (obj, parent) => {
      if(typeof obj === "string"){
        parent.text(obj)
        return
      }  
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (Array.isArray(obj[key])) {
            obj[key].forEach((item) => {
              const arrayElement = parent.ele(key);
              convert(item, arrayElement);
            });
          } else if (typeof obj[key] === 'object') {
            const child = parent.ele(key)
            convert(obj[key], child)
          } else {
            try{
                parent.ele(key).text(obj[key])
            }catch(e){
            }
          }
        }
      }
    };

    convert(jsonObj, root)
    return root.end({ pretty: true })
  };

const FindDsTest=({store})=>{
    const {page}= useParams()
    const [lastPage,setLastPage]=useState(page)
    const [xmlSchema,setXmlSchema]=useState(page)
    const [xmlDoc,setXmlDoc]=useState(null)
    const [lastCourseSlug,setLastCourseSlug]=useState(null)
    const [courseData,setCourseData]=useState(null) 
		const cls5 = "cls-5 text-base dark:text-white"

   
    const getLastCourseData = async()=>{
        const mCourse = store.get('Course')
        const lastCourseSlug = await mCourse.getLastSlug()
        const lastCourseData = await mCourse.getCoursePageData(lastCourseSlug) 
        setLastCourseSlug(lastCourseSlug)
        setCourseData(lastCourseData)

        
    }    

    const getLastCourseFirtToc = async() => {
      console.log(courseData)
      
        if(courseData){
            const {tocs, sections,course} = courseData
            const tocKeys = Object.keys(tocs)
            const sectionSlug = tocKeys[0]
            const tocList = tocs[sectionSlug]
            const tocSlug = tocList[0].slug

            
            console.log('Fetching...')
            let data= null
            try{
                data = JSON.parse(localStorage['fetchData'])
            }
            catch(e){

            }
            if(! data){
                data = await fetchCourseTocPage(course.slug, tocSlug)
            }
            if(!data.hasError){
                localStorage['fetchData'] = JSON.stringify(data)
                const {responseText} = data
                const schema = parseJsonSchema(responseText)
                const row = sanitizeKeys({schema})
                const xmlSchema = convertJsonToXml(row)
                setXmlSchema(xmlSchema)
                console.log(xmlSchema)
            }else{
                console.error(`Could not get json schema`)
            }
            console.log(data)
        }
    }
    const parseJsonSchema = (responseText) => {
        $.expr[':'].containsRegex = $.expr.createPseudo(function (pattern) {
            var regex = new RegExp(pattern, 'i')
            return function (elem) {
                return regex.test($(elem).text())
            }
        })
        let errorMessage = null
  
        let validResource = false;
        const elDiv  = $(`<div>${responseText}</div>`)
        
        
        const signInBtns = elDiv.find('a:containsRegex("sign in")')
  
        if(signInBtns.length > 0){
          errorMessage = "ERR_NO_LOGIN"
        }
        const elCodes = elDiv.find('code')
        let dataCodes = []

        if(! errorMessage){
          for(let codeIndex in elCodes){
              let elCode = elCodes[codeIndex];
              try{
                  if(elCode.id.match(/^bpr-guid/)){
                      dataCodes.push(JSON.parse(elCode.textContent))
                  }
              }catch(e){}
          }
        }

        return dataCodes
    }
    // getLastCourseData()
    useEffect(()=>{
      getLastCourseData() 
    },[])
    useEffect(()=>{
      getLastCourseFirtToc() 
    },[courseData])
    
    return(<> 
 
    {page}
    
    {
        lastCourseSlug ? <>
        <h6 className={cls5}>  {courseData.course.title} </h6>
   

        </> : ""
    }
    <Button caption={"Fetch"} onClick={a=>getLastCourseData()}/>
    <div className="w-full">
    {
      xmlSchema ? <>
      <textarea value={xmlSchema} className="w-full dark:bg-black h-[200px] p-2 rounded-md rounded border"></textarea>
      </>:""
    }
    </div>
    </>)
    
}

export default FindDsTest