<template>
    <div class="GSC_home" :style="mainColor">
        <section id="slider"
                 class="slider-element include-header"
                 style="margin-top: -72px;min-height: max(100vh,800px);">
            <div class="slider-inner h-100" id="EE_hero"
                 :style="heroImage">
                <div class="row position-absolute w-100 h-100 m-0" style="z-index: 3;">
                    <div class="offset-md-1 col-xl-4 col-lg-5 col-md-10 mt-2 mb-4 border-radius formHeaderWrapper" style="background-color: rgba(255, 255, 255, 0.70);
					box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;">
                        <div id="formHeader" class="slider-element-fade">
                            <div class="heading-block border-bottom-0 text-start font-weight-bold  bottommargin-sm" style="max-width: 500px;margin:auto;">
                                <h1 class="CE_hero_h1 fw-bold headerFont1 pb-4 ls0"
                                    style="font-size: 100px; color: var(--main-color); line-height: 0.5;padding-top: 5rem;">GET <br>
                                    <span class="subh1 ls0"
                                          style="font-size: 24px;font-weight: 800;">YOUR PERSONAL LOAN</span>
                                </h1>
                                <h2 style="font-size: 24px;color: var(--main-color);
                                        border-bottom: 2px solid #ffffff80;
                                        padding-bottom: 20px;font-weight: 800;"
                                    class="CE_hero_h2 fw-bold text-capitalize mt-0 headerFont3 ls0">Up To $5,000</h2>
                            </div>
                            <form action="#" class="row starting-form mt-0" style="max-width: 300px;">
                                <div class="input-group" v-bind:class="{'mb-3': !v$.fields.email.$error}">
									<span class="input-group-text bg-white"><i style="    color: #4c4c4c;
										" class="icon-line-mail"></i></span>
                                    <input style="border-radius: 0 5px 5px 0;" type="text" v-model="fields.email"
                                           id="email" class="form-control required form-header-lineHeight" value=""
                                           placeholder="Email Address" autocomplete="on">
                                </div>
                                <p
                                    v-for="error of v$.fields.email.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="email" class="text-left error">{{ error.$message }}</label>
                                </p>
                                <div class="input-group" v-bind:class="{'mb-3': !v$.fields.requested_amount.$error}">
                                    <span class="input-group-text bg-white"><i class="icon-line-dollar-sign"></i></span>
                                    <select style="color: #666666;" class="form-select required valid select-form"
                                            id="step-form-credit-score" v-model="fields.requested_amount"
                                            aria-invalid="false">
                                        <option style="background-color: white;" value="500">$100 - $500</option>
                                        <option style="background-color: white;" value="800">$500 - $1000</option>
                                        <option style="background-color: white;" value="1000">$1000 - $1500</option>
                                        <option style="background-color: white;" value="1500">$1500 - $2000</option>
                                        <option style="background-color: white;" value="2500">$2000 - $3000</option>
                                        <option style="background-color: white;" value="3500">$3000 - $4000</option>
                                        <option style="background-color: white;" value="4500">$4000 - $5000</option>
                                    </select>
                                    <p
                                        v-for="error of v$.fields.requested_amount.$errors"
                                        :key="error.$uid"
                                        class="m-0"
                                    >
                                        <label for="requested_amount" class="text-left error">{{ error.$message }}</label>
                                    </p>
                                </div>
                                <div class="input-group" v-bind:class="{'mb-3': !v$.fields.ssn.$error}">
									<span class="input-group-text bg-white"><i style="    color: #4c4c4c;
										" class="icon-line-lock"></i></span>
                                    <input style="border-radius: 0 5px 5px 0;" type="text" v-model="fields.ssn"
                                           @copy.prevent @paste.prevent @cut.prevent @keypress="onlyDigitsKeypress"
                                           class="form-control required form-header-lineHeight" value=""
                                           placeholder="Last 4 Digits of SSN" maxlength="4" id="ssn">
                                </div>
                                <div id="invalid-ssn" class="d-none"
                                     v-bind:class="{'mt-n3': !v$.fields.ssn.$error}"></div>
                                <p
                                    v-for="error of v$.fields.ssn.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="email" class="text-left error">{{ error.$message }}</label>
                                </p>
                                <div class="col-12 form-group mb-3 px-0">
                                    <span @click="getStarted" style="padding-right: 0px;">
                                        <div class="getStarted-form btn">
                                            Get Started
                                            <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.5 8.36602C12.1667 7.98112 12.1667 7.01888 11.5 6.63398L1.75 1.00481C1.08333 0.619909 0.25 1.10104 0.25 1.87084V13.1292C0.25 13.899 1.08333 14.3801 1.75 13.9952L11.5 8.36602Z" fill="white"/>
                                            </svg>
                                        </div>
                                    </span>
                                </div>
                                <small class="font-weight-light text-black">
                                    By clicking “Get Started”, I consent to the <a href="/privacy"
                                                                                   :style="mainColor">Privacy
                                    Policy</a>,
                                    <a href="/terms" :style="mainColor">Terms of Use</a>,<a
                                    href="/credit_disclosure" :style="mainColor"> Credit
                                    Disclosure</a>,
                                    and <a href="/econsent" :style="mainColor">E-Consent</a>.
                                </small>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="content2">
            <div class="content-wrap py-0">
                <div id="EE_hiw" style="background-color: #f6f6f6; border-top: 4px solid #e9e9e9;  min-height: calc(100vh - 80px);padding:5rem 0;">
                    <div id="hiw" class="container">
                        <div class="heading-block mw-xs mx-auto  text-center mb-6">
                            <h2 class="CE_h2 nott ls0 text-blue" style="font-size: 40px; font-weight: 700;">How It
                                Works?</h2><span
                            class="CE_sublabel SubTitle">it works perfectly!</span>
                        </div>
                        <div class="services-grid gutter-30 position-relative">
                            <div class="row" style="min-height: 376.188px;">
                                <div class="w-lg-30 col-md-12 d-flex align-self-stretch p-0 mb-2">
                                    <div class="CE_card_bg feature-box flex-column h-shadow mx-0  p-3"
                                         style="background-color: #f6f6f6; background-image: linear-gradient(#ffffff, #ffffff)">
                                        <div class="fbox-icon mb-4 d-flex w-100">
                                            <i class="CE_card_num">1</i>
                                            <h3 class="CE_card_h3 font-body ls0 nott text-blue ms-4" style="font-size: 22px;">
                                                Submit A Request</h3>
                                        </div>
                                        <div class="fbox-content">
                                            <p class="CE_card_p">All paperwork is gone! The whole process
                                                is completely online. Just fill in a few details
                                                about yourself and hit “Get Started”!</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col d-none d-lg-flex text-center align-self-center flex-column p-0" style="width: 5%">
                                    <i class="CE_card_arrow d-block h-translate-x-n all-ts icon-double-angle-right icon-stacked rounded-pill  ps-1 icon-2x"></i>
                                </div>
                                <div class="w-lg-30 col-md-12 d-flex align-self-stretch p-0 mb-2">
                                    <div class="CE_card_bg feature-box flex-column h-shadow mx-0 p-3"
                                         style="background-color: #f6f6f6;background-image: linear-gradient(#ffffff, #ffffff)">
                                        <div class="fbox-icon mb-4 d-flex w-100">
                                            <i class="CE_card_num">2</i>
                                            <h3 class="CE_card_h3 font-body ms-4 ls0 nott text-blue"
                                                style="font-size: 22px;">Check The Offers</h3>
                                        </div>
                                        <div class="fbox-content">

                                            <p class="CE_card_p">If the offer suits your needs and desires, and
                                                you agree with all the terms — simply e-sign
                                                the deal and get ready to enjoy the money!</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col d-none d-lg-flex text-center align-self-center flex-column p-0" style="width: 5%">
                                    <i class="CE_card_arrow d-block h-translate-x-n all-ts icon-double-angle-right icon-stacked rounded-pill ps-1 icon-2x"></i>
                                </div>
                                <div class="w-lg-30 col-md-12 d-flex align-self-stretch p-0 mb-2 ">
                                    <div class="CE_card_bg feature-box flex-column h-shadow mx-0 p-3"
                                         style="background-color: #f6f6f6;background-image: linear-gradient(#ffffff, #ffffff)">
                                        <div class=" fbox-icon mb-4 d-flex w-100">
                                            <i class="CE_card_num">3</i>
                                            <h3 class="CE_card_h3 font-body ms-4 ls0 nott text-blue" style="font-size: 22px;">
                                                Receive Your Money</h3>
                                        </div>
                                        <div class="fbox-content">
                                            <p class="CE_card_p">Once you submit your request, get your offer,
                                                and e-sign it, you’ll be able to get the funds
                                                to your bank account in no time!</p>
                                            <a href="/form" class="hover-button text-green card-button" @click="removeRefillData" style="text-decoration:none; ">
                                                Get Started Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="EE_wu" class="page-section pt-0 pb-0" :style="whyUsBG">
                    <div class="section bg-transparent">
                        <div id="whyus">
                            <div class="row align-items-center mx-3 mx-md-6">
                                <div class="col-lg-7 col-xl-5 col-md-6 mb-4 mb-md-0 d-lg-block d-none">
                                </div>
                                <div class="col-lg-5 col-md-12 col-xl-6 offset-xl-1" style="
                                             background-color: rgba(255, 255, 255, 0.70);
                                             border-radius: 5px;
                                             padding: 32px;
								        ">
                                    <div class="heading-block border-bottom-0 mb-4">
                                        <h2 class="CE_h2 nott ls0 mb-4 text-blue" id="" style="font-size: 40px; font-weight: 700;">
                                            Why Us?</h2>
                                        <h3 class="h3 d-flex justify-content-start" style="letter-spacing: 0px!important;
										font-size: 14px!important;
										font-weight: bold!important;">
                                            <span class="CE_sublabel whyus-subtitle"
                                                  style="text-transform: none;">Fast</span>
                                            <span class="CE_sublabel whyus-subtitle"
                                                  style="text-transform: none">Reliable</span>
                                            <span class="CE_sublabel whyus-subtitle"
                                                  style="text-transform: none">Transparent</span>
                                        </h3>
                                    </div>
                                    <div>
                                        <p>
                                            We offer free and straightforward services without any hidden fees
                                            or charges on our part. And as we care about your comfort and safety,
                                            we enable you to submit a request without having to worry about any
                                            obligations or threats to your data security
                                        </p>
                                        <a href="/form" class="main-button btn position-relative" @click="removeRefillData">
                                            <span>
                                                Get Started
                                            </span>
                                            <span class="main-btn-span position-absolute">
                                                <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.5 8.36602C12.1667 7.98112 12.1667 7.01888 11.5 6.63398L1.75 1.00481C1.08333 0.619909 0.25 1.10104 0.25 1.87084V13.1292C0.25 13.899 1.08333 14.3801 1.75 13.9952L11.5 8.36602Z" fill="white"/>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-wrap py-0">
                    <div id="EE_advantages">
                        <div class="CE_bg border-0 w-100 pt-6 pb-6" :style="advantagesBG">
                            <div class="container pt-6" style="width: 85%;">
                                <div class="heading-block mw-xs mx-auto  text-center mb-6">
                                    <h2 id="advantages" class="CE_h2 nott ls0 text-blue"
                                        style="font-size: 40px;font-weight: 700;">
                                        Advantages</h2>
                                    <span class="CE_sublabel SubTitle">Have no time to waste? Choose&nbsp;Us!</span>
                                </div>
                                <div class="services-grid gutter-30 position-relative">
                                    <div style="position: absolute; top: 50%; left: 50%; width: 50vw; height: 50vh; opacity: .15; transform: translate(-50%, -50%);"></div>
                                    <div class="row">
                                        <div class="col-lg-4 col-md-12 d-flex align-self-stretch mb-2">
                                            <div class="CE_card feature-box flex-column h-shadow mx-0">
                                                <div class="fbox-content">
                                                    <h3 class="CE_card_h3 font-body fw-semibold mb-4 mt-2 ls0 nott text-blue" style="letter-spacing: 0px!important;
                                                font-size: calc(1.275rem + 0.3vw);
                                                    font-weight: bold!important;">Simple</h3>
                                                    <p class="CE_card_p" style="color: #555;">Our advanced automated system lets you
                                                        request up to $5,000 by filling out a simple,
                                                        clear-cut form directly from your computer,
                                                        tablet, or mobile phone</p>
                                                    <div class="fbox-icon mb-4  hover-button" style="float: left;">
                                                        <i class="icon-line-wifi text-blue"
                                                        style="background-color: transparent;width: unset;"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-12 d-flex align-self-stretch mb-2">
                                            <div class="CE_card feature-box flex-column h-shadow mx-0">
                                                <div class="fbox-content">
                                                    <h3 class="CE_card_h3 font-body fw-semibold h4 mb-4 mt-2 ls0 nott text-blue"
                                                        style="letter-spacing: 0px!important;
                                                    font-size: calc(1.275rem + 0.3vw);
                                                        font-weight: bold!important;">Fast</h3>
                                                    <p class="CE_card_p">The online form usually takes less than
                                                        10 minutes to complete. So before you even
                                                        finish your cup of tea, you’ll already have
                                                        your request submitted.</p>
                                                    <div class="fbox-icon mb-4  hover-button text-blue"
                                                        style="float: left;">
                                                        <i class="icon-line-clock text-blue"
                                                        style="background-color: transparent;width: unset;"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-12 d-flex align-self-stretch mb-2">
                                            <div class="CE_card feature-box flex-column h-shadow mx-0">
                                                <div class="fbox-content">
                                                    <h3 class="CE_card_h3 font-body fw-semibold mb-4 mt-2 ls0 nott text-blue" style="letter-spacing: 0px!important;
                                                    font-size: calc(1.275rem + 0.3vw);
                                                        font-weight: bold!important;">Affordable</h3>
                                                    <p class="CE_card_p" >We don’t focus solely on your credit score.
                                                        We focus on helping you and providing you
                                                        with loan offers! So don’t let your credit
                                                        determine your future and stop you from
                                                        submitting a request with us! </p>
                                                    <div class="fbox-icon mb-4 hover-button" style="float: left;">
                                                        <i class="icon-line2-like text-blue"
                                                        style="background-color: transparent;width: unset;"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  id="EE_comfort">
                        <div class="pt-0">
                            <div class="CE_bg_color mb-0" style="height: 100vh;min-height: 550px;display: flex;align-items: center;margin-top: 0px;">
                                <div class="container" style="width: 85%;">
                                    <div id="" class="CE_bg row align-items-center pt-6 pb-6 comfortBG"
                                        :style="comfortBG">
                                        <div class="col-md-12 col-lg-6 fix-padding "
                                            style="padding-left: 3rem;
                                        padding-right: 3rem;">
                                            <div class="heading-block border-bottom-0 mb-4">
                                                <h2 class="CE_h2 nott ls0 mb-2 text-blue" :style="'background-color: ' + footerBackgroundColor + ';'+
                                                'border-radius: 5px;font-size: 40px;font-weight: 700;'">
                                                    {{ app_name }} is on guard of
                                                    your comfort and time</h2>
                                            </div>
                                            <p class="CE_p" :style="'background-color: ' + footerBackgroundColor + ';'+
                                            'border-radius: 5px;padding: 10px;'">Life can be unpredictable. At {{ app_name }} we do our best to
                                                offer
                                                fast
                                                and safe solutions in any challenging situation. We implement the
                                                highest security standards, as well as calibrated automated processes
                                                to make your experience with us not only useful, but utterly pleasant
                                                as well!</p>
                                            <div class="clear"></div>
                                            <a href="/form" class="main-button btn position-relative" @click="removeRefillData" >
                                                <span>
                                                    Get Started
                                                </span>
                                                <span class="main-btn-span position-absolute">
                                                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.5 8.36602C12.1667 7.98112 12.1667 7.01888 11.5 6.63398L1.75 1.00481C1.08333 0.619909 0.25 1.10104 0.25 1.87084V13.1292C0.25 13.899 1.08333 14.3801 1.75 13.9952L11.5 8.36602Z" fill="white"/>
                                                </svg>
                                                </span>
                                            </a>
                                        </div>
                                        <div class="col-lg-5 col-md-6 mb-4 mb-md-0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="faq">
            <div id="EE_faq" class="content-wrap">
                <div class="container clearfix" style="width: 85%;">
                    <div class="row justify-content-center">
                        <div class="heading-block col-xl-6 col-lg-8 text-center mb-6">
                            <h2 class="CE_h2 nott ls0 text-blue" style="font-size: 40px;
							font-weight: 700;">Have a Question?</h2>
                            <span class="CE_sublabel SubTitle">We Have The Answer!</span>
                        </div>
                        <div class="clear"></div>
                        <div style="padding: 0;">
                            <div class="clear"></div>
                            <div id="faqs" class="faqs">
                                <div class="CE_item toggle faq pt-3 pb-3 mb-3 faq-marketplace faq-authors">
                                    <div class="toggle-header">
                                        <div class="CE_icon toggle-icon ">
                                            <i class="toggle-closed icon-plus1"></i>
                                            <i class="toggle-open icon-minus1"></i>
                                        </div>
                                        <div class="CE_text toggle-title ps-1 text-blue">
                                            What is a short term loan?
                                        </div>
                                    </div>
                                    <div class="CE_text toggle-content text-blue ps-4">Short-term loans such as personal loans
                                        or cash advances require no guaranty and provide you with emergency cash for
                                        unexpected circumstances. These types of loans are intended to be used only in
                                        extraordinary circumstances as repayment periods, rates, and fees tend to differ
                                        from more traditional financial products. Those who wish to accept a short-term
                                        loan from a lender they may connect with on this website should be responsible
                                        in repaying the loan on time. Loan amounts will vary but are typically between
                                        $500 and $5,000.
                                    </div>
                                </div>
                                <div class="CE_item toggle faq pt-3 pb-3 mb-3 faq-authors faq-miscellaneous">
                                    <div class="toggle-header">
                                        <div class="CE_icon toggle-icon">
                                            <i class="toggle-closed icon-plus1"></i>
                                            <i class="toggle-open icon-minus1"></i>
                                        </div>
                                        <div class="CE_text toggle-title ps-1 text-blue">
                                            Who is lending me money?
                                        </div>
                                    </div>
                                    <div class="CE_text toggle-content  ps-4 text-blue">Our website works with an extensive
                                        network of state licensed lenders, tribal lenders, and reputable financial
                                        service providers nationwide who may help you secure a loan. Our job is to
                                        connect you with these lenders so that you may potentially secure funding. Once
                                        connected, lenders will typically reach out to you within minutes to discuss
                                        lending options. It is important to remember that this website is not a lender
                                        nor do we provide short-term loans but instead pass your information to lenders
                                        in our network so that you may be connected to loans and financial products.
                                    </div>
                                </div>
                                <div class="CE_item toggle faq pt-3 pb-3 mb-3 faq-miscellaneous">
                                    <div class="toggle-header">
                                        <div class="CE_icon toggle-icon">
                                            <i class="toggle-closed icon-plus1"></i>
                                            <i class="toggle-open icon-minus1"></i>
                                        </div>
                                        <div class="CE_text toggle-title ps-1 text-blue">
                                            How does the website work?
                                        </div>
                                    </div>
                                    <div class="CE_text toggle-content text-blue ps-4">Upon completing our website’s loan
                                        request form and hitting submit, we will pass your information to our network of
                                        lenders in an attempt to connect you. If a lender chooses to offer you a loan,
                                        they may contact you typically within minutes via email, phone, or text, and
                                        present you with the next steps to accept their offer and complete their loan
                                        application. At this time, you are encouraged to carefully review all terms of
                                        the loan and ask any clarifying questions. You are under no obligation during
                                        the process to accept any loan offered and may choose to end the process at your
                                        discretion. In the event you are not able to connect with a lender, this website
                                        may pass the information you submitted to third-parties who may offer you
                                        related financial products.
                                    </div>
                                </div>
                                <div class="CE_item toggle faq pt-3 pb-3 mb-3 faq-authors faq-legal faq-itemdiscussion">
                                    <div class="toggle-header">
                                        <div class="CE_icon toggle-icon">
                                            <i class="toggle-closed icon-plus1"></i>
                                            <i class="toggle-open icon-minus1"></i>
                                        </div>
                                        <div class="CE_text toggle-title ps-1 text-blue">
                                            How much does it cost?
                                        </div>
                                    </div>
                                    <div class="CE_text toggle-content text-blue ps-4">Using our website’s services to connect
                                        with lenders is completely free. You may use this website as often as needed,
                                        free of any charges. However, if you are successfully connected with a lender
                                        through this site, you may be responsible to the lender for the costs associated
                                        with the loan you may potentially receive and those costs and fees are
                                        determined solely by the lender. It is important to remember that short-term
                                        loans are intended for emergency cash circumstances and often more expensive
                                        than more traditional financial products.
                                    </div>
                                </div>
                                <div class="CE_item toggle faq pt-3 pb-3 mb-3 faq-marketplace faq-authors">
                                    <div class="toggle-header">
                                        <div class="CE_icon toggle-icon">
                                            <i class="toggle-closed icon-plus1"></i>
                                            <i class="toggle-open icon-minus1"></i>
                                        </div>
                                        <div class="CE_text toggle-title ps-1 text-blue">
                                            What are the requirements to submit a loan request?
                                        </div>
                                    </div>
                                    <div class="CE_text toggle-content text-blue ps-4">To submit a request on this website to be
                                        connected with lenders for short-term loans, you must meet some basic
                                        requirements and provide certain information. The lenders in our network seek to
                                        view this information so that they may determine your creditworthiness and
                                        whether to offer you a loan. We will only pass the sensitive information you
                                        provide to us on the loan request form to lenders and financial service
                                        providers who offer loans. In order to be eligible to submit a loan request
                                        form, you must ensure you are: (i) 18 years or older; (ii) Have a valid social
                                        security number; (iii) Be a U.S. citizen or permanent resident; (iv) Have a
                                        consistent monthly income source; (v) Own a valid bank account for deposits and
                                        repayment; and (vi) Own a valid telephone number and email address.
                                        Notwithstanding, each lender in our network may have different rules and
                                        regulations to decide if a borrower is eligible for a loan and thus, any final
                                        decision pertaining to lending or loans belongs to the lender alone and not us.
                                        This website is not a lender and does not make credit decisions or review your
                                        information for creditworthiness.
                                    </div>
                                </div>
                                <div class="CE_item toggle faq pt-3 pb-3 mb-3 faq-affiliates faq-miscellaneous">
                                    <div class="toggle-header">
                                        <div class="CE_icon toggle-icon">
                                            <i class="toggle-closed icon-plus1"></i>
                                            <i class="toggle-open icon-minus1"></i>
                                        </div>
                                        <div class="CE_text toggle-title ps-1 text-blue">
                                            Will my credit be pulled and checked?
                                        </div>
                                    </div>
                                    <div class="CE_text toggle-content text-blue ps-4">This website does not perform credit
                                        checks or pull credit to determine creditworthiness. We are not a lender and do
                                        not make any financial decisions. However, the lenders who receive the
                                        information you affirmatively provide to us on this website may use your
                                        information to verify consumer identity and perform credit checks which may
                                        impact your credit score. Lenders in our network may perform a credit checks or
                                        secure your credit score before making their decision to offer you a loan by
                                        using the three major reporting bureaus like, TransUnion, Experian and Equifax,
                                        as well as other alternate sources of consumer information. By submitting your
                                        loan request on this website, you are providing express written consent and
                                        authorization under the Fair Credit Reporting Act to allow such lenders to use
                                        your information in this manner (to obtain credit reports, credit scores, or
                                        other information from any consumer reporting agency).
                                    </div>
                                </div>
                                <div class="CE_item toggle faq pt-3 pb-3 mb-3 faq-legal faq-itemdiscussion">
                                    <div class="toggle-header">
                                        <div class="CE_icon toggle-icon">
                                            <i class="toggle-closed icon-plus1"></i>
                                            <i class="toggle-open icon-minus1"></i>
                                        </div>
                                        <div class="CE_text toggle-title ps-1 text-blue">
                                            What are the lenders potential rates and fees?
                                        </div>
                                    </div>
                                    <div class="CE_text toggle-content text-blue ps-4">It is important to remember that our
                                        website is not a lender but instead passes consumer’s information from those who
                                        submit loan requests on this website to our network of lenders who may provide
                                        such loans. Therefore, we are unable to provide you with exact APR (Annual
                                        Percentage Rate) that you will be charged for a loan since this is determined
                                        solely by the lender you connect with and will vary among different lenders. The
                                        loan interest rates are determined only and solely by your lender, with specific
                                        amounts determined based upon the information you submitted to the lender. Your
                                        lender is required to provide you with the APR, loan fees, and other
                                        information.
                                    </div>
                                </div>
                                <div class="CE_item toggle faq pt-3 pb-3 mb-3 faq-legal faq-itemdiscussion">
                                    <div class="toggle-header">
                                        <div class="CE_icon toggle-icon">
                                            <i class="toggle-closed icon-plus1"></i>
                                            <i class="toggle-open icon-minus1"></i>
                                        </div>
                                        <div class="CE_text toggle-title ps-1 text-blue">
                                            What are the loan repayment terms?
                                        </div>
                                    </div>
                                    <div class="CE_text toggle-content text-blue ps-4">This website does not determine loan
                                        repayment terms. Loan repayment terms are determined solely by the lender you
                                        connect with and are usually scheduled to be made once or twice a month,
                                        depending on the terms and conditions of your loan agreement. Understanding the
                                        repayment terms of your loan is very important. Each offer has different factors
                                        affecting the terms, such as your state of residence, the length of repayment
                                        time, or your total amount of the loan. Please reach your lender for further
                                        information about your repayment terms and review all repayment information
                                        prior to accepting a loan offer.
                                    </div>
                                </div>
                                <div class="CE_item toggle faq pt-3 pb-3 mb-3 faq-legal faq-itemdiscussion">
                                    <div class="toggle-header">
                                        <div class="CE_icon toggle-icon">
                                            <i class="toggle-closed icon-plus1"></i>
                                            <i class="toggle-open icon-minus1"></i>
                                        </div>
                                        <div class="CE_text toggle-title ps-1 text-blue">
                                            What happens in the event of a late payment or non payment?
                                        </div>
                                    </div>
                                    <div class="CE_text toggle-content text-blue ps-4">As mentioned previously, this website is
                                        not a lender and therefore cannot provide any specific information regarding
                                        late payment or non-payment. In the case that you are unable to make a payment
                                        on time to your lender, you are encouraged to contact your lender immediately.
                                        Late payment may result in additional fees depending on your lender’s terms and
                                        conditions and your state’s regulations. Reviewing your agreement with the
                                        lender to acknowledge the consequences of late payment is highly recommended.
                                        Failing to repay your loan can lead to several penalties imposed by lenders,
                                        including but not limited to, charges for late payment, forwarding your account
                                        to a collection agency, or reporting your lack of payment to a credit bureau
                                        which can negatively impact your credit score. It is important to remember that
                                        non-payment of loans may impact your credit score negatively if your credit
                                        provider chooses to report delinquencies. This website is not a debt collector
                                        nor do we engage in any collections. You are encouraged to contact your lender
                                        directly in the event of nonpayment.
                                    </div>
                                </div>
                                <div class="CE_item toggle faq pt-3 pb-3 mb-3 faq-legal faq-itemdiscussion">
                                    <div class="toggle-header">
                                        <div class="CE_icon toggle-icon">
                                            <i class="toggle-closed icon-plus1"></i>
                                            <i class="toggle-open icon-minus1"></i>
                                        </div>
                                        <div class="CE_text toggle-title ps-1 text-blue">
                                            What if i'm not connected?
                                        </div>
                                    </div>
                                    <div class="CE_text toggle-content text-blue ps-4">Lenders in our network will ultimately
                                        determine whether you will be offered a loan or are eligible for certain loan
                                        products. Our website is not a lender and does not make financial
                                        determinations. If you are unable to connect with a lender for a loan on this
                                        website, we may offer you the opportunity get connected with other lender
                                        networks which provide smaller amounts of up to $1,500.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div id="EE_last" class="page-section pt-0" :style="'border-bottom: 2px solid ' + footerBackgroundColor">
            <div class="section bg-transparent pt-0 mt-0 pb-0 mb-0">
                <div class="container" style="width: 85%;">
                    <div class="CE_bg row align-items-center pt-0" :style="lastBG" style="padding-bottom: 5rem;">
                        <div class="col-md-12">
                        </div>
                    </div>
                    <div class="mt-4 last-text"  style="display: flex;
                            align-items: center;
                            justify-content: center;">
                        <h2 class="CE_h2 nott ls0 my-3 text-center text-blue me-lg-3"
                            style="font-size:40px;">{{ app_name }} is on guard of
                            your comfort and time</h2>
                    </div>
                    <div class="w-100 text-center">
                        <a href="/form" class="main-button btn position-relative" @click="removeRefillData">
                            <span>
                                Get Started
                            </span>
                            <span class="main-btn-span position-absolute">
                                <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 8.36602C12.1667 7.98112 12.1667 7.01888 11.5 6.63398L1.75 1.00481C1.08333 0.619909 0.25 1.10104 0.25 1.87084V13.1292C0.25 13.899 1.08333 14.3801 1.75 13.9952L11.5 8.36602Z" fill="white"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


import useVuelidate from "@vuelidate/core";

import {
    checkPhone,
    countVisitor,
    handleGetParams, mountedHomePage,
    removeRefillData,
    triggerReapplyForm
} from '../../../common/js/commonGeneral';
import {onlyDigitsKeypress} from "../../../common/js/commonForms";
import {
    getStarted,
    getStartedFormFields,
    checkEmail,
    getStartedFormValidations
} from "../../../common/js/getStartedForms";

export default {
    setup() {
        return {v$: useVuelidate()};
    },
    data() {
        return {
            fields: getStartedFormFields,
            app_name: document.querySelector('title').text,
            token: document.querySelector('meta[name="form-token"]').content,
            heroImage: siteSettings.elements.EE_hero['background-image'],
            advantagesBG: siteSettings.elements.EE_advantages.CE_bg['background-image'],
            comfortBG: siteSettings.elements.EE_comfort['background-image'],
            whyUsBG: siteSettings.elements.EE_wu['background-image'],
            lastBG: siteSettings.elements.EE_last.CE_bg['background-image'],
            buttonColor: siteSettings.general.main_button_color.value,
            buttonHoverBgColor: siteSettings.general.button_hover_bg_color.value,
            buttonHoverColor: siteSettings.general.button_hover_color.value,
            mainColor: siteSettings.general.main_color.value,
            footerBackgroundColor: siteSettings.general.footer_bg_color.value,
            comfortButtonColor: siteSettings.general.main_button_color.value,
        }
    },
    validations() {
        return getStartedFormValidations;
    },
    computed: {
        heroImage() {
            return 'background-image: ' + this.heroImage + ';min-height: 750px!important';
        },
        whyUsBG() {
            return 'background-image: ' + this.whyUsBG + '; background-size: cover; min-height:calc(100vh - 80px); display: flex; align-items: center;';
        },
        advantagesBG() {
            return 'background-image: ' + this.advantagesBG + '; background-color: #f6f6f6; background-size: cover; border-bottom: 1px solid white';
        },
        comfortBG() {
            return 'background-image: ' + this.comfortBG + ';background-size: cover;background-position:center;border-radius:5px;box-shadow: rgb(0 0 0 / 10%) 0px 1px 2px 0px;';
        },
        lastBG() {
            return 'background-image: ' + this.lastBG + '; background-size: cover; background-position:center; border-radius:5px; height: 700px; display: flex;flex-direction: column;justify-content: flex-end;';
        },
        mainColor() {
            return {
                '--main-color': this.mainColor,
                '--main-button-color': this.buttonColor,
                '--main-button-hover-bg-color': this.buttonHoverBgColor,
                '--main-button-hover-color': this.buttonHoverColor,
                '--footer-background-color': this.footerBackgroundColor,
                '--footer-button-color': this.footerButtonColor,
                '--footer-text-color': this.footerTextColor,
            };
        },
    },
    async mounted() {
        await handleGetParams(this);
        await countVisitor(this);
        await triggerReapplyForm(this);
        let header = document.getElementById('header');
        let headerWrap = document.getElementById('EE_header');
        header.style.background = 'transparent';
        headerWrap.style = undefined;

        window.addEventListener('scroll', this.handleScroll);

        let elements = document.getElementsByClassName("toggle-header");
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click', function (event, element = elements[i]) {
                if (element.parentElement.classList.contains('toggle-active')) {
                    element.parentElement.classList.remove('toggle-active');
                    element.parentElement.children[1].style.display = 'none'
                } else {
                    element.parentElement.classList.add('toggle-active');
                    element.parentElement.children[1].style.display = 'block'
                }
            });
        }
        mountedHomePage(this);
    },
    methods: {
        checkPhone,
        removeRefillData,
        checkEmail,
        getStarted,
        onlyDigitsKeypress,
        handleScroll(e) {
            if (window.innerWidth > 991) {
                let header = document.getElementById('EE_header');
                if (window.top.scrollY < 10) {
                    if (header.style.backgroundColor) {
                        header.style = undefined;
                    }
                    header.style.background = 'transpanent';
                } else {
                    if (header.style.background) {
                        header.style.removeProperty('background');
                    }
                    header.style.backgroundColor = siteSettings?.elements?.EE_header['background-color'] || '#fff';
                }
            }
        },
    }
};
</script>siteSettings.elements.EE_header.CE_header_logo.src,

<style lang="scss" scoped>
    @import "../../sass/home.scss";
</style>
