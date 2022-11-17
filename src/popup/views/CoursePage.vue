<template>
  <div class="course-page page">
    <div class="course">
      <h2><i class="fa-regular fa-bookmark"></i> {{course.title}} by {{makeTitle(authors[0].slug)}}</h2>
    </div>
    <div class="sections-view">
      <ul class="section-list">
        <li v-for="(section,sectionIndex ) in sections" :key="sectionIndex">
          <h4><i class="fa fa-tag"></i> {{section.title}}</h4>
          <TocItem :items="section.items" :sectionIndex="sectionIndex"/>
        </li>
      </ul>
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

    // console.log(sections);
    return {course,authors,sections,exerciseFile};
  },
  methods:{
    makeTitle(slug : string) {
        const words = slug.split('-');
        
        for (let i = 0; i < words.length; i++) {
            var word = words[i];
            words[i] = word.charAt(0).toUpperCase() + word.slice(1);
        }
        
        return words.join(' ');
    }
  }
})
</script>

<style scoped>
.course{
  margin-bottom:1em;
}
ul.section-list{
  list-style-type:none;
  margin:0;
  padding:0;
}

ul.section-list > li > h4{
  font-size : 100%;
  padding:2px;
}
</style>