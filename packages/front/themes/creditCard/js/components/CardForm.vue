<template>
    <div class="container-card-form text-justify"  :style="'--btn-color-first:' + btnColorFirst + ';--btn-color-second:' + btnColorSecond + ';--sub-header-color:' + subHeaderColor">
        <div class="row w-100 m-0">
            <div class="col-lg-6 col-md-12 p-0 mb-lg-5 mb-4 first-col">
                <div class="card-form-info-container">
                    <div class="card-form-logo-container">
                        <img class="card-form-logo" :src="logo">
                    </div>
                    <h2 class="main-header-text">{{ header }}</h2>
                    <div class="see">{{ subHeader }} <span class="me-2">{{ subHeaderColorText }}</span>
                        <svg class="d-none d-sm-inline-block" width="84" height="10" viewBox="0 0 84 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="84" height="10" fill="url(#paint0_linear_321_656)"/>
                            <defs>
                                <linearGradient id="paint0_linear_321_656" x1="84" y1="4.99999" x2="-1.84262e-07" y2="4.99999" gradientUnits="userSpaceOnUse">
                                    <stop :stop-color="subHeaderColor"/>
                                    <stop offset="1" :stop-color="subHeaderColor" stop-opacity="0"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <!-- <img class="card-form-img mb-3" :src="heroImage"> -->
                    <div class="bullet-point bullet-point-bordered position-relative d-none d-lg-block">
                        <div class="d-flex align-items-center">
                            <img src="/img/BankProtection.png" class="me-2" style="height: 27px; width: auto;" alt="">
                            <h4 class="bullet-point-header text-uppercase">Bank-level protection</h4>
                        </div>
                        <p>We use industry standard 256-bit encryption to keep your personal data safe</p>
                        <svg class="position-absolute top-0 end-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 20V0L20 20H0Z" fill="#E3E3E3"/>
                        </svg>
                    </div>
                    <div class="bullet-point bullet-point-bordered position-relative d-none d-lg-block">
                        <div class="d-flex align-items-center">
                            <img src="/img/SpecialOffers.png" class="me-2" style="height: 27px; width: auto;" alt="">
                            <h4 class="bullet-point-header text-uppercase">Special offers</h4>
                        </div>
                        <p>See if you're prequalified for special offers</p>
                        <svg class="position-absolute top-0 end-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 20V0L20 20H0Z" fill="#E3E3E3"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 ps-lg-3 px-0 second-col">
                <div class="card-form-control-wrapper">
                    <input type="text" name="first_name" id="first_name" class="form-control card-form-control focus-border-animation"
                           placeholder="First Name" @input="dynamicValidation"
                           v-bind:class="{'is-invalid': v$.fields.first_name.$error}"
                           v-model="fields.first_name" maxlength="128">
                    <div id="invalid-first_name" class="text-left error"></div>
                    <div id="invalid-validation-first_name">
                        <p
                            v-for="error of v$.fields.first_name.$errors"
                            :key="error.$uid"
                            class="mb-4"
                        >
                            <label for="first_name" class="text-left error">{{
                                    error.$message
                                }}</label>
                        </p>
                    </div>
                </div>
                <div class="card-form-control-wrapper">
                    <input type="text" name="last_name" id="last_name" class="form-control card-form-control focus-border-animation"
                           placeholder="Last Name" @input="dynamicValidation"
                           v-bind:class="{'is-invalid': v$.fields.last_name.$error}"
                           v-model="fields.last_name" maxlength="128">
                    <div id="invalid-last_name" class="text-left error"></div>
                    <div id="invalid-validation-last_name">
                        <p
                            v-for="error of v$.fields.last_name.$errors"
                            :key="error.$uid"
                            class="mb-4"
                        >
                            <label for="last_name" class="text-left error">{{
                                    error.$message
                                }}</label>
                        </p>
                    </div>
                </div>
                <div class="card-form-control-wrapper">
                    <select class="form-control card-form-control  focus-border-animation" id="state"
                            name="state" v-model="fields.state"
                            v-bind:class="{'is-invalid': v$.fields.state.$error, 'gray': fields.state === ''}">
                        <option value="">State</option>
                        <option value="AK">Alaska</option>
                        <option value="AL">Alabama</option>
                        <option value="AR">Arkansas</option>
                        <option value="AZ">Arizona</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DC">District of Columbia</option>
                        <option value="DE">Delaware</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="IA">Iowa</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MD">Maryland</option>
                        <option value="ME">Maine</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MO">Missouri</option>
                        <option value="MS">Mississippi</option>
                        <option value="MT">Montana</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="NE">Nebraska</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NV">Nevada</option>
                        <option value="NY">New York</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VA">Virginia</option>
                        <option value="VT">Vermont</option>
                        <option value="WA">Washington</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WV">West Virginia</option>
                        <option value="WY">Wyoming</option>
                    </select>
                    <div id="invalid-state" class="text-left error"></div>
                    <div id="invalid-validation-state">
                        <p
                            v-for="error of v$.fields.state.$errors"
                            :key="error.$uid"
                            class="mb-4"
                        >
                            <label for="state" class="text-left error">{{
                                    error.$message
                                }}</label>
                        </p>
                    </div>
                </div>
                <div class="card-form-control-wrapper">
                    <input type="email" name="email" id="email" class="form-control card-form-control focus-border-animation"
                           placeholder="Email" @input="dynamicValidation"
                           v-bind:class="{'is-invalid': v$.fields.email.$error}"
                           v-model="fields.email" maxlength="128">
                    <div id="invalid-email" class="text-left error"></div>
                    <div id="invalid-validation-email">
                        <p
                            v-for="error of v$.fields.email.$errors"
                            :key="error.$uid"
                            class="mb-4"
                        >
                            <label for="email" class="text-left error">{{
                                    error.$message
                                }}</label>
                        </p>
                    </div>
                </div>
                <div class="notice-input">
                    We'll send you information on cards you might like, plus news and advice from our experts.
                    By providing your email address, you agree to {{ app_name }} <a class="card-a" href="/privacy">privacy policy</a>.
                </div>
                <div class="d-flex align-items-center checkbox-field mt-4">
                    <div class="radio-input" @click="toggleSubscribe">
                        <div class="radio-input-active" v-show="fields.subscribe"></div>
                    </div>
                    <div>
                        By clicking “{{ btnText }}”, I consent to the <a class="card-a" href="/privacy">Privacy Policy</a>, <a class="card-a" href="/terms">Terms of Use</a>, and <a class="card-a" href="/econsent">E-Consent</a>.
                    </div>
                </div>
                <div id="invalid-validation-subscribe">
                    <p
                        v-for="error of v$.fields.subscribe.$errors"
                        :key="error.$uid"
                        class="mb-4"
                    >
                        <label for="email" class="text-left error">{{
                                error.$message
                            }}</label>
                    </p>
                </div>
                <div class="get-matches mt-4 d-flex align-items-center" @click="submit">
                    <div class="get-matches-text">{{ btnText }}</div>
                    <span class="get-matches-span ms-auto justify-content-center">
                        <svg width="42" height="50" viewBox="0 0 42 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.3292 3.42317H0.585938C0.262354 3.42317 0 3.68552 0 4.0091V6.74348C0 7.06706 0.262354 7.32942 0.585938 7.32942H35.3292V9.57839C35.3292 10.6224 36.5914 11.1453 37.3297 10.4071L41.5318 6.20495C41.9895 5.74729 41.9895 5.00529 41.5318 4.54768L37.3297 0.345578C36.5915 -0.392655 35.3292 0.130197 35.3292 1.17424V3.42317Z" fill="#F6F6F6"/>
                        </svg>
                    </span>
                </div>
            </div>
            <div class="bullet-point bullet-point-bordered position-relative mt-5 d-block d-lg-none">
                <div class="d-flex align-items-center">
                    <img src="/img/BankProtection.png" class="me-3" style="height: 27px; width: auto;" alt="">
                    <h4 class="bullet-point-header text-uppercase">Bank-level protection</h4>
                </div>
                <p>We use industry standard 256-bit encryption to keep your personal data safe</p>
                <svg class="position-absolute top-0 end-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 20V0L20 20H0Z" fill="#E3E3E3"/>
                </svg>

            </div>
            <div class="bullet-point bullet-point-bordered position-relative d-block d-lg-none">
                <div class="d-flex align-items-center">
                    <img src="/img/SpecialOffers.png" class="me-2" style="height: 27px; width: auto;" alt="">
                    <h4 class="bullet-point-header text-uppercase">Special offers</h4>
                </div>
                <p>See if you're prequalified for special offers</p>
                <svg class="position-absolute top-0 end-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 20V0L20 20H0Z" fill="#E3E3E3"/>
                </svg>
            </div>
            <div class="col-lg-6 col-md-12 mt-9 mb-68">
                <div class="hero-container text-align-center">
                    <img class="card-form-img " :src="heroImage">
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import {useLoading} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import useVuelidate from "@vuelidate/core";
import {
    required,
    email,
    alpha,
    minLength,
    maxLength,
    helpers,
    sameAs
} from "@vuelidate/validators";
import {
    alphabets,
    emailSymbols,
} from "../../../common/js/validations";

import axios from 'axios';

export default {
    name: "CardForm",
    setup() {
        return {v$: useVuelidate()};
    },
    validations() {
        return {
            fields: {
                email: {
                    required,
                    email: helpers.withMessage('Please enter a valid email address', email),
                    emailSymbols: helpers.withMessage('Not allowed chars', emailSymbols),
                },
                first_name: {
                    required,
                    alphabets: helpers.withMessage('Not allowed chars', alphabets),
                    minLengthValue: minLength(2),
                    maxLengthValue: maxLength(128)
                },
                last_name: {
                    required,
                    alphabets: helpers.withMessage('Not allowed chars', alphabets),
                    minLengthValue: minLength(2),
                    maxLengthValue: maxLength(128)
                },
                state: {required, alpha, minLengthValue: minLength(2), maxLengthValue: maxLength(2)},
                subscribe: {sameAs: helpers.withMessage('You must agree to terms and conditions', sameAs(1))},
            },
        };
    },
    data() {
        return {
            token: document.querySelector('meta[name="form-token"]').content,
            app_name: document.querySelector('meta[name="title"]').content,
            header: document.querySelector('meta[name="header"]').content,
            subHeader: document.querySelector('meta[name="sub-header"]').content,
            subHeaderColorText: document.querySelector('meta[name="sub-header-color-text"]').content,
            subHeaderColor: document.querySelector('meta[name="sub-header-color"]').content,
            btnText: document.querySelector('meta[name="btn-text"]').content,
            btnColorFirst: document.querySelector('meta[name="card-button-color-first"]').content,
            btnColorSecond: document.querySelector('meta[name="card-button-color-second"]').content,
            heroImage: document.querySelector('meta[name="hero-image"]').content,
            logo: document.querySelector('meta[name="logo"]').content,
            fields: {
                email: '',
                first_name: '',
                last_name: '',
                state: '',
                click_id: '',
                sub_ids: '',
                subscribe: 1,
            },
        };
    },
    mounted() {

    },
    methods: {
        submit() {
            this.v$.$touch();
            if (this.v$.$error) {
                return;
            }
            this.fields.click_id = this.$cookies.get('click_id');
            this.fields.sub_ids = this.$cookies.get('sub_ids');
            let useLoader = useLoading();
            let loader = useLoader.show();
            axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
            axios
                .post(import.meta.env.VITE_API_CREDIT_CARD, this.fields)
                .then((response) => {
                    this.$emit('showCardItems',response.data);
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                    loader.hide();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        dynamicValidation(event) {
            const field = event.target.id;
            const value = this.fields[field];
            if(field === 'email'){
                let valueSplit = value.split('@');
                if(valueSplit.length === 2){
                    if(valueSplit[1].length >= 6){
                        this.v$.fields[field].$touch();
                    }
                }else if(value.split('@').length > 2){
                    this.v$.fields[field].$touch();
                }
            }

            if( field === 'first_name'  || field === 'last_name' || field === 'state'){
                if(value.length >= 2){
                    this.v$.fields[field].$touch();
                }
            }
        },
        toggleSubscribe() {
            this.fields.subscribe ? this.fields.subscribe = 0 : this.fields.subscribe = 1;
        },
    },
}
</script>
