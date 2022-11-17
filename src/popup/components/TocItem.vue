<template>
  <div class="toc-item-view">
    <ul class="toc-item-list">
        <li v-for="(toc,tocIndex) in items" class="container-fluid toc-item" :key="tocIndex">
            <div class="row toc-row">
                <div class="col-md-8"><i class="fa-solid star"></i> {{toc.title}}</div>
                <div class="col-md-4 text-center"><FetchButton :sectionIndex="sectionIndex" :tocIndex="tocIndex" :toc="toc"/></div>
            </div>
            
        </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import FetchButton from '../components/FetchButton.vue';

import Toc from '../../types/toc';

export default defineComponent({
    components:{
        FetchButton
    },
    props:{
        items: {
            required : true,
            type : Array as PropType<Toc[]>
        },
        sectionIndex : {
            requied : true,
            type : Number
        }
    },
    setup(props) {
        const items = ref(props.items as Toc[]);
        const sectionIndex = ref(props.sectionIndex as number);
        return {items, sectionIndex};
    }
})
</script>

<style scoped>
ul.toc-item-list{
  list-style-type:none;
  margin:0;
  padding:0;
}
.toc-row{
    margin-bottom: .6em;
}

</style>