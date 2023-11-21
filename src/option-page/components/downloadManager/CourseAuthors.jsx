const CourseAuthors = ({authors}) =>{

    return authors ?
    <div className="flex text-lg"> 
        <span className="italic mr-1 ">By</span>
        {
          authors.map((author, index)=>{
                return <h4 key={index}> <span>{author.name}</span> {index<authors.length-1?", ":""}</h4>
            })
        }
    </div> : ''
  }

  export default CourseAuthors