<template>
    <section class="GSC_cdisclosure d-none d-sm-block" id="page-title" :style="mainColor">
        <div class="row d-flex justify-content-around w-100">
            <div style="width: calc(100% - 250px);">
                <h1>Credit Disclosure</h1>
            </div>
            <div style="width:250px">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active text-gray" aria-current="page">Credit Disclosure</li>
                </ol>
            </div>
        </div>
    </section>
    <section id="content" :style="mainColor">
        <div class="content-wrap">
            <div class="container" style="padding-left: 3rem;
                padding-right: 3rem;">
                <div class="row col-mb-50">
                    <div class="col-12">
                        <p>
                            This site is not a lender and we do not perform credit checks or secure credit
                            reports since we do not make credit decisions or offer loans. The operators of this site
                            offer a free infomediary service that simply passes the information you affirmatively
                            provide to Lenders, advertisers, and other financial service providers who may secure a
                            loan, financial product, or service for you. However, the Lenders who receive the
                            information you affirmatively provide on this site may use your information to verify
                            consumer identity and perform credit checks which may impact your credit score. Lenders
                            in
                            our network may perform a credit checks or secure your credit score before making their
                            decision to offer you a loan by using the three major reporting bureaus like,
                            TransUnion,
                            Experian and Equifax, as well as other alternate sources of consumer information. By
                            submitting your loan request on this site, you are providing express written consent and
                            authorization under the Fair Credit Reporting Act to allow such Lenders and
                            third-parties to
                            use your information in this manner (to obtain credit reports, credit scores, or other
                            information from any consumer reporting agency). It is important to remember that
                            non-payment of loans may impact your credit score negatively if your Lender or credit
                            provider chooses to report delinquencies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CreditDisclosure",
    data() {
        return {
            mainColor: siteSettings.general.main_color.value,
            buttonColor: siteSettings.general.main_button_color.value,
            buttonHoverBgColor: siteSettings.general.button_hover_bg_color.value,
            buttonHoverColor: siteSettings.general.button_hover_color.value,
        };
    },
    computed: {
        mainColor() {
            return {
                '--main-color': this.mainColor,
                '--main-button-color': this.buttonColor,
                '--main-button-hover-bg-color': this.buttonHoverBgColor,
                '--main-button-hover-color': this.buttonHoverColor,
            };
        },
    },
}
</script>

<style lang="scss" scoped>
    @import "../../sass/pages.scss";
</style>
