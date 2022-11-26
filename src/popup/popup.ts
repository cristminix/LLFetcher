import { createApp } from 'vue';
import Popup from './Popup.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'fontawesome-4.7/css/font-awesome.min.css';
import '../styles/popup.css';

import 'highlight.js/styles/default.css'
import 'highlight.js/styles/androidstudio.css'

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('javascript', javascript);
const app = createApp(Popup);

app.use(hljsVuePlugin);
app.mount('#popup');

