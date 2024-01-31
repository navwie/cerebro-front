<template>
    <div id="wrapper" class="GSC_reaply clearfix" :style="mainColor">
        <!-- Content
        ============================================= -->
        <section id="content" v-show="!waiting">
            <div class="row mt-5">
                <div class="col-12">
                    <h1 class="text-center pt-0">Welcome back, {{ fields.first_name }}!</h1>
                    <p class="text-center px-2">We've gone and head and pre-filled your information from previous loan
                        request. Please ensure everything is up-to-date and correct.</p>
                </div>
            </div>
            <div class="content-wrap py-0">
                <div class="row align-items-stretch justify-content-between g-0 ">
                    <div class="col-lg-11 col-xl-8 col-12 p-5 p-lg-6 m-auto" style="padding-top: 0px!important;">
                        <div class="form-widget" data-alert-type="inline">
                            <div class="form-result"></div>
                            <form id="step-form" class="mb-0" @submit.prevent>
                                <div class="form-process"></div>
                                <div class="tab-content">
                                    <div class="block-form-2">
                                        <h2 class="mb-5 text-uppercase ls1 fw-bold text-green"><i
                                            class="icon-line-folder"></i> Reapply</h2>
                                        <div class="row">
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="requested_amount">Amount</label>
                                                <select class="form-select select-form" name="requested_amount"
                                                        id="requested_amount" v-model="fields.requested_amount"
                                                        v-bind:class="{'not-valid': v$.fields.requested_amount.$error}"
                                                        @change="onChangeRequestedAmount">
                                                    <option value="500">$100 - $500</option>
                                                    <option value="800">$500 - $1000</option>
                                                    <option value="1000">$1000 - $1500</option>
                                                    <option value="1500">$1500 - $2000</option>
                                                    <option value="2500">$2000 - $3000</option>
                                                    <option value="3500">$3000 - $4000</option>
                                                    <option value="4500">$4000 - $5000</option>
                                                </select>
                                                <div id="invalid-requested_amount" class="d-none error"></div>
                                                <div id="invalid-validation-requested_amount">
                                                    <p
                                                        v-for="error of v$.fields.requested_amount.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="requested_amount"
                                                               class="text-left error">{{ error.$message }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-4">
                                                <label for="net_month_income">Monthly Net Income</label>
                                                <select class="form-select select-form" name="net_month_income"
                                                        id="net_month_income" v-model="fields.net_month_income"
                                                        v-bind:class="{'not-valid': v$.fields.net_month_income.$error}">
                                                    <option :value="null">Choose Monthly Net Income</option>
                                                    <option value="1000">$1000 or less</option>
                                                    <option value="1500">$1001 - $1500</option>
                                                    <option value="2000">$1501 - $2000</option>
                                                    <option value="2500">$2001 - $2500</option>
                                                    <option value="3000">$2501 - $3000</option>
                                                    <option value="3500">$3001 - $3500</option>
                                                    <option value="4000">$3501 - $4000</option>
                                                    <option value="4500">$4001 - $4500</option>
                                                    <option value="5000">$4501 - $5000</option>
                                                    <option value="6000">More than $5,000</option>
                                                </select>
                                                <div id="invalid-net_month_income" class="d-none error"></div>
                                                <div id="invalid-validation-net_month_income">
                                                    <p
                                                        v-for="error of v$.fields.net_month_income.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="net_month_income"
                                                               class="text-left error">{{ error.$message }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="pay_frequency">Pay Frequency</label>
                                                <select class="form-select select-form" name="pay_frequency"
                                                        id="pay_frequency" v-model="fields.pay_frequency"
                                                        v-bind:class="{'not-valid': v$.fields.pay_frequency.$error}"
                                                        @change="nextPayDayChange()">
                                                    <option :value="null">Choose pay frequency</option>
                                                    <option v-for="t in this.pay_frequency" :value="t"
                                                            :key="'pay_frequency'+t">
                                                        {{ t }}
                                                    </option>
                                                </select>
                                                <div id="invalid-pay_frequency" class="d-none error"></div>
                                                <div id="invalid-validation-pay_frequency">
                                                    <p
                                                        v-for="error of v$.fields.pay_frequency.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="pay_frequency"
                                                               class="text-left error">{{ error.$message }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <h3>Next Pay Day</h3>
                                                <Datepicker
                                                    v-model="fields.next_pay_day"
                                                    v-bind:class="{'not-valid': v$.fields.next_pay_day.$error}"
                                                    :input-attr="{name:'next_pay_day',id:'next_pay_day'}"
                                                    model-type="MM-dd-yyyy"
                                                    placeholder="Next Pay Date"
                                                    :disabled-week-days="[6, 0]"
                                                    :min-date="new Date()"
                                                    :max-date="new Date().setFullYear(new Date().getFullYear() + 1)"
                                                    prevent-min-max-navigation
                                                    reverse-years
                                                    :year-range="[new Date().getFullYear(),2100]"
                                                    ref="next_pay_dayDatepicker"
                                                    format="MM-dd-yyyy"
                                                    input-class-name="input-date"
                                                    :enable-time-picker="false"
                                                    :auto-apply="true"
                                                    week-start="0"
                                                    @update:modelValue="nextPayDayChange"
                                                    uid="next_pay_day"
                                                />
                                                <div id="invalid-next_pay_day" class="d-none error"></div>
                                                <div id="invalid-validation-next_pay_day">
                                                    <p
                                                        v-for="error of v$.fields.next_pay_day.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="next_pay_day"
                                                               class="text-left error">{{ error.$message }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-6  mb-4">
                                                <h3>Follow Pay Day</h3>
                                                <Datepicker
                                                    v-model="fields.second_pay_day"
                                                    v-bind:class="{'not-valid': v$.fields.second_pay_day.$error}"
                                                    :input-attr="{name:'second_pay_day',id:'second_pay_day'}"
                                                    placeholder="Second Pay Date"
                                                    model-type="MM-dd-yyyy"
                                                    :disabled-week-days="[6, 0]"
                                                    :min-date="new Date(this.fields.next_pay_day).setDate(new Date(this.fields.next_pay_day).getDate() + 1)"
                                                    :max-date="new Date().setFullYear(new Date().getFullYear() + 1)"
                                                    ref="second_pay_dayDatepicker"
                                                    input-class-name="input-date"
                                                    prevent-min-max-navigation
                                                    reverse-years
                                                    :year-range="[new Date().getFullYear(),2100]"
                                                    :enable-time-picker="false"
                                                    :auto-apply="true"
                                                    format="MM-dd-yyyy"
                                                    week-start="0"
                                                    uid="second_pay_day"
                                                />
                                                <div id="invalid-second_pay_day" class="d-none error"></div>
                                                <div id="invalid-validation-second_pay_day">
                                                    <p
                                                        v-for="error of v$.fields.second_pay_day.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="second_pay_day"
                                                               class="text-left error">{{ error.$message }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="credit_score">Your Credit Score</label>
                                                <select class="form-select select-form" name="credit_score"
                                                        id="credit_score" v-model="fields.credit_score"
                                                        v-bind:class="{'not-valid': v$.fields.credit_score.$error}">
                                                    <option :value="null">Choose credit score</option>
                                                    <option v-for="(t,k) in this.credit_scores" :value="k" :key="t">
                                                        {{ t }}
                                                    </option>
                                                </select>
                                                <div id="invalid-credit_score" class="d-none error"></div>
                                                <div id="invalid-validation-credit_score">
                                                    <p
                                                        v-for="error of v$.fields.credit_score.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="credit_score"
                                                               class="text-left error">{{ error.$message }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4"
                                                 v-bind:class="{'d-none': mark_imported === 0}">
                                                <label for="routing_number">ABA/Bank Routing Number</label>
                                                <input id="routing_number" type="text" name="routing_number"
                                                       class="form-control"
                                                       maxlength="9" @keydown="onlyDigitsKeypress"
                                                       @copy.prevent @paste.prevent @cut.prevent
                                                       @change="autocompleteAba()"
                                                       placeholder="ABA/Bank routing number" autocomplete="off"
                                                       v-model.lazy="fields.routing_number"
                                                       v-bind:class="{'not-valid': v$.fields.routing_number.$error}">
                                                <p id="invalid-routing_number" class="d-none error"></p>
                                                <div id="invalid-validation-routing_number">
                                                    <p
                                                        v-for="error of v$.fields.routing_number.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="routing_number"
                                                               class="text-left error">{{ error.$message }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4"
                                                 v-bind:class="{'d-none': mark_imported === 0}">
                                                <label for="account_number">Account Number</label>
                                                <input id="account_number" type="text" name="account_number"
                                                       class="form-control"
                                                       maxlength="30" @keydown="onlyDigitsKeypress"
                                                       @copy.prevent @paste.prevent @cut.prevent
                                                       placeholder="Account number" autocomplete="off"
                                                       v-model.lazy="fields.account_number"
                                                       v-bind:class="{'not-valid': v$.fields.account_number.$error}">
                                                <div id="invalid-validation-account_number">
                                                    <p
                                                        v-for="error of v$.fields.account_number.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="account_number"
                                                               class="text-left error">{{ error.$message }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="job_title">Job Title</label>
                                                <input id="job_title" type="text" name="job_title" class="form-control"
                                                       maxlength="128"
                                                       placeholder="Job title" v-model="fields.job_title"
                                                       v-bind:class="{'not-valid': v$.fields.job_title.$error}">
                                                <div id="invalid-job_title" class="d-none error"></div>
                                                <div id="invalid-validation-job_title">
                                                    <p
                                                        v-for="error of v$.fields.job_title.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="job_title" class="text-left error">{{
                                                                error.$message
                                                            }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="ssn">Last 4 Digits of SSN</label>
                                                <input id="ssn" type="text" name="ssn" class="form-control"
                                                       @copy.prevent @paste.prevent @cut.prevent
                                                       @keydown="onlyDigitsKeypress"
                                                       placeholder="SSN" autocomplete="off" maxlength="4"
                                                       v-model="fields.ssn"
                                                       v-bind:class="{'not-valid': v$.fields.ssn.$error}">
                                                <div id="invalid-ssn" class="error"></div>
                                                <div id="invalid-validation-ssn">
                                                    <p
                                                        v-for="error of v$.fields.ssn.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="ssn" class="text-left error">{{
                                                                error.$message
                                                            }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4"
                                                 v-bind:class="{'d-none': debt_fields_show !== 1}">
                                                <label for="debt_amount">Debt Amount</label>
                                                <select class="form-select select-form" name="debt_amount"
                                                        id="debt_amount" v-model.lazy="fields.debt_amount"
                                                        v-bind:class="{'not-valid': v$.fields.debt_amount.$error}">
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
                                                <div id="invalid-validation-debt_amount">
                                                    <p
                                                        v-for="error of v$.fields.debt_amount.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="debt_amount"
                                                               class="text-left error">{{ error.$message }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <p class="mt-4"><small>By Clicking “Submit,” I acknowledge and
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
                                            </p>
                                            <div class="row mt-3">
                                                <div class="col pr-md-2 mt-5">
                                                    <button class="btn px-5 py-2 text-white button-next"
                                                            @click="submit" :disabled='!network'>Submit
                                                    </button>
                                                </div>
                                                <div class="col pl-md-2 align-self-end mt-5"><small
                                                    @click="refill"><a><u>Click
                                                    here</u></a> if you want to
                                                    refill your information
                                                </small></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section><!-- #content end -->
        <WaitingPage name="WaitingPage" ref="WaitingPage" :waiting="true"></WaitingPage>
    </div><!-- #wrapper end -->
</template>
<script>
import useVuelidate from "@vuelidate/core";
import {findGetParameter, phoneMask, saveError, saveVariable} from '../../../common/js/commonGeneral';
import {
    reapplyData,
    mountedReapply,
    refill,
    refillSuccess,
    setRadioButtons,
    sendSubmitRequest,
    onChangeRequestedAmount,
    submit,
    submitSuccess,
} from "../../../common/js/reapplyForms";
import {
    autocompleteAba, disableNextPayDay, disableSecondPayDay,
    mountedCommonForm, nextPayDayChange, onlyDigitsKeypress,
    removeCookies,
    sendRequestCheckStatusDecision,
    visibilityChangeListener
} from "../../../common/js/commonForms";
import {helpers, maxLength, minLength, numeric, required} from "@vuelidate/validators";
import {next_pay_day, onlyLatinAlphabetsNumeric, second_pay_day} from "../../../common/js/validations";
import {useLoading} from "vue-loading-overlay";
import 'vue-loading-overlay/dist/css/index.css';

export default {
    setup() {
        return {v$: useVuelidate()};
    },
    data() {
        return {
            ...reapplyData, ...{
                specialist: null,
                mainColor: siteSettings.general.main_color.value,
                buttonColor: siteSettings.general.main_button_color.value,
                buttonHoverBgColor: siteSettings.general.button_hover_bg_color.value,
                buttonHoverColor: siteSettings.general.button_hover_color.value,
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
    async mounted() {
        let useLoader = useLoading();
        let loader = useLoader.show({
            container: this.$refs.formContainer
        });

        await mountedReapply(this, () => {
            this.fields.ssn = findGetParameter('ssn');
        });
        await mountedCommonForm(this,1);

        loader.hide();
    },
    methods: {
        nextPayDayChange,
        onChangeRequestedAmount,
        disableNextPayDay,
        disableSecondPayDay,
        onlyDigitsKeypress,
        autocompleteAba,
        refill,
        visibilityChangeListener,
        sendSubmitRequest,
        sendRequestCheckStatusDecision,
        refillSuccess,
        removeCookies,
        phoneMask,
        saveError,
        saveVariable,
        setRadioButtons,
        submit,
        submitSuccess,
    }
};
</script>

<style lang="scss" scoped>
    @import "../../sass/forms.scss";
    @import "../../sass/reapply.scss";
</style>
