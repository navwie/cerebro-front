import '~bootstrap';
import VueCookies from 'vue3-cookies';
import Footer from './components/Footer.vue'

import Header from "./components/Header.vue";
import {Collapse} from "vue-collapsed";
import {createApp, nextTick} from 'vue';
import HomePage from "./components/HomePage.vue";
import {SentryInit, applyStylesAndAttributes} from "../../common/js/commonGeneral";


createApp(Header)
    .use(VueCookies)
    .mount("Header");

const application = createApp(HomePage);

SentryInit(application);

application
    .component('Collapse', Collapse)
    .use(VueCookies)
    .mount("Home");


createApp(Footer).mount('Footer');

applyStylesAndAttributes(siteSettings);