<template>
	<div class="option-page text-center">
    <div>
      <button class="btn btn-danger"  @click="initDB()"><i class="fa fa-db"></i> Init DB</button>
    </div>
    <div>
      <button class="btn btn-danger" @click="clearDB()"><i class="fa fa-db"></i> Clear DB</button>
    </div>
		
	</div>
</template>

<script lang="ts">
import { Course_tableField, DownloadConfig_tableField, ExerciseFile_tableField } from 'src/types/tableFields';
import { defineComponent, PropType, ref } from 'vue';
import Store from 'src/libs/store';
import {LogServer} from 'src/libs/utils';

const logServer = new LogServer('OptionPage.vue');

export default defineComponent({
  data() {
    return {
      nav: 'batch-download'
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
  },
  methods:{
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