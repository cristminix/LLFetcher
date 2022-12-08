<template>
  <div class="btn-group">
    <button :style="{border:(btnState!=1 && btnState!=4?'none':'inherit')}" :disabled="btnState > 1 && btnState < 4" @click="fetchToc()" class="btn btn-sm" :title="'Click to fetch TOC resources ' + toc.title">
      <i class="fa" :class="{'fa-play':btnState==1,'fa-spin fa-spinner':btnState==2,'fa-check':btnState==3,'fa-refresh':btnState==4}"></i>
    </button>

  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType, ComponentPublicInstance } from 'vue';
import {ExerciseFile,Toc} from 'src/types/lynda';
import Proxy from 'src/libs/proxy';
import jQuery from 'jquery';
import {findItems,findDS,getFmt} from 'src/libs/utils';
import {Toc_tableField} from 'src/types/tableFields';
import CoursePage from 'src/popup/views/CoursePage.vue';
export default defineComponent({
  props:{
        toc: {
            required : true,
            type : Object as PropType<Toc_tableField>
        },
        sectionIndex : {
            required : true,
            type : Number
        },
        tocIndex : {
            required : true,
            type : Number
        },
        queue : {
            required : false,
            type : Boolean
        },
        exclude : {
            required : false,
            type : Boolean
        }
  },
    setup(props) {
        const fetchQueueEnabled = ref(props.queue);
        const exclude = ref(props.exclude);
        const toc = ref<Toc_tableField>(props.toc);
        const sectionIndex = ref(props.sectionIndex as number);
        const tocIndex = ref(props.tocIndex as number);
        let exerciseFile  = ref<ExerciseFile>();
        const btnState = ref(1);

        if(exclude.value){
          btnState.value = 3;
        }
        
        return {exclude,toc, sectionIndex, tocIndex, exerciseFile, btnState, fetchQueueEnabled};
    },

    methods:{
      
      fetchToc(){
        
          this.btnState = 2;
          if(this.toc.streamLocationIds.length > 0){
            if(this.fetchQueueEnabled){
                this.btnState = 3;
                console.log('Queue Complete: triggering next fetchToc from parent, lastTocIndex:',this.tocIndex);
                const parent = this.$parent as ComponentPublicInstance<typeof CoursePage>;
                parent.fetchQueueBar.afterProcessQueue(true);
            }
            return;
          }
          const url = this.toc.url;
          Proxy.get(url, (responseText : string)=>{
            let validResource = this.parseToc(responseText);
            if(validResource){
              // 3. set btn state to [checked]
              this.btnState = 3;
              this.$emit('update',{src: 'Popup.CoursePage.TocItem.FetchButton',toc : this.toc, exerciseFile: this.exerciseFile, sectionId:this.toc.sectionId});
                const parent = this.$parent as ComponentPublicInstance<typeof CoursePage>;

                console.log('Queue Complete: triggering next fetchToc from parent, lastTocIndex:',this.tocIndex);
                parent.fetchQueueBar.afterProcessQueue(true);
              
            }else{
              // 3. set btn state to icon [retry]
              this.btnState = 4;
              if(this.fetchQueueEnabled){
                const parent = this.$parent as ComponentPublicInstance<typeof CoursePage>;

                parent.fetchQueueBar.afterProcessQueue(false);
                console.log('Queue Failed: triggering fetchToc from FetchButton, lastTocIndex:',this.tocIndex);
              }
            }
          },(r:any)=>{
            // 3. set btn state to icon [retry]
            this.btnState = 4;
              const parent = this.$parent as ComponentPublicInstance<typeof CoursePage>;

              parent.fetchQueueBar.afterProcessQueue(false);
              console.log('Queue Failed: triggering fetchToc from FetchButton, lastTocIndex:',this.tocIndex);
          });
          
       
      },
      // Rebuild toc data to populate 
      // StreamLocations
      // ExerciseFile
      parseToc(responseText : string){
        let validResource = false;
        const elDiv  = jQuery(`<div>${responseText}</div>`);
        const elCodes = elDiv.find('code');
        let dataCodes = [];
        
        let toc = Object.assign({}, this.toc) as unknown as Toc;
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
                      toc.streamLocations.push({url,fmt})
                  }
                }

              }
          }
        }
        if(toc.captionUrl.length > 0 && toc.streamLocations.length > 0){
          validResource = true; 
          this.toc = toc as unknown as Toc_tableField;
        }
        
        return validResource;
      }
    }
})
</script>


