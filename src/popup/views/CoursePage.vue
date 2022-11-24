<template>
  <div class="course-page page">
    <div class="course-data-cnt">
      <CourseData ref="courseData"/>
    </div>
    <div class="fsqc">
      <FetchSectionQueue ref="fetchSectionQueue"/>
    </div>
    <div class="course">
      <h2><i class="fa fa-bookmark"></i> {{course.title}} by {{makeTitle(authors[0].slug)}}</h2>
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
  </div>
</template>
<script lang="ts">
import { defineComponent,ref,PropType } from 'vue';
import Course from '../../types/course';
import Section from '../../types/section';
import Author from '../../types/author';
import ExerciseFile from '../../types/ExerciseFile';
import TocItem from '../components/TocItem.vue';
import FetchQueueBar from '../components/FetchQueueBar.vue';
import FetchSectionQueue from '../components/FetchSectionQueue.vue';
import LogBar from '../components/LogBar.vue';
import CourseData from '../components/CourseData.vue';
import {makeTitle} from '../../libs/utils';
import $ from 'jquery';

export default defineComponent({
  components:{
    TocItem,FetchQueueBar,FetchSectionQueue,LogBar,CourseData
  },
  props:{
    course : {
      required : true,
      type : Object as PropType<Course>
    },
    sections:{
      required : true,
      type : Array as PropType<Section[]>
    }
  },
  setup(props) {
    const course = ref(props.course);
    const authors = ref(props.course.authors as Author[]); 
    const sections = ref(props.sections as Section[]); 
    const exerciseFile = ref({} as ExerciseFile);
    const tocItems = ref([]);
    const fetchQueueBar = ref([]);
    const fetchSectionQueue=ref({});
    const logBar=ref({});
    const courseData=ref({});
    return {course,authors,sections,exerciseFile,tocItems,
    fetchQueueBar,fetchSectionQueue,logBar,courseData};
  },
  mounted(){
    $('.btn-collapse').click(function() {
        $(this).find('i').toggleClass('fa fa-plus fa fa-minus');
        $('.btn-collapse').not(this).find('i').removeClass('fa-minus').addClass('fa-plus ');
    });
  },
  methods:{
    onTocUpdate(target:any){
      console.log(target.src) 
      // console.log(target);
      // this.exerciseFile = {name: target.exerciseFile.name, url: target.exerciseFile.url};
      this.$emit('update',target);
    },
    makeTitle(slug : string) {
        return makeTitle(slug);
    },
    getTotalTocs(){
        let totalTocs =0;
        this.sections.map((s)=>{
          totalTocs += s.items.length;
        });
        return totalTocs;
    }
  }
})
</script>

<style scoped>
.course{
  margin-bottom:1em;
}
.course-section{
  padding:.5em 0;
}
.accordion-button:focus {
    z-index: 3;
    border-color: transparent;
    outline: 0;
    box-shadow: none;
}
.accordion-button:not(.collapsed) {
    color: inherit; 
    background-color: transparent;
    box-shadow: none; 
}
.accordion-button:not(.collapsed),
.accordion-button.collapsed,
.accordion-button:not(.collapsed)::after,
.accordion-button.collapsed::after{
  background:none;
}
.accordion-button.custom {
position: absolute;
    width: 24px;
    padding: 0px 6px;
    left: 51px;
    margin-top: 3px;
    background: none;
    font-size: 10px;
 }
 .accordion-body{
  padding:0;
 }
</style>