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
        const mode = ref(1);
        const message = ref('An Error Occured');

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
.log-message.error{
    color:red;
}
.log-message.success{
    color:green;
}
.log-message.warning{
    color:yellow;
}
</style>