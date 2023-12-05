import {courseUrlFromSlug,authorUrlFromSlug} from "../../../global/course-api/course_fn"

const CourseAuthors = ({authors}) =>{

    return authors ?
    <div className="flex text-lg"> 
        <span className="italic mr-1 ">By</span>
        {
          authors.map((author, index)=>{
                return <h4 key={index}> <a className="" href={authorUrlFromSlug(author.slug)} target="_blank">{author.name} <i className="fa fa-external-link"/></a> {index<authors.length-1?", ":""}</h4>
            })
        }
    </div> : ''
  }

  export default CourseAuthors