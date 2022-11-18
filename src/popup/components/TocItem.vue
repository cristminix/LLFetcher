<template>
  <div class="toc-item-view">
    <table class="table table-bordered toc-item-list">
        <thead>
            <tr>
                <th class="text-center" style="width:20px"><input @click="onCheckAll()" v-model="checkAll" class="form-check-input" type="checkbox"/></th>
                <th>Title</th>
                <th class="text-center" style="width:80px">Action</th>
            </tr>
        </thead>
        <tbody>
        <tr v-for="(toc,tocIndex) in items" class="toc-item" :class="{ods:(tocIndex as number)%2==0}" :key="tocIndex">
            <td  class="text-center">
                <input @click="tgQueue(tocIndex)" class="form-check-input" type="checkbox" v-model="checkedQueues[tocIndex]"/> 
            </td>
            <td>
                <i class="fa"></i> {{toc.title}}
            </td>
            <td class="text-center"><FetchButton @update="onFetchUpdate($event)" :sectionIndex="sectionIndex" :tocIndex="tocIndex" :toc="toc" checkedQueues="checkedQueues" ref="fetchBtns"/></td>
        </tr>
        </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import FetchButton from '../components/FetchButton.vue';

import Toc from '../../types/toc';

export default defineComponent({
    components:{
        FetchButton
    },
    props:{
        items: {
            required : true,
            type : Array as PropType<Toc[]>
        },
        sectionIndex : {
            requied : true,
            type : Number
        }
    },
    setup(props) {
        const items = ref(props.items as Toc[]);
        const sectionIndex = ref(props.sectionIndex as number);
        const checkAll = ref(false);
        const checkedQueues = ref([]);
        const excludeQueues = ref([]);
        let fetchBtns = ref([]);
        return {items, sectionIndex, checkedQueues, excludeQueues,fetchBtns};
    },
    mounted(){
        setTimeout(()=>{
            this.checkAll = true;
            for(let tocIndex in this.items){
                this.checkedQueues[tocIndex] = true;
            }
        },250);
    },
    methods:{
        triggerExcludeFetchQueue(tocIndex:number){
            console.log(tocIndex);
            if(this.excludeQueues.indexOf(tocIndex) == -1){
                this.excludeQueues.push(tocIndex);
            }
            this.checkedQueues[tocIndex] = false;

            // let totalCheckedIsTrue = 0;
            // for(let index in this.items){
            //     if(this.checkedQueues[index]){
            //         totalCheckedIsTrue += 1;
            //     }
            // }

            // if(totalCheckedIsTrue == this.items.length){
            this.checkAll = false;
            // }
        },
        triggerFetchQueue(tocIndex:number){
            console.log(tocIndex);
            if(tocIndex <= this.checkedQueues.length){
                // process next fetch button
                const nextTocIndex = tocIndex + 1;
                console.log(this.fetchBtns[nextTocIndex]);
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
                }
            },250);
            
        },
        tgQueue(tocIndex:number){
            setTimeout(()=>{
                // this.$refs.fetchBtns[tocIndex].isQueued =this.checkedQueues[tocIndex];
                // console.log(this.$refs.fetchBtns);
                console.log(this.checkedQueues[tocIndex]);
            },250);
        }
        
    }
})
</script>

<style scoped>
ul.toc-item-list{
  list-style-type:none;
  margin:0;
  padding:0;
}
.toc-row{
    /* margin-bottom: .6em; */
    /* padding :.5em; */
}
.toc-row.ods{
    /* background:#dededee2; */
}

</style>