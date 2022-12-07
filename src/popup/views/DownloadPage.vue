<template>
  <div class="download-page page">
    <div class="dl-cnt text-center" v-if="course">
      <div class="exercise-file-cnt" v-if="exerciseFile">
        <div v-if="exerciseFile.url"><label class="form-label">Exercise File: </label><a @click="downloadFile('exercise_file')"  href="javascript:;">{{exerciseFile.name}}</a></div>
      </div>
      <div class="dl-config-cnt" v-if="downloadConfig">
        <div><label class="form-label">Set video quality : </label> 
          <select v-model="downloadConfig.selectedFmtList" class="form-control" @change="updateSelectedFmt()" style="width:120px;display:inline">
            <option value="">--Choose--</option>
            <option v-for="fmt in downloadConfig.fmtList" :value="fmt" :key="fmt">{{fmt}}</option>
          </select>
        </div>
        <span class="form-helper">Available video format: {{downloadConfig.fmtList.join(', ')}}</span>
        <div class="dl-batch-cnt" v-if="downloadConfig.selectedFmtList">
            <button class="btn btn-danger" @click="startDownloadVideoResource()"><i class="fa" :class="{'fa-download':downloadState.state==0,'fa-spin fa-spinner':downloadState.state==1}"></i> Download All Video &amp; Caption</button>
          <div>
            <table>
              <tbody>
                <tr v-for="dl in downloads" :key="dl.ID">
                  <td>{{dl.filename}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="dl-playlist-cnt" v-if="downloadConfig.selectedFmtList">
        <label class="form-label">Playlist : </label><a @click="downloadFile('playlist')"  href="javascript:;">{{course.slug}}-{{downloadConfig.selectedFmtList}}.m3u</a>
      </div>
      <div class="dl-playlist-cnt" v-if="downloadConfig.selectedFmtList">
        <label class="form-label">Helper Bash : </label><a @click="downloadFile('shell_script')"  href="javascript:;">{{course.slug}}-{{downloadConfig.selectedFmtList}}-helper.sh</a>
      </div>
      <div class="dl-playlist-cnt" v-if="0">
        <label class="form-label">Helper Cmd : </label><a @click="downloadFile('batch_script')" href="javascript:;">{{course.slug}}-{{downloadConfig.selectedFmtList}}-helper.bat</a>
      </div>
      <div class="exercise-file-cnt" v-if="course.sourceCodeRepository">
        <div><label class="form-label">Source Repository : </label> <a target="_blank" :href="course.sourceCodeRepository">{{course.sourceCodeRepository}}</a></div>
      </div>
      
    </div>
    <LogBar ref="logBar"/>
  </div>
</template>
<script lang="ts">
import { Section_tableField,Course_tableField, DownloadConfig_tableField, ExerciseFile_tableField } from '../../types/tableFields';
import { defineComponent, PropType, ref } from 'vue';
import Store from '../../libs/store';
import { createDownloadFile } from '../../libs/ext';
import { sendMessageBg } from '../../libs/utils';
import { Section,Toc } from '../../types/lynda';
import LogBar from '../components/LogBar.vue';
export default defineComponent({
  components:{
    LogBar
  },
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
    const downloadState = ref({ID:0,courseId:0,state:0});
    const logBar=ref({});
    const downloads = ref([]);
    return{
      course, exerciseFile, downloadConfig, downloadState,logBar,downloads
    };
  },
  mounted(){
    this.loadDownloadData();
    setTimeout(()=>{
      this.downloadState = Store.getDownloadState(this.course.ID);
      const db = Store.db();
      db.subscribe('downloads',(row)=>{
        console.log(row)
        if(row.courseId == this.course.ID){
          this.downloads[row.ID] = row;
        }
      });
    },250);
  },
  methods:{
    startDownloadVideoResource(){
      sendMessageBg({cmd:'start_download'});
      this.downloadState = Store.setDownloadState(this.course.ID,1);
      
    },
    recv(response,b,c){
      // this.downloads = Store.getDownloadByCourseId(this.course.ID);
      // console.log(a,b,c);
      // this.downloadVideoState = a.downloadState;
      if(response.cmd == 'download_state'){
        if(response.success){
          this.logBar.log(response.currentDownload.filename,0)
          this.downloadState = Store.setDownloadState(this.course.ID,0);
        }else{
          this.logBar.log(response.currentDownload.filename,1)
          this.downloadState = Store.setDownloadState(this.course.ID,0);
        }
      }
      this.logBar.log(JSON.stringify(a),1)
    },
    downloadFile(kind:string){
      const config = {
        slug : `${this.course.slug}`,
        downloadConfig : this.downloadConfig,
        exerciseFile : this.exerciseFile,
        sections : []
      };
      if(kind == 'shell_script' || kind == 'batch_script' || kind == 'playlist'){
        const sections = Store.getSectionsByCourseId(this.course.ID) as unknown as Section[];
        sections.forEach((section)=>{
          section.items = Store.getTocsBySectionId(section.ID) as unknown as Toc[];
        });
        config.sections = sections;
      }
      createDownloadFile(kind,config);
      console.log(kind)
    },
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
  .dl-batch-cnt{
    padding:2em;
  }
  .form-helper{
    font-size:12px;
    font-style: italic;
  }
  .form-label{
    margin-right:.25em;
  }
</style>
