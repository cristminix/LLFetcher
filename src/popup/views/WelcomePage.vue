<template>
  <div class="welcome-page page">
    <p>{{greeting}}</p>
    <div class="action-cnt">
      <div class="dropdown" v-if="lastCourseList.length>0">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="recentCourseButton" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa fa-history"></i> Load Recent Course
        </button>
        <ul class="dropdown-menu" aria-labelledby="recentCourseButton">
          <li v-for="course in lastCourseList"><a class="dropdown-item" href="javascript:;" @click="fetchCourseLS(course)">{{ course.title }}</a></li>
        </ul>
      </div>

      <div class="btn-cnt">
        <button class="btn btn-primary"><i class="fa fa-hand-o-right"></i> Fetch This Course</button>
      </div>

    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue';
import Store from '../../libs/store';
import course from "../../types/course";
// import jQuery from 'jquery';
// import 'bootstrap';
// import 'bootstrap/js/dist/dropdown';

export default defineComponent({
  setup() {
    const nav = ref('welcome');
    const greeting = ref('Welcome to LLFetcher, what do you want to do ?');
    const lastCourseList = ref([

    ]);
    return {
      nav,greeting,lastCourseList
    }
  },
  mounted(){
    setTimeout(()=>{
      const appInfo = Store.getAppInfo();
      // if(appInfo.lastCourse !== ''){
      //
      // }
      const lastCourses = Store.getLastCourses();
      if(lastCourses.length > 0){
        this.lastCourseList = [];
        lastCourses.map((course)=>{
            this.lastCourseList.push(course);
        });
      }
      console.log(appInfo);
      // jQuery('.dropdown-toggle').dropdown();
    },1000);

  },
  methods:{
    fetchCourseLS(course){
      console.log(course);
    }
  }
})
</script>

<style scoped>
.action-cnt{
  text-align:center;
  padding:.5em;
}
.btn-cnt{
  margin:1em;
}
</style>