<template>
  <div class="about-page page">
    version <span>{{app.version}}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent ,ref} from 'vue'
import Store from '../../libs/store';

export default defineComponent({
  setup() {
    const nav = ref('about');
    const app = ref({version:0})
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

