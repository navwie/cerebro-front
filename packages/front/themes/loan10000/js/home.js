import {createApp} from "vue";
import Modals from "./components/Modals.vue";
import CCPA from "./components/CCPA.vue";
import CreditDisclosure from "./components/CreditDisclosure.vue";
import Econsent from "./components/Econsent.vue";
import Privacy from "./components/Privacy.vue";
import Terms from "./components/Terms.vue";
import Unsubscribe from "./components/Unsubscribe.vue";
import WaitingPage from "../../lendingsource/js/components/WaitingPage.vue";
import EmailCcpaForm from "./components/EmailCcpaForm.vue";
import EmailForm from "./components/EmailForm.vue";
import '~bootstrap';
import Header from "./components/Header.vue";
import VueCookies from "vue3-cookies";
import HomePage from "./components/HomePage.vue";
import {Collapse} from "vue-collapsed";
import Footer from "./components/Footer.vue";
import Redirect from "../../common/components/Redirect.vue";
import {SentryInit, applyStylesAndAttributes} from "../../common/js/commonGeneral";
import PrivacyText from "../../common/components/PrivacyText.vue";
import TermsText from "../../common/components/TermsText.vue";

const application = createApp(HomePage);

SentryInit(application);

application
    .use(VueCookies)
    .component('Collapse', Collapse)
    .mount("Home");

createApp(Header)
    .use(VueCookies)
    .mount("Header");

createApp(Footer)
    .component('EmailForm', EmailForm)
    .mount('Footer');

createApp(Modals)
    .component('CCPA', CCPA)
    .component('CreditDisclosure', CreditDisclosure)
    .component('Econsent', Econsent)
    .component('Privacy', Privacy)
    .component('PrivacyText', PrivacyText)
    .component('Terms', Terms)
    .component('TermsText', TermsText)
    .component('Unsubscribe', Unsubscribe)
    .component('WaitingPage', WaitingPage)
    .component('EmailCcpaForm', EmailCcpaForm)
    .component('EmailForm', EmailForm)
    .mount('Modals');


createApp(Redirect).mount('Redirect');

applyStylesAndAttributes(siteSettings);
