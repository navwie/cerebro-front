import VueCookies from 'vue3-cookies';
import Footer from './components/Footer.vue'
import Header from "./components/Header.vue";
import '~bootstrap';
import Unsubscribe from "./components/Unsubscribe.vue";
import EmailForm from "./components/EmailForm.vue";
import WaitingPage from "../../lendingsource/js/components/WaitingPage.vue";

import {createApp} from 'vue';
import GoToTop from "./components/GoToTop.vue";
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

createApp(Footer)
    .component('EmailForm', EmailForm)
    .mount('Footer');

createApp(GoToTop).mount('GoToTop')

if (document.getElementById('navbar')) {
    document.getElementById('navbar').classList.add('collapse');
}

applyStylesAndAttributes(siteSettings);