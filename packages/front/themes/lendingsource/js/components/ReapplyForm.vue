<template>
    <div class="GSC_reapply" :style="mainColor">
        <div v-show="!waiting" class="above-form py-5"   id="specialist">
            <div class="container pt-5 pb-4">
                <div class="row">
                    <div class="col-12">
                        <div class="pb-3 mb-4">
                            <h1 class="text-center">Welcome back, {{ fields.first_name }}!</h1>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="chat-wrapper">
                            <div class="chat-inner">
                                <img :src="'/img/specialists/'+specialist+'.jpg'" class="me-4 rounded-circle" alt="">
                                <div class="msg" data-value="1" style="display: block;">
                                    <div class="chat-msg">We've pre-filled your information from your last loan request.
                                        Please ensure everything is up-to-date and correct.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="!waiting" class="above-form py-5 d-none" id="specialist-2">
            <div class="container pt-5">
                <div class="row">
                    <div class="col-12">
                        <div><h1 class="text-center font-weight-600">Welcome back, {{ fields.first_name }}!</h1>
                            <p class="text-center px-2">We've gone and head and pre-filled your information from
                                previous loan request. Please ensure everything is up-to-date and correct.</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="!waiting">
            <div class="form-wrapper" :style="heroStyle">
                <div class="container-wrapper py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 z-index-2">
                                <form class="steps main_form text-start" method="POST" @submit.prevent="submit">
                                    <div class="step" style="display: block;">
                                        <div class="above-buttons welcome-back">
                                            <div class="row">
                                                <div class="col-md-6 mt-3">
                                                    <div class="data-review">
                                                        <p>Loan Amount</p>
                                                        <select name="requested_amount" id="requested_amount"
                                                                class="select-radio-wrapper"
                                                                @change="onChangeRequestedAmount()"
                                                                v-model="fields.requested_amount">
                                                            <option value="500">$100 - $500</option>
                                                            <option value="800">$500 - $1000</option>
                                                            <option value="1000">$1000 - $1500</option>
                                                            <option value="1500">$1500 - $2000</option>
                                                            <option value="2500">$2000 - $3000</option>
                                                            <option value="3500">$3000 - $4000</option>
                                                            <option value="4500">$4000 - $5000</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mt-3">
                                                    <div class="data-review">
                                                        <p>Monthly Net Income</p>
                                                        <select name="net_month_income" id="net_month_income"
                                                                class="select-radio-wrapper"
                                                                v-model="fields.net_month_income">
                                                            <option value="1000">$1000 or less</option>
                                                            <option value="1500">$1001 - $1500</option>
                                                            <option value="2000">$1501 - $2000</option>
                                                            <option value="2500">$2001 - $2500</option>
                                                            <option value="3000">$2501 - $3000</option>
                                                            <option value="3500">$3001 - $3500</option>
                                                            <option value="4000">$3501 - $4000</option>
                                                            <option value="4500">$4001 - $4500</option>
                                                            <option value="5000">$4501 - $5000</option>
                                                            <option value="6000">More than $5000</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6 mt-3">
                                                    <div class="data-review">
                                                        <p>Pay Frequency</p>
                                                        <select
                                                            name="pay_frequency" id="pay_frequency"
                                                            class="select-radio-wrapper"
                                                            v-model="fields.pay_frequency"
                                                            @change="nextPayDayChange()">
                                                            <option v-for="t in this.pay_frequency" :value="t" :key="t">
                                                                {{ t }}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mt-3">
                                                    <div class="data-review"
                                                         v-bind:class="{'not-valid': v$.fields.next_pay_day.$error}">
                                                        <p>Next Pay Date</p>
                                                        <Datepicker
                                                            v-model="fields.next_pay_day"
                                                            :input-attr="{name:'next_pay_day',id:'next_pay_day'}"
                                                            model-type="MM-dd-yyyy"
                                                            placeholder="Next Pay Date"
                                                            :disabled-week-days="[6, 0]"
                                                            :min-date="new Date()"
                                                            :max-date="new Date().setFullYear(new Date().getFullYear() + 1)"
                                                            prevent-min-max-navigation
                                                            reverse-years
                                                            :year-range="[new Date().getFullYear(),2100]"
                                                            format="MM-dd-yyyy"
                                                            input-class-name="input-date"
                                                            :enable-time-picker="false"
                                                            :auto-apply="true"
                                                            week-start="0"
                                                            @update:modelValue="nextPayDayChange"
                                                            uid="next_pay_day"
                                                        />
                                                    </div>
                                                    <p class="d-none" id="invalid-next_pay_day"></p>
                                                    <p
                                                        v-for="error of v$.fields.next_pay_day.$errors"
                                                        :key="error.$uid"
                                                    >
                                                        <span class="text-start text-danger">{{ error.$message }}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6 mt-3">
                                                    <div class="data-review"
                                                         v-bind:class="{'not-valid': v$.fields.second_pay_day.$error}">
                                                        <p>Second Pay Date</p>
                                                        <Datepicker
                                                            v-model="fields.second_pay_day"
                                                            :input-attr="{name:'second_pay_day',id:'second_pay_day'}"
                                                            placeholder="Second Pay Date"
                                                            model-type="MM-dd-yyyy"
                                                            :disabled-week-days="[6, 0]"
                                                            :min-date="new Date(this.fields.next_pay_day).setDate(new Date(this.fields.next_pay_day).getDate() + 1)"
                                                            :max-date="new Date().setFullYear(new Date().getFullYear() + 1)"
                                                            prevent-min-max-navigation
                                                            reverse-years
                                                            :year-range="[new Date().getFullYear(),2100]"
                                                            ref="second_pay_dayDatepicker"
                                                            input-class-name="input-date"
                                                            :enable-time-picker="false"
                                                            :auto-apply="true"
                                                            format="MM-dd-yyyy"
                                                            week-start="0"
                                                            uid="second_pay_day"
                                                        />
                                                    </div>
                                                    <p class="d-none" id="invalid-second_pay_day"></p>
                                                    <p
                                                        v-for="error of v$.fields.second_pay_day.$errors"
                                                        :key="error.$uid"
                                                    >
                                                        <span class="text-start text-danger">{{ error.$message }}</span>
                                                    </p>
                                                </div>
                                                <div class="col-md-6 mt-3">
                                                    <div class="data-review">
                                                        <p>Credit score</p>
                                                        <select
                                                            name="credit_score" id="credit_score"
                                                            class="select-radio-wrapper"
                                                            :value="this.fields.credit_score"
                                                            v-model="fields.credit_score">
                                                            <option v-for="(t,k) in this.credit_scores" :value="k" :key="t">
                                                                {{ t }}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row" v-bind:class="{'d-none': mark_imported === 0}">
                                                <div class="col-md-6 mt-3">
                                                    <div class="data-review"
                                                         v-bind:class="{'not-valid': v$.fields.routing_number.$error}">
                                                        <p>ABA/Bank Routing Number</p>
                                                        <input id="routing_number" type="text" name="routing_number"
                                                               maxlength="9" @keydown="onlyDigitsKeypress"
                                                               v-model.trim="fields.routing_number"
                                                               @copy.prevent @paste.prevent @cut.prevent
                                                               @change="autocompleteAba()"
                                                               placeholder="ABA/Bank routing number" autocomplete="off">
                                                    </div>
                                                    <p class="d-none text-start text-danger" id="invalid-routing_number"></p>
                                                    <p
                                                        v-for="error of v$.fields.routing_number.$errors"
                                                        :key="error.$uid"
                                                    >
                                                        <span class="text-start text-danger">{{ error.$message }}</span>
                                                    </p>
                                                </div>
                                                <div class="col-md-6 mt-3">
                                                    <div class="data-review" v-bind:class="{'not-valid': v$.fields.account_number.$error}">
                                                        <p>Account Number</p>
                                                        <input id="account_number" type="text" name="account_number"
                                                               v-model.trim="fields.account_number" maxlength="30" @keydown="onlyDigitsKeypress"
                                                               placeholder="Account number" autocomplete="off"
                                                               @copy.prevent @paste.prevent @cut.prevent>
                                                    </div>
                                                    <p id="invalid-account_number"></p>
                                                    <p
                                                        v-for="error of v$.fields.account_number.$errors"
                                                        :key="error.$uid"
                                                    >
                                                        <span class="text-start text-danger">{{ error.$message }}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6 mt-3">
                                                    <div class="data-review"
                                                         v-bind:class="{'not-valid': v$.fields.job_title.$error}">
                                                        <p>Job Title</p>
                                                        <input id="job_title" type="text" name="job_title"
                                                               v-model.trim="fields.job_title" maxlength="128"
                                                               placeholder="Job Title">
                                                    </div>
                                                    <p class="d-none" id="invalid-job_title"></p>
                                                    <p
                                                        v-for="error of v$.fields.job_title.$errors"
                                                        :key="error.$uid"
                                                    >
                                                        <span class="text-start text-danger">{{ error.$message }}</span>
                                                    </p>
                                                </div>
                                                <div class="col-md-6 mt-3">
                                                    <div class="data-review"
                                                         v-bind:class="{'not-valid': v$.fields.ssn.$error}">
                                                        <p>Last 4 Digits of SSN</p>
                                                        <input id="ssn" type="text" name="ssn" maxlength="4"
                                                               placeholder="SSN" v-model.trim="fields.ssn"
                                                               autocomplete="off" @keydown="onlyDigitsKeypress"
                                                               @copy.prevent @paste.prevent @cut.prevent>
                                                    </div>
                                                    <p id="invalid-ssn"></p>
                                                    <p
                                                        v-for="error of v$.fields.ssn.$errors"
                                                        :key="error.$uid"
                                                    >
                                                        <span class="text-start text-danger">{{ error.$message }}</span>
                                                    </p>
                                                    <p class="mt-2 mb-0" v-bind:class="{'d-none': debt_fields_show === 1}"><small class="font-weight-light text-white">Required
                                                        (4
                                                        digits)</small></p>
                                                </div>
                                            </div>
                                            <div class="row" v-bind:class="{'d-none': debt_fields_show !== 1}">
                                                <div class="col-md-6 mt-3">
                                                    <div class="data-review">
                                                        <p>Debt Amount</p>
                                                        <select class="select-radio-wrapper" name="debt_amount"
                                                                id="debt_amount" v-model.lazy="fields.debt_amount"
                                                                >
                                                            <option value="0">No debt</option>
                                                            <option value="7500">Under $7,500</option>
                                                            <option value="10000">$7,500 - $10,000</option>
                                                            <option value="15000">$10,000 - $15,000</option>
                                                            <option value="20000">$15,000 - $20,000</option>
                                                            <option value="25000">$20,000 - $25,000</option>
                                                            <option value="30000">$25,000 - $30,000</option>
                                                            <option value="35000">$30,000 - $35,000</option>
                                                            <option value="40000">$35,000 - $40,000</option>
                                                            <option value="45000">$40,000 - $45,000</option>
                                                            <option value="50000">$45,000 +</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="text-white mt-4"><small v-if="!modalWindow">By Clicking “Submit,” I acknowledge and
                                                consent to the <a href="/privacy">Privacy Policy</a>, <a href="/terms">Terms
                                                    of Use</a>, <a href="/econsent">E-Consent</a>, and <a href="/credit_disclosure">Credit
                                                    Disclosures</a> and authorize You and third-parties to use automated
                                                methods
                                                (automatic dialing systems, artificial or prerecorded voice messages,
                                                and text messages) to send marketing messages to the phone numbers that
                                                I provide, even if they appear on a Do Not Call List. Message and data
                                                rates apply. Your consent is not a requirement to receive the services
                                                provided by this website, lenders, or financial service providers that
                                                you may connect with. You may opt out of receiving marketing messages at
                                                any time. </small>
                                                <small v-else>By Clicking “Submit,” I acknowledge and
                                                    consent to the <span data-bs-toggle="modal" data-bs-target="#privacy">Privacy Policy</span>,
                                                    <span data-bs-toggle="modal" data-bs-target="#terms">Terms of Use</span>,
                                                    <span data-bs-toggle="modal" data-bs-target="#econsent">E-Consent</span>,
                                                    and <span data-bs-toggle="modal" data-bs-target="#credit_disclosure">Credit
                                                        Disclosures</span> and authorize You and third-parties to use automated
                                                    methods
                                                    (automatic dialing systems, artificial or prerecorded voice messages,
                                                    and text messages) to send marketing messages to the phone numbers that
                                                    I provide, even if they appear on a Do Not Call List. Message and data
                                                    rates apply. Your consent is not a requirement to receive the services
                                                    provided by this website, lenders, or financial service providers that
                                                    you may connect with. You may opt out of receiving marketing messages at
                                                    any time. </small>
                                            </p>
                                            <div class="row">
                                                <div class="col-md-6 mt-3">
                                                    <button type="submit" :disabled='!network' class="btn btn-yellow mt-4">Submit</button>
                                                </div>
                                                <div class="col-md-6 mt-3 align-self-end">
                                                    <small class="text-white">
                                                        <a class="" @click="refill" ><u class="text-white ps-0" type="button">Click here</u></a> if you want to
                                                        refill your information
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <WaitingPage ref="WaitingPage"></WaitingPage>
    </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";

import {
    findGetParameter,
    phoneMask,
    saveError,
    saveVariable
} from "../../../common/js/commonGeneral";

import {
    reapplyData,
    mountedReapply,
    onChangeRequestedAmount,
    refill,
    refillSuccess,
    setRadioButtons,
    submit,
    submitSuccess,
    sendSubmitRequest,
} from "../../../common/js/reapplyForms";

import {
    mountedCommonForm,
    nextPayDayChange,
    disableNextPayDay,
    disableSecondPayDay,
    onlyDigitsKeypress,
    autocompleteAba,
    sendRequestCheckStatusDecision,
    visibilityChangeListener,
    removeCookies
} from "../../../common/js/commonForms";
import {helpers, maxLength, minLength, numeric, required} from "@vuelidate/validators";
import {next_pay_day, onlyLatinAlphabetsNumeric, second_pay_day} from "../../../common/js/validations";
import {useLoading} from "vue-loading-overlay";
import 'vue-loading-overlay/dist/css/index.css';

export default {
    setup() {
        return {
            v$: useVuelidate()
        };
    },
    data() {
        return {
            ...reapplyData, ...{
                specialist: 'Emma',
                heroImage: siteSettings.elements.EE_hero['background-image'],
                buttonColor: siteSettings.general.main_button_color.value,
                mainColor: siteSettings.general.main_color.value,
                linkColor: siteSettings.general.link_color.value,
                radioButtonColor: siteSettings.general.radio_button_color?.value ?? siteSettings.general.main_button_color.value,
                radioButtonTextColor: siteSettings.general.radio_button_text_color?.value ?? siteSettings.general.main_color.value,
                modalWindow: false,
            }
        };
    },
    validations() {
        return {
            fields: {
                ssn: {required, numeric, minLengthValue: minLength(4), maxLengthValue: maxLength(4)},
                pay_frequency: {required},
                requested_amount: {required, numeric},
                net_month_income: {required},
                next_pay_day: {
                    required,
                    next_pay_day: helpers.withMessage('Next pay day must be later than yesterday', next_pay_day)
                },
                second_pay_day: {
                    required,
                    second_pay_day: helpers.withMessage('Second pay day must be later than next pay day', second_pay_day)
                },
                credit_score: {required},
                job_title: {
                    required,
                    minLengthValue: minLength(2),
                    maxLengthValue: maxLength(128),
                    onlyLatinAlphabetsNumeric: helpers.withMessage('Not allowed chars', onlyLatinAlphabetsNumeric),
                },
                debt_amount: this.debt_fields_show ? {required} : {},
                account_number: this.mark_imported ? {
                    required,
                    numeric,
                    minLengthValue: minLength(4),
                    maxLengthValue: maxLength(30)
                } : {},
                bank_name: this.mark_imported ? {required} : {},
                bank_phone: this.mark_imported ? {required} : {},
                routing_number: this.mark_imported ? {
                    required,
                    numeric,
                    minLengthValue: minLength(9),
                    maxLengthValue: maxLength(9)
                } : {},
            }
        }
    },
    async mounted() {
        let useLoader = useLoading();
        let loader = useLoader.show({
            container: this.$refs.formContainer
        });

        let el = document.querySelector('ReapplyForm2');
        el = document.querySelector('ReapplyForm');
        if (el) {
            if (el.dataset.hideSpecialist === 'true') {
                document.getElementById('specialist').remove();
                document.getElementById('specialist-2').classList.remove('d-none');
            }
        }
        if (el) {
            if (el.dataset.modalWindow === 'true') {
                this.modalWindow = true;
            }
        }
        await mountedReapply(this, () => {
            document.querySelector('html body #app .form-wrapper .container-wrapper').style.backgroundColor = this.mainColor + 'E6';
            this.fields.ssn = findGetParameter('ssn');
            if (this.$cookies.isKey('specialist')) {
                this.specialist = this.$cookies.get('specialist');
            } else {
                const names = ['Emma', 'Olivia', 'Amelia', 'Charlotte'];
                const randomIndex = Math.floor(Math.random() * 4);
                this.$cookies.set('specialist', names[randomIndex], 60 * 60);
                this.specialist = names[randomIndex];
            }
        });
        await mountedCommonForm(this, 1);

        loader.hide();
    },
    computed: {
        heroStyle() {
            return 'background: ' + this.heroImage + ' center center / cover no-repeat;';
        },
        mainColor() {
            return {
                '--main-color': this.mainColor,
                '--main-button-color': this.buttonColor,
                '--radio-button-color': this.radioButtonColor,
                '--radio-button-text-color': this.radioButtonTextColor,
                '--link-color': this.linkColor
            };
        },
    },
    methods: {
        nextPayDayChange,
        onChangeRequestedAmount,
        disableNextPayDay,
        disableSecondPayDay,
        onlyDigitsKeypress,
        autocompleteAba,
        refill,
        submit,
        visibilityChangeListener,
        sendSubmitRequest,
        sendRequestCheckStatusDecision,
        refillSuccess,
        submitSuccess,
        removeCookies,
        phoneMask,
        saveError,
        saveVariable,
        setRadioButtons
    }
};
</script>

<style lang="scss" scoped>
    @import "../../sass/reapply.scss";
    @import "../../sass/forms.scss";
</style>
