<template>
  <div class="page-navigation text-center">
    <ul class="btn-group">
        <li @click="onNavClick('welcome')" class="btn btn-sm btn-primary" :class="{active : nav=='welcome'}">Welcome</li>
        <!-- <li @click="onNavClick('loading')" class="btn btn-sm btn-primary" :class="{active : nav=='loading'}">Loading</li> -->
        <li @click="onNavClick('home')" class="btn btn-sm btn-primary" :class="{active : nav=='home'}">Home</li>
        <li @click="onNavClick('course')" class="btn btn-sm btn-primary" :class="{active : nav=='course'}">Course</li>
        <li @click="onNavClick('downloads')" class="btn btn-sm btn-primary" :class="{active : nav=='downloads'}">Downloads</li>
        <!-- <li @click="onNavClick('help')" class="btn btn-sm btn-primary" :class="{active : nav=='help'}">Helps</li> -->
        <!-- <li @click="onNavClick('about')" class="btn btn-sm btn-primary" :class="{active : nav=='about'}">About</li> -->
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import NavTerm from '../../types/navterm';
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
        this.$emit('update', target);
    }
  }
})
</script>

