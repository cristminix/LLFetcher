import { createApp } from 'vue';
import App from './App.vue';
import '../styles/popup.css';
import {formatBytes} from '../util/utils';
console.log(formatBytes(1024));
createApp(App).mount('#popup')