<template>
  <div class="course-page page">
    <div class="course">
      <h2><i class="fa fa-bookmark"></i> {{course.title}} by {{makeTitle(authors[0].slug)}}</h2>
    </div>
    <div class="accordion accordion-flush" id="accordionCourse">
    <div v-for="(section,sectionIndex ) in sections" :key="sectionIndex" class="accordion-item">
      <h2 class="accordion-header" :id="'heading'+sectionIndex">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+sectionIndex" aria-expanded="false" :aria-controls="'collapse'+sectionIndex">
          {{section.title}}
        </button>
      </h2>
      <div :id="'collapse'+sectionIndex" class="accordion-collapse collapse" :aria-labelledby="'heading'+sectionIndex" data-bs-parent="#accordionCourse">
        <div class="accordion-body">
          <TocItem :items="section.items" :sectionIndex="sectionIndex" @update="onTocUpdate($event)" :ref="tocItems"/>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent,ref,PropType } from 'vue';
import Course from '../../types/course';
import Section from '../../types/section';
import Author from '../../types/author';
import ExerciseFile from '../../types/ExerciseFile';
import TocItem from '../components/TocItem.vue';
import {makeTitle} from '../../libs/utils';

export default defineComponent({
  components:{
    TocItem
  },
  props:{
    course : {
      required : true,
      type : Object as PropType<Course>
    },
    sections:{
      required : true,
      type : Array as PropType<Section[]>
    }
  },
  setup(props) {
    const course = ref(props.course);
    const authors = ref(props.course.authors as Author[]); 
    const sections = ref(props.sections as Section[]); 
    const exerciseFile = ref({} as ExerciseFile);
    let tocItems = [];
    
    return {course,authors,sections,exerciseFile,tocItems};
  },
  
  methods:{
    onTocUpdate(target:any){
      // console.log(target);
      // this.exerciseFile = {name: target.exerciseFile.name, url: target.exerciseFile.url};
      this.$emit('update',target);
    },
    makeTitle(slug : string) {
        return makeTitle(slug);
    }
  }
})
</script>

<style scoped>
.course{
  margin-bottom:1em;
}
/* ul.section-list{
  list-style-type:none;
  margin:0;
  padding:0;
}

ul.section-list > li > h4{
  font-size : 100%;
  padding:.5em;
  background: rgb(168, 210, 218);
} */
</style>