<template>
  <div class="btn-group">
    <button :disabled="btnState > 1 && btnState < 4" @click="fetchToc(false)" class="btn btn-sm" :title="'Click to fetch TOC resources ' + toc.title">
      <i class="fa" :class="{'fa-play':btnState==1,'fa-spin fa-spinner':btnState==2,'fa-check':btnState==3,'fa-refresh':btnState==4}"></i>
    </button>

  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType, watchEffect } from 'vue'
import Toc from '../../types/toc';
import Proxy from '../../libs/proxy';
import jQuery from 'jquery';
import {findItems,findDS,getFmt} from '../../libs/utils';
import ExerciseFile from 'src/types/ExerciseFile';

export default defineComponent({
  props:{
        toc: {
            required : true,
            type : Object as PropType<Toc>
        },
        sectionIndex : {
            requied : true,
            type : Number
        },
        tocIndex : {
            requied : true,
            type : Number
        }
  },
    setup(props) {
        const toc = ref(props.toc as Toc);
        const sectionIndex = ref(props.sectionIndex as number);
        const tocIndex = ref(props.tocIndex as number);
        let exerciseFile  = ref<ExerciseFile>({name:'',url:''});
        const btnState = ref(1);
      
        
        return {toc, sectionIndex, tocIndex, exerciseFile, btnState};
    },

    methods:{
      isQueued(fetchQueueEnabled:boolean){
        return fetchQueueEnabled ? (this.$parent.checkedQueues[this.tocIndex] && this.$parent.excludeQueues.indexOf(this.tocIndex) == -1) : (this.btnState == 1&&this.btnState == 4);
      },
      fetchToc(fetchQueueEnabled:boolean){
        // 0. check if queues
        const isQueued = this.isQueued(fetchQueueEnabled);
        console.log('isQueued:',isQueued);

        if(isQueued){
          // 1. set btn state icon to [loading]
          this.btnState = 2;
        
          const url = '/chrome_extension/content.html?rand='+(Math.random().toString());
          //const url = this.toc.url;
          Proxy.get(url, (responseText : string)=>{
            let validResource = this.parseToc(responseText);
            if(validResource){
              // 3. set btn state to [checked]
              this.btnState = 3;
              this.$emit('update',{src: 'Popup.CoursePage.TocItem.FetchButton',toc : this.toc, exerciseFile: this.exerciseFile});

              if(fetchQueueEnabled){
                console.log('Queue Complete: triggering next fetchToc from parent, lastTocIndex:',this.tocIndex);
                this.$parent.triggerFetchQueue(this.tocIndex);
              }
              // addToParent excludeQueue
              this.$parent.triggerExcludeFetchQueue(this.tocIndex);

            }else{
              // 3. set btn state to icon [retry]
              this.btnState = 4;
              if(fetchQueueEnabled){
                this.$parent.triggerFailedFetchQueue(this.tocIndex);
                console.log('Queue Failed: triggering fetchToc from FetchButton, lastTocIndex:',this.tocIndex);
              }
            }
          },(r:any)=>{
            // 3. set btn state to icon [retry]
            this.btnState = 4;
            if(fetchQueueEnabled){
              this.$parent.triggerFailedFetchQueue(this.tocIndex);
              console.log('Queue Failed: triggering fetchToc from FetchButton, lastTocIndex:',this.tocIndex);
            }
          });
          
        }else{
          if(fetchQueueEnabled){
          
          }
        }
      },
      // Rebuild toc data to populate 
      // StremLocations
      // ExerciseFile
      parseToc(responseText : string){
        let validResource = false;
        const elDiv  = jQuery(`<div>${responseText}</div>`);
        const elCodes = elDiv.find('code');
        let dataCodes = [];
        
        let toc = Object.assign({},this.toc);
        toc.streamLocations = [];
        for(let codeIndex in elCodes){
            let elCode = elCodes[codeIndex];
            try{
                if(elCode.id.match(/^bpr-guid/)){
                    dataCodes.push(JSON.parse(elCode.textContent));
                }
            }catch(e){}
        }
        if(dataCodes.length > 0){
          // console.log(dataCodes);
          const searchTerms = [
              "com.linkedin.learning.api.deco.content.ExerciseFile",
              "com.linkedin.videocontent.Transcript",
              "com.linkedin.videocontent.StreamingLocation"
          ];


          for(let searchTermIdx = 0; searchTermIdx < searchTerms.length; searchTermIdx++){
              const query = searchTerms[searchTermIdx];
              const results = findItems(query, dataCodes);

              if(searchTermIdx == 0){
                // exerciseFile
                try{
                  const exerciseFileObj = findDS('$type','com.linkedin.learning.api.deco.content.ExerciseFile',results,['sizeInBytes','name','url']);
                  this.exerciseFile = exerciseFileObj as ExerciseFile;
                }catch(e){}
              }
              else if(searchTermIdx == 1){
                // transcript
                const transcriptObj = findDS('$type',"com.linkedin.videocontent.Transcript",results,['captionFile','captionFormat']);
                if('object' === typeof transcriptObj){
                  toc.captionUrl = transcriptObj.captionFile;
                  toc.captionFmt = transcriptObj.captionFormat;
                }
              }
              if(searchTermIdx == 2){
                // streamLocations
                const streamLocationObjs = findDS('$type',"com.linkedin.videocontent.StreamingLocation",results,['expiresAt','url'],true);
                if(streamLocationObjs.length > 0 ){
                    for(let stlIdx in streamLocationObjs){
                      const url = streamLocationObjs[stlIdx].url;
                      const fmt = getFmt(url);
                      toc.streamLocations.push({url:url,fmt:fmt})
                  }
                }

              }
          }
        }
        if(toc.captionUrl.length > 0 && toc.streamLocations.length > 0){
          validResource = true; 
          this.toc = toc;
        }
        
        return validResource;
      }
    }
})
</script>


