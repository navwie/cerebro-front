<template>
    <div class="GSC_main" :style="mainColors">
        <div class="container">
            <section class="page-section">
                <div class="row">
                    <div class="col">
                        <GreenLabel :title="'CREDIT DISCLOSURE'"  :color="'var(--main-color)'" :extraClass="'roboto'"/>
                    </div>
                </div>
                <WhiteBlock :title="'Got Questions? We have the Answers!'" :description="'If you have any further questions, please contact us here.'" />
                <div class="row">
                    <div class="col">
                        <h3>LENDERS YOU MAY CONNECT WITH ON THIS SITE WILL VERIFY YOUR INFORMATION AND OBTAIN CREDIT REPORTS AND SCORES.</h3>
                        <p>This site is not a lender and we do not perform credit checks or secure credit reports since we do not make credit decisions or offer loans. The operators of this site offer a free infomediary service that simply passes the information you affirmatively provide to Lenders, advertisers, and other financial service providers who may secure a loan, financial product, or service for you. However, the Lenders who receive the information you affirmatively provide on this site may use your information to verify consumer identity and perform credit checks which may impact your credit score. Lenders in our network may perform a credit checks or secure your credit score before making their decision to offer you a loan by using the three major reporting bureaus like, TransUnion, Experian and Equifax, as well as other alternate sources of consumer information. By submitting your loan request on this site, you are providing express written consent and authorization under the Fair Credit Reporting Act to allow such Lenders and third-parties to use your information in this manner (to obtain credit reports, credit scores, or other information from any consumer reporting agency). It is important to remember that non-payment of loans may impact your credit score negatively if your Lender or credit provider chooses to report delinquencies.</p>
                    </div>
                </div>
            </section>
        </div>
        <section class="page-section container-fluid">
            <BrownBlock />
        </section>
    </div>
</template>

<script>
import GreenLabel from "../components/GreenLabel.vue"
import BrownBlock from "../components/BrownBlock.vue"
import WhiteBlock from '../components/WhiteBlock.vue'
export default {
    name: "CreditDisclosure",
    components: {
        GreenLabel,
        BrownBlock,
        WhiteBlock
    },
    data() {
        return {
            app_name: document.querySelector('title').text,
            mainColor: siteSettings.general.main_color.value,
            buttonHoverBgColor: siteSettings.general.button_hover_bg_color.value,
            buttonHoverColor: siteSettings.general.button_hover_color.value,
            linkColor: siteSettings.general.link_color.value,
        };
    },
    computed: {
        mainColors() {
            return {
                '--main-color': this.mainColor,
                '--main-button-hover-bg-color': this.buttonHoverBgColor,
                '--main-button-hover-color': this.buttonHoverColor,
                '--link-color': this.linkColor
            };
        },
    },
    mounted() {
        this.app_name = document.querySelector('title').text;
        this.mainColor = siteSettings.general.main_color.value;
    },
    methods: {
        getMetaContent(name) {
            const element = document.querySelector(`meta[name="${name}"]`);
            return element && element.content ? element.content : '';
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../sass/pages.scss";
</style>
