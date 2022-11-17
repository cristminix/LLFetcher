<template>
  <div class="loading-page page">
    {{text}}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props:{
    text : {
      required : false,
      type : String
    }
  },
  setup(props) {
    const text = ref(props.text);
    return {text};
  }
})
</script>

