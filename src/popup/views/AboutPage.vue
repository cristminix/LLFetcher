<template>
  <div class="about-page page" v-if="app">
    version <span>{{app.version}}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent ,ref} from 'vue'
import Store from 'src/libs/store';
import { App_tableField } from 'src/types/tableFields';

export default defineComponent({
  setup() {
    const nav = ref('about');
    const app = ref<App_tableField>()
    return {
      nav,
      app
    }
  },
  mounted(){
    // setTimeout(()=>{
      this.app = Store.getAppInfo();
      console.log(this.app)
    // },1000);
    
  }
})
</script>

