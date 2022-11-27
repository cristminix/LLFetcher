<template>
  <div class="welcome-page page">
    <p>{{greeting}}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue';


export default defineComponent({
  setup() {
    const nav = ref('welcome'),
    const greeting = ref('Welcome to LLFetcher, what do you want to do ?');
    return {
      nav,greeting
    }
  },
  mounted(){

  },
  methods:{
    
  }
})
</script>

