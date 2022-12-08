import { createApp } from 'vue';
import Popup from 'LLFetcher/src/popup/Popup.vue';

// import 'bootstrap/scss/bootstrap.scss';
// import 'bootstrap/dist/js/bootstrap.esm';


// import 'fontawesome-4.7/css/font-awesome.min.css';
import 'LLFetcher/src/styles/popup.css';

// import 'highlight.js/styles/default.css'
// import 'highlight.js/styles/androidstudio.css'

// import hljs from 'highlight.js/lib/core';
// import javascript from 'highlight.js/lib/languages/javascript';
// import hljsVuePlugin from "@highlightjs/vue-plugin";
import { attachListener } from 'LLFetcher/src/libs/utils';

// hljs.registerLanguage('javascript', javascript);
const app = createApp(Popup);

// app.use(hljsVuePlugin);
const instance = app.mount('#popup');

attachListener((a,b,c)=>{
    console.log(a);
    if(typeof instance.$refs.downloadPage != 'undefined'){
        instance.$refs.downloadPage.recv(a,b,c);
    }
  });