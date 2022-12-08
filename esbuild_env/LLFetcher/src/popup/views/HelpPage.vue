<template>
  <div class="help-page page">
    HELP
    <div>
      <button class="btn btn-danger" @click="syncLS()"><i class="fa fa-sync"></i> Sync LS</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      nav: 'help'
    }
  },
  methods:{
    syncLS(){
      const db_learning = localStorage['db_learning'];
      chrome.storage.sync.set({db_learning});
    }
  }
})
</script>

