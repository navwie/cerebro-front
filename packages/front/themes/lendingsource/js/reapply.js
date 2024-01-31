import VueCookies from 'vue3-cookies';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import Toaster from '@meforma/vue-toaster';
import '~bootstrap';
import WaitingPage from "./components/WaitingPage.vue";
import Footer from './components/Footer.vue'

import Header from "./components/Header.vue";

import {createApp} from 'vue';
import ReapplyForm from "./components/ReapplyForm.vue";
import {SentryInit, applyStylesAndAttributes} from "../../common/js/commonGeneral";

createApp(Header)
    .use(VueCookies)
    .mount("Header");

const application = createApp(ReapplyForm);

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
    .mount("ReapplyForm");

createApp(Footer).mount('Footer');
applyStylesAndAttributes(siteSettings);