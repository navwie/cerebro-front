import VueCookies from 'vue3-cookies';
import Footer from './components/Footer.vue'
import Header from "./components/Header.vue";
import '~bootstrap';
import Unsubscribe from "./components/Unsubscribe.vue";
import EmailForm from "./components/EmailForm.vue";
import WaitingPage from "./components/WaitingPage.vue";

import {createApp} from 'vue';
import {applyStylesAndAttributes} from "../../common/js/commonGeneral";

createApp(Header)
    .use(VueCookies)
    .mount("Header");

createApp(Unsubscribe)
    .component('WaitingPage', WaitingPage)
    .component('EmailForm',EmailForm)
    .mount('Unsubscribe');

createApp(Footer).mount('Footer');

applyStylesAndAttributes(siteSettings);
