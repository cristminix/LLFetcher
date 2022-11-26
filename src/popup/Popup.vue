<template>
  <div class="app-container">
    <PageNavigation @update="onNavUpdate($event)" :nav="nav" ref="pageNavigation"/>
    <WelcomePage v-if="nav=='welcome'"/>
    <LoadingPage v-if="nav=='loading'" text="Fetching Course Data"/>
    <HomePage v-if="nav=='home'"/>
    <CoursePage @update="onCourseUpdate($event)" v-if="nav=='course'" :course="courseInfo.course" :sections="courseInfo.sections" ref="coursePage"/>
    <DownloadPage v-if="nav=='downloads'"/>
    <HelpPage v-if="nav=='help'"/>
    <AboutPage v-if="nav=='about'"/>
    <div class="console">
      <highlightjs
          language="console"
          :code="JSON.stringify(message,null,2)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import NavTerm from '../types/navterm'; 
import CourseInfo from '../types/CourseInfo'; 
import Toc from '../types/toc';

import PageNavigation from './components/PageNavigation.vue';
import WelcomePage from './views/WelcomePage.vue'
import HomePage from './views/HomePage.vue'
import LoadingPage from './views/LoadingPage.vue'
import CoursePage from './views/CoursePage.vue'
import DownloadPage from './views/DownloadPage.vue'
import AboutPage from './views/AboutPage.vue'
import HelpPage from './views/HelpPage.vue'
import Store from '../libs/store';

export default defineComponent({
  name: 'Popup',
  components: {
    PageNavigation,
    WelcomePage,
    LoadingPage,
    HomePage,
    CoursePage,
    DownloadPage,
    AboutPage,
    HelpPage
  },
  setup(){
    const nav = ref<NavTerm>('welcome');
    const courseInfo = ref({} as CourseInfo);

    const onNavUpdate = (target : NavTerm) => {
      nav.value = target;
    };
    
    
    const onCourseUpdate = (target:any) => {
      console.log(target);
      // this.rebuildCourseInfo(sectionIndex, tocIndex, toc);
    };
    const message = ref('Hello World');
    return {nav, courseInfo, onNavUpdate, onCourseUpdate, message};
  },
  mounted(){
    console.log('Popout is ready please initialize everything here...');
    // Store.getCourseJson((courseInfo : CourseInfo)=>{
    //   this.parseCourseData(courseInfo)
    // });
  },
  methods:{
    log(message:string){
      this.message = message;

    },
    // Rebuild course info by updated TOC
    rebuildCourseInfo(sectionIndex : number, tocIndex : number, toc : Toc){
      this.courseInfo.sections[sectionIndex].items[tocIndex] = toc; 
    },
    // Rebuild Source Data
    parseCourseData(courseInfo : CourseInfo){
      for(let sectionIndex in courseInfo.sections){
        let sections = courseInfo.sections[sectionIndex];
        for(let tocIndex in sections.items){
          let toc = sections.items[tocIndex] as Toc;
          // rebuild toc url
          toc.url = `https://www.linkedin.com/learning/${courseInfo.course.slug}/${toc.slug}`;
        }
      }
      this.courseInfo = courseInfo;

      setTimeout(()=>{
        console.log(courseInfo);
        this.nav = this.$refs.pageNavigation.nav = 'course';
      },250);
      
    }
  }
})
</script>


<style scoped>
#popup {
    width : 600px;
    min-height: 480px;
    padding: 1em;
    background: rgb(249, 242, 249);
    border: solid 1px #ddd;
}

.page{
  margin :0 2em 2em;
  border: solid 1px #dedede;
  padding: 1em;
  border-radius: 4px;
}
</style>
