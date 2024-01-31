<template>
    <footer id="EE_footer" class="GSC_footer block-footer-1" :style="footerColors">
        <div class="container" style="width: 85%">
            <div class="footer-widgets-wrap">
                <div class="row col-mb-50">
                    <div class="col-12 col-md-4 col-xl-3">
                        <div class="widget widget_links clearfix text-blue" style="font-weight: bold;">
                            <ul class="one-page-menu">
                                <li class="CE_footer_link"><a href="/privacy">Privacy Policy</a></li>
                                <li class="CE_footer_link"><a href="/ccpa">CCPA-Dont Sell Info</a></li>
                                <li class="CE_footer_link"><a href="/econsent">E-Consent</a></li>
                                <li class="CE_footer_link"><a href="/terms">Terms of Service</a></li>
                                <li class="CE_footer_link"><a href="/unsubscribe">Unsubscribe</a></li>
                                <li class="CE_footer_link"><a href="/credit_disclosure">Credit Disclosure</a></li>
                                <li class="CE_footer_link"><a href="/#disclosures">Disclaimer</a></li>
                            </ul>
                        </div>
                        <div class="LogoFooter">
                            <img class="CE_footer_logo" :src="logoFooterSrc" :alt="app_name + 'Logo'" width="210" height="95">
                        </div>
                    </div>
                    <div class="col-12 col-md-8 col-xl-9">
                        <div class="CE_footer_text widget clearfix">
                            <p id="disclosures" class="text-blue"
                               style="text-align: justify; font-size: 14px; font-weight: 600;">Important Disclosures</p>
                            <p class="text-blue" style="text-align: justify; font-size: 14px;">Consumer Disclosure:
                                {{ app_name }} IS NOT A LENDER, DOES NOT BROKER LOANS, AND DOES NOT MAKE CREDIT
                                DECISIONS and therefore, we ultimately have no decision in determining whether you will
                                be approved for a loan by a Lender or receive a financial product from a service
                                provider you may connect with using our services. The operators of this site offer a
                                free infomediary service that will pass the information you affirmatively provide to
                                Lenders, advertisers, networks, and other financial service providers who may secure a
                                loan, financial product, or service for you. The typical short-term loans offered by
                                Lenders which you may connect with on this site are intended to provide temporary
                                financing to resolve immediate financial needs and should not be considered long-term
                                solutions. Providing your information on this site does not guarantee that you will be
                                connected with a third-party Lender or financial service provider or approved for a loan
                                for a specific amount. This site and its operators are not an agents, brokers, or
                                representatives for any third-party Lender or financial service provider and therefore,
                                we do not endorse, recommend, or warrant service or loan product and do not control the
                                rates and fees that third-parties may charge. We highly encourage you to carefully
                                review all terms, conditions, and repayment schedules of any loan offer issued by a
                                third-party Lender prior to accepting or declining a loan and understand that you are
                                never obligated to accept an offer from a Lender. This site has no accountability or
                                knowledge of any loan terms and details you may be presented or agree to with Lenders
                                you may connect with on this site. For questions, information, or concerns regarding
                                your short-term loan, please contact the Lender directly.</p>
                            <p class="text-blue" style="text-align: justify; font-size: 14px;">Since {{ app_name }} is
                                not a Lender or financial service provider, we do not perform credit checks. However,
                                Lenders who receive the information you provide may use it to verify consumer identity
                                and perform credit checks which may impact your credit score. Lenders in our network may
                                perform a credit check before making their decisions using the three major reporting
                                bureaus like, TransUnion, Experian and Equifax, as well as other alternate sources of
                                consumer information. By submitting your information on our site, you affirmatively
                                consent and agree to allow such Lenders to use your information in this manner. It is
                                important to remember that non-payment of loans may impact your credit score negatively
                                if your credit provider chooses to report delinquencies. Residents of some states may
                                not qualify for the loans or financial products offered by the Lenders and service
                                providers they may potentially connect with on this site and we make no warranties or
                                guarantees that consumers will qualify for any loan or services. The site’s servicers
                                are void where prohibited.</p>
                            <p class="text-blue" style="text-align: justify; font-size: 14px;">This site receives
                                compensation from the third-party Lenders and financial service providers whose products
                                appear on the site or whose products may be offered to you in the form of a payment for
                                each consumer request (“referral”) we pass to them. This compensation may impact what
                                offers you receive from Lenders and how or where products appear on this site. This site
                                does not include all Lenders available in the marketplace and you are encouraged to
                                conduct due diligence prior to acceptance of any short-term loan.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="copyrights" class="pb-0">
            <div class="container" style="width: 85%; padding-left: 3rem; padding-right: 3rem; ">
                <div class="row ">
                    <div class="col-md-4 text-center text-md-start">
                        <p>
                            <EmailForm color="#555555"></EmailForm>
                        </p>
                    </div>
                    <div class="col-md-8 text-center text-md-end">
                        <p>© All Rights Reserved by {{ app_name }}.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
    data() {
        return {
            app_name: document.querySelector('title').text,
            logoFooterSrc: siteSettings.elements.EE_footer.CE_footer_logo.src,
            footerBackgroundColor: siteSettings.general.footer_bg_color.value,
            footerButtonColor: siteSettings.general.footer_button_color.value,
            footerTextColor: siteSettings.general.footer_text_color.value,
        }
    },
    computed: {
        logoSource() {
            return this.logoSrc;
        },
        footerColors() {
            return {
                '--footer-background-color': this.footerBackgroundColor,
                '--footer-button-color': this.footerButtonColor,
                'color': this.footerTextColor,
            }
        },
    },
    mounted() {

    },
    methods: {
        removeRefillData() {
            this.$cookies.remove('customerDataMain');
        }
    }
};
</script>

<style lang="scss" scoped>
    @import "../../sass/footer.scss";
</style>
