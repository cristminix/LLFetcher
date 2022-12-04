<template>
	<div class="bg-fetcher">
		hello
	</div>
</template>

<script lang="ts">
import { Course_tableField, DownloadConfig_tableField, ExerciseFile_tableField } from '../../types/tableFields';
import { defineComponent, PropType, ref } from 'vue';
import Store from '../../libs/store';

export default defineComponent({
  data() {
    return {
      nav: 'bg-fetcher'
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
  }
})	
</script>