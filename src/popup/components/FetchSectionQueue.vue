<template>
    <div class="fetch-section-queue">
       DATA: <code>{{toJSONStr(queueSlugs)}}</code>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({

    setup() {
        const queueSlugs = ref(['test','123']);

        return {queueSlugs};
    },
    methods:{
        toJSONStr(obj:any){
            return JSON.stringify(obj);
        }
    }
})
</script>

<style scoped>
.fetch-section-queue{
    /* height:100px; */

}
</style>