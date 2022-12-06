<template>
    <div class="fetch-queue-bar">
        <div class="test-data" v-if="false">
            <code></code>
        </div>
        <div class="fetch-queue-pb">
            <div class="progress" v-show="!hideProgress">
                <div class="progress-bar bg-info" role="progressbar" :style="{width:percentage+'%'}" :aria-valuenow="percentage" :aria-valuemin="0" :aria-valuemax="100"></div>
            </div>
        </div>
        <div class="btn-fetch-cnt" v-if="!hideBtn">
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
    // let queueSlugs = ref([]);
    let itemIndexQueues = ref([]);
    let itemIndexSuccessQueues = ref([]);
    let itemIndexFailedQueues = ref([]);
    // let excludeSlugs = ref([]);
    let percentage = ref(0);
    let btnState = ref(1);
    // let lastTocIndex = ref(0);
    let lastItemIndex = ref(0);
    const hideProgress = ref(false);
    const hideBtn = ref(false);
    const sectionIndex = ref(props.sectionIndex);
    const itemQueuesLength = ref(0);

    return {
        // queueTocIndex,
        // queueSlugs,
        // excludeSlugs,
        hideProgress,
        hideBtn,
        sectionIndex,
        percentage,
        btnState,
        itemIndexQueues,
        itemIndexSuccessQueues,
        itemIndexFailedQueues,
        itemQueuesLength,
        lastItemIndex
        // lastTocIndex
    };
  },
  mounted(){
    setTimeout(()=>{
        // console.log('FetchQueueBar['+this.sectionIndex+'] : mounted');
        this.populateItemIndexQueue();
    },500);
  },
  methods:{
    populateItemIndexQueue(){
        const items = this.$parent.sections[this.sectionIndex].items;
        this.itemIndexQueues = Object.keys(items);
        this.itemQueuesLength = this.itemIndexQueues.length;

        this.itemIndexQueues.forEach((itemIndex)=>{
            const item = items[itemIndex];
            if(item.streamLocationIds.length>0){
                this.itemIndexSuccessQueues.push(itemIndex);
                this.setProgress((percentage,sectionIndex)=>{
                    this.$parent.fetchSectionQueue.populateProgress(percentage,sectionIndex);
                });
                
            }
        });
    },
    setProgress(fn?:Function){
        console.log(this.itemIndexSuccessQueues,this.itemIndexSuccessQueues);
        const peak = this.itemIndexSuccessQueues.length;
        const maxPeak = this.itemQueuesLength ;
        const percentage = Math.round(peak / maxPeak * 100);
        console.log(percentage);
        if(typeof fn == 'function'){
            fn(percentage,this.sectionIndex);
        }
        setTimeout(()=>{
            this.percentage = percentage;
            if(this.percentage==100){
                this.btnState = 3;
            }
            
        },750);
    },
    afterProcessQueue(success:boolean,itemIndex?:number){
        itemIndex = typeof itemIndex=='undefined'?this.lastItemIndex:itemIndex;
        console.log(`FetchQueueBar[${this.sectionIndex}].afterProcessQueue(${success},${itemIndex})`);
        if(success){
            this.itemIndexSuccessQueues.push(itemIndex);
            this.setProgress();
            this.processQueue(success);
        }else{
            this.itemIndexQueues.push(itemIndex);
            this.processQueue();
        }
    },
    processQueue(success?:boolean){
        console.log(`FetchQueueBar[${this.sectionIndex}].processQueue(${this.lastItemIndex})`);
        if(this.itemIndexQueues.length > 0){
            this.lastItemIndex = this.itemIndexQueues.shift();
            this.$parent.tocItems[this.sectionIndex].fetchBtns[this.lastItemIndex].fetchToc();
            
        }else{
            this.btnState = 3;
            // this.setProgress();
            this.$parent.fetchSectionQueue.afterProcessQueue(this.sectionIndex,this.lastItemIndex,success);
        }
    },
    startQueue(){
        console.log(`FetchQueueBar[${this.sectionIndex}].startQueue()`);
        this.btnState = 2;
        setTimeout(()=>{
            this.processQueue();
        },500);
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
    margin-top: 3.5px;
}
</style>