import '~bootstrap';
import VueCookies from 'vue3-cookies';
import WaitingPage from "../../lendingsource/js/components/WaitingPage.vue";
import EmailForm from "./components/EmailForm.vue";
import EmailCcpaForm from './components/EmailCcpaForm.vue'

import Header from "./components/Header.vue";
import CCPA from './components/CCPA.vue';
import CreditDisclosure from './components/CreditDisclosure.vue';
import Econsent from './components/Econsent.vue';
import Privacy from './components/Privacy.vue';
import Terms from './components/Terms.vue';

import {createApp} from 'vue';
import Footer from "./components/Footer.vue";
import GoToTop from "./components/GoToTop.vue";
import PrivacyText from "../../common/components/PrivacyText.vue";
import TermsText from "../../common/components/TermsText.vue";
import {applyStylesAndAttributes} from "../../common/js/commonGeneral";

createApp(Header)
    .use(VueCookies)
    .mount("Header");

createApp(WaitingPage).mount("WaitingPage");

createApp(CCPA)
    .component('EmailCcpaForm', EmailCcpaForm)
    .component('EmailForm', EmailForm)
    .mount('CCPA');

createApp(CreditDisclosure)
    .mount('CreditDisclosure');

createApp(Econsent)
    .mount('Econsent');

createApp(Privacy)
    .component('EmailForm', EmailForm)
    .component('PrivacyText', PrivacyText)
    .mount('Privacy');

createApp(Terms)
    .component('EmailForm', EmailForm)
    .component('TermsText', TermsText)
    .mount('Terms');

createApp(Footer)
    .component('EmailForm', EmailForm)
    .mount('Footer');

createApp(GoToTop).mount('GoToTop');

if (document.getElementById('navbar')) {
    document.getElementById('navbar').classList.add('collapse');
}

applyStylesAndAttributes(siteSettings);
