import VueCookies from 'vue3-cookies';
import Footer from './components/Footer.vue'
import Header from "./components/Header.vue";
import '~bootstrap';
import EmailForm from "./components/EmailForm.vue";
import WaitingPage from "./components/WaitingPage.vue";

import {createApp} from 'vue';
import Unsubscribe from "./components/Unsubscribe.vue";
import {SentryInit, applyStylesAndAttributes} from "../../common/js/commonGeneral";

createApp(Header)
    .use(VueCookies)
    .mount("Header");

const application = createApp(Unsubscribe);

SentryInit(application);

application
    .component('WaitingPage', WaitingPage)
    .component('EmailForm',EmailForm)
    .mount('Unsubscribe');

createApp(Footer).mount('Footer');
applyStylesAndAttributes(siteSettings);