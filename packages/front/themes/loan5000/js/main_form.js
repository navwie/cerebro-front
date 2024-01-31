import VueCookies from 'vue3-cookies';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import Toaster from '@meforma/vue-toaster';
import '~bootstrap';
import MainForm from "./components/MainForm.vue";
import WaitingPage from "../../lendingsource/js/components/WaitingPage.vue";
import Footer from './components/Footer.vue'

import {SentryInit, applyStylesAndAttributes} from "../../common/js/commonGeneral";

import {createApp} from 'vue';
import GoToTop from "./components/GoToTop.vue";
import EmailForm from "./components/EmailForm.vue";

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

createApp(Footer)
    .component('EmailForm', EmailForm)
    .mount('Footer');

createApp(GoToTop).mount('GoToTop')

if (document.getElementById('navbar')) {
    document.getElementById('navbar').classList.add('collapse');
}

applyStylesAndAttributes(siteSettings);
