import '~bootstrap';


import CardApp from "./components/CardApp.vue";
import CardForm from "./components/CardForm.vue";
import CardItems from "./components/CardItems.vue";
import CountVisitor from "./components/CountVisitor.vue";

import Header from "./components/Header.vue";
import Privacy from "./components/Privacy.vue";
import Terms from "./components/Terms.vue";

import Econsent from "./components/Econsent.vue";
import Footer from "./components/Footer.vue";
import EmailForm from "./components/EmailForm.vue";
import EmailCCPAForm from "./components/EmailCcpaForm.vue";
import Unsubscribe from "./components/Unsubscribe.vue";

import {createApp} from 'vue';
import VueCookies from "vue3-cookies"
import {SentryInit} from "../../common/js/commonGeneral";

const application = createApp(CardApp);

SentryInit(application);

application
    .component('CardForm',CardForm)
    .component('CardItems',CardItems)
    .component('CountVisitor',CountVisitor)
    .use(VueCookies)
    .mount("CardApp");

createApp(Header)
    .mount("Header");

createApp(Privacy)
    .component('EmailCCPAForm', EmailCCPAForm)
    .component('EmailForm', EmailForm)
    .mount('Privacy');

createApp(Terms)
    .component('EmailForm', EmailForm)
    .mount('Terms');

createApp(Econsent)
    .mount('Econsent');

createApp(Unsubscribe)
    .component('EmailForm', EmailForm)
    .mount('Unsubscribe');

createApp(Footer)
    .component('EmailForm', EmailForm)
    .mount('Footer');
