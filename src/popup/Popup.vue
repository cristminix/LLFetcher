<template>
  <div class="app-container">
    <PageNavigation @update="onNavUpdate($event)" :nav="nav" ref="pageNavigation"/>
    <WelcomePage v-if="nav=='welcome'"/>
    <CoursePage @update="onCourseUpdate($event)" v-if="nav=='course'" :course="course"  ref="coursePage"/>
    <BgFetcher @update="onCourseUpdate($event)" v-if="nav=='bg-fetcher'" :course="course"  ref="bgFetcher"/>
    <DownloadPage v-if="nav=='downloads'"/>
    <HelpPage v-if="nav=='help'"/>
    <AboutPage v-if="nav=='about'"/>
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
import {Course} from '../types/lynda';

import PageNavigation from './components/PageNavigation.vue';
import WelcomePage from './views/WelcomePage.vue'
import CoursePage from './views/CoursePage.vue'
import DownloadPage from './views/DownloadPage.vue'
import AboutPage from './views/AboutPage.vue'
import BgFetcher from './views/BgFetcher.vue'
import HelpPage from './views/HelpPage.vue'
import Store from '../libs/store';
import { App_tableField,Course_tableField } from '../types/tableFields';

export default defineComponent({
  name: 'Popup',
  components: {
    PageNavigation,
    WelcomePage,
    CoursePage,
    DownloadPage,
    AboutPage,
    HelpPage,
    BgFetcher
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

    return {nav, course, onNavUpdate, onCourseUpdate, message,app};
  },
  mounted(){
    console.log('App Entry Point Start here...');
    // Store.prepareAppStorage();

    setTimeout(()=>{ 
      const db = Store.db();
      console.log(db);
      db.subscribe('app',(row:App_tableField)=>{
        this.app = row;
        this.log(`AppState:${row.state}`);
      });
    },1000)

  },
  methods:{
    log(message:string){
      this.message = message;
    },
    setCourse(course:Course){
      this.course = course;
      
      setTimeout(()=>{
        this.nav = this.$refs.pageNavigation.nav = 'course';
      },250);
    }
  }
})
</script>
