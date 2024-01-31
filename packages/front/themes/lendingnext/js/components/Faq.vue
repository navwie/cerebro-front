<template>
    <div class="GSC_main" :style="mainColors">
        <div class="container">
            <section class="page-section">
                <div class="row">
                    <div class="col">
                        <GreenLabel :title="'FAQ'" :color="'var(--main-color)'" />
                    </div>
                </div>
                <WhiteBlock 
                    :title="'Got Questions? We have the Answers!'" 
                    :description="'If you have any further questions, please contact us here.'" 
                    :img="'./img/qa-1.png'" 
                    :isCombined="true"
                />
                <div class="row">
                    <div class="col">
                        <GreenLabel :title="'FAQ'" />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="accordion-btn" v-for="(question, index) in questions" :key="question.title" type="button" @click="() => handleAccordion(index)">
                            <div class="my-accordion-title d-flex justify-content-between">
                                <span class="pe-5">
                                    {{ question.title }}
                                </span>
                                <div class="position-relative">
                                    <div class="vl"></div>
                                    <svg class="myAccordionIcon" :class="{ myAccordionIconCollapse: questions[index].isExpanded }" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.41421 0.5C0.523309 0.5 0.0771421 1.57714 0.707107 2.20711L7.29289 8.79289C7.68342 9.18342 8.31658 9.18342 8.70711 8.79289L15.2929 2.2071C15.9229 1.57714 15.4767 0.5 14.5858 0.5H1.41421Z" fill="#4B4B4B" />
                                    </svg>
                                </div>
                            </div>
                            <Collapse :when="questions[index].isExpanded" class="my-collapse">
                                <div class="row">
                                    <div class="col-10">
                                        <p class="my-accordion-text">
                                            {{ question.answer }}
                                        </p>
                                    </div>
                                    <div class="col-2 d-flex justify-content-center align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                        <path d="M29.6769 10.7246C24.7163 1.92578 10.1667 0 10.1667 0C10.1667 0 16.8804 7.33125 8.30068 13.1285C2.87529 16.7875 0.730372 21.5422 3.05459 26.7352C4.83428 30.7129 8.59951 32.3332 12.6569 32.9375C10.7179 29.2785 12.2187 24.8094 12.3847 24.3312C16.1765 30.0688 23.3417 24.3312 19.7425 18.0957C24.4573 19.1184 25.1612 27.2996 21.5421 32.4062C26.8878 30.7262 30.4472 26.5027 31.4233 22.7375C32.4526 18.7996 31.669 14.2441 29.6769 10.7246Z" fill="#3A3A3A"/>
                                        </svg>
                                    </div>
                                </div>
                            </Collapse>
                        </div>
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
import {Collapse} from "vue-collapsed";

export default {
    name: "Faq",
    components: {
        GreenLabel,
        BrownBlock,
        WhiteBlock,
        Collapse
    },
    data() {
        const metaContents = {
            mainColor: siteSettings.general.main_color.value,
            buttonHoverBgColor: siteSettings.general.button_hover_bg_color.value,
            buttonHoverColor: siteSettings.general.button_hover_color.value,
        }
        return {
            ...metaContents, 
            questions: this.getQuestions(),
        };
    },
    computed: {
        mainColors() {
            return {
                '--main-color': this.mainColor,
                '--main-button-hover-bg-color': this.buttonHoverBgColor,
                '--main-button-hover-color': this.buttonHoverColor,
            };
        },
    },
    mounted() {
        this.mainColor = siteSettings.general.main_color.value
    },
    methods: {
        getMetaContent(name) {
            const element = document.querySelector(`meta[name="${name}"]`);
            return element && element.content ? element.content : '';
        },
        getQuestions() {
            // Question content
            return [
                {
                    title: 'What is a short term loan?',
                    answer: 'Short-term loans such as personal loans or cash advances require no guaranty and provide you with emergency cash for unexpected circumstances. These types of loans are intended to be used only in extraordinary circumstances as repayment periods, rates, and fees tend to differ from more traditional financial products. Those who wish to accept a short-term loan from a lender they may connect with on this website should be responsible in repaying the loan on time. Loan amounts will vary but are typically between $500 and $5,000.',
                    isExpanded: false
                },
                {
                    title: 'Who is lending me money?',
                    answer: 'Our website works with an extensive network of state licensed lenders, tribal lenders, and reputable financial service providers nationwide who may help you secure a loan. Our job is to connect you with these lenders so that you may potentially secure funding. Once connected, lenders will typically reach out to you within minutes to discuss lending options. It is important to remember that this website is not a lender nor do we provide short-term loans but instead pass your information to lenders in our network so that you may be connected to loans and financial products.',
                    isExpanded: false
                },
                {
                    title: 'How does the website work?',
                    answer: 'Upon completing our website’s loan request form and hitting submit, we will pass your information to our network of lenders in an attempt to connect you. If a lender chooses to offer you a loan, they may contact you typically within minutes via email, phone, or text, and present you with the next steps to accept their offer and complete their loan application. At this time, you are encouraged to carefully review all terms of the loan and ask any clarifying questions. You are under no obligation during the process to accept any loan offered and may choose to end the process at your discretion. In the event you are not able to connect with a lender, this website may pass the information you submitted to third-parties who may offer you related financial products.',
                    isExpanded: false
                },
                {
                    title: 'How much does it cost?',
                    answer: 'Using our website’s services to connect with lenders is completely free. You may use this website as often as needed, free of any charges. However, if you are successfully connected with a lender through this site, you may be responsible to the lender for the costs associated with the loan you may potentially receive and those costs and fees are determined solely by the lender. It is important to remember that short-term loans are intended for emergency cash circumstances and often more expensive than more traditional financial products.',
                    isExpanded: false
                },
                {
                    title: 'What are the requirements to submit a loan request?',
                    answer: 'To submit a request on this website to be connected with lenders for short-term loans, you must meet some basic requirements and provide certain information. The lenders in our network seek to view this information so that they may determine your creditworthiness and whether to offer you a loan. We will only pass the sensitive information you provide to us on the loan request form to lenders and financial service providers who offer loans. In order to be eligible to submit a loan request form, you must ensure you are: (i) 18 years or older; (ii) Have a valid social security number; (iii) Be a U.S. citizen or permanent resident; (iv) Have a consistent monthly income source; (v) Own a valid bank account for deposits and repayment; and (vi) Own a valid telephone number and email address. Notwithstanding, each lender in our network may have different rules and regulations to decide if a borrower is eligible for a loan and thus, any final decision pertaining to lending or loans belongs to the lender alone and not us. This website is not a lender and does not make credit decisions or review your information for creditworthiness.',
                    isExpanded: false
                },
                {
                    title: 'Will my credit be pulled and checked?',
                    answer: 'This website does not perform credit checks or pull credit to determine creditworthiness. We are not a lender and do not make any financial decisions. However, the lenders who receive the information you affirmatively provide to us on this website may use your information to verify consumer identity and perform credit checks which may impact your credit score. Lenders in our network may perform a credit checks or secure your credit score before making their decision to offer you a loan by using the three major reporting bureaus like, TransUnion, Experian and Equifax, as well as other alternate sources of consumer information. By submitting your loan request on this website, you are providing express written consent and authorization under the Fair Credit Reporting Act to allow such lenders to use your information in this manner (to obtain credit reports, credit scores, or other information from any consumer reporting agency).',
                    isExpanded: false
                },
                {
                    title: 'What are the lenders potential rates and fees?',
                    answer: 'It is important to remember that our website is not a lender but instead passes consumer’s information from those who submit loan requests on this website to our network of lenders who may provide such loans. Therefore, we are unable to provide you with exact APR (Annual Percentage Rate) that you will be charged for a loan since this is determined solely by the lender you connect with and will vary among different lenders. The loan interest rates are determined only and solely by your lender, with specific amounts determined based upon the information you submitted to the lender. Your lender is required to provide you with the APR, loan fees, and other information.',
                    isExpanded: false
                },
                {
                    title: 'What are the loan repayment terms?',
                    answer: 'This website does not determine loan repayment terms. Loan repayment terms are determined solely by the lender you connect with and are usually scheduled to be made once or twice a month, depending on the terms and conditions of your loan agreement. Understanding the repayment terms of your loan is very important. Each offer has different factors affecting the terms, such as your state of residence, the length of repayment time, or your total amount of the loan. Please reach your lender for further information about your repayment terms and review all repayment information prior to accepting a loan offer.',
                    isExpanded: false
                },
                {
                    title: 'What happensa in the event of a late payment or non payment?',
                    answer: 'As mentioned previously, this website is not a lender and therefore cannot provide any specific information regarding late payment or non-payment. In the case that you are unable to make a payment on time to your lender, you are encouraged to contact your lender immediately. Late payment may result in additional fees depending on your lender’s terms and conditions and your state’s regulations. Reviewing your agreement with the lender to acknowledge the consequences of late payment is highly recommended. Failing to repay your loan can lead to several penalties imposed by lenders, including but not limited to, charges for late payment, forwarding your account to a collection agency, or reporting your lack of payment to a credit bureau which can negatively impact your credit score. It is important to remember that non-payment of loans may impact your credit score negatively if your credit provider chooses to report delinquencies. This website is not a debt collector nor do we engage in any collections. You are encouraged to contact your lender directly in the event of nonpayment.',
                    isExpanded: false
                },
                {
                    title: 'What if i\'m not connected?',
                    answer: 'Lenders in our network will ultimately determine whether you will be offered a loan or are eligible for certain loan products. Our website is not a lender and does not make financial determinations. If you are unable to connect with a lender for a loan on this website, we may offer you the opportunity get connected with other lender networks which provide smaller amounts of up to $1,500. ',
                    isExpanded: false
                }
            ];
        },
        handleAccordion(selectedIndex) {
            this.questions.forEach((question, index) => {
                question.isExpanded = index === selectedIndex ? !question.isExpanded : false;
            });
        },
    }
}
</script>

<style lang="scss" scoped>
@import "../../sass/pages.scss";
@import "../../sass/accordion.scss";
</style>