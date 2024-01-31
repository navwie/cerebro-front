import '~bootstrap';
import VueCookies from 'vue3-cookies';
import Footer from './components/Footer.vue'

import Header from "./components/Header.vue";

import {createApp} from 'vue';
import HomePage from "./components/HomePage.vue";
import GoToTop from "./components/GoToTop.vue";
import EmailForm from "./components/EmailForm.vue";
import {SentryInit, applyStylesAndAttributes} from "../../common/js/commonGeneral";

createApp(Header)
    .use(VueCookies)
    .mount("Header");

const application = createApp(HomePage);

SentryInit(application);

application
    .use(VueCookies)
    .mount("Home");

createApp(Footer)
    .component('EmailForm', EmailForm)
    .mount('Footer');

createApp(GoToTop).mount('GoToTop')

if (document.getElementById('navbar')) {
    document.getElementById('navbar').classList.add('collapse');
}

applyStylesAndAttributes(siteSettings);