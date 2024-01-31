<template>
    <div class="GSC_main" :style="mainColors">
        <div class="container">
            <section class="page-section">
                <div class="row">
                    <div class="col">
                        <GreenLabel :title="'HOW IT WORKS'" :color="'var(--main-color)'"/>
                    </div>
                </div>
                <WhiteBlock 
                    :title="'We Connect <br>Customers To The <br>Funds They Need.'" 
                    :description="'And we do it by working with a network of lender and advertisers across the nation.'" 
                    :img="'./img/HW-1.png'" 
                    :isCombined="true"/>
                <h2 class="mt-120 ml-13 fs-35">Smart, simple loans for your brighter future.</h2>
                <div class="row grey-card-block">
                    <div class="col-md-4 d-flex">
                        <!-- Step 1 -->
                        <div class="card flex-fill d-flex">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title d-flex align-items-center justify-content-between">
                                    <span class="left">1.</span>
                                    <span class="middle">Fill out our secure form</span>
                                    <span class="right">
                                        <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="angle-right">
                                                <path id="Vector" d="M22.7437 13.645L16.103 20.2856C15.644 20.7446 14.9019 20.7446 14.4478 20.2856L13.3442 19.1821C12.8853 18.7231 12.8853 17.981 13.3442 17.5269L18.0513 12.8198L13.3442 8.11279C12.8853 7.65381 12.8853 6.91162 13.3442 6.45752L14.4429 5.34424C14.9019 4.88525 15.644 4.88525 16.0981 5.34424L22.7388 11.9849C23.2026 12.4438 23.2026 13.186 22.7437 13.645Z" fill="white" />
                                            </g>
                                        </svg>
                                    </span>
                                </h5>
                                <p class="card-text">Tell us a little about yourself and your coverage needs.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 d-flex">
                        <!-- Step 2 -->
                        <div class="card flex-fill d-flex">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title d-flex align-items-center justify-content-between"><span class="left">2.</span>
                                    <span class="middle">Connect with an agent </span>
                                    <span class="right">
                                        <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="angle-right">
                                                <path id="Vector" d="M22.7437 13.645L16.103 20.2856C15.644 20.7446 14.9019 20.7446 14.4478 20.2856L13.3442 19.1821C12.8853 18.7231 12.8853 17.981 13.3442 17.5269L18.0513 12.8198L13.3442 8.11279C12.8853 7.65381 12.8853 6.91162 13.3442 6.45752L14.4429 5.34424C14.9019 4.88525 15.644 4.88525 16.0981 5.34424L22.7388 11.9849C23.2026 12.4438 23.2026 13.186 22.7437 13.645Z" fill="white" />
                                            </g>
                                        </svg>
                                    </span>
                                </h5>
                                <p class="card-text">Our unbiased professionals show you side-by-side quotes from top providers for free.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 d-flex">
                        <!-- Step 3 -->
                        <div class="card flex-fill d-flex">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title d-flex align-items-center justify-content-between"><span class="left">3.</span>
                                    <span class="middle">Start saving money </span>
                                    <span class="right">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="piggy-bank" clip-path="url(#clip0_0_1146)">
                                                <path id="Vector" d="M24.3056 11.1111H23.0252C22.6432 10.2431 22.0877 9.47485 21.4019 8.83249L22.2222 5.55558H20.8333C19.5573 5.55558 18.4288 6.14152 17.6649 7.0443C17.3351 6.99655 17.0095 6.94447 16.6667 6.94447H11.1111C7.75173 6.94447 4.95225 9.33162 4.30555 12.5H2.43055C1.78819 12.5 1.28038 11.9141 1.41059 11.25C1.50607 10.7552 1.97048 10.4167 2.47396 10.4167H2.51736C2.66059 10.4167 2.77778 10.2995 2.77778 10.1563V9.28822C2.77778 9.14499 2.66059 9.0278 2.51736 9.0278C1.28038 9.0278 0.177949 9.91322 0.0216995 11.1372C-0.169273 12.6216 0.985241 13.8889 2.43055 13.8889H4.16666C4.16666 16.1545 5.2691 18.1467 6.94444 19.4141V22.9167C6.94444 23.2986 7.25694 23.6111 7.63889 23.6111H10.4167C10.7986 23.6111 11.1111 23.2986 11.1111 22.9167V20.8334H16.6667V22.9167C16.6667 23.2986 16.9792 23.6111 17.3611 23.6111H20.1389C20.5208 23.6111 20.8333 23.2986 20.8333 22.9167V19.4141C21.3455 19.0278 21.8012 18.5721 22.1918 18.0556H24.3056C24.6875 18.0556 25 17.7431 25 17.3611V11.8056C25 11.4236 24.6875 11.1111 24.3056 11.1111ZM18.75 13.8889C18.3681 13.8889 18.0556 13.5764 18.0556 13.1945C18.0556 12.8125 18.3681 12.5 18.75 12.5C19.1319 12.5 19.4444 12.8125 19.4444 13.1945C19.4444 13.5764 19.1319 13.8889 18.75 13.8889ZM11.1111 5.55558H16.6667C16.901 5.55558 17.1311 5.57294 17.3568 5.5903C17.3568 5.57728 17.3611 5.5686 17.3611 5.55558C17.3611 3.25524 15.4948 1.38892 13.1944 1.38892C10.8941 1.38892 9.02778 3.25524 9.02778 5.55558C9.02778 5.64673 9.04948 5.73353 9.05382 5.82468C9.71354 5.65541 10.3993 5.55558 11.1111 5.55558Z" fill="white"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_0_1146">
                                                <rect width="25" height="25" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </h5>
                                <p class="card-text">Get your plan, get paid for unused coverage, save money for the important things in life.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row personal-loan">
                    <div class="col-md-6 col-12 text-container">
                        <h2>Do I qualify for a personal loan?</h2>
                        <p>The lenders who participate in our referral service will have their own criteria to determine whether an applicant is eligible for a loan, but there are general requirements borrowers must meet to qualify: You must:</p>
                        <ul>
                            <li>Be 18 years or older</li>
                            <li>Have a valid Social Security number</li>
                            <li>Be a U.S. citizen or permanent resident</li>
                            <li>Have a steady source of income</li>
                            <li>Have a valid bank account for deposits and repayment</li>
                            <li>Have a valid telephone number and email address</li>
                        </ul>
                        <GetStartedButton :width="'100%'" :text="'Check If I Qualify'" />
                    </div>
                    <div class="col-md-6 col-12 image-container">
                        <!-- <img :src="'./img/hero.jpg'" /> -->
                    </div>
                </div>
                <p class="text1">Understanding Personal Loans</p>
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
                                         <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 34 34" fill="none">
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
import GetStartedButton from '../components/GetStartedButton.vue'
import { Collapse } from "vue-collapsed";

export default {
    name: "HowItWorks",
    components: {
        GreenLabel,
        BrownBlock,
        WhiteBlock,
        GetStartedButton,
        Collapse
    },
    data() {

        const metaContents = {
            mainColor: siteSettings.general.main_color.value, 
            buttonHoverBgColor: siteSettings.general.button_hover_bg_color.value,
            buttonHoverColor: siteSettings.general.button_hover_color.value,
            linkColor: siteSettings.general.link_color.value,
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
                '--link-color': this.linkColor
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