<template>
  <div class="toc-item-view">
    <table class="toc-item-list">
        <thead v-if="fetchQueueBar">
            <tr v-if="fetchQueueBar.queueTocIndex.length>0">
                <th colspan="2"><label><input  @click="onCheckAll()" v-model="checkAll" class="form-check-input" type="checkbox"/> <span style="padding-left:.5em">Check All</span></label></th>
               
                <th></th>
                <th class="text-center" style="width:80px"></th>
            </tr>
        </thead>
        <tbody>
        <tr v-for="(toc,tocIndex) in items" class="toc-item" :class="{ods:tocIndex%2==0}" :key="tocIndex">
            <td class="fcc">
                <input v-if="toc.streamLocationIds.length == 0"  @click="tgQueue(tocIndex)" class="form-check-input" type="checkbox" v-model="checkedQueues[tocIndex]"/> 
            </td>
            <td style="padding-left:.5em">{{toc.title}}</td>
            <td colspan="2" style="text-align: right;">
                <FetchButton @update="onFetchUpdate($event)" 
                :sectionIndex="sectionIndex" 
                :tocIndex="tocIndex" 
                :toc="toc" 
                :queue="enableQueue"
                :exclude="toc.streamLocationIds.length > 0" 
                ref="fetchBtns"/>
            </td>
        </tr>
        </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import FetchButton from '../components/FetchButton.vue';
import {Toc} from '../../types/lynda';
import {Toc_tableField} from '../../types/tableFields';

export default defineComponent({
    components:{
        FetchButton
    },
    props:{
        items: {
            required : true,
            type : Array as PropType<Toc_tableField[]>
        },
        sectionIndex : {
            requied : true,
            type : Number
        }
    },
    setup(props) {
        const enableQueue = ref(true);
        const items = ref(props.items);
        const sectionIndex = ref(props.sectionIndex as number);
        const checkAll = ref(false);
        const checkedQueues = ref([]);
        const excludeQueues = ref([]);
        const fetchQueueBar = ref();
        let fetchBtns = ref([]);
        return {fetchQueueBar,items, sectionIndex, checkedQueues, excludeQueues,fetchBtns,checkAll,enableQueue};
    },
    mounted(){
        this.fetchQueueBar = this.$parent.fetchQueueBar[this.sectionIndex];

        setTimeout(()=>{
            this.checkAll = true;
            for(let tocIndex in this.items){
                this.checkedQueues[tocIndex] = true;
                const toc = this.items[tocIndex];
                if(!this.fetchQueueBar.queueTocIndex.includes(tocIndex) && toc.streamLocationIds.length == 0){
                    this.fetchQueueBar.queueTocIndex.push(tocIndex);    
                }
                
            }
        },250);
    },
    methods:{
        triggerFailedFetchQueue(tocIndex:number){
            setTimeout(()=>{
                this.fetchQueueBar.btnState=4;
            },1000);
            
        },
        calculatePercentageQueue(callback){
            const peak = this.excludeQueues.length;
            const maxPeak = this.items.length;
            const percentage = Math.round(peak / maxPeak * 100);

            if('function' == typeof callback){
                callback(percentage,peak,maxPeak);
            }
        },
        triggerExcludeFetchQueue(tocIndex:number, fetchQueueEnabled:boolean){
            console.log(tocIndex);
            if(this.excludeQueues.indexOf(tocIndex) == -1){
                this.excludeQueues.push(tocIndex);
            }
            if(fetchQueueEnabled){
                this.calculatePercentageQueue((percentage:number)=>{
                    setTimeout(()=>{
                        this.fetchQueueBar.setProgress(tocIndex,percentage);
                    },500);
                });
            }
            
            this.checkedQueues[tocIndex] = false;
            this.checkAll = false;
       
        },
        triggerFetchQueue(tocIndex:number){
            console.log(tocIndex);
            const nextTocIndex = tocIndex + 1;
            if(nextTocIndex < this.checkedQueues.length){
                // process next fetch button
                
                this.fetchBtns[nextTocIndex].fetchToc(true);
                // console.log();
            }else{
                this.calculatePercentageQueue((percentage:number)=>{
                    setTimeout(()=>{
                        this.fetchQueueBar.setProgress(tocIndex,percentage);
                    },500);
                });
                setTimeout(()=>{

                    this.fetchQueueBar.btnState=this.fetchQueueBar.percentage==100?3:1;
                    this.fetchQueueBar.lastTocIndex=0;
                },1000);
            }
            // calling fetch button next index
            // this.$ref

        },
        onFetchUpdate(target:any){
            // console.log(target)
            this.$emit('update',target);
        },
        onCheckAll(){
            setTimeout(()=>{
                console.log(this.checkAll);
                for(let tocIndex in this.items){
                    this.checkedQueues[tocIndex] = this.checkAll;
                    const toc = this.items[tocIndex];
                    if(this.checkedQueues[tocIndex] && toc.streamLocationIds.length == 0){
                        if(!this.fetchQueueBar.queueTocIndex.includes(tocIndex)){
                            this.fetchQueueBar.queueTocIndex.push(tocIndex);    
                        }
                    }else{
                        const aIndex = this.fetchQueueBar.queueTocIndex.indexOf(tocIndex);
                        if( aIndex != -1){
                            this.fetchQueueBar.queueTocIndex.splice(aIndex,1);
                        }
                    }
                }
            },250);
            
        },
        tgQueue(tocIndex:number){
            setTimeout(()=>{
                // this.$refs.fetchBtns[tocIndex].isQueued =this.checkedQueues[tocIndex];
                // console.log(this.$refs.fetchBtns);
                const toc = this.items[tocIndex];
                if(this.checkedQueues[tocIndex] && toc.streamLocationIds.length == 0){
                    if(!this.fetchQueueBar.queueTocIndex.includes(tocIndex)){
                        this.fetchQueueBar.queueTocIndex.push(tocIndex);    
                    }
                }else{
                    const aIndex = this.fetchQueueBar.queueTocIndex.indexOf(tocIndex);
                    if( aIndex != -1){
                        this.fetchQueueBar.queueTocIndex.splice(aIndex,1);
                    }
                }
                
                
                console.log(this.checkedQueues[tocIndex]);
            },250);
        }
        
    }
})
</script>

<style scoped>
td.fcc{
    text-align: right;
    width:2.5em;
}
ul.toc-item-list{
  list-style-type:none;
  margin:0;
  padding:0;
}
table.toc-item-list{
    width: 100%;
}
.toc-item-view{
    padding: 0 2em;
    font-size: 80%;
    padding-bottom: 1em;
    padding-right: 0;
}


</style>