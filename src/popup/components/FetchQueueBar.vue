<template>
    <div class="fetch-queue-bar">
        <div class="test-data" v-if="false">
            <code>{{JSON.stringify(queueTocIndex,null,2)}}</code>
        </div>
        <div class="fetch-queue-pb">
            <div class="progress" v-show="percentage > 0">
                <div class="progress-bar bg-info" role="progressbar" :style="{width:percentage+'%'}" :aria-valuenow="percentage" :aria-valuemin="0" :aria-valuemax="100"></div>
            </div>
        </div>
        <div class="btn-fetch-cnt" v-if="queueTocIndex.length>0 || percentage==100">
            <button :style="{color:btnState==3?'white':'inherit'}" :disabled="btnState!=1&&btnState!=4" @click="startQueue()" class="btn btn-sm btn-fetch"><i class="fa" :class="{'fa-play':btnState==1,'fa-spin fa-spinner':btnState==2,'fa-check':btnState==3,'fa-refresh':btnState==4}"></i></button>
        </div>
    </div>
</template>

<script lang="ts">
import { Toc_tableField } from '../../types/tableFields';
import {defineComponent,ref} from 'vue'
export default defineComponent({
  props:{
    sectionIndex:{
        required : true,
        type: Number
    }
  },
  setup(props){
    let queueSlugs = ref([]);
    let queueTocIndex = ref([]);
    let excludeSlugs = ref([]);
    let percentage = ref(0);
    let btnState = ref(1);
    let lastTocIndex = ref(0);
    const sectionIndex = ref(props.sectionIndex);
    return {queueTocIndex,queueSlugs,excludeSlugs,percentage,btnState,lastTocIndex,sectionIndex};
  },
  mounted(){
    setTimeout(()=>{
        this.calculatePercentageInit();
    },1000);
  },
  methods:{
    calculatePercentageInit(){
        let maxPeak = 0;
        let peak = 0;
        let tocSlugs = Object.assign([],this.$parent.fetchSectionQueue.successTocSlugs);
        console.log(tocSlugs);
        this.$parent.tocItems[this.sectionIndex].items.forEach((toc:Toc_tableField)=>{
            maxPeak += 1;
            if(toc.streamLocationIds.length > 0){
                peak += 1;
                tocSlugs.push(toc.slug);
            }
        });
        const percentage = Math.round(peak / maxPeak * 100);
        
        setTimeout(()=>{
            this.percentage = percentage;

            if(percentage==100){
                this.btnState = 3;
            }

        },250);
        
        this.$parent.fetchSectionQueue.calculatePercentageInit(tocSlugs);
    },
    setProgress(lastTocIndex:number,percentage:number){
        this.lastTocIndex = lastTocIndex;
        this.percentage = percentage;
        if(percentage==100){
            this.btnState = 3;
        }
        this.$parent.fetchSectionQueue.report(this.sectionIndex,lastTocIndex,0);
        console.log(percentage)
    },
    startQueue(){
        this.percentage = this.percentage==0?1:this.percentage;
        this.btnState = 2;
        this.$parent.tocItems[this.sectionIndex].triggerFetchQueue(this.lastTocIndex==0?-1:this.lastTocIndex);
    }
  }
});
</script>
<style scoped>
.fetch-queue-bar{
    position: absolute;
    right: 49px;
    margin-top: -22px;;
}    
.fetch-queue-pb{
    width: 102px;
    height: 24px;
    padding: 4px 0;
    float:right;
    clear:both;
}
.btn-fetch{
    margin-top:-8px;
    padding:0;
    border:none !important;
    font-size: 10px;
}
.fetch-queue{
    margin-bottom: 1em;
}
.btn-fetch-cnt{
   width: 25px;
    position: absolute;
    right: -12px;
    margin-top: 2.5px;
}
</style>