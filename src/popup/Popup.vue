<template>
  <div class="app-container">
    <WelcomePage v-if="nav=='welcome'" ref="welcomePage"/>
    <CoursePage @update="onCourseUpdate($event)" v-if="nav=='course'" :course="course"  ref="coursePage"/>
    <DownloadPage v-if="nav=='downloads'" ref="downloadPage"/>
    <HelpPage v-if="nav=='help'"/>
    <MaintainPage v-if="nav=='maintain'"/>
    
    <PageNavigation @update="onNavUpdate($event)" :nav="nav" ref="pageNavigation"/>

  </div>
</template>

<script lang="ts">
import {ComponentPublicInstance, defineComponent, PropType, ref} from 'vue';
import NavTerm from '../types/navterm'; 
import {Course} from '../types/lynda';
import MaintainPage from './views/MaintainPage.vue';
import PageNavigation from './components/PageNavigation.vue';
import WelcomePage from './views/WelcomePage.vue'
import CoursePage from './views/CoursePage.vue'
import DownloadPage from './views/DownloadPage.vue'
import AboutPage from './views/AboutPage.vue'
import HelpPage from './views/HelpPage.vue'

import Store from '../libs/store';
import { App_tableField,Course_tableField } from '../types/tableFields';
import {LogServer,getLineInfo} from '../libs/utils';

const logServer = new LogServer();

export default defineComponent({
  name: 'Popup',
  components: {
    PageNavigation,
    WelcomePage,
    CoursePage,
    DownloadPage,
    AboutPage,
    HelpPage,
    MaintainPage
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
    const welcomePage = ref<ComponentPublicInstance<typeof WelcomePage>>();
    const pageNavigation = ref<ComponentPublicInstance<typeof PageNavigation>>();
    return {nav, course,pageNavigation, onNavUpdate, onCourseUpdate, message,app,downloadPage,welcomePage};
  },
  mounted(){
    // console.log('App Entry Point Start here...');

    // chrome.storage.local.get('db_learning',(storage)=>{
    //   logServer.log(storage,65);
    // });
    const self = this;
    // setTimeout(()=>{
      Store.checkFreshInstall((freshInstall:boolean)=>{
      
      if(freshInstall){
        
        Store.prepareAppStorage((app)=>{
          // logServer.log(app,73);
          this.init();
        });
      }else{
        
        this.init();
      }
      // logServer.log(`check fresh install : ${freshInstall}`,80);
    })
    
    // },1000);
    
    
  },
  methods:{
    init(){
      Store.onReady(()=>{
        this.app = Store.getAppState();
        if(this.app){
          if(this.app.nav !== ''){
            this.nav = this.pageNavigation.nav = this.app.nav as NavTerm;
          }
        }
        // logServer.log(this.app,96);
      });

    
 
     
      
      // logServer.log(this.app,97);
      
      
      // db.subscribe('app',(row:App_tableField)=>{
      //   this.app = row;
      //   this.log(`AppState:${row.state}`);
      // });
    },
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
