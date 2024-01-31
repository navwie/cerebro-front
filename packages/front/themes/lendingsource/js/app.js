import VueCookies from 'vue3-cookies';
import '~bootstrap';
import EmailForm from "./components/EmailForm.vue";
import EmailCcpaForm from './components/EmailCcpaForm.vue'
import Footer from './components/Footer.vue'
import Header from "./components/Header.vue";
import CCPA from './components/CCPA.vue';
import CreditDisclosure from './components/CreditDisclosure.vue';
import Econsent from './components/Econsent.vue';
import Privacy from './components/Privacy.vue';
import Terms from './components/Terms.vue';
import PrivacyText from "../../common/components/PrivacyText.vue";
import TermsText from "../../common/components/TermsText.vue";
import {applyStylesAndAttributes} from "../../common/js/commonGeneral";

import {createApp} from 'vue';

createApp(Header)
    .use(VueCookies)
    .mount("Header");

createApp(Footer).mount('Footer');

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

createApp(EmailForm)
    .mount('EmailForm');

applyStylesAndAttributes(siteSettings);
