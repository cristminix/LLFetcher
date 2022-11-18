<template>
    <div class="fetch-queue">

    </div>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue'
export default defineComponent({
  props:{

  },
  setup(props){
    let queueSlugs = ref<string[]>([]);
    let excludeSlugs = ref<string[]>([]);
    
    return {queueSlug,excludeSlug};
  }
});
</script>
<style scoped></style>