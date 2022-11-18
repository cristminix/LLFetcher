<template>
    <div class="fetch-queue">
        <div style="width:90%;height:15px">
            <div class="progress" v-show="percentage > 0">
                <div class="progress-bar" role="progressbar" :style="{width:percentage+'%'}" :aria-valuenow="percentage" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div class="btn-fetch-cnt">
            <button :disabled="btnState!=1&&btnState!=4" @click="startQueue()" class="btn btn-sm btn-fetch"><i class="fa" :class="{'fa-play':btnState==1,'fa-spin fa-spinner':btnState==2,'fa-check':btnState==3,'fa-refresh':btnState==4}"></i></button>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue'
export default defineComponent({
  props:{

  },
  setup(props){
    let queueSlugs = ref([]);
    let excludeSlugs = ref([]);
    let percentage = ref(0);
    let btnState = ref(1);
    let lastTocIndex = ref(0);
    return {queueSlugs,excludeSlugs,percentage,btnState,lastTocIndex};
  },
  methods:{
    setProgress(lastTocIndex:number,percentage:number){
        this.lastTocIndex = lastTocIndex;
        this.percentage = percentage;
        if(percentage==100){
            this.btnState = 3;
        }
        console.log(percentage)
    },
    startQueue(){
        this.percentage = this.percentage==0?1:this.percentage;
        this.btnState = 2;
        this.$parent.triggerFetchQueue(this.lastTocIndex==0?-1:this.lastTocIndex);
    }
  }
});
</script>
<style scoped>
.btn-fetch{
    margin-top:-8px;
    padding:0;
    border:none !important;
}
.fetch-queue{
    margin-bottom: 1em;
}
.btn-fetch-cnt{
    width: 25px;
    position: absolute;
    right: 90px;
    margin-top: -18px;
}
</style>