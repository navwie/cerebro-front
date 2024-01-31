<template>
    <div class="container pt-5 pt-md-0 pb-5">
        <div class="row py-md-5">
            <div class="GSC_disclosure col-12" :style="mainColor">
                <h2>Credit Disclosure</h2>
                <div class="mb-5 decor-bottom"></div>
                <p class="mb-1"><b>Lenders you may connect with on this site will verify your information and obtain
                    credit reports and scores.</b></p>
                <p class="mb-4">This site is not a lender and we do not perform credit checks or secure credit reports
                    since we do not make credit decisions or offer loans. The operators of this site offer a free
                    infomediary service that simply passes the information you affirmatively provide to Lenders,
                    advertisers, and other financial service providers who may secure a loan, financial product, or
                    service for you. However, the Lenders who receive the information you affirmatively provide on this
                    site may use your information to verify consumer identity and perform credit checks which may impact
                    your credit score. Lenders in our network may perform a credit checks or secure your credit score
                    before making their decision to offer you a loan by using the three major reporting bureaus like,
                    TransUnion, Experian and Equifax, as well as other alternate sources of consumer information. By
                    submitting your loan request on this site, you are providing express written consent and
                    authorization under the Fair Credit Reporting Act to allow such Lenders and third-parties to use
                    your information in this manner (to obtain credit reports, credit scores, or other information from
                    any consumer reporting agency). It is important to remember that non-payment of loans may impact
                    your credit score negatively if your Lender or credit provider chooses to report delinquencies.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CreditDisclosure",
    data() {
        return {
            app_name: document.querySelector('title').text,
            mainColor: siteSettings.general.main_color.value,
            linkColor: siteSettings.general.link_color.value,
        };
    },
    computed: {
        mainColor() {
            return {
                '--main-color': this.mainColor,
                '--link-color': this.linkColor
            };
        },
    },
}
</script>

<style lang="scss" scoped>
    @import "../../sass/pages.scss";
</style>
