<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      count: 1
    }
  }
})
</script>

<template>
  
  <div>
    Hello : {{ count.toFixed(2) }}
  </div>
  
</template>
