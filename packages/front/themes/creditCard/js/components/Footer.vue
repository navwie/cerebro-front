<template>
    <footer id="footer" class="bg-white border-width-1 border-f5 block-footer-1">
        <div class="container mt-5 text-justify footer-border-top">
            <div class="footer-widgets-wrap">
                <div class="row col-mb-50">
                    <div class="col-12 col-md-4 col-xl-2">
                        <div class="widget widget_links clearfix text-blue" style="font-weight: bold;">
                            <ul class="one-page-menu">
                                <li><a href="#disclosures">Advertiser Disclosures</a></li>
                                <li><a href="/privacy">Privacy Policy</a></li>
                                <li><a href="/econsent">E-Consent</a></li>
                                <li><a href="/terms">Terms of Service</a></li>
                                <li><a href="/unsubscribe">Unsubscribe</a></li>
                            </ul>
                        </div>
                        <div class="LogoFooter mt-4 mb-4">
                            <img :src="logo" :alt="app_name + 'Logo'" width="210">
                        </div>
                    </div>
                    <div class="col-12 col-md-8 col-xl-10">
                        <div id="disclosures"  class="widget clearfix">
                            <p style="text-align: justify; font-size: 14px; color: #424243"><b>Marketer Disclaimer.</b> This website, and its owners and operators (“we,” or “website”),
                                are independent marketers who provide advertising services, including comparison services for credit card offers on behalf of
                                third-party companies. We are not a credit card company and do not offer credit cards or determine creditworthiness.
                                The credit card offers and financial products appearing on and throughout this website are from third-party credit
                                card companies from which we may receive compensation. This specific compensation may impact how and in which places
                                financial products appear on this website, such as the order in which they are presented to you. The credit card
                                offers and financial products appearing on this website do not include all credit card companies and credit card
                                offers which may be available to you and you are encourage to conduct further research on which financial
                                products best meet your specific needs. Upon submitting your information on or through a form appearing on this
                                website, you may be redirected to a third-party credit card company’s website or contacted by the third-party credit
                                card company. We encourage you to review the third-party company’s privacy practices and information
                                collection and sharing practices as they will differ substantially from this website. We are not affiliated with
                                these third-party companies other than what has been described above.</p>
                            <p style="text-align: justify; font-size: 14px; color: #424243">
                                This website does not recommend or endorse any specific credit card offer, credit product, or financial service which may
                                be presented to you on this website. We make no warranties, guarantees, or representations that you will be able to
                                qualify for any of the credit card products or financial services presented on this website by third-party companies.
                                Nothing on this website is intended to be construed as financial advice and we do not make any guarantees to the
                                accuracy or completeness of the information presented. The services provided on this website are void where prohibited.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="copyrights" class="pb-0">
            <div class="container " style="width: 85%; padding-left: 3rem; padding-right: 3rem; ">
                <div class="row ">
                    <div class="col-md-4 text-center text-md-start">
                        <p>
                            <EmailForm color="#4B4B4B"></EmailForm>
                        </p>
                    </div>
                    <div class="col-md-8 text-center text-md-end">
                        <p>© {{ year }} All Rights Reserved by {{ app_name }}.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
    props: {
        year: Number,
    },
    data() {
        return {
            app_name: document.querySelector('meta[name="title"]').content,
            logo: document.querySelector('meta[name="logo"]').content,
        }
    },
    computed: {
        logoSource() {
            return this.logoSrc;
        },
    },
    mounted() {

    },
};
</script>
