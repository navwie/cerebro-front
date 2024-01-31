import Reject from './components/Reject.vue';
import {createApp} from 'vue';
import {SentryInit} from "./js/commonGeneral";


const application = createApp(Reject);

SentryInit(application);

application.mount('Reject');

