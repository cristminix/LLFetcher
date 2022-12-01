<template>
  <div class="app-container">
    <PageNavigation @update="onNavUpdate($event)" :nav="nav" ref="pageNavigation"/>
    <WelcomePage v-if="nav=='welcome'"/>
    <LoadingPage v-if="nav=='loading'" text="Fetching Course Data"/>
    <HomePage v-if="nav=='home'"/>
    <CoursePage @update="onCourseUpdate($event)" v-if="nav=='course'" :course="course"  ref="coursePage"/>
    <DownloadPage v-if="nav=='downloads'"/>
    <HelpPage v-if="nav=='help'"/>
    <AboutPage v-if="nav=='about'"/>
    <div class="console" v-show="message.length>0">
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
import Course from '../types/course';

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
    const course = ref({} as Course);

    const onNavUpdate = (target : NavTerm) => {
      nav.value = target;
    };
    
    
    const onCourseUpdate = (target:any) => {
      console.log(target);
      // this.rebuildCourseInfo(sectionIndex, tocIndex, toc);
    };
    const message = ref('');
    const app = ref({state:0})
    return {nav, course, onNavUpdate, onCourseUpdate, message,app};
  },
  mounted(){
    console.log('App Entry Point Start here...');
    Store.prepareAppStorage();

    setTimeout(()=>{
      const db = Store.db();
      console.log(db);
      db.subscribe('app',(row)=>{
        // console.log(row);
        this.app = row;
        this.log(`AppState:${row.state}`);
      });
    },1000)

  },
  methods:{
    log(message:string){
      this.message = message;

    },
    setCourse(course){
      this.course = course;
      setTimeout(()=>{
        this.nav = this.$refs.pageNavigation.nav = 'course';
      },250);
    }
  }
})
</script>


<style scoped>
#popup {
    width : 680px;
    min-height: 480px;
    padding: 1em;
    background: rgb(249, 242, 249);
    border: solid 1px #ddd;
}

.page{
  margin :0 2em 2em;
  /*border: solid 1px #dedede;*/
  padding: 1em;
  border-radius: 4px;
}
</style>
