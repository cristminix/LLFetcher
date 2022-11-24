<template>
    <div class="log-bar">
        <div class="log-message" :class="{error:mode==1,success:mode==0,warning:mode==2}">
            <span>{{message}}</span>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue';

export default defineComponent({
    setup(){
        const mode = ref(-1);
        const message = ref('');

        return {mode,message};
    },
    
    methods:{
        log(message:string,mode:number){
            this.message = message;
            this.mode = mode;
        }
    }
})
</script>

<style scoped>
.log-message{
    font-family: monospace;
    padding: .25em .5em;
    border-radius: 5px;
    text-align: center;
    font-size: 10px;
}    
.log-message.error{
    color:#fff;
    background: red;
}
.log-message.success{
    color:#fff;
    background: green;
}
.log-message.warning{
    color:maroon;
    background: yellow;
}
</style>