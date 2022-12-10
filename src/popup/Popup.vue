<template>
  <div class="app-container">
    <WelcomePage v-if="nav=='welcome'"/>
    <CoursePage @update="onCourseUpdate($event)" v-if="nav=='course'" :course="course"  ref="coursePage"/>
    <DownloadPage v-if="nav=='downloads'" ref="downloadPage"/>
    <HelpPage v-if="nav=='help'"/>
    <OptionPage v-if="nav=='option'"/>
    <PageNavigation @update="onNavUpdate($event)" :nav="nav" ref="pageNavigation"/>

  </div>
</template>

<script lang="ts">
import {ComponentPublicInstance, defineComponent, PropType, ref} from 'vue';
import NavTerm from '../types/navterm'; 
import {Course} from '../types/lynda';

import PageNavigation from './components/PageNavigation.vue';
import WelcomePage from './views/WelcomePage.vue'
import CoursePage from './views/CoursePage.vue'
import DownloadPage from './views/DownloadPage.vue'
import AboutPage from './views/AboutPage.vue'
import HelpPage from './views/HelpPage.vue'
import OptionPage from './views/OptionPage.vue'
import Store from '../libs/store';
import { App_tableField,Course_tableField } from '../types/tableFields';
import {LogServer} from '../libs/utils';

const logServer = new LogServer('src/popup/Popup.vue');

export default defineComponent({
  name: 'Popup',
  components: {
    PageNavigation,
    WelcomePage,
    CoursePage,
    DownloadPage,
    AboutPage,
    HelpPage,
    OptionPage
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
    const downloadPage = ref<ComponentPublicInstance<typeof DownloadPage>>();
    const pageNavigation = ref<ComponentPublicInstance<typeof PageNavigation>>();
    return {nav, course,pageNavigation, onNavUpdate, onCourseUpdate, message,app,downloadPage};
  },
  mounted(){
    // console.log('App Entry Point Start here...');

    setTimeout(()=>{ 
      Store.checkFreshInstall((freshInstall:boolean)=>{
        logServer.log(`check fresh install : ${freshInstall}`,65);
        if(freshInstall){
          
          Store.prepareAppStorage();
        }else{
          const db = Store.db();
          // console.log(db);
          this.app = Store.getAppState();
          // console.log(this.app);
          if(this.app){
            if(this.app.nav !== ''){
              this.nav = this.pageNavigation.nav = this.app.nav as NavTerm;
            }
          }
          // db.subscribe('app',(row:App_tableField)=>{
          //   this.app = row;
          //   this.log(`AppState:${row.state}`);
          // });
        }
      })
      
     
    },1200)

  },
  methods:{
    log(message:string){
      // this.message = message;
    },
    setCourse(course:Course_tableField){
      this.course = course;
      
      setTimeout(()=>{
        this.nav = this.pageNavigation.nav = 'course';
        Store.setAppNav(this.nav);
      },250);
    }
  }
})
</script>
