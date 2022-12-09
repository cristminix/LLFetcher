import { ComponentPublicInstance, createApp } from 'vue';
import Popup from './Popup.vue';

import 'bootstrap/scss/bootstrap.scss';
import 'fontawesome-4.7/css/font-awesome.min.css';
import 'src/styles/popup.css';

// import 'highlight.js/styles/default.css'
// import 'highlight.js/styles/androidstudio.css'

// import hljs from 'highlight.js/lib/core';
// import javascript from 'highlight.js/lib/languages/javascript';
// import hljsVuePlugin from "@highlightjs/vue-plugin";
import 'bootstrap/dist/js/bootstrap.esm'

import { attachListener,LogServer } from '../libs/utils';

// hljs.registerLanguage('javascript', javascript);
const app = createApp(Popup);
const logServer = new LogServer('popup');
// logServer.init();
// app.use(hljsVuePlugin);
const instance  : ComponentPublicInstance<typeof Popup> = app.mount('#popup');

logServer.log({ component: "Popup.ts" });

attachListener((a:any,b:any,c:any)=>{
    if(a.cmd == 'logServer'){
        logServer.log(a.data);
    }

    if(typeof instance.$refs.downloadPage != 'undefined'){
        instance.$refs.downloadPage.recv(a,b,c);
    }
});