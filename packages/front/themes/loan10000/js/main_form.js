import {createApp} from "vue";
import Modals from "./components/Modals.vue";
import CCPA from "./components/CCPA.vue";
import CreditDisclosure from "./components/CreditDisclosure.vue";
import Econsent from "./components/Econsent.vue";
import Privacy from "./components/Privacy.vue";
import Terms from "./components/Terms.vue";
import Unsubscribe from "./components/Unsubscribe.vue";
import EmailCcpaForm from "./components/EmailCcpaForm.vue";
import EmailForm from "./components/EmailForm.vue";
import '~bootstrap';
import VueCookies from "vue3-cookies";
import Footer from "./components/Footer.vue";
import Datepicker from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css';
import WaitingPage from "./components/WaitingPage.vue";
import Toaster from "@meforma/vue-toaster";
import MainForm from "./components/MainForm.vue";
import {SentryInit, applyStylesAndAttributes} from "../../common/js/commonGeneral";
import PrivacyText from "../../common/components/PrivacyText.vue";
import TermsText from "../../common/components/TermsText.vue";

const application = createApp(MainForm);

SentryInit(application);

application
    .component('Datepicker', Datepicker)
    .component('WaitingPage', WaitingPage)
    .use(Toaster, {
        dismissible: false,
        position: 'top-right',
        duration: false
    })
    .use(VueCookies)
    .mount("MainForm");

createApp(Footer)
    .component('EmailForm', EmailForm)
    .mount('Footer');

createApp(Modals)
    .component('CCPA', CCPA)
    .component('CreditDisclosure', CreditDisclosure)
    .component('Econsent', Econsent)
    .component('Privacy', Privacy)
    .component('Terms', Terms)
    .component('Unsubscribe', Unsubscribe)
    .component('WaitingPage', WaitingPage)
    .component('EmailCcpaForm', EmailCcpaForm)
    .component('EmailForm', EmailForm)
    .component('PrivacyText', PrivacyText)
    .component('TermsText', TermsText)
    .mount('Modals');

applyStylesAndAttributes(siteSettings);