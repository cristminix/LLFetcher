<template>
  <div class="welcome-page page">
    <p class="text-center">{{greeting}}</p>
    <div class="action-cnt">
      <div class="dropdown" v-if="lastCourseList.length>0">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="recentCourseButton" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa fa-history"></i> Load Recent Course
        </button>
        <ul class="dropdown-menu" aria-labelledby="recentCourseButton">
          <li :key="course.ID" v-for="course in lastCourseList"><a class="dropdown-item" href="javascript:;" @click="loadRecentCourse(course)">{{ course.title }}</a></li>
        </ul>
      </div>

      <div class="btn-cnt">
        <button :disabled="fetchBtnState==1" class="btn btn-primary" @click="retrieveDataCodesFromContent()"><i class="fa" :class="{'fa-hand-o-right':fetchBtnState==0,'fa-spin fa-spinner':fetchBtnState==1,'fa-refresh':fetchBtnState==2}"></i> Fetch This Course</button>
      </div>

    </div>
  </div>
</template>
<script lang="ts">
import { sendMessageSaveDataCodesToLS } from 'src/libs/utils';
import { ComponentPublicInstance, defineComponent,ref } from 'vue';
import Store from 'src/libs/store';
import { Course_tableField } from 'src/types/tableFields';
import CoursePage from 'src/popup/views/CoursePage.vue';

export default defineComponent({
  setup() {
    const nav = ref('welcome');
    const greeting = ref('Welcome to LLFetcher 1.0.1, what do you want to do ?');
    const lastCourseList = ref<Course_tableField[]>([]);
    const fetchBtnState = ref(0);
    return {
      nav,greeting,lastCourseList,fetchBtnState
    }
  },
  mounted(){
    setTimeout(()=>{
      const appInfo = Store.getAppInfo();
      // this.$parent.log(`AppState:${appInfo.state}`);
      
      const lastCourses = Store.getLastCourses();
      if(lastCourses.length > 0){
        this.lastCourseList = [];
        lastCourses.map((course:Course_tableField)=>{
            this.lastCourseList.push(course);
        });
      }
      
    },1259);

  },
  methods:{
    loadRecentCourse(course:Course_tableField){
      const parent = this.$parent as ComponentPublicInstance<typeof CoursePage>;
      parent.setCourse(course);
    },
    retrieveDataCodesFromContent(){
      this.fetchBtnState = 1;
      // send data code from content script to LS
      sendMessageSaveDataCodesToLS();
      // load data codes from ls
      Store.getDataCodesLS((dataCodes)=>{

        this.fetchBtnState = 2;
        console.log(dataCodes)
        Store.saveDataCodes(dataCodes);
        const parent = this.$parent as ComponentPublicInstance<typeof CoursePage>;
        parent.setCourse(dataCodes.course);
        // contentConsoleLog(dataCodes);
      })

    }
  }
})
</script>
