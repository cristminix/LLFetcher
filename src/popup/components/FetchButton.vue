<template>
  <div class="btn-group">
    <button class="btn btn-sm btn-default">
      <i class="fa-solid fa-fw fa-play"></i>
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import Toc from '../../types/toc';

export default defineComponent({
  props:{
        toc: {
            required : true,
            type : Object as PropType<Toc>
        },
        sectionIndex : {
            requied : true,
            type : Number
        },
        tocIndex : {
            requied : true,
            type : Number
        }
    },
    setup(props) {
        const toc = ref(props.toc as Toc);
        const sectionIndex = ref(props.sectionIndex as number);
        const tocIndex = ref(props.tocIndex as number);
        return {toc, sectionIndex, tocIndex};
    }
})
</script>


