<template>
  <div class="welcome-page page">
    <button class="btn btn-primary" @click="sendMessageToContent()">Send Message To Content</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import {sendMessageSaveDataCodesToLS,contentConsoleLog} from "../../libs/utils";
import Store from "../../libs/store";

export default defineComponent({
  data() {
    return {
      nav: 'welcome'
    }
  },
  methods:{
    sendMessageToContent(){
      // send data code from content script to LS
      sendMessageSaveDataCodesToLS();
      // load data codes from ls
      Store.getDataCodesLS((dataCodes)=>{
        console.log(dataCodes)
        this.$parent.parseCourseData(dataCodes)
        contentConsoleLog(dataCodes);
      })

    }
  }
})
</script>

