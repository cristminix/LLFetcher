<template>
    <div class="fetch-queue-bar">
        <div class="fetch-queue-pb">
            <div class="progress" v-show="percentage > 0">
                <div class="progress-bar bg-info" role="progressbar" :style="{width:percentage+'%'}" :aria-valuenow="percentage" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div class="btn-fetch-cnt">
            <button :style="{color:btnState==3?'white':'inherit'}" :disabled="btnState!=1&&btnState!=4" @click="startQueue()" class="btn btn-sm btn-fetch"><i class="fa" :class="{'fa-play':btnState==1,'fa-spin fa-spinner':btnState==2,'fa-check':btnState==3,'fa-refresh':btnState==4}"></i></button>
        </div>
    </div>
</template>

<script lang="ts">
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
    let excludeSlugs = ref([]);
    let percentage = ref(0);
    let btnState = ref(1);
    let lastTocIndex = ref(0);
    const sectionIndex = ref(props.sectionIndex);
    return {queueSlugs,excludeSlugs,percentage,btnState,lastTocIndex,sectionIndex};
  },
  methods:{
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
    right: 38px;
    margin-top: 2.5px;
}
</style>