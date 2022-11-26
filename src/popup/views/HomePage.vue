<template>
  <div class="home-page page">
        <button class="btn btn-primary" @click="retrieveDataCodesFromContent()"><i class="fa" :class="{'fa-handshake-o':btnRetrieveState==0,'fa-spin fa-spinner':btnRetrieveState==1,'fa-refresh':btnRetrieveState==2}"></i> Retrieve Data Codes</button>

  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import {sendMessageSaveDataCodesToLS,contentConsoleLog} from "../../libs/utils";
import Store from "../../libs/store";
export default defineComponent({
  data() {
    return {
      nav: 'home',
      btnRetrieveState : 0
    }
  },
  methods:{
    retrieveDataCodesFromContent(){
      this.btnRetrieveState = 1;
      // send data code from content script to LS
      sendMessageSaveDataCodesToLS();
      // load data codes from ls
      Store.getDataCodesLS((dataCodes)=>{
        this.btnRetrieveState = 2;
        console.log(dataCodes)
        this.$parent.parseCourseData(dataCodes)
        contentConsoleLog(dataCodes);
      })

    }
  }
})
</script>

