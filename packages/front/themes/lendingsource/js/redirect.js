import '~bootstrap';
import {createApp} from 'vue';
import {SentryInit} from "../../common/js/commonGeneral";
import Redirect from "../../common/components/Redirect.vue";
import Header from "./components/Header.vue";
import VueCookies from "vue3-cookies";
import Footer from "./components/Footer.vue";

createApp(Header)
    .use(VueCookies)
    .mount("Header");

createApp(Footer).mount('Footer');

const application = createApp(Redirect);

SentryInit(application);

application.mount('Redirect');

