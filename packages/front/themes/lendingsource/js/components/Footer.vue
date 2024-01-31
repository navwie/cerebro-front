<template>
    <div id="EE_footer" class="GSC_footer py-5" :style="mainColorStyle">
        <div class="container py-md-4">
            <div class="row">
                <div class="col-md-3 mb-4 mb-md-0">
                    <div class="footer-logo-wrapper">
                        <img class="CE_footer_logo" :src="logoSource" alt="Logo" style="max-width:100%;" width="200" height="40">
                    </div>
                    <p class="CE_footer_text">Copyright © 2023</p>
                </div>
                <div class="col-md-3 mb-4 mb-md-0">
                    <h4 class="CE_footer_text fw-bold">Legal</h4>
                    <p><a class="CE_footer_text" href="/terms">Terms of Service</a></p>
                    <p><a class="CE_footer_text" href="/privacy">Privacy Policy</a></p>
                    <p><a class="CE_footer_text" href="/ccpa">CCPA-Dont Sell Info</a></p>
                    <p><a class="CE_footer_text" href="/#EE_disclosure">Disclaimer</a></p>
                    <p><a class="CE_footer_text" href="/econsent">E-Consent</a></p>
                    <p><a class="CE_footer_text" href="/credit_disclosure">Credit Disclosure</a></p>
                    <p class="mb-0"><a class="CE_footer_text" href="/unsubscribe">Unsubscribe</a></p>
                </div>
                <div class="col-md-3">
                    <h4 class="CE_footer_text fw-bold">Company</h4>
                    <p><a class="CE_footer_text" href="/#">Home</a></p>
                    <p><a class="CE_footer_text" href="/#EE_wu">Why Choose Us</a></p>
                    <p><a class="CE_footer_text" href="/#how-it-works">How it Works</a></p>
                    <p><a class="CE_footer_text" href="/#faq">FAQ</a></p>
                    <p class="mb-0">
                        <a @click="removeRefillData" href="/form" class="CE_footer_link get-started-link">Get Started</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="hr-wrapper">
        <hr/>
    </div>
    <div class="gray-dark-section" id="EE_disclosure">
        <div class="container py-5">
            <div class="row py-md-4">
                <div class="col-12">
                    <h3 class="CE_footer_text mb-4 fw-bold">Important Disclosures</h3>
                    <p class="CE_footer_text text-gray mb-4"><b>Consumer Disclosure:</b> {{ app_name }} IS NOT
                        A LENDER, DOES NOT BROKER LOANS, AND DOES NOT MAKE CREDIT DECISIONS and therefore, we ultimately
                        have no decision in determining whether you will be approved for a loan by a Lender or receive a
                        financial product from a service provider you may connect with using our services. The operators of
                        this site offer a free infomediary service that will pass the information you affirmatively provide
                        to Lenders, advertisers, networks, and other financial service providers who may secure a loan,
                        financial product, or service for you. The typical short-term loans offered by Lenders which you may
                        connect with on this site are intended to provide temporary financing to resolve immediate financial
                        needs and should not be considered long-term solutions. Providing your information on this site does
                        not guarantee that you will be connected with a third-party Lender or financial service provider or
                        approved for a loan for a specific amount. This site and its operators are not an agents, brokers,
                        or representatives for any third-party Lender or financial service provider and therefore, we do not
                        endorse, recommend, or warrant service or loan product and do not control the rates and fees that
                        third-parties may charge. We highly encourage you to carefully review all terms, conditions, and
                        repayment schedules of any loan offer issued by a third-party Lender prior to accepting or declining
                        a loan and understand that you are never obligated to accept an offer from a Lender. This site has
                        no accountability or knowledge of any loan terms and details you may be presented or agree to with
                        Lenders you may connect with on this site. For questions, information, or concerns regarding your
                        short-term loan, please contact the Lender directly. </p>
                    <p class="CE_footer_text text-gray mb-4">Since {{ app_name }} is not a Lender or financial
                        service provider, we do not perform credit checks. However, Lenders who receive the information you
                        provide may use it to verify consumer identity and perform credit checks which may impact your
                        credit score. Lenders in our network may perform a credit check before making their decisions using
                        the three major reporting bureaus like, TransUnion, Experian and Equifax, as well as other alternate
                        sources of consumer information. By submitting your information on our site, you affirmatively
                        consent and agree to allow such Lenders to use your information in this manner. It is important to
                        remember that non-payment of loans may impact your credit score negatively if your credit provider
                        chooses to report delinquencies. Residents of some states may not qualify for the loans or financial
                        products offered by the Lenders and service providers they may potentially connect with on this site
                        and we make no warranties or guarantees that consumers will qualify for any loan or services. The
                        site’s servicers are void where prohibited.</p>
                    <p class="CE_footer_text text-gray mb-0">This site receives compensation from the third-party Lenders and financial
                        service providers whose products appear on the site or whose products may be offered to you in the
                        form of a payment for each consumer request (“referral”) we pass to them. This compensation may
                        impact what offers you receive from Lenders and how or where products appear on this site. This site
                        does not include all Lenders available in the marketplace and you are encouraged to conduct due
                        diligence prior to acceptance of any short-term loan.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            app_name: document.querySelector('title').text,
            logoSrc: siteSettings.elements.EE_footer.CE_footer_logo.src,
            mainColor: siteSettings.general.main_color.value,
        }
    },
    computed: {
        logoSource() {
            return this.logoSrc;
        },
        mainColorStyle() {
            return '--main-color: ' + this.mainColor + ';';
        },
    },
    mounted() {

    },
    methods:{
        removeRefillData(){
            this.$cookies.remove('customerDataMain');
        }
    }
};
</script>

<style lang="scss" scoped>
    @import "../../sass/footer.scss";
</style>
