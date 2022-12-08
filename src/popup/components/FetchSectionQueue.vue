<template>
    <div class="fetch-section-queue">
        <div class="fsqbc">
            <div class="fetch-section-queue-bar">
                <div class="fetch-section-queue-pb">
                    <div class="progress" v-show="!hideProgress">
                        <div class="progress-bar bg-danger" role="progressbar" :style="{width:percentage+'%'}" :aria-valuenow="percentage" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="btn-fetch-section-queue-cnt" v-if="!hideBtn">
                    <button :style="{color:btnState==3?'white':'inherit'}" :disabled="btnState!=1&&btnState!=4" @click="startQueue()" class="btn btn-sm btn-fetch-section-queue"><i class="fa" :class="{'fa-play':btnState==1,'fa-spin fa-spinner':btnState==2,'fa-check':btnState==3,'fa-refresh':btnState==4}"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ComponentPublicInstance, defineComponent, ref } from 'vue';
import CoursePage from 'src/popup/views/CoursePage.vue';
export default defineComponent({

    setup() {
        const queueSlugs = ref([]);
        const excludeTocCount = ref(0);
        const successTocSlugs = ref([]);

        const btnState = ref(1);
        const percentage = ref(0);
        const lastSectionIndex = ref(0);
        const sectionIndexQueues = ref([]);
        const sectionIndexSuccessQueues = ref([]);
        const sectionIndexFailedQueues = ref([]);
        const hideProgress = ref(false);
        const hideBtn = ref(false);
        const itemQueuesLength = ref(0);

        return {
            btnState,
            percentage,
            lastSectionIndex,
            sectionIndexQueues,
            sectionIndexSuccessQueues,
            sectionIndexFailedQueues,
            itemQueuesLength,
            hideProgress,
            hideBtn,


            queueSlugs,
            excludeTocCount,
            successTocSlugs
        };
    },
    mounted(){
        
        setTimeout(()=> {
            this.populateSectionIndexQueue();
            // console.log('FetchSectionQueue : mounted');
        },500)
    },
    methods:{
        populateProgress(percentage,sectionIndex){
            console.log(percentage,sectionIndex)
            if(percentage == 100){
                if(!this.sectionIndexSuccessQueues.includes(sectionIndex)){
                    this.sectionIndexSuccessQueues.push(sectionIndex);
                    this.setProgress((p)=>{
                        if(p == 100){
                            this.btnState = 3;
                        }
                    });
                }
            }
        },
        populateSectionIndexQueue(){
            const parent = this.$parent as ComponentPublicInstance<typeof CoursePage>;

            this.sectionIndexQueues = Object.keys(parent.sections);
            this.itemQueuesLength = this.sectionIndexQueues.length;
        },
        toJSONStr(obj:any){
            return JSON.stringify(obj);
        },
        setProgress(fn?:Function){
            const peak = this.sectionIndexSuccessQueues.length;
            const maxPeak = this.itemQueuesLength ;
            const percentage = Math.round(peak / maxPeak * 100);
            if(typeof fn == 'function'){
                fn(percentage);
            }
            setTimeout(()=>{
                this.percentage = percentage;
            },250);
        },
        afterProcessQueue(sectionIndex:number,itemIndex:number,success:boolean){
            console.log(`FetchSectionQueue.afterProcessQueue(${sectionIndex},${itemIndex},${success})`);
            if(success){
                this.sectionIndexSuccessQueues.push(sectionIndex);
                this.setProgress();
                this.processQueue(success);
            }else{
                this.sectionIndexSuccessQueues.push(sectionIndex);
                this.processQueue();
            }
        },
        processQueue(success?:boolean){
            console.log(`FetchSectionQueue.processQueue()`);
            const parent = this.$parent as ComponentPublicInstance<typeof CoursePage>;

            if(this.sectionIndexQueues.length > 0){
                this.lastSectionIndex = this.sectionIndexQueues.shift();
                parent.fetchQueueBar[this.lastSectionIndex].startQueue();
            }else{
                this.btnState = 3;
            }
        },
        startQueue(){
            console.log(`FetchSectionQueue.startQueue()`);
            
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
   position: absolute;
    right: 49px;
    margin-top: 45px;
    opacity: .9;
}
.btn-fetch-section-queue-cnt{
   width: 25px;
    position: absolute;
    right: -12px;
    margin-top: 2.5px;
}
</style>