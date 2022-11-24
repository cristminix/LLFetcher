<template>
    <div class="fetch-section-queue">
        <div class="fsqbc">
            <div class="fetch-section-queue-bar">
                <div class="fetch-section-queue-pb">
                    <div class="progress" v-show="percentage > 0">
                        <div class="progress-bar bg-success" role="progressbar" :style="{width:percentage+'%'}" :aria-valuenow="percentage" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="btn-fetch-section-queue-cnt">
                    <button :style="{color:btnState==3?'white':'inherit'}" :disabled="btnState!=1&&btnState!=4" @click="startQueue()" class="btn btn-sm btn-fetch-section-queue"><i class="fa" :class="{'fa-play':btnState==1,'fa-spin fa-spinner':btnState==2,'fa-check':btnState==3,'fa-refresh':btnState==4}"></i></button>
                </div>
            </div>
        </div>
       <code v-if="showData" class="data-codes">{{toJSONStr(queueSlugs)}}</code>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({

    setup() {
        const queueSlugs = ref([]);
        const showData = ref(false);
        const btnState = ref(1);
        const percentage = ref(10);
        const lastSectionIndex = ref(0);
        const sectionIndexQueues = ref([]);
        return {queueSlugs,showData,btnState,percentage,lastSectionIndex,sectionIndexQueues};
    },
    mounted(){
        setTimeout(()=> {
            this.sectionIndexQueues =  Object.keys(this.$parent.sections);
        },250)
    },
    methods:{
        toJSONStr(obj:any){
            return JSON.stringify(obj);
        },
        calculatePercentageQueue(callback:Function){
            const peak = this.queueSlugs.length;
            const maxPeak = this.$parent.getTotalTocs();
            const percentage = Math.round(peak / maxPeak * 100);

            if('function' == typeof callback){
                callback(percentage,peak,maxPeak);
            }
        },
        report(sectionIndex:number,tocIndex:number,status:number){
            const section = this.$parent.sections[sectionIndex];
            const slug = section.items[tocIndex].slug;
            if(!this.queueSlugs.includes(slug)){
                this.queueSlugs.push(slug);
            }
            const remainingText = `${this.queueSlugs.length} of ${this.$parent.getTotalTocs()}`
            this.$parent.logBar.log(`${section.title} : ${slug} ${remainingText}`,status);

            this.calculatePercentageQueue((percentage)=>this.percentage=percentage);

            if(this.$parent.fetchQueueBar[sectionIndex].percentage==100){
                this.processQueue();
            }
        },
        processQueue(){
            if(this.sectionIndexQueues.length > 0){
                this.lastSectionIndex = this.sectionIndexQueues.shift();
                this.$parent.fetchQueueBar[this.lastSectionIndex].startQueue();
            }else{
                this.btnState = 3;
            }
        },
        startQueue(){
            this.btnState = 2;
            this.processQueue();
        }
    }
})
</script>

<style scoped>
.data-codes{
    background: yellow;
}    
.fetch-section-queue-pb{
    width: 102px;
    height: 24px;
    padding: 4px 0;
    float:right;
    clear:both;
}
.btn-fetch-section-queue{
    margin-top:-8px;
    padding:0;
    border:none !important;
    font-size: 10px;
}
.fetch-section-queue{
    margin-bottom: 1em;
}
.btn-fetch-section-queue-cnt{
   width: 25px;
    position: absolute;
    right: 38px;
    margin-top: 2.5px;
}
</style>