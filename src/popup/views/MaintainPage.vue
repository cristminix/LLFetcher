<template>
	<div class="maintain-page text-center" style="padding:2em">

		<div class="btn-group">
      <button class="btn btn-sm btn-primary"  @click="initDB()"><i class="fa fa-database"></i> Init DB</button>
      <button class="btn btn-sm btn-danger" @click="clearDB()"><i class="fa fa-trash"></i> Clear DB</button>
      <button class="btn btn-danger" @click="resetDownloadQueue()"><i class="fa fa-road"></i> Reset Download Queue</button>

    </div>
	</div>
</template>

<script lang="ts">
import { Course_tableField, DownloadConfig_tableField, ExerciseFile_tableField } from 'src/types/tableFields';
import { defineComponent, PropType, ref } from 'vue';
import Store from 'src/libs/store';
import { sendMessageBg,LogServer } from 'src/libs/utils';

const logServer = new LogServer('OptionPage.vue');

export default defineComponent({
  data() {
    return {
      nav: 'maintain'
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
    Store.onReady(()=>{
      this.course = Store.getLastCourse();
    });
  },
  methods:{
    resetDownloadQueue(){
      sendMessageBg({
        cmd:'reset_queue',
        course : this.course
      });
    },
     clearDB(){
      Store.clearStorage();
      logServer.log('clearing db_learning in chrome.storage.local');
     },
     initDB(){
      logServer.log('Store.prepareAppStorage()');
      Store.prepareAppStorage();  
     }
  }
})	
</script>