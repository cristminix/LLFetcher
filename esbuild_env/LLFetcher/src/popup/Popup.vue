<template>
  <div class="app-container">
    <WelcomePage v-if="nav=='welcome'"/>
    <CoursePage @update="onCourseUpdate($event)" v-if="nav=='course'" :course="course"  ref="coursePage"/>
    <DownloadPage v-if="nav=='downloads'" ref="downloadPage"/>
    <HelpPage v-if="nav=='help'"/>
    <AboutPage v-if="nav=='about'"/>
    <AboutPage v-if="nav=='about'"/>
    <PageNavigation @update="onNavUpdate($event)" :nav="nav" ref="pageNavigation"/>

  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import NavTerm from '../types/navterm'; 
import {Course} from '../types/lynda';

import PageNavigation from './components/PageNavigation.vue';
import WelcomePage from './views/WelcomePage.vue'
import CoursePage from './views/CoursePage.vue'
import DownloadPage from './views/DownloadPage.vue'
import AboutPage from './views/AboutPage.vue'
import HelpPage from './views/HelpPage.vue'
import Store from '../libs/store';
import { App_tableField,Course_tableField } from '../types/tableFields';
import { attachListener } from '../libs/utils';

export default defineComponent({
  name: 'Popup',
  components: {
    PageNavigation,
    WelcomePage,
    CoursePage,
    DownloadPage,
    AboutPage,
    HelpPage
  },
  setup(){
    const nav = ref<NavTerm>('welcome');
    const course = ref<Course_tableField>();

    const onNavUpdate = (target : NavTerm) => {
      nav.value = target;
    };
    
    
    const onCourseUpdate = (target:any) => {
      console.log(target);
    };
    const message = ref<string>('');
    const app = ref<App_tableField>();
    // const batchDownload = ref();
    const downloadPage = ref();
    return {nav, course, onNavUpdate, onCourseUpdate, message,app,downloadPage};
  },
  mounted(){
    // console.log('App Entry Point Start here...');
    // Store.prepareAppStorage();
    // this.nav = 'welcome';
    
    
    setTimeout(()=>{ 
      const db = Store.db();
      // console.log(db);
      this.app = Store.getAppState();
      // console.log(this.app);
      if(this.app.nav !== ''){
        this.nav = this.$refs.pageNavigation.nav = this.app.nav;
      }
      // db.subscribe('app',(row:App_tableField)=>{
      //   this.app = row;
      //   this.log(`AppState:${row.state}`);
      // });
     
    },1200)

  },
  methods:{
    log(message:string){
      // this.message = message;
    },
    setCourse(course:Course){
      this.course = course;
      
      setTimeout(()=>{
        this.nav = this.$refs.pageNavigation.nav = 'course';
        Store.setAppNav(this.nav);
      },250);
    }
  }
})
</script>
