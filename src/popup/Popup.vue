<template>
  <div class="app-container">
    <PageNavigation @update="onUpdate($event)" :nav="nav" ref="pageNavigation"/>
    <WelcomePage v-if="nav=='welcome'"/>
    <LoadingPage v-if="nav=='loading'" text="Fetching Course Data"/>
    <HomePage v-if="nav=='home'"/>
    <CoursePage v-if="nav=='course'" :course="courseInfo.course" :sections="courseInfo.sections"/>
    <DownloadPage v-if="nav=='downloads'"/>
    <HelpPage v-if="nav=='help'"/>
    <AboutPage v-if="nav=='about'"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, PropType} from 'vue';
import NavTerm from '../types/navterm'; 
import CourseInfo from '../types/CourseInfo'; 
import Course from '../types/course'; 
import Toc from '../types/toc'; 
import Author from '../types/author';

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
    const onUpdate = (target : NavTerm) => {
      nav.value = target;
    };
    const courseInfo = ref<CourseInfo>();
    return {nav, onUpdate, courseInfo};
  },
  mounted(){
    console.log('Popout is ready please initialize everythings here');
    Store.getCourseJson((courseInfo)=>{
      this.extractCourseData(courseInfo)
    });
  },
  methods:{
    extractCourseData(courseInfo:CourseInfo){
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
