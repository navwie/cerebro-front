<template>
    <div class="GSC_home" :style="mainColor">
        <section id="slider"
                 class="vh-100">
            <div class="slider-inner h-100" id="EE_hero"
                 :style="heroImage">
                <div class="d-flex justify-content-center align-items-center w-100 h-100 m-0"
                     style="min-height: 900px;height: 100vh!important;z-index: 3;">
                    <div id="formHeader">
                        <h1 class="headerFont1">
                            GET YOUR
                        </h1>
                        <h1 class="headerFont2">
                            PERSONAL LOAN
                        </h1>
                        <form action="#" class="border-radius starting-form p-md-5 p-4 mx-2">
                            <div class="headerFont3 mb-md-5 md-sm-4 mb-3">UP TO <b>$10,000.00</b></div>
                            <div class="input-group d-flex flex-row-reverse" v-bind:class="{'mb-3': !v$.fields.email.$error}">
                                <input style="border-radius: 0 5px 5px 0;" type="text" v-model="fields.email"
                                       v-bind:class="{'error-border': v$.fields.email.$error}"
                                       class="form-control required form-header-lineHeight" value=""
                                       placeholder="Email Address" id="email" autocomplete="on">
                                <span class="input-group-text bg-white">
                                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.0399 0.194336C0.581707 0.194336 0.210266 0.565778 0.210266 1.02398C0.210266 1.338 0.387571 1.62512 0.668346 1.76576L5.12067 3.99592C5.40254 4.13712 5.7345 4.13712 6.01638 3.99592L10.4687 1.76576C10.7495 1.62512 10.9268 1.338 10.9268 1.02398C10.9268 0.565778 10.5553 0.194336 10.0971 0.194336H1.0399ZM0.210266 2.87828V7.24617C0.210266 7.79846 0.657981 8.24617 1.21027 8.24617H9.92678C10.4791 8.24617 10.9268 7.79846 10.9268 7.24617V2.87828L6.01638 5.3379C5.7345 5.47909 5.40254 5.47909 5.12067 5.3379L0.210266 2.87828Z" fill="#858585"/>
                                    </svg>
                                </span>
                            </div>
                            <p
                                v-for="error of v$.fields.email.$errors"
                                :key="error.$uid"
                                class="m-0"
                            >
                                <label for="email" class="text-left error">{{ error.$message }}</label>
                            </p>
                            <div class="input-group d-flex flex-row-reverse" v-bind:class="{'mb-3': !v$.fields.requested_amount.$error}">
                                <label class="d-none" for="requested_amount">Requested amount</label>
                                <select style="color: #666666;border-radius: 0 5px 5px 0;" class="form-select"
                                        id="requested_amount" v-model="fields.requested_amount"
                                        v-bind:class="{'error-border': v$.fields.requested_amount.$error}"
                                        aria-invalid="false">
                                    <option style="background-color: white;" value="500">$100 - $500</option>
                                    <option style="background-color: white;" value="800">$500 - $1000</option>
                                    <option style="background-color: white;" value="1000">$1000 - $1500</option>
                                    <option style="background-color: white;" value="1500">$1500 - $2000</option>
                                    <option style="background-color: white;" value="2500">$2000 - $3000</option>
                                    <option style="background-color: white;" value="3500">$3000 - $4000</option>
                                    <option style="background-color: white;" value="4500">$4000 - $5000</option>
                                    <option style="background-color: white;" value="6000">$5000 - $7000</option>
                                    <option style="background-color: white;" value="8000">$7000 - $10000</option>
                                </select>
                                <span class="input-group-text bg-white">
                                    <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.73979 0.563721V2.32286H2.4228C1.22874 2.32286 0.227826 3.32557 0.227826 4.52179V5.40136C0.227826 6.59757 1.00046 7.58269 2.14185 7.88174L6.63716 9.04278C6.883 9.11314 7.2342 9.55293 7.2342 9.8168V10.6964C7.2342 10.9426 7.04104 11.1362 6.7952 11.1362H2.40524C2.19453 11.1362 2.03649 11.0658 1.96625 11.0306V9.37701H0.210266V11.1362C0.210266 11.7343 0.561463 12.2444 0.982898 12.5083C1.38677 12.7897 1.89601 12.8953 2.40524 12.8953H3.72223V14.6544H5.47821V12.8953H6.7952C8.00683 12.8953 8.99018 11.9102 8.99018 10.6964V9.8168C8.99018 8.62058 8.21755 7.63546 7.07616 7.33641L2.58084 6.17538C2.33501 6.10501 1.98381 5.66523 1.98381 5.40136V4.52179C1.98381 4.27551 2.17697 4.082 2.4228 4.082H6.81276C7.00592 4.082 7.18152 4.15237 7.25176 4.18755V5.84114H9.00774V4.082C9.00774 3.48389 8.65654 2.97374 8.23511 2.70987C7.83123 2.42841 7.322 2.32286 6.81276 2.32286H5.49577V0.563721L3.73979 0.563721Z" fill="#858585"/>
                                    </svg>
                                </span>
                            </div>
                            <div class="input-group d-flex flex-row-reverse" v-bind:class="{'mb-3': !v$.fields.ssn.$error}">
                                <input style="border-radius: 0 5px 5px 0;" type="text" v-model="fields.ssn"
                                       v-bind:class="{'error-border': v$.fields.ssn.$error}"
                                   @copy.prevent @paste.prevent @cut.prevent @keypress="onlyDigitsKeypress"
                                   class="form-control required form-header-lineHeight" value=""
                                   placeholder="Last 4 Digits of SSN" maxlength="4" id="ssn">
                                <span class="input-group-text bg-white">
                                    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.37252 0.952393C3.47799 0.952393 1.92792 2.50525 1.92792 4.40318V6.12857H1.20563C0.653342 6.12857 0.205627 6.57629 0.205627 7.12857V12.0301C0.205627 12.5824 0.653343 13.0301 1.20563 13.0301H9.53941C10.0917 13.0301 10.5394 12.5824 10.5394 12.0301V7.12857C10.5394 6.57629 10.0917 6.12857 9.53941 6.12857H8.81711V4.40318C8.81711 2.50525 7.26704 0.952393 5.37252 0.952393ZM5.37252 2.67779C6.337 2.67779 7.09481 3.43696 7.09481 4.40318V6.12857H3.65022V4.40318C3.65022 3.43696 4.40803 2.67779 5.37252 2.67779Z" fill="#858585"/>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-ssn" class="d-none"
                                 v-bind:class="{'mt-n3': !v$.fields.ssn.$error}"></div>
                            <p
                                v-for="error of v$.fields.ssn.$errors"
                                :key="error.$uid"
                                class="m-0"
                            >
                                <label for="ssn" class="text-left error">{{ error.$message }}</label>
                            </p>
                            <div class="col-12 form-group mb-4">
                                <div class="main-button btn position-relative" @click="getStarted">
                                    <span>
                                        Get Started
                                    </span>
                                    <span class="main-btn-span position-absolute">
                                        <svg width="7" height="10" viewBox="0 0 7 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.59275 0.699745C2.2028 0.3125 1.57343 0.3125 1.18347 0.699745L0.714528 1.16543C0.320713 1.55651 0.320713 2.19349 0.714528 2.58457L3.14685 5L0.714529 7.41543C0.320714 7.80651 0.320713 8.44349 0.714528 8.83457L1.18347 9.30026C1.57343 9.6875 2.2028 9.6875 2.59275 9.30025L6.20855 5.70957C6.60236 5.31849 6.60236 4.68151 6.20855 4.29043L2.59275 0.699745Z"
                                                fill="white"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </form>
                        <div class="px-3">
                            <small class="font-weight text-white">
                                By clicking “Get Started”, I consent to the
                                <span data-bs-toggle="modal" data-bs-target="#privacy">Privacy Policy</span>,
                                <span data-bs-toggle="modal" data-bs-target="#terms">Terms of Use</span>,
                                <span data-bs-toggle="modal" data-bs-target="#credit_disclosure"> Credit Disclosure</span>,
                                and <span data-bs-toggle="modal" data-bs-target="#econsent">E-Consent</span>.
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-5 pt-5" id="how-it-works">
            <div id="EE_hiw" class="row px-main">
                <div class="d-none d-md-block mt-5 col-5 p-0 position-relative hiw-block">
                    <img class="CE_pic1 position-absolute start-0 top-0 my-visible" :class="{'my-hide': howItWorkActive[1] || howItWorkActive[2]}" :src="comfortBG" alt="Background image - smartphone"/>
                    <img class="CE_pic2 position-absolute start-0 top-0 my-visible" :class="{'my-hide': !howItWorkActive[1]}" :src="comfortBG2" alt="Background image - smartphone"/>
                    <img class="position-absolute start-0 top-0 my-visible" :class="{'my-hide': !howItWorkActive[2]}" src="/img/smartphone3.png" alt="Background image - smartphone"/>
                </div>
                <div class="col-12 col-md-7 mt-5 how-it-works-wrapper">
                    <h2 class="CE_h2 section-title">HOW IT WORKS? <span class="CE_h2 section-title-span">IT&nbsp;WORKS&nbsp;PERFECTLY</span></h2>
                    <div class="how-it-works-font how-it-works-container border-radius" :class="{'active': howItWorkActive[0]}" @click="setActiveHowItWorks(0)">
                        <h3 class="CE_h3 how-it-works-titles">
                            SUBMIT A REQUEST
                            <svg class="CE_svg" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Vector" d="M1.5 0C0.68 0 0 0.68 0 1.5V12.5C0 13.32 0.68 14 1.5 14H10.5C11.32 14 12 13.32 12 12.5V10H10V12H2V2H6V0H1.5ZM12 0V2C7.9 2 4.6 5.08 4.12 9.06C4.54 7.3 6.1 6 8 6H12V8L16 4L12 0Z" />
                            </svg>
                        </h3>
                        <div class="CE_p">All paperwork is gone! The whole process is completely online. Just fill in a few details
                            about yourself and hit “GET STARTED”!
                        </div>
                    </div>
                    <div class="how-it-works-font how-it-works-container border-radius" :class="{'active': howItWorkActive[1]}" @click="setActiveHowItWorks(1)">
                        <h3 class="CE_h3 how-it-works-titles">
                            CHECK THE OFFERS
                            <svg class="CE_svg" xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
                                <path d="M6.75 0C6.25 0 5.85714 0.392857 5.85714 0.892857V1.78571H4.51786C4.26786 1.78571 4.07143 1.98214 4.07143 2.23214V3.57143H9.42857V2.23214C9.42857 1.98214 9.23214 1.78571 8.98214 1.78571H7.64286V0.892857C7.64286 0.392857 7.25 0 6.75 0ZM0.946429 1.78571C0.696429 1.78571 0.5 1.98214 0.5 2.23214V13.8393C0.5 14.0893 0.696429 14.2857 0.946429 14.2857H12.5536C12.8036 14.2857 13 14.0893 13 13.8393V2.23214C13 1.98214 12.8036 1.78571 12.5536 1.78571H11.2143V5.35714H2.28571V1.78571H0.946429Z"/>
                            </svg>
                        </h3>
                        <div class="CE_p">If the offer suits your needs and desires, and you agree with all the terms - simply e-sign
                            the deal and get ready to enjoy the money!
                        </div>
                    </div>
                    <div class="how-it-works-font how-it-works-container border-radius" :class="{'active': howItWorkActive[2]}" @click="setActiveHowItWorks(2)">
                        <h3 class="CE_h3 how-it-works-titles">
                            RECEIVE YOUR MONEY
                            <svg class="CE_svg" xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                                <path d="M3.61078 0V1.74782H2.26347C1.04192 1.74782 0.0179641 2.74407 0.0179641 3.93258V4.80649C0.0179641 5.99501 0.808383 6.97378 1.97605 7.27091L6.57485 8.42447C6.82635 8.49438 7.18563 8.93134 7.18563 9.19351V10.0674C7.18563 10.3121 6.98802 10.5044 6.73653 10.5044H2.24551C2.02994 10.5044 1.86826 10.4345 1.79641 10.3995V8.75655H0V10.5044C0 11.0986 0.359281 11.6055 0.790419 11.8677C1.20359 12.1473 1.72455 12.2522 2.24551 12.2522H3.59281V14H5.38922V12.2522H6.73653C7.97605 12.2522 8.98204 11.2734 8.98204 10.0674V9.19351C8.98204 8.00499 8.19162 7.02622 7.02395 6.72909L2.42515 5.57553C2.17365 5.50562 1.81437 5.06866 1.81437 4.80649V3.93258C1.81437 3.68789 2.01198 3.49563 2.26347 3.49563H6.75449C6.9521 3.49563 7.13174 3.56554 7.20359 3.6005V5.24345H9V3.49563C9 2.90137 8.64072 2.39451 8.20958 2.13233C7.79641 1.85268 7.27545 1.74782 6.75449 1.74782H5.40719V0L3.61078 0Z"/>
                            </svg>
                        </h3>
                        <div class="CE_p">Once you submit your request, get your offer, and e-sign it, you’ll be able to get the
                            funds to your bank account in no time!
                        </div>
                    </div>
                </div>
                <div class="d-block d-md-none col-12 position-relative how-it-works-mobile-image-wrapper hiw-block">
                    <img class="CE_pic1 position-absolute start-0 top-0 my-visible" :class="{'my-hide': howItWorkActive[1] || howItWorkActive[2]}" :src="comfortBG" alt="Background image - smartphone"/>
                    <img class="CE_pic2 position-absolute start-0 top-0 my-visible" :class="{'my-hide': !howItWorkActive[1]}" :src="comfortBG2" alt="Background image - smartphone"/>
                    <img class="position-absolute start-0 top-0 my-visible" :class="{'my-hide': !howItWorkActive[2]}" src="/img/smartphone3.png" alt="Background image - smartphone"/>
                </div>
            </div>
        </section>
        <div class="section-separator">
        </div>
        <section id="why-us" class="mb-5">
            <div id="EE_wu" class="row">
                <div class="col-12 col-sm-6 ps-main pe-3" >
                    <h2 class="CE_h2 section-title">WHY US? <span class="CE_h2 section-title-span">FAST,&nbsp;RELIABLE,&nbsp;TRANSPARENT.</span></h2>
                    <div class="why-us-wrapper d-flex flex-column bd-highlight">
                        <p class="CE_p why-us-container">Fast</p>
                        <p class="CE_p why-us-container">Reliable</p>
                        <p class="CE_p why-us-container mb-0">Transparent</p>
                        <hr class="w-100">
                    </div>
                    <div class="why-us-wrapper px-3">
                        <div class="CE_p why-us-text">
                            We offer free and straightforward services without
                            any hidden fees or charges on our part. And as we
                            care about your comfort and safety, we enable you
                            to submit a request without having to worry about
                            any obligations or threats to your data security.
                        </div>
                        <div class="main-button btn position-relative" @click="goToForm">
                            <span>
                                Get Started
                            </span>
                            <span class="main-btn-span position-absolute">
                                <svg width="7" height="10" viewBox="0 0 7 10" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.59275 0.699745C2.2028 0.3125 1.57343 0.3125 1.18347 0.699745L0.714528 1.16543C0.320713 1.55651 0.320713 2.19349 0.714528 2.58457L3.14685 5L0.714529 7.41543C0.320714 7.80651 0.320713 8.44349 0.714528 8.83457L1.18347 9.30026C1.57343 9.6875 2.2028 9.6875 2.59275 9.30025L6.20855 5.70957C6.60236 5.31849 6.60236 4.68151 6.20855 4.29043L2.59275 0.699745Z"
                                        fill="white"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="CE_bg d-flex flex-column col-12 col-sm-6 pe-0 why-us-bg-wrapper" :style="whyUsBG">
                </div>
            </div>
        </section>
        <div class="section-separator">
        </div>
        <section id="EE_advantages" class="min-vh-100 px-main">
            <h2 class="CE_h2 section-title pb-5">ADVANTAGES <span class="CE_h2 section-title-span">ANYWHERE,&nbsp;ANYTIME.</span></h2>
            <div class="advantages-wrapper justify-content-between">
                <div class="CE_card card advantages-card">
                    <div class="card-body p-4 pt-5 advantages-font d-flex flex-column bd-highlight">
                        <p class="CE_card_p mb-auto">
                            Our advanced automated system lets you request up to $5,000 by filling out
                            a simple, clear-cut form directly from your computer, tablet, or mobile phone
                        </p>
                        <hr>
                        <div class="CE_card_p d-flex justify-content-between">
                            <b>Simple</b>
                            <svg class="CE_svg" width="35" height="40" viewBox="0 0 35 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M31.25 0H3.75C1.67969 0 0 1.67969 0 3.75V36.25C0 38.3203 1.67969 40 3.75 40H31.25C33.3203 40 35 38.3203 35 36.25V3.75C35 1.67969 33.3203 0 31.25 0ZM17.5 37.5C16.1172 37.5 15 36.3828 15 35C15 33.6172 16.1172 32.5 17.5 32.5C18.8828 32.5 20 33.6172 20 35C20 36.3828 18.8828 37.5 17.5 37.5ZM31.25 29.0625C31.25 29.5781 30.8281 30 30.3125 30H4.6875C4.17188 30 3.75 29.5781 3.75 29.0625V4.6875C3.75 4.17188 4.17188 3.75 4.6875 3.75H30.3125C30.8281 3.75 31.25 4.17188 31.25 4.6875V29.0625Z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="CE_card card advantages-card">
                    <div class="card-body p-4 pt-5 advantages-font d-flex flex-column bd-highlight">
                        <p class="CE_card_p mb-auto">
                            We don’t focus solely on your credit score. We focus on helping you and providing you with loan
                            offers! So don’t let your credit determine your future and stop you from submitting a request
                            with us!
                        </p>
                        <hr>
                        <div class="CE_card_p d-flex justify-content-between">
                            <b>Affordable</b>
                            <svg class="CE_svg" width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.2781 4C23.6531 5.50781 22.1859 7.09297 20.8859 8.68516C18.7563 5.75156 16.1156 2.77578 13.125 0C5.44844 7.12266 0 16.4031 0 22C0 31.9414 7.83516 40 17.5 40C27.1648 40 35 31.9414 35 22C35 17.8383 30.9391 9.25469 25.2781 4ZM24.8508 31.7092C23.7891 32.452 21.3281 34.1438 17.7234 34.1438C12.0867 34.1438 5.85938 28.7703 5.85938 22.7148C5.85938 19.6984 8.47656 13.6986 13.1867 9.76027C13.7281 10.3837 20.9078 19.0045 20.9078 19.0045L25.4883 14.8754C25.8117 15.4106 27.2 17.5778 27.4625 18.0794C29.5992 22.1567 30.2307 27.9452 24.8508 31.7092Z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="CE_card card advantages-card">
                    <div class="card-body p-4 pt-5 advantages-font d-flex flex-column bd-highlight">
                        <p class="CE_card_p mb-auto">
                            The online form usually takes less than 10 minutes to complete. So before you even finish your
                            cup of tea, you’ll already have your request submitted
                        </p>
                        <hr>
                        <div class="CE_card_p d-flex justify-content-between">
                            <b>Fast</b>
                            <svg class="CE_svg" width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.75 3.75C23.75 5.82109 22.0711 7.5 20 7.5C17.9289 7.5 16.25 5.82109 16.25 3.75C16.25 1.67891 17.9289 0 20 0C22.0711 0 23.75 1.67891 23.75 3.75ZM20 32.5C17.9289 32.5 16.25 34.1789 16.25 36.25C16.25 38.3211 17.9289 40 20 40C22.0711 40 23.75 38.3211 23.75 36.25C23.75 34.1789 22.0711 32.5 20 32.5ZM36.25 16.25C34.1789 16.25 32.5 17.9289 32.5 20C32.5 22.0711 34.1789 23.75 36.25 23.75C38.3211 23.75 40 22.0711 40 20C40 17.9289 38.3211 16.25 36.25 16.25ZM7.5 20C7.5 17.9289 5.82109 16.25 3.75 16.25C1.67891 16.25 0 17.9289 0 20C0 22.0711 1.67891 23.75 3.75 23.75C5.82109 23.75 7.5 22.0711 7.5 20ZM8.50953 27.7405C6.43844 27.7405 4.75953 29.4194 4.75953 31.4905C4.75953 33.5616 6.43844 35.2405 8.50953 35.2405C10.5806 35.2405 12.2595 33.5616 12.2595 31.4905C12.2595 29.4195 10.5805 27.7405 8.50953 27.7405ZM31.4905 27.7405C29.4194 27.7405 27.7405 29.4194 27.7405 31.4905C27.7405 33.5616 29.4194 35.2405 31.4905 35.2405C33.5616 35.2405 35.2405 33.5616 35.2405 31.4905C35.2405 29.4195 33.5616 27.7405 31.4905 27.7405ZM8.50953 4.75953C6.43844 4.75953 4.75953 6.43844 4.75953 8.50953C4.75953 10.5806 6.43844 12.2595 8.50953 12.2595C10.5806 12.2595 12.2595 10.5806 12.2595 8.50953C12.2595 6.43844 10.5805 4.75953 8.50953 4.75953Z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="CE_bg advantages-bg" :style="advantagesBG">
            </div>
        </section>
        <div class="section-separator">
        </div>
        <section id="EE_faq">
            <h2 class="CE_h2 section-title pb-5">F.A.Q. <span class="CE_h2 section-title-span">WE&nbsp;HAVE&nbsp;THE&nbsp;ANSWER!</span></h2>
            <div v-for="(question, index) in questions" :key="question.title" type="button" @click="() => handleAccordion(index)">
                <div class="my-accordion-title d-flex justify-content-between">
                    <span class="CE_text pe-5">
                        {{ question.title }}
                    </span>
                    <div class="position-relative">
                        <div class="vl"></div>
                        <svg class="myAccordionIcon" :class="{myAccordionIconCollapse:questions[index].isExpanded}" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.41421 0.5C0.523309 0.5 0.0771421 1.57714 0.707107 2.20711L7.29289 8.79289C7.68342 9.18342 8.31658 9.18342 8.70711 8.79289L15.2929 2.2071C15.9229 1.57714 15.4767 0.5 14.5858 0.5H1.41421Z" fill="#4B4B4B"/>
                        </svg>
                    </div>
                </div>
                <Collapse :when="questions[index].isExpanded" class="my-collapse">
                    <p class="CE_text my-accordion-text">
                        {{ question.answer }}
                    </p>
                </Collapse>
            </div>
        </section>
        <section id="EE_last">
            <div class="CE_bg row flex-column px-main" :style="lastBG">
                <div class="col-lg-6 offset-lg-1 p-0">
                    <div class="CE_text last-bg-font1">
                        {{ app_name }} is on guard
                        of your comfort and
                        time
                    </div>
                    <hr class="my-5">
                    <div class="CE_text last-bg-font2">
                        Life can be unpredictable. At {{ app_name }} we do our best to offer fast and safe solutions in any
                        challenging situation. We implement the highest security standards, as well as calibrated automated
                        processes to make your experience with us not only useful, but utterly pleasant as well!
                    </div>
                    <div class="main-button btn position-relative" @click="goToForm">
                        <span>
                            Get Started
                        </span>
                        <span class="main-btn-span position-absolute">
                            <svg width="7" height="10" viewBox="0 0 7 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.59275 0.699745C2.2028 0.3125 1.57343 0.3125 1.18347 0.699745L0.714528 1.16543C0.320713 1.55651 0.320713 2.19349 0.714528 2.58457L3.14685 5L0.714529 7.41543C0.320714 7.80651 0.320713 8.44349 0.714528 8.83457L1.18347 9.30026C1.57343 9.6875 2.2028 9.6875 2.59275 9.30025L6.20855 5.70957C6.60236 5.31849 6.60236 4.68151 6.20855 4.29043L2.59275 0.699745Z"
                                    fill="white"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>

import useVuelidate from "@vuelidate/core";
import {
    checkPhone,
    triggerReapplyForm,
    removeRefillData,
    handleGetParams,
    countVisitor, mountedHomePage
} from '../../../common/js/commonGeneral';
import {
    getStartedFormFields,
    getStartedFormValidations,
    getStarted,
    checkEmail,
} from "../../../common/js/getStartedForms";
import {onlyDigitsKeypress} from "../../../common/js/commonForms";

export default {
    setup() {
        return {v$: useVuelidate()};
    },
    data() {
        return {
            fields: getStartedFormFields,
            questions:
                [
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
                        title: 'What happens in the event of a late payment or non payment?',
                        answer: 'As mentioned previously, this website is not a lender and therefore cannot provide any specific information regarding late payment or non-payment. In the case that you are unable to make a payment on time to your lender, you are encouraged to contact your lender immediately. Late payment may result in additional fees depending on your lender’s terms and conditions and your state’s regulations. Reviewing your agreement with the lender to acknowledge the consequences of late payment is highly recommended. Failing to repay your loan can lead to several penalties imposed by lenders, including but not limited to, charges for late payment, forwarding your account to a collection agency, or reporting your lack of payment to a credit bureau which can negatively impact your credit score. It is important to remember that non-payment of loans may impact your credit score negatively if your credit provider chooses to report delinquencies. This website is not a debt collector nor do we engage in any collections. You are encouraged to contact your lender directly in the event of nonpayment.',
                        isExpanded: false
                    },
                    {
                        title: 'What if i\'m not connected?',
                        answer: 'Lenders in our network will ultimately determine whether you will be offered a loan or are eligible for certain loan products. Our website is not a lender and does not make financial determinations. If you are unable to connect with a lender for a loan on this website, we may offer you the opportunity get connected with other lender networks which provide smaller amounts of up to $1,500. ',
                        isExpanded: false
                    }
                ],
            howItWorkActive:[true,false,false],
            app_name: document.querySelector('title').text,
            token: document.querySelector('meta[name="form-token"]').content,
            heroImage: siteSettings.elements.EE_hero['background-image'],
            advantagesBG: siteSettings.elements.EE_advantages.CE_bg['background-image'],
            comfortBG: siteSettings.elements.EE_hiw.CE_pic1['src'],
            comfortBG2: siteSettings.elements.EE_hiw.CE_pic2['src'],
            whyUsBG: siteSettings.elements.EE_wu.CE_bg['background-image'],
            lastBG: siteSettings.elements.EE_last.CE_bg['background-image'],
            mainButtonColor: siteSettings.general.main_button_color.value,
            mainButtonColorSecond: siteSettings.general.button_color_second.value,
            mainColor: siteSettings.general.main_color.value,
        }
    },
    validations() {
        return getStartedFormValidations;
    },
    computed: {
        heroImage() {
            return 'background-image: ' + this.heroImage + ';background-position: center center;min-height: 900px;';
        },
        whyUsBG() {
            return 'background-image: ' + this.whyUsBG + ';';
        },
        advantagesBG() {
            return 'background-image: ' + this.advantagesBG + ';background-size: cover;background-position: center center;';
        },
        comfortBG() {
            return this.comfortBG;
        },
        comfortBG2() {
            return this.comfortBG2;
        },
        lastBG() {
            return 'background-image: url("' + this.lastBG + '"); background-size: cover; background-position:center;';
        },
        mainColor() {
            return {
                '--main-color': this.mainColor,
                '--main-button-color': this.mainButtonColor,
                '--main-button-color-second': this.mainButtonColorSecond,
            };
        },
    },
    async mounted() {
        await handleGetParams(this);
        await countVisitor(this);
        await triggerReapplyForm(this);
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
        goToForm() {
            this.removeRefillData();
            window.location.href = '/form';
        },
        handleAccordion(selectedIndex) {
            this.questions.forEach((_, index) => {
                this.questions[index].isExpanded = index === selectedIndex ? !this.questions[index].isExpanded : false
            })
        },
        setActiveHowItWorks(index) {
            for(let i = 0; i < this.howItWorkActive.length; i++) {
                this.howItWorkActive[i] = false;
            }
            this.howItWorkActive[index] = true;
        },
    }
};
</script>

<style lang="scss" scoped>
    @import "../../sass/home.scss";
</style>
