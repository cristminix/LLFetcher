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
        <li>
          <div class="data-title">SECTIONS</div>
          <div class="data-content">

            <highlightjs
                language="json"
                :code="JSON.stringify(sections,null,2)"
            />
          </div>
        </li>
        <li>
          <div class="data-title">TOCS</div>
          <div class="data-content">

            <highlightjs
                language="json"
                :code="JSON.stringify(tocs,null,2)"
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

    setup(prop) {
        const courseData = ref({});
        const course = ref({});
        const sections = ref([]);
        const tocs = ref([]);
        return {courseData,course,sections,tocs};
    },
    mounted(){
      this.initCourseData();
    },
    methods:{
      initCourseData(){
        const courseTmp = this.$parent.course;
        const sections = this.$parent.sections;

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
      },
      updateItems(exerciseFile,toc){
        const exerciseFileObj = {name:exerciseFile.name,url:exerciseFile.url,size:exerciseFile.sizeInBytes}
        this.exerciseFile = Store.createExerciseFile(this.course.ID, exerciseFileObj);
        console.log(exerciseFile,toc);
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