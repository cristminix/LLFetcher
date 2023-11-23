import { useEffect , useState} from "react"
import {findDS,fetchCourseTocMeta,fetchCourseTocPage} from "../../components/learning_fn"
import $ from "jquery"
import xmlbuilder from 'xmlbuilder'
import Button from "../Button"
// Function to sanitize keys
const sanitizeArray = (obj) => {
    return obj.map(item => {
        let out = item
        if(Array.isArray(item)){
            out = sanitizeArray(item)
        }
        else if(typeof item === "object"){
            out = sanitizeObj(item)
        }
        // console.log()        
        return out
    })
}

const sanitizeObj = (obj) => {
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
        // console.log(key)
        if (obj.hasOwnProperty(key)) {
          if (Array.isArray(obj[key])) {
            // If the property is an array, loop through its items
            obj[key].forEach((item) => {
              const arrayElement = parent.ele(key);
              convert(item, arrayElement);
            });
          } else if (typeof obj[key] === 'object') {
            // If the property is an object, create a new element
            const child = parent.ele(key);
            convert(obj[key], child);
          } else {
            // If the property is a primitive value, add it as text content
            // let sanitizedKey = /^\d/.test(key) ? `text` : key
            try{
                parent.ele(key).text(obj[key]);

            }catch(e){
                

            }
          }
        }
      }
    };

    convert(jsonObj, root);
    return root.end({ pretty: true });
  };
  // Convert JSON to XML
  const convertJsonToXml2 = (jsonObj) => {
    const sanitizedJson = sanitizeKeys(jsonObj);
    const root = xmlbuilder.create('root');
    const convert = (obj, parent) => {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const child = parent.ele(key);
          if (typeof obj[key] === 'object') {
            convert(obj[key], child);
          } else {
            child.text(obj[key]);
          }
        }
      }
    };
    convert(sanitizedJson, root);
    return root.end({ pretty: true });
  };
const FindDsTest=({store})=>{
    const [lastCourse,setLastCourse]=useState(null)
    const [courseData,setCourseData]=useState(null)
    const styles = {  }
    const cls0 = "cls-0 text-4xl dark:text-white"
		const cls1 = "cls-1 text-3xl dark:text-white"
		const cls2 = "cls-2 text-2xl dark:text-white"
		const cls3 = "cls-3 text-xl dark:text-white"
		const cls4 = "cls-4 text-lg dark:text-white"
		const cls5 = "cls-5 text-base dark:text-white"

   
    const getLastCourseData = async()=>{
        const mCourse = store.get('Course')
        const lastCourseSlug = await mCourse.getLastSlug()
        const lastCourse = mCourse.getBySlug(lastCourseSlug)
        const lastCourseData = await mCourse.getCoursePageData(lastCourseSlug) 
        setLastCourse(lastCourse)
        setCourseData(lastCourseData)
        await getLastCourseFirtToc()
    }    

    const getLastCourseFirtToc = async() => {
        if(courseData){
            const {tocs, sections,course} = courseData
            const tocKeys = Object.keys(tocs)
            const sectionSlug = tocKeys[0]
            const tocList = tocs[sectionSlug]
            const tocSlug = tocList[0].slug

            var obj = {
                root: {
                  xmlbuilder: {
                    schema:[{a:1},{b:2}],
                    repo: {
                      '@type': 'git', // attributes start with @
                      '#text': 'git://github.com/oozcitak/xmlbuilder-js.git' // text node
                    }
                  }
                }
              };
               
            //   var xml =  convertJsonToXml(obj)
              console.log(convertJsonToXml(sanitizeKeys(obj)))

            // console.log(tocSlug)
            // console.log(tocs)
            // await fetchToc(course.slug, tocSlug)
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

                console.log(schema)
                console.log(xmlbuilder)
                var obj = {
                        schema
                    }
                   
                //   var xml =  convertJsonToXml(obj)
                  const row = sanitizeKeys(obj)
                  console.log(row)
                  console.log(convertJsonToXml(row))
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
    useEffect(()=>{
        getLastCourseData()

    },[])

    return(<>
    {/* <h1 className={cls0}> h1. Preline heading </h1> 
 <h2 className={cls1}> h2. Preline heading </h2> 
 <h3 className={cls2}> h3. Preline heading </h3> 
 <h4 className={cls3}> h4. Preline heading </h4> 
 <h5 className={cls4}> h5. Preline heading </h5>  */}
 
    {/* FindDSTest */}
    {
        lastCourse ? <>
        <h6 className={cls5}>  {lastCourse.title} </h6>
   

        </> : ""
    }
    <Button caption={"Fetch"} onClick={a=>getLastCourseData()}/>
    </>)
}

export default FindDsTest