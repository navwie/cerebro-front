<template>
    <section class="GSC_credit" :style="mainColor">
        <h2 class="mb-5 d-flex justify-content-between align-items-center">
            Credit Disclosure
            <svg type="button" data-bs-dismiss="modal" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8516 8.59375L16.7378 3.70752C17.3374 3.10791 17.3374 2.13574 16.7378 1.53564L15.6519 0.449707C15.0522 -0.149902 14.0801 -0.149902 13.48 0.449707L8.59375 5.33594L3.70752 0.449707C3.10791 -0.149902 2.13574 -0.149902 1.53564 0.449707L0.449707 1.53564C-0.149902 2.13525 -0.149902 3.10742 0.449707 3.70752L5.33594 8.59375L0.449707 13.48C-0.149902 14.0796 -0.149902 15.0518 0.449707 15.6519L1.53564 16.7378C2.13525 17.3374 3.10791 17.3374 3.70752 16.7378L8.59375 11.8516L13.48 16.7378C14.0796 17.3374 15.0522 17.3374 15.6519 16.7378L16.7378 15.6519C17.3374 15.0522 17.3374 14.0801 16.7378 13.48L11.8516 8.59375Z" fill="#4B4B4B"/>
            </svg>
        </h2>
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
    </section>
</template>

<script>
export default {
    name: "CreditDisclosure",
    data() {
        return {
            mainButtonColor: siteSettings.general.main_button_color.value,
            mainColor: siteSettings.general.main_color.value,
        };
    },
    props: {
        user: Object,
    },
    computed: {
        mainColor() {
            return {
                '--main-color': this.mainColor,
                '--main-button-color': this.mainButtonColor,
            };
        },
    },
}
</script>
