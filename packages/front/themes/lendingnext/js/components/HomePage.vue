<template>
    <div class="GSC_main" :style="mainColors">
        <section id="EE_hero" class="loans-section container" :style="heroStyle">
            <div class="row">
                <div class="col-lg-8">
                    <div class="texts">
                        <h1 class="CE_hero_h1 title">REQUEST LOANS </h1>
                        <h2 class="CE_hero_h2 sub-title">THE FUNDS YOU WANT FAST.</h2><br>
                        <h3 class="CE_hero_h3 description"> FROM <span class="green">$100 - $5,000</span>. ONLY MOMENTS AWAY.</h3><br>
                        <a href="/form" class="btn btn-success get-started"> Get Started&nbsp;&nbsp;
                            <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Polygon 1" d="M9.36246 6.77187C9.84505 7.1708 9.8465 7.91006 9.36548 8.31087L1.98899 14.4574C1.33836 14.9995 0.350501 14.538 0.348842 13.6911L0.324819 1.42703C0.32316 0.580135 1.3092 0.114732 1.96195 0.65432L9.36246 6.77187Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="CE_hero hero" :style="heroStyle2">&nbsp;</div>
                </div>
            </div>
        </section>
        <section class="how-it-works container" id="EE_hiw">
            <div class="row">
                <div class="col">
                    <GreenLabel :title="'How It Works'" :color="'#4b4b4b'" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="card relative h-100">
                        <div class="card-body">
                            <h5 class="card-title">Submit An Online Request.</h5>
                            <p class="card-text">Simply complete a safe and secure online loan request form that usually takes less than five minutes to submit with your information.</p>
                        </div>
                        
                        <div class="image-wrapper">
                            <img :src="howItWorks1" class="CE_pic1 card-img" alt="Submit An Online Request.">
                        </div>
                        <div class="green-cube">1</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card h-100 ">
                        <div class="card-body">
                            <h5 class="card-title">Get Connected With A Lender.</h5>
                            <p class="card-text">In minutes, you may be connected to a reputable lender in our network for loan offers of up to $5,000.</p>
                        </div>
                            
                        <div class="image-wrapper">
                            <img :src="howItWorks2" class="CE_pic2 card-img" alt="Get Connected With A Lender.">
                        </div>
                        <div class="green-cube">2</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card h-100 ">
                        <div class="card-body">
                            <h5 class="card-title">Review Loan Offer.</h5>
                            <p class="card-text">Your lender will contact you immediately to present any loan offer and loan related terms and conditions for you to carefully review. You are encouraged to thoroughly review all information provided by your lender and are free to accept at your discretion.</p>
                        </div>
                           
                        <div class="image-wrapper">
                            <img :src="howItWorks3" class="CE_pic3 card-img" alt="Review Loan Offer.">
                        </div>
                         <div class="green-cube">3</div>
                        
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title w-100">Get Funded!</h5>
                            <p class="card-text">Upon agreeing to loan terms with your lender, funds may be transferred to your bank account within the next business day upon lender approval. Time periods may vary between lenders for issuing loans and you are encouraged to reach out to them directly!</p>
                        </div>
                            
                        <div class="image-wrapper">
                            <img :src="howItWorks4" class="CE_pic4 card-img" alt="Get Funded!">
                        </div>
                        <div class="green-cube">4</div>
                    </div>
                </div>
            </div>
        </section>
        <section class="faq container" id="faq">
            <div class="row">
                <div class="col">
                    <GreenLabel :title="'FAQ'" :color="'#4b4b4b'" />
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
                                    <!-- <img :src="logoSource" class="accordion-image" alt="logoSource"> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                        <path d="M29.6769 10.7246C24.7163 1.92578 10.1667 0 10.1667 0C10.1667 0 16.8804 7.33125 8.30068 13.1285C2.87529 16.7875 0.730372 21.5422 3.05459 26.7352C4.83428 30.7129 8.59951 32.3332 12.6569 32.9375C10.7179 29.2785 12.2187 24.8094 12.3847 24.3312C16.1765 30.0688 23.3417 24.3312 19.7425 18.0957C24.4573 19.1184 25.1612 27.2996 21.5421 32.4062C26.8878 30.7262 30.4472 26.5027 31.4233 22.7375C32.4526 18.7996 31.669 14.2441 29.6769 10.7246Z" fill="#3A3A3A" />
                                    </svg>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
        </section>
        <section id="EE_wu" class="why-choose-us container" :style="whyUsBgStyle">
            <div class="container">
                <div class="row">
                    <div class="col zi-5">
                        <GreenLabel :title="'Why Choose Us'" :color="'#fff'" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4 zi-5 mb-33">
                        <div class="CE_card card h-100 d-flex flex-column scaled-card">
                            <div class="card-body">
                                <h5 class="CE_text card-title">Fast</h5>
                                <p class="CE_text card-text">Tired of waiting for days or even weeks for your money? Our online request process is quick and easy, which means you can connect with lenders and get funded in no time.</p>
                            </div>
                            <img :src="whyUsEasy" class="CE_easy card-img-top mx-auto d-block" alt="...">
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 zi-5 mb-33">
                        <div class="CE_card card h-100 d-flex flex-column scaled-card">
                            <div class="card-body">
                                <h5 class="CE_text card-title">Easy</h5>
                                <p class="CE_text card-text">Our online process is simple can be completed usually within five minutes, which means you may connect with our network of lenders easily online.</p>
                            </div>
                            <img :src="whyUsFast" class="CE_fast card-img-top mx-auto d-block" alt="...">
                        </div>
                    </div>
                    <div class="col-12 col-md-12 col-lg-4 zi-5 mb-33">
                        <div class="CE_card card h-100 d-flex flex-column scaled-card">
                            <div class="card-body">
                                <h5 class="CE_text card-title">Secure</h5>
                                <p class="CE_text card-text">Concerned about security? Worry not. With the use of 256bit SSL/TLS technology, your information will be secure.</p>
                            </div>
                            <img :src="whyUsSecure" class="CE_secure card-img-top mx-auto d-block" alt="...">
                        </div>
                    </div>
                </div>
                <div class="separator zi-6 mt-100 mb-100"></div>
                <div class="row">
                    <div class="col-10 col-lg-7 mt-0 zi-5">
                        <h2 class="CE_h2 big-text">SOLVE YOUR FINANCIAL EMERGENCY QUICKLY USING OUR EASY TO USE FORM</h2>
                    </div>
                    <div class="col-2 col-lg-5 mh-0">
                    </div>
                    <div class="col-12 mh-0">
                        <img class="CE_safe hero-1" :src="whyUsBg2" alt="whyUs">
                    </div>
                </div>
                <a href="/form" class="btn get-started zi-5"> Get Started <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Polygon 1" d="M9.36246 6.77187C9.84505 7.1708 9.8465 7.91006 9.36548 8.31087L1.98899 14.4574C1.33836 14.9995 0.350501 14.538 0.348842 13.6911L0.324819 1.42703C0.32316 0.580135 1.3092 0.114732 1.96195 0.65432L9.36246 6.77187Z" fill="white" />
                    </svg>
                </a>
            </div>
        </section>
    </div>
</template>

<script>
import GreenLabel from "../components/GreenLabel.vue"
import { handleGetParams, countVisitor, mountedHomePage } from "../../../common/js/commonGeneral";

export default {
    name: "HomePage",
    components: {
        GreenLabel,
    },
    data() {
        
        const metaContents = {
            token: document.querySelector('meta[name="form-token"]').content,
            heroImage: siteSettings.elements.EE_hero['background-image'],
            heroImage2: siteSettings.elements.EE_hero.CE_hero['background-image'],
            whyUsEasy: siteSettings.elements.EE_wu.CE_easy['src'],
            whyUsFast: siteSettings.elements.EE_wu.CE_fast['src'],
            whyUsSecure: siteSettings.elements.EE_wu.CE_secure['src'],
            whyUsBg: siteSettings.elements.EE_wu['background-image'],
            whyUsBg2: siteSettings.elements.EE_wu.CE_safe['src'],
            whyUsBGcolor: siteSettings.general.mobile_menu_bg_color.value,
            whyUsTextColor: siteSettings.elements.EE_wu.CE_h2['color'],
            whyUsCardsTextColor: siteSettings.elements.EE_wu.CE_text['color'],
            whyUsCardsBgColor: siteSettings.elements.EE_wu.CE_card['background-color'],
            headerBGcolor: siteSettings.elements.EE_header['background-color'],
            headerTextColor: siteSettings.elements.EE_header['color'],
            howItWorks1: siteSettings.elements.EE_hiw.CE_pic1['src'],
            howItWorks2: siteSettings.elements.EE_hiw.CE_pic2['src'],
            howItWorks3: siteSettings.elements.EE_hiw.CE_pic3['src'],
            howItWorks4: siteSettings.elements.EE_hiw.CE_pic4['src'],
            buttonColor: siteSettings.general.main_button_color.value,
            buttonColorSecond: siteSettings.general.second_button_color.value,
            mainColor: siteSettings.general.main_color.value,
            linkColor: siteSettings.general.link_color.value,
            buttonHoverBgColor: siteSettings.general.button_hover_bg_color.value,
            buttonHoverColor: siteSettings.general.button_hover_color.value,
        };

        return {
            ...metaContents,
            questions: this.getQuestions(),
            app_name: document.querySelector('title').text,
            handleScroll: null,
            isMobileDevice: null,
        };
    },

    computed: {
        
        logoSource() {
            return this.logoSrc;
        },
        heroStyle() {
            return this.generateBackgroundStyle(this.heroImage, 'cover');
        },
        heroStyle2() {
            return this.generateBackgroundStyle(this.heroImage2, 'contain');
        },
        whyUsBgStyle() {
            return this.generateBackgroundStyle(this.whyUsBg, 'cover');
        },
        mainColors() {
            
            return {
                '--main-color': this.mainColor,
                '--main-button-color': this.buttonColor,
                '--link-color': this.linkColor,
                '--why-us-bg-color': this.whyUsBGcolor,
                '--why-us-text-color': this.whyUsTextColor,
                '--why-us-cards-text-color': this.whyUsCardsTextColor,
                '--why-us-cards-bg-color': this.whyUsCardsBgColor,
                '--header-bg-color': this.headerBGcolor,
                '--header-text-color': this.headerTextColor,
                '--button-color': this.buttonColor,
                '--button-color-second': this.buttonColorSecond,
                '--mobile-menu-bg-color': this.whyUsBGcolor,
                '--main-button-hover-bg-color': this.buttonHoverBgColor,
                '--main-button-hover-color': this.buttonHoverColor,
            };
        },
    },

    methods: {
        getMetaContent(name) {
            return document.querySelector(`meta[name="${name}"]`)?.content;
        },
        generateBackgroundStyle(url, size) {
            return {
                'background-image': `${url}`,
                'background-size': size,
                'background-repeat': 'no-repeat',
                'background-position': 'center center',
            };
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
        removeRefillData() {
            this.$cookies.remove('customerState');
            this.$cookies.remove('customerDataMain');
        },
    },

    async mounted() {
        await handleGetParams(this);
        await countVisitor(this);
        mountedHomePage(this);
        
        this.isMobileDevice = () => {
            return 'ontouchstart' in window || navigator.maxTouchPoints;
        };

        this.handleScroll = () => {
            const imageWrappers = this.$el.querySelectorAll('.image-wrapper');

            imageWrappers.forEach(wrapper => {
                const rect = wrapper.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    wrapper.classList.add('hover-effect');
                } else {
                    wrapper.classList.remove('hover-effect');
                }
            });

            const cards = this.$el.querySelectorAll('.scaled-card');
            
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    card.classList.add('scale-effect');
                } else {
                    card.classList.remove('scale-effect');
                }
            });
        };

        if (this.isMobileDevice()) {
            window.addEventListener('scroll', this.handleScroll);
        }
    },

    unmounted() {
        if (this.isMobileDevice()) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
};

</script>

<style lang="scss" scoped>
@import "../../sass/home.scss";
@import "../../sass/accordion.scss";
</style>
