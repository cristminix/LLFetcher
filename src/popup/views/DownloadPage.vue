<template>
  <div class="download-page page">
    <div class="dl-cnt text-center" v-if="course">
      <div class="exercise-file-cnt" v-if="exerciseFile">
        <div><label class="form-label">Exercise File: </label><a :href="exerciseFile.url" target="_blank">{{exerciseFile.name}}</a></div>
      </div>
      <div class="dl-config-cnt" v-if="downloadConfig">
        <div><label class="form-label">Set video output format : </label> 
          <select v-model="downloadConfig.selectedFmtList" class="form-control" @change="updateSelectedFmt()" style="width:120px;display:inline">
            <option value="">--Choose--</option>
            <option v-for="fmt in downloadConfig.fmtList" :value="fmt">{{fmt}}</option>
          </select>
        </div>
        <span class="form-helper">Available video format: {{downloadConfig.fmtList.join(', ')}}</span>

      </div>
      <div class="dl-playlist-cnt" v-if="downloadConfig.selectedFmtList">
        <label class="form-label">Playlist File : </label><a href="javascript:;">{{course.slug}}-{{downloadConfig.selectedFmtList}}.m3u</a>
      </div>
      <div class="dl-playlist-cnt" v-if="downloadConfig.selectedFmtList">
        <label class="form-label">Helper Script : </label><a href="javascript:;">{{course.slug}}-{{downloadConfig.selectedFmtList}}-util.sh</a>
      </div>
      <div class="exercise-file-cnt" v-if="course.sourceCodeRepository">
        <div><label class="form-label">Source Repository : </label> {{course.sourceCodeRepository}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Course_tableField, DownloadConfig_tableField, ExerciseFile_tableField } from '../../types/tableFields';
import { defineComponent, PropType, ref } from 'vue';
import Store from '../../libs/store';

export default defineComponent({
  data() {
    return {
      nav: 'downloads'
    }
  },
  props:{
    course : {
      required : false,
      type : Object as PropType<Course_tableField>
    }
  },
  setup(){
    const course = ref<Course_tableField>();
    const exerciseFile = ref<ExerciseFile_tableField>();
    const downloadConfig = ref<DownloadConfig_tableField>();
    return{
      course, exerciseFile, downloadConfig
    };
  },
  mounted(){
    this.loadDownloadData();
  },
  methods:{
    updateSelectedFmt(){
      Store.updateDownloadConfig('selectedFmtList',this.downloadConfig.selectedFmtList,this.course.ID);
    },
    isValidCourse(){
      if(!this.course){
        return false;
      }
      if(typeof this.course.ID === 'undefined'){
        return false;
      }
      return true;
    },
    loadDownloadData(){
      if(!this.isValidCourse()){
        const appInfo = Store.getAppInfo();
        // console.log(appInfo)
        this.course = Store.getCourse(appInfo.lastCourseSlug);
      }
      Store.setAppState(1,this.course.slug);

      // load exrcise file
      this.exerciseFile = Store.getExerciseFile(this.course.ID);

      // load download Config
      this.downloadConfig = Store.getDownloadConfig(this.course.ID);
    }

  }
})
</script>

<style scoped>
  .form-helper{
    font-size:12px;
    font-style: italic;
  }
  .form-label{
    margin-right:.25em;
  }
</style>
