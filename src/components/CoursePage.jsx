import {useState, useEffect} from "react"
import FetchSectionQueue from "./coursePage/FetchSectionQueue"
import FetchQueueBar from "./coursePage/FetchQueueBar"
import TocItem from "./coursePage/TocItem"

const CoursePage = ({}) => {
	const [course, setCourse] = useState(null)
	const [authors, setAuthors] = useState([])

	return(<div class="course-page page">
   CoursePage
  </div>)
}

export default CoursePage

/*
 <div class="fsqc">
      <FetchSectionQueue/>
    </div>
    <div class="course" v-if="course">
      <h2><i class="fa fa-bookmark"></i> <span>{course.title}</span></h2>
      <div style="font-style:italic"> 
      {
      	authors ? (<span>By</span>):""
      } 
      {
      	authors ? authors.map((author, index)=>{
      		return <h4> <span key={index}>{author.name}</span></h4>
      	}) :""
      }
      </div>
    </div>
    <div class="accordion accordion-flush" id="accordionCourse">
    <div v-for="(section,sectionIndex ) in sections" :key="sectionIndex" class="accordion-item">
      <div class="accordion-header" :id="'heading'+sectionIndex">
        <div class="row course-section">
        <button class="btn btn-default accordion-button custom btn-collapse" data-bs-toggle="collapse" :data-bs-target="'#collapse'+sectionIndex" aria-expanded="false" :aria-controls="'collapse'+sectionIndex"><i class="fa fa-plus"></i></button>

          <div class="col-md-8" style="padding-left:2.5em">{{section.title}}</div>
          <div class="col-md-4"><FetchQueueBar ref="fetchQueueBar" :sectionIndex="sectionIndex"/></div>
        </div>
      </div>
      <div :id="'collapse'+sectionIndex" class="accordion-collapse collapse" :aria-labelledby="'heading'+sectionIndex" data-bs-parent="#accordionCourse">
        <div class="accordion-body">
          <TocItem :items="section.items" :sectionIndex="sectionIndex" @update="onTocUpdate($event)" ref="tocItems"/>
        </div>
      </div>
    </div>
    </div>
    <div class="lbc">
      <LogBar ref="logBar"/>
    </div>
*/