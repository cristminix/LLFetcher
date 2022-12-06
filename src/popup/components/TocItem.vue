<template>
  <div class="toc-item-view">
    <table class="toc-item-list">
        <thead v-if="!hideCheckAll">
            <tr>
                <th colspan="2"><label><input  @click="onCheckAll()" v-model="checkAll" class="form-check-input" type="checkbox"/> <span style="padding-left:.5em">Check All</span></label></th>
               
                <th></th>
                <th class="text-center" style="width:80px"></th>
            </tr>
        </thead>
        <tbody>
        <tr v-for="(toc,tocIndex) in items" class="toc-item" :class="{ods:tocIndex%2==0}" :key="tocIndex">
            <td class="fcc">
                <input v-if="0"  @click="tgQueue(tocIndex)" class="form-check-input" type="checkbox" v-model="checkedQueues[tocIndex]"/> 
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
// import {Toc} from '../../types/lynda';
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
        const hideCheckAll = ref(true);
        const enableQueue = ref(true);
        const items = ref(props.items);
        const sectionIndex = ref(props.sectionIndex as number);
        const checkAll = ref(false);
        const checkedQueues = ref([]);
        // const excludeQueues = ref([]);
        const fetchQueueBar = ref();
        let fetchBtns = ref([]);
        return {hideCheckAll,fetchQueueBar,items, sectionIndex, checkedQueues, 
        // excludeQueues,
        fetchBtns,checkAll,enableQueue};
    },
    mounted(){
        this.fetchQueueBar = this.$parent.fetchQueueBar[this.sectionIndex];

        setTimeout(()=>{
            console.log('TocItem['+this.sectionIndex+'] : mounted');

            this.checkAll = true;
            for(let tocIndex in this.items){
                this.checkedQueues[tocIndex] = true;
            }
        },250);
    },
    methods:{
     
        onFetchUpdate(target:any){
            this.$emit('update',target);
        },
        onCheckAll(){
            setTimeout(()=>{
                console.log(this.checkAll);
                for(let tocIndex in this.items){
                    this.checkedQueues[tocIndex] = this.checkAll;
                }
            },250);
            
        },
        tgQueue(tocIndex:number){
            // setTimeout(()=>{
            // },250);
        }
        
    }
})
</script>

<style scoped>
td.fcc{
    text-align: right;
    width:10px;
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