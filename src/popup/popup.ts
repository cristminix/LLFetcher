import { createApp } from 'vue';
import Popup from './Popup.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import 'fontawesome-4.7/css/font-awesome.min.css';

import '../styles/popup.css';

import {formatBytes} from '../libs/utils';

console.log(formatBytes(1024));

const app = createApp(Popup).mount('#popup');

 