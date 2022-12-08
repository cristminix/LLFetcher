<template>
  <div class="page-navigation text-center">
    <ul class="btn-group">
        <li @click="onNavClick('welcome')" class="btn btn-sm btn-primary" :class="{active : nav=='welcome'}">Welcome</li>
        <li @click="onNavClick('course')" class="btn btn-sm btn-primary" :class="{active : nav=='course'}">Course</li>
        <li @click="onNavClick('downloads')" class="btn btn-sm btn-primary" :class="{active : nav=='downloads'}">Downloads</li>
        <li v-if="0" @click="onNavClick('help')" class="btn btn-sm btn-primary" :class="{active : nav=='help'}">Help</li>
        <li v-if="0" @click="onNavClick('about')" class="btn btn-sm btn-primary" :class="{active : nav=='about'}">About</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import NavTerm from 'LLFetcher/src/types/navterm';
import Store from 'LLFetcher/src/libs/store';
export default defineComponent({
  props:{
    nav :{
        required:true,
        type: String as PropType<NavTerm>
    }
  },  
  setup(props) {
    const nav = ref(props.nav);

    return {nav};
  },
  methods:{
    onNavClick(target : NavTerm){
        console.log(target);
        this.nav = target;
        Store.setAppNav(this.nav);
        this.$emit('update', target);
    }
  }
})
</script>

