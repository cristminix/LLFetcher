import React, {useState, useEffect} from "react"
import CourseSection from "./CourseSection"

const CourseTree = ({sections, tocs}) => {
    const [loading, setLoading] = useState(false)
    const [warningText, setWarningText] = useState('')
  
    const stopLoading = ()=>{
      setTimeout(()=>{
        setLoading(false)
        setTimeout(()=>{
          setWarningText("No course sections and tocs data available")
        },1000)
      },3000)
  
  
    }
  
    useEffect(()=>{
      setLoading(true)
      setWarningText('Please wait ...')
    },[])
    if(sections.length > 0){
      return(<><div className="accordion accordion-flush" id="accordion-course-tree">
        {
          sections.map((section, index) => {
            const items = tocs[section.slug]
            return(<CourseSection section={section} items={items} sidx={index} key={index}/>)
          })
        }  
      </div></>)
    }else{
      return (<>
        
        <span><i className={loading?"fa fa-spin fa-spinner":"fa fa-exclamation"}></i> {warningText} </span>
        
        </>)
    }
  }

  export default CourseTree