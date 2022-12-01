<template>
    <div class="course-data">
      <ul>
        <li>
          <div class="data-title">COURSE</div>
          <div class="data-content">

            <highlightjs
                language="json"
                :code="JSON.stringify(course,null,2)"
            />
          </div>
        </li>

      </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import jQuery from 'jquery';
import Store from '../../libs/store';
export default defineComponent({

    setup(props) {
        const courseData = ref({});
        const course = ref({});
        const sections = ref([]);
        const authors = ref([]);
        const tocs = ref([]);
        return {courseData,course,sections,tocs,authors};
    },
    mounted(){
      // this.initCourseData();
    },
    methods:{
      initCourseData(){
        /*
        // moved to src/libs/Store.ts
        const courseTmp = this.$parent.course;
        const sections = this.$parent.sections;
        const authors = this.$parent.authors;
        Store.init();

        const course = Store.createCourse(courseTmp.title, courseTmp.slug, courseTmp.duration, courseTmp.sourceCodeRepository, courseTmp.description);
        
        

        this.course = course;
        sections.map((sectionTmp)=>{
          const section = Store.createSection(this.course.ID,sectionTmp.title);
          this.sections.push(section);
          sectionTmp.items.map((tocTmp)=>{
            const toc = Store.createToc(section.ID,tocTmp.title,tocTmp.slug,tocTmp.duration);
            this.tocs.push(toc);
          });
        });
        Store.createAuthorList(course.slug,authors);
        this.updateItemFromLS();

         */
      },
      updateItemFromLS(){
        console.log('Please update everything from localStorage here..');
      },
      updateItems(exerciseFile,toc){
        this.exerciseFile = Store.createExerciseFile(this.course.ID, exerciseFile.name, exerciseFile.url, exerciseFile.sizeInBytes);
        console.log(exerciseFile,toc);

        // update toc caption
        Store.updateTocCaption(toc.slug,toc.captionUrl,toc.captionFmt);
        // Update or create streaming location
        Store.createStreamLocationList(toc.slug,toc.streamLocations);
      }
    }
})
</script>

<style scoped>
.course-data > ul{
  list-style:none;
  padding:0;
}

</style>