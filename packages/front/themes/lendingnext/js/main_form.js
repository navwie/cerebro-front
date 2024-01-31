import VueCookies from 'vue3-cookies';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import Toaster from '@meforma/vue-toaster';
import '~bootstrap';
import MainForm from "./components/MainForm.vue";
import WaitingPage from "./components/WaitingPage.vue";


import {createApp} from 'vue';
import {SentryInit, applyStylesAndAttributes} from "../../common/js/commonGeneral";

const application = createApp(MainForm);

SentryInit(application);

application
    .component('Datepicker', Datepicker)
    .component('WaitingPage', WaitingPage)
    .use(Toaster,{
        dismissible:false,
        position:'top-right',
        duration:false
    })
    .use(VueCookies)
    .mount("MainForm");

applyStylesAndAttributes(siteSettings);