<template>
    <div class="GSC_main" :style="mainColors">
        <div class="container">
            <section class="page-section">
                <div class="row">
                    <div class="col">
                        <GreenLabel :title="'E-CONSENT'"  :color="'var(--main-color)'"  :extraClass="'roboto'"/>
                    </div>
                </div>
                <div class="row p-8">
                    <div class="col">
                        <p>By providing your information on this site through our forms, you are requesting to be connected with third party Lenders and financial service providers who may secure you a loan or financial service or product. To pass your information to these third-parties or fulfil your loan request, {{ app_name }} and these third parties may potentially be required by law to provide you with specific communications, notices, disclosures, terms, and other materials ("Communications"). Prior to, third party Lenders and financial service providers must first obtain your consent to receive these Communications electronically or in electronic form.</p>
                        <h3>USER CONSENT AND SCOPE OF CONSENT.</h3>
                        <p>By submitting your loan request to be connected with third-party Lenders and financial service providers, you consent and agree to receive all Communications required under law to be disclosed electronically. These Communications may be delivered to you via electronic mail (email) or online at a website designated by a Lender or financial service provider. Further, you acknowledge, agree, and consent that your electronic signature on material documents and agreements has the same effect as if you executed them in ink. The affirmative consent You are providing and set forth herein to receive Communications and conduct business electronically shall apply to the loan request submitted on this site that was intended for the purpose of being connected with third party Lenders and financial service providers who may secure loans or financial products for you. Your consent will also apply to any and all online interactions between You and any third-party Lenders or financial service providers, including but not limited to, interactions conducted via mobile device. To apply for a loan from one of the lenders you may connect with, you agree to receive all information and disclosures regarding your loan electronically. By checking the box below (the “Consent”), you agree that: (1) Any information provided to you in connection with your loan transaction, including, but not limited to, your loan agreement and legally required notices, disclosures and information, will be provided by electronic communication; (2) You may contact the lender directly to: (i) obtain a paper copy of any communication at no charge; (ii) withdraw your Consent to receive information electronically; or (iii) change the e-mail address for receiving electronic communications. There are no conditions, consequences, or fees associated with withdrawing your consent (3) To receive electronic communications in connection with this transaction, you will need a working connection to the Internet. Your browser must support the Secure Sockets Layer (SSL) protection, which provides a secure Internet connection. Netscape 4.7 and above and Microsoft Internet Explorer 5.0 and above support this feature. You will also need either a printer connected to your computer to print electronic communications or sufficient hard drive space available to save the information (e.g., 1 megabyte or more).</p>
                        <h3>USER HARDWARE AND SOFTWARE REQUIREMENTS.</h3>
                        <p>To access, review, and retain Communications electronically from third-party Lenders or financial service providers, you may need the following: (1) A computer with internet access; (2) An email address; (3) A printer or the ability to print the Communications; or (4) A Long term storage device (such as an external hard drive or your computer’s hard drive) to retain a copy of the Communications.</p>
                        <h3>REQUESTING PAPER RECORDS.</h3>
                        <p>You may, at any time, request paper copies of any Communications by contacting the third party Lender or financial service provider you are connected with directly. Since our site is not a lender, credit provider, or engaged in the lending process, we do not have access to Communications between you and your Lender. In most cases, your Lender or financial service provider may provide additional paper copies to you by request, however some Lenders or financial service providers may require a charge for these copies.</p>
                        <h3>WITHDRAWING YOUR CONSENT.</h3>
                        <p>Since your consent is required in order for this site to process your loan request and pass your information to third-party Lenders and financial service providers, your consent may not be withdrawn during the connecting process. Once you have connected with a Lender or financial service provider, you may withdraw your consent to do business electronically directly with those third parties directly.</p>
                        <h3>CONTACT INFORMATION.</h3>
                        <p>It is important to ensure you keep any third party Lender financial service provider you may connect with informed of any changes to your contact information and update them once any changes may occur. To do this, we recommend you reach out to them directly.</p>
                        <p>
                            <smal>LEGAL EFFECT.</smal>
                        </p>
                        <p>BY SUBMITTING YOUR INFORMATION ON THIS SITE, YOU UNEQUIVOCALLY ACKNOWLEDGE, AGREE, AND CONSENT TO THESE TERMS. YOU ACKNOWLEDGE YOU HAVE READ THIS INFORMATION ABOUT ELECTRONIC SIGNATURES, RECORDS, DISCLOSURES, AND DOING BUSINESS ELECTRONICALLY AND UNDERSTAND THE PROVISIONS WITHIN THESE TERMS. YOU CONSENT TO USING ELECTRONIC SIGNATURES, HAVING ALL DISCLOSURES PROVIDED OR MADE AVAILABLE TO YOU IN ELECTRONIC FORM AND TO DOING BUSINESS WITH THE THIRD-PARTY LENDER OR FINANCIAL SERVICE PROVIDER ELECTRONICALLY. YOU ACKNOWLEDGE THAT YOU MAY REQUEST PAPER COPIES OF THE ELECTRONIC RECORDS AND DISCLOSURES. IF YOU REFRAIN FROM USING THIS SITE, THEN YOU NEITHER WISH TO USE ELECTRONIC SIGNATURES NOR CONDUCT THIS TRANSACTION ELECTRONICALLY. LASTLY, YOU ACKNOWLEDGE THAT YOUR CONSENT TO ELECTRONIC DISCLOSURES IS REQUIRED TO RECEIVE THIS SITE’S SERVICES AND POTENTIAL SERVICES FROM THIRD PARTY LENDER OR FINANCIAL SERVICE PROVIDERS OVER THE INTERNET.</p>
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
export default {
    name: "Econsent",
    components: {
        GreenLabel,
        BrownBlock,
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
        this.app_name = document.querySelector('title').text
        this.mainColor = siteSettings.general.main_color.value
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
