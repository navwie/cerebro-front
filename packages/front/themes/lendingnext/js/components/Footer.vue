<template>
    <div class="container">
        <section id="EE_footer" class="GSC_footer footer" :style="mainColorStyle">
            <div class="row footer-menu zi-6">
                <div class="col-lg-10 col-12">
                    <div class="row">
                        <div class="col-12 d-flex flex-wrap justify-content-start">
                            <a href="/terms" class="nav-link text-nowrap me-3 mb-2 hidded activ e">Terms of service</a>
                            <a href="/privacy" class="nav-link text-nowrap me-3 mb-2 hidded activ e">Privacy Policy</a>
                            <a href="/ccpa" class="nav-link text-nowrap me-3 mb-2 hidded activ e">CCPA-Don't Sell Info</a>
                            <a href="/credit_disclosure" class="nav-link text-nowrap me-3 mb-2 hidded activ e">Credit Disclosure</a>
                            <a href="/econsent" class="nav-link text-nowrap me-3 mb-2 hidded activ e">E-Consent</a>
                            <a href="/unsubscribe" class="nav-link text-nowrap me-3 mb-2 hidded activ e">Unsubscribe</a>
                        </div>
                        <div class="col-12 d-flex flex-wrap justify-content-start">
                            <a href="/" class="nav-link text-nowrap me-3 mb-2 hidded activ e">Home</a>
                            <a href="/why_choose_us" class="nav-link text-nowrap me-3 mb-2 hidded activ e">Why Choose Us</a>
                            <a href="/how_it_works" class="nav-link text-nowrap me-3 mb-2 hidded activ e">How it Works</a>
                            <a href="/faq" class="nav-link text-nowrap me-3 mb-2 hidded activ e">FAQ</a>
                            <a class="btn btn-get-started text-nowrap mt-2 hidded" href="/form">Get Started</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-12">
                    <a class="navbar-brand d-flex justify-content-end" href="/">
                        <img :src="logoSource" class="CE_footer_logo me-1" alt="logo">
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-12 footer-text">
                    <h2>Important Disclosures</h2>
                    <p>Consumer Disclosure: {{ app_name }} IS NOT A LENDER, DOES NOT BROKER LOANS, AND DOES NOT MAKE CREDIT DECISIONS and therefore, we ultimately have no decision in determining whether you will be approved for a loan by a Lender or receive a financial product from a service provider you may connect with using our services. The operators of this site offer a free infomediary service that will pass the information you affirmatively provide to Lenders, advertisers, networks, and other financial service providers who may secure a loan, financial product, or service for you. The typical short-term loans offered by Lenders which you may connect with on this site are intended to provide temporary financing to resolve immediate financial needs and should not be considered long-term solutions. Providing your information on this site does not guarantee that you will be connected with a third-party Lender or financial service provider or approved for a loan for a specific amount. This site and its operators are not an agents, brokers, or representatives for any third-party Lender or financial service provider and therefore, we do not endorse, recommend, or warrant service or loan product and do not control the rates and fees that third-parties may charge. We highly encourage you to carefully review all terms, conditions, and repayment schedules of any loan offer issued by a third-party Lender prior to accepting or declining a loan and understand that you are never obligated to accept an offer from a Lender. This site has no accountability or knowledge of any loan terms and details you may be presented or agree to with Lenders you may connect with on this site. For questions, information, or concerns regarding your short-term loan, please contact the Lender directly.</p>
                    <p>Since {{ app_name }} is not a Lender or financial service provider, we do not perform credit checks. However, Lenders who receive the information you provide may use it to verify consumer identity and perform credit checks which may impact your credit score. Lenders in our network may perform a credit check before making their decisions using the three major reporting bureaus like, TransUnion, Experian and Equifax, as well as other alternate sources of consumer information. By submitting your information on our site, you affirmatively consent and agree to allow such Lenders to use your information in this manner. It is important to remember that non-payment of loans may impact your credit score negatively if your credit provider chooses to report delinquencies. Residents of some states may not qualify for the loans or financial products offered by the Lenders and service providers they may potentially connect with on this site and we make no warranties or guarantees that consumers will qualify for any loan or services. The site’s servicers are void where prohibited.</p>
                    <p>This site receives compensation from the third-party Lenders and financial service providers whose products appear on the site or whose products may be offered to you in the form of a payment for each consumer request (“referral”) we pass to them. This compensation may impact what offers you receive from Lenders and how or where products appear on this site. This site does not include all Lenders available in the marketplace and you are encouraged to conduct due diligence prior to acceptance of any short-term loan.</p>
                </div>

            </div>
            <div class="row">
                <p class="col-12 copyright">{{ app_name }} - copyright 2023</p>
            </div>

        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            app_name: document.querySelector('title').text,
            logoSrc: siteSettings.elements.EE_footer.CE_footer_logo.src,
            mainColor: siteSettings.general.main_color.value,
            buttonHoverBgColor: siteSettings.general.button_hover_bg_color.value,
            buttonHoverColor: siteSettings.general.button_hover_color.value,
        }
    },
    computed: {
        logoSource() {
            return this.logoSrc;
        },
        mainColorStyle() {
            return {
                '--main-color': this.mainColor,
                '--main-button-hover-bg-color': this.buttonHoverBgColor,
                '--main-button-hover-color': this.buttonHoverColor,
            };
        },
    },
    mounted() {
        this.updateActiveLink();
        window.addEventListener('popstate', this.updateActiveLink);
    },
    destroyed() {
        window.removeEventListener('popstate', this.updateActiveLink);
    },
    methods: {
        updateActiveLink() {
            const links = this.$el.querySelectorAll('a.nav-link');
            links.forEach(link => {
                if (link.getAttribute('href') === window.location.pathname) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        },
        removeRefillData() {
            this.$cookies.remove('customerDataMain');
        }
    }
};

</script>

<style lang="scss" scoped>
@import "../../sass/footer.scss";
</style>
