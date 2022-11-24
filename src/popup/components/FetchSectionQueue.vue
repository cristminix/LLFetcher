<template>
    <div class="fetch-section-queue">
       <code v-if="showData" class="data-codes">{{toJSONStr(queueSlugs)}}</code>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({

    setup() {
        const queueSlugs = ref([]);
        const showData = ref(false);
        return {queueSlugs,showData};
    },
    methods:{
        toJSONStr(obj:any){
            return JSON.stringify(obj);
        },
        report(sectionIndex:number,tocIndex:number,status:number){
            const slug = this.$parent.sections[sectionIndex].items[tocIndex].slug;
            if(!this.queueSlugs.includes(slug)){
                this.queueSlugs.push(slug);
            }
            const remainingText = `${this.queueSlugs.length} of ${this.$parent.getTotalTocs()}`
            this.$parent.logBar.log(`${slug} ${remainingText}`,status);
        }
    }
})
</script>

<style scoped>
.data-codes{
    background: yellow;
}    
.fetch-section-queue{
    /* height:100px; */

}
</style>