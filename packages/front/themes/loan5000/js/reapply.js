import VueCookies from 'vue3-cookies';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import Toaster from '@meforma/vue-toaster';
import '~bootstrap';
import WaitingPage from "../../lendingsource/js/components/WaitingPage.vue";
import Footer from './components/Footer.vue'

import {createApp} from 'vue';
import ReapplyForm from "./components/ReapplyForm.vue";
import GoToTop from "./components/GoToTop.vue";
import ReapplyForm2 from "../../lendingsource/js/components/ReapplyForm.vue";
import EmailForm from "./components/EmailForm.vue";

import {SentryInit, applyStylesAndAttributes} from "../../common/js/commonGeneral";

createApp(ReapplyForm2)
    .component('Datepicker', Datepicker)
    .component('WaitingPage', WaitingPage)
    .use(Toaster, {
        dismissible: false,
        position: 'top-right',
        duration: false
    })
    .use(VueCookies)
    .mount("ReapplyForm2");

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

createApp(Footer)
    .component('EmailForm', EmailForm)
    .mount('Footer');

createApp(GoToTop).mount('GoToTop')

if (document.getElementById('navbar')) {
    document.getElementById('navbar').classList.add('collapse');
}

applyStylesAndAttributes(siteSettings);