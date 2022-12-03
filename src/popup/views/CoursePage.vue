<template>
  <div class="course-page page">
    <div class="fsqc">
      <FetchSectionQueue ref="fetchSectionQueue"/>
    </div>
    <div class="course" v-if="course">
      <h2><i class="fa fa-bookmark"></i> {{course.title}} by <span v-for="author in authors">{{makeTitle(author.slug)}}</span></h2>
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
import {Course,Section,ExerciseFile,Toc,StreamLocation} from '../../types/lynda';
import TocItem from '../components/TocItem.vue';
import FetchQueueBar from '../components/FetchQueueBar.vue';
import FetchSectionQueue from '../components/FetchSectionQueue.vue';
import LogBar from '../components/LogBar.vue';
import {makeTitle} from '../../libs/utils';
import $ from 'jquery';
import Store from "../../libs/store";
import { contentConsoleLog } from '../../libs/utils';
import { Course_tableField,Author_tableField,Section_tableField,ExerciseFile_tableField } from '../../types/tableFields';

export default defineComponent({
  components:{
    TocItem,FetchQueueBar,FetchSectionQueue,LogBar
  },
  props:{
    course : {
      required : false,
      type : Object as PropType<Course_tableField>
    }
  },
  setup(props) {
    const course = ref<Course_tableField>(props.course);
    const authors = ref<Author_tableField[]>([]);
    const sections = ref<Section[]>([]);
    const exerciseFile = ref<ExerciseFile_tableField>();
    const tocItems = ref([]);
    const fetchQueueBar = ref([]);
    const fetchSectionQueue=ref({});
    const logBar=ref({});
    const courseData=ref({});
    return {course,authors,sections,exerciseFile,tocItems,
    fetchQueueBar,fetchSectionQueue,logBar,courseData};
  },
  mounted(){
    this.loadCourseData();

    setTimeout(()=>{
      $('.course-page .btn-collapse').click((evt)=> {
        const el = $(evt.target).closest('button')[0];
        $(el).find('i').toggleClass('fa fa-plus fa fa-minus');
        $('.course-page .btn-collapse').not(el).find('i').removeClass('fa-minus').addClass('fa-plus ');
      });
    },50);
    

  },
  methods:{
    isValidCourse(){
      if(!this.course){
        return false;
      }
      if(typeof this.course.ID === 'undefined'){
        return false;
      }
      return true;
    },
    loadCourseData(){
      // console.log(this.course)
      if(!this.isValidCourse()){
        const appInfo = Store.getAppInfo();
        // console.log(appInfo)
        this.course = Store.getCourse(appInfo.lastCourseSlug);
      }
      Store.setAppState(1,this.course.slug);
      const sections = Store.getSectionsByCourseId(this.course.ID);
      sections.map((sectionTmp:Section_tableField)=>{
        let section = sectionTmp as unknown as Section;
        section.items = Store.getTocsBySectionId(sectionTmp.ID) as unknown as Toc[];
        this.sections.push(section);
      });
      this.course.authorIds.map((ID:number)=>{
        const author = Store.getAuthorById(ID);
        if(author){
          this.authors.push(author);

        }
      })
    },
    updateTocItems(exerciseFile:ExerciseFile,toc:Toc){
      this.exerciseFile = Store.createExerciseFile(this.course.ID, exerciseFile.name, exerciseFile.url, exerciseFile.sizeInBytes);
      // console.log(exerciseFile,toc);

      // update toc caption
      Store.updateTocCaption(toc.slug,toc.captionUrl,toc.captionFmt);
      // Update or create streaming location
      Store.createStreamLocationList(toc.slug,toc.streamLocations,this.course.ID);
    },
    onTocUpdate(evt:any){
      if(evt.src === 'Popup.CoursePage.TocItem.FetchButton'){
        this.updateTocItems(evt.exerciseFile, evt.toc);
      }

      this.$emit('update',evt);
    },
    makeTitle(slug : string) {
        return makeTitle(slug);
    },
    getTotalTocs(){
        let totalTocs =0;
        this.sections.map((s:Section)=>{
          totalTocs += s.items.length;
        });
        return totalTocs;
    }
  }
})
</script>