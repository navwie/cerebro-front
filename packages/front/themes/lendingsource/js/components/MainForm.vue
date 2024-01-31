<template>
    <div>
        <div class="above-form py-5">
            <div class="container pt-5 pb-4">
                <div class="row">
                    <div class="col-12 pb-3 mb-4">
                        <div class="d-flex align-items-end mb-5">
                            <h2 class="mb-0">Your loan is moments away...</h2>
                        </div>
                        <div class="range-slider">
                            <div id="done" class="GSC_progress done" :style="progressBar"></div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="chat-wrapper">
                            <div class="chat-inner">
                                <img :src="'/img/specialists/'+specialist+'.jpg'" class="me-4 rounded-circle" alt="" width="110" height="110">
                                <div class="msg" style="display: block;">
                                    <div class="chat-msg">{{ assistant_steps[step] }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="!waiting">
            <div class="form-wrapper" ref="formContainer">
                <div class="container-wrapper" :style="mainColor">
                    <div class="container py-5">
                        <div class="row">
                            <div class="col-12 z-index-2">
                                <form class="steps text-start" id="form">
                                    <div class="step" v-show="step === 1">
                                        <div class="above-buttons">
                                            <h5 class="font-weight-medium text-white mb-4">How much do you want to
                                                borrow?</h5>
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper">
                                                    <input id="requested_amount-1" type="radio" name="requested_amount"
                                                           @change="onChangeRequestedAmount"
                                                           v-model="fields.requested_amount" value="500">
                                                    <label for="requested_amount-1" >$100 - $500</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="requested_amount-2" type="radio" name="requested_amount"
                                                           @change="onChangeRequestedAmount"
                                                           v-model="fields.requested_amount" value="800">
                                                    <label for="requested_amount-2" >$500 - $1000</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="requested_amount-3" type="radio" name="requested_amount"
                                                           @change="onChangeRequestedAmount"
                                                           v-model="fields.requested_amount" value="1000">
                                                    <label for="requested_amount-3" >$1000 - $1500</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="requested_amount-4" type="radio" name="requested_amount"
                                                           @change="onChangeRequestedAmount"
                                                           v-model="fields.requested_amount" value="1500">
                                                    <label for="requested_amount-4" >$1500 - $2000</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="requested_amount-5" type="radio" name="requested_amount"
                                                           @change="onChangeRequestedAmount"
                                                           v-model="fields.requested_amount" value="2500">
                                                    <label for="requested_amount-5" >$2000 - $3000</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="requested_amount-6" type="radio" name="requested_amount"
                                                           @change="onChangeRequestedAmount"
                                                           v-model="fields.requested_amount" value="3500">
                                                    <label for="requested_amount-6" >$3000 - $4000</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="requested_amount-7" type="radio" name="requested_amount"
                                                           @change="onChangeRequestedAmount"
                                                           v-model="fields.requested_amount" value="4500">
                                                    <label for="requested_amount-7" >$4000 - $5000</label>
                                                </div>
                                            </div>
                                        </div>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4" >Next</button>
                                    </div>
                                    <div class="step" v-show="step === 2">
                                        <div class="above-buttons">
                                            <div class="radio-wrapper">
                                                <h5 class="font-weight-medium text-white mb-4">What's your email?</h5>
                                                <input id="email" type="text" name="email"
                                                       placeholder="Email" @input="dynamicValidation"
                                                       v-model.trim="fields.email" autocomplete="on"
                                                       v-bind:class="{'not-valid': v$.fields.email.$error}">
                                                <div id="invalid-email" class="text-start text-danger"></div>
                                                <div id="invalid-validation-email">
                                                    <p
                                                        v-for="error of v$.fields.email.$errors"
                                                        :key="error.$uid"
                                                    >
                                                        <span class="text-start text-danger">{{ error.$message }}</span>
                                                    </p>
                                                </div>
                                                <p class="mt-2 mb-0">
                                                    <small class="font-weight-light text-white">
                                                        By clicking “Get Started”, I consent to the <a class="text-white"
                                                                                                       href="/privacy"
                                                                                                       :style="mainColor">Privacy
                                                        Policy</a>,
                                                        <a class="text-white" href="/terms" :style="mainColor">Terms of Use</a>,<a
                                                        class="text-white" href="/credit_disclosure" :style="mainColor"> Credit
                                                        Disclosure</a>,
                                                        and <a class="text-white" href="/econsent" :style="mainColor">E-Consent</a>.
                                                    </small>
                                                </p>
                                            </div>
                                        </div>

                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3"
                                                data-name="change-step" data-value="-1" >Back
                                        </button>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4"
                                                data-name="change-step" data-value="1" data-check="1" >Next
                                        </button>
                                    </div>
                                    <div class="step" v-show="step === 3">
                                        <div class="above-buttons">
                                            <h5 class="font-weight-medium text-white mb-4">What’s the purpose of your
                                                loan?</h5>
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper" v-for="(t,k) in this.reasons_for_loan"
                                                     :key="'reason_for_loan-'+k">
                                                    <input :id="'reason_for_loan-'+k" type="radio" name="reason_for_loan"
                                                           v-model="fields.reason_for_loan" :value="t">
                                                    <label :for="'reason_for_loan-'+k">{{ t }}</label>
                                                </div>
                                            </div>
                                        </div>
                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3">Back
                                        </button>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4">Next</button>
                                    </div>
                                    <div class="step" v-show="step === 4">
                                        <div class="above-buttons">
                                            <h5 class="font-weight-medium text-white mb-4">How much debt do you have?</h5>
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper">
                                                    <input id="debt_amount-1" type="radio" name="debt_amount"
                                                           v-model="fields.debt_amount" value="0"
                                                           @change="onChangeDebtAmount">
                                                    <label for="debt_amount-1" >No debt</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="debt_amount-2" type="radio" name="debt_amount"
                                                           v-model="fields.debt_amount" value="7500"
                                                           @change="onChangeDebtAmount">
                                                    <label for="debt_amount-2" >Under $7,500</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="debt_amount-3" type="radio" name="debt_amount"
                                                           v-model="fields.debt_amount" value="10000"
                                                           @change="onChangeDebtAmount">
                                                    <label for="debt_amount-3" >$7,500 - $10,000</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="debt_amount-4" type="radio" name="debt_amount"
                                                           v-model="fields.debt_amount" value="15000"
                                                           @change="onChangeDebtAmount">
                                                    <label for="debt_amount-4" >$10,000 - $15,000</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="debt_amount-5" type="radio" name="debt_amount"
                                                           v-model="fields.debt_amount" value="20000"
                                                           @change="onChangeDebtAmount">
                                                    <label for="debt_amount-5" >$15,000 - $20,000</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="debt_amount-6" type="radio" name="debt_amount"
                                                           v-model="fields.debt_amount" value="25000"
                                                           @change="onChangeDebtAmount">
                                                    <label for="debt_amount-6" >$20,000 - $25,000</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="debt_amount-7" type="radio" name="debt_amount"
                                                           v-model="fields.debt_amount" value="30000"
                                                           @change="onChangeDebtAmount">
                                                    <label for="debt_amount-7" >$25,000 - $30,000</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="debt_amount-8" type="radio" name="debt_amount"
                                                           v-model="fields.debt_amount" value="35000"
                                                           @change="onChangeDebtAmount">
                                                    <label for="debt_amount-8" >$30,000 - $35,000</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="debt_amount-9" type="radio" name="debt_amount"
                                                           v-model="fields.debt_amount" value="40000"
                                                           @change="onChangeDebtAmount">
                                                    <label for="debt_amount-9" >$35,000 - $40,000</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="debt_amount-10" type="radio" name="debt_amount"
                                                           v-model="fields.debt_amount" value="45000"
                                                           @change="onChangeDebtAmount">
                                                    <label for="debt_amount-10" >$40,000 - $45,000</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="debt_amount-11" type="radio" name="debt_amount"
                                                           v-model="fields.debt_amount" value="50000"
                                                           @change="onChangeDebtAmount">
                                                    <label for="debt_amount-11" >$45,000 +</label>
                                                </div>
                                            </div>
                                            <h5 class="font-weight-medium text-white mb-4 mt-4">Would you like to speak with
                                                a debt
                                                relief specialist about reducing your debt?</h5>
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper">
                                                    <input id="specialist_talk-1" type="radio" name="specialist_talk"
                                                           v-model="fields.specialist_talk" :value="true"
                                                           :disabled="fields.debt_amount == 0">
                                                    <label for="specialist_talk-1" >Yes</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="specialist_talk-2" type="radio" name="specialist_talk"
                                                           v-model="fields.specialist_talk" :value="false"
                                                           :disabled="fields.debt_amount == 0">
                                                    <label for="specialist_talk-2" >No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3">Back
                                        </button>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4">Next</button>
                                    </div>
                                    <div class="step" v-show="step === 5">
                                        <div class="above-buttons">
                                            <h5 class="font-weight-medium text-white mb-4">Estimated Credit Score</h5>
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper" v-for="(value,name,index) in this.credit_scores">
                                                    <input :id="'credit_score-' + index" type="radio" name="credit_score"
                                                           v-model="fields.credit_score" :value="name">
                                                    <label :for="'credit_score-' + index" >{{ value }}</label>
                                                </div>
                                            </div>
                                        </div>
                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3"
                                                data-name="change-step" data-value="-1">Back
                                        </button>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4"
                                                data-name="change-step" data-value="1">Next
                                        </button>
                                    </div>
                                    <div class="step" v-show="step === 6">
                                        <div class="above-buttons">
                                            <h5 class="font-weight-medium text-white mb-4">Do you have an active checking
                                                account?</h5>
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper">
                                                    <input id="account_type-1" type="radio" name="account_type"
                                                           v-model="fields.account_type" value="Checking">
                                                    <label for="account_type-1" >Yes</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="account_type-2" type="radio" name="account_type"
                                                           v-model="fields.account_type" value="Savings">
                                                    <label for="account_type-2" >No</label>
                                                </div>
                                            </div>
                                            <div id="invalid-account_type" class="text-start text-danger d-none"></div>
                                            <div id="invalid-validation-account_type">
                                                <p
                                                    v-for="error of v$.fields.account_type.$errors"
                                                    :key="error.$uid"
                                                >
                                                    <span class="text-start text-danger">{{ error.$message }}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3"
                                                data-name="change-step" data-value="-1">Back
                                        </button>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4"
                                                data-name="change-step" data-value="1">Next
                                        </button>
                                    </div>
                                    <div class="step" v-show="step === 7">
                                        <div class="row mb-5">
                                            <div class="col-12 col-md-5 col-lg-4 me-2 me-lg-0 radio-wrapper">
                                                <h5 class="font-weight-medium text-white mb-4">What's your first
                                                    name?</h5>
                                                <input id="first_name" type="text" name="first_name" autocomplete="on"
                                                       placeholder="First name" @input="dynamicValidation"
                                                       @keypress="onlyAlphabetsKeypress" @paste="onlyAlphabetsPaste"
                                                       v-bind:class="{'not-valid': v$.fields.first_name.$error}"
                                                       v-model.trim="fields.first_name" maxlength="128">
                                                <p id="invalid-first_name"></p>
                                                <div id="invalid-validation-first_name">
                                                    <p
                                                        v-for="error of v$.fields.first_name.$errors"
                                                        :key="error.$uid"
                                                    >
                                                        <span class="text-start text-danger">{{ error.$message }}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-5 col-lg-4 radio-wrapper">
                                                <h5 class="font-weight-medium text-white mb-4">What's your last
                                                    name?</h5>
                                                <input id="last_name" type="text" name="last_name"
                                                       placeholder="Last Name" @input="dynamicValidation"
                                                       @keypress="onlyAlphabetsKeypress" @paste="onlyAlphabetsPaste"
                                                       v-bind:class="{'not-valid': v$.fields.last_name.$error}"
                                                       v-model.trim="fields.last_name" maxlength="128">
                                                <p id="invalid-last_name"></p>
                                                <div id="invalid-validation-last_name">
                                                    <p
                                                        v-for="error of v$.fields.last_name.$errors"
                                                        :key="error.$uid"
                                                    >
                                                        <span class="text-start text-danger">{{ error.$message }}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3"
                                                data-name="change-step" data-value="-1">Back
                                        </button>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4"
                                                data-name="change-step" data-value="1" data-check="1">Next
                                        </button>
                                    </div>
                                    <div class="step" v-show="step === 8">
                                        <div class="above-buttons">
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper">
                                                    <h5 class="font-weight-medium text-white mb-4">What's your address?</h5>
                                                    <input v-model="fields.address" id="address" type="text" autocomplete="on"
                                                           name="address" placeholder="Address" @input="dynamicValidation"
                                                           v-bind:class="{'not-valid': v$.fields.address.$error}"
                                                           @change="locationChange()" maxlength="128">
                                                    <div id="invalid-address" class="text-start text-danger d-none"></div>
                                                    <div id="invalid-validation-address">
                                                        <p
                                                            v-for="error of v$.fields.address.$errors"
                                                            :key="error.$uid"
                                                        >
                                                            <span class="text-start text-danger">{{ error.$message }}</span>
                                                        </p>
                                                    </div>
                                                    <p class="pt-2"><small class="font-weight-light text-white">Please take
                                                        a
                                                        moment to confirm that the details below based on your zipcode
                                                        {{ this.fields.zip }} are correct</small></p>
                                                    <div class="row mt-3">
                                                        <div class="col px-2">
                                                            <div class="data-review"
                                                                 v-bind:class="{'not-valid': v$.fields.zip.$error}">
                                                                <p>Zipcode</p>
                                                                <input type="text" v-model.trim="fields.zip"
                                                                       id="zip" name="zip" maxlength="10" @input="dynamicValidation"
                                                                       @change="locationChange()">
                                                            </div>
                                                            <p id="invalid-zip"></p>

                                                            <div id="invalid-validation-zip">
                                                                <p
                                                                    v-for="error of v$.fields.zip.$errors"
                                                                    :key="error.$uid"
                                                                >
                                                                <span class="text-start text-danger">{{
                                                                        error.$message
                                                                    }}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="col px-2">
                                                            <div class="data-review"
                                                                 v-bind:class="{'not-valid': v$.fields.state.$error}">
                                                                <p>State</p>
                                                                <input type="text" v-model.trim="fields.state"
                                                                       id="state" name="state" @input="dynamicValidation"
                                                                       @keypress="onlyLatinKeypress" @paste="onlyLatinPaste"
                                                                       :disabled="this.addressValid">
                                                            </div>
                                                            <p id="invalid-state"></p>
                                                            <div id="invalid-validation-state">
                                                                <p
                                                                    v-for="error of v$.fields.state.$errors"
                                                                    :key="error.$uid"
                                                                >
                                                            <span class="text-start text-danger">{{
                                                                    error.$message
                                                                }}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="col px-2">
                                                            <div class="data-review"
                                                                 v-bind:class="{'not-valid': v$.fields.city.$error}">
                                                                <p>City</p>
                                                                <input type="text" v-model.trim="fields.city"
                                                                       id="city" name="city" maxlength="128" @input="dynamicValidation"
                                                                       @keypress="onlyLatinKeypress" @paste="onlyLatinPaste"
                                                                       :disabled="this.addressValid">
                                                            </div>
                                                            <p id="invalid-city"></p>
                                                            <div id="invalid-validation-city">
                                                                <p
                                                                    v-for="error of v$.fields.city.$errors"
                                                                    :key="error.$uid"
                                                                >
                                                            <span class="text-start text-danger">{{
                                                                    error.$message
                                                                }}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3"
                                                data-name="change-step" data-value="-1">Back
                                        </button>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4"
                                                data-name="change-step" data-value="1" data-check="1">Next
                                        </button>
                                    </div>
                                    <div class="step" v-show="step === 9">
                                        <div class="above-buttons">
                                            <h5 class="font-weight-medium text-white mb-4">How long have you been living at
                                                this
                                                address?</h5>
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper">
                                                    <input id="address_month-1" type="radio" name="address_month"
                                                           v-model="fields.address_month" value="12">
                                                    <label for="address_month-1">1 year or less</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="address_month-2" type="radio" name="address_month"
                                                           v-model="fields.address_month" value="24">
                                                    <label for="address_month-2">2 years</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="address_month-3" type="radio" name="address_month"
                                                           v-model="fields.address_month" value="36">
                                                    <label for="address_month-3">3 years</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="address_month-4" type="radio" name="address_month"
                                                           v-model="fields.address_month" value="48">
                                                    <label for="address_month-4">4 years</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="address_month-5" type="radio" name="address_month"
                                                           v-model="fields.address_month" value="60">
                                                    <label for="address_month-5">5 years</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="address_month-6" type="radio" name="address_month"
                                                           v-model="fields.address_month" value="72">
                                                    <label for="address_month-6">6 years</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="address_month-7" type="radio" name="address_month"
                                                           v-model="fields.address_month" value="84">
                                                    <label for="address_month-7">7 years or more</label>
                                                </div>
                                            </div>
                                            <h5 class="font-weight-medium text-white mb-4">Specify whether
                                                the applicant is a US Citizen</h5>
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper">
                                                    <input id="citizenship-1" type="radio" name="citizenship"
                                                           v-model="fields.citizenship" :value="true">
                                                    <label for="citizenship-1">Yes</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="citizenship-2" type="radio" name="citizenship"
                                                           v-model="fields.citizenship" :value="false">
                                                    <label for="citizenship-2">No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3">Back
                                        </button>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4">Next</button>
                                    </div>
                                    <div class="step" v-show="step === 10">
                                        <div class="above-buttons">
                                            <h5 class="font-weight-medium text-white mb-4">Do you own or rent?</h5>
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper">
                                                    <input id="rent_or_own-1" type="radio" name="rent_or_own"
                                                           v-model="fields.rent_or_own" :value="true">
                                                    <label for="rent_or_own-1">I rent</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="rent_or_own-2" type="radio" name="rent_or_own"
                                                           v-model="fields.rent_or_own" :value="false">
                                                    <label for="rent_or_own-2">I own</label>
                                                </div>
                                            </div>
                                            <h5 class="font-weight-medium text-white mb-4">Do you own car?</h5>
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper">
                                                    <input id="own_car-1" type="radio" name="own_car"
                                                           v-model="fields.own_car" :value="true">
                                                    <label for="own_car-1">Yes</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="own_car-2" type="radio" name="own_car"
                                                           v-model="fields.own_car" :value="false">
                                                    <label for="own_car-2">No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3">Back
                                        </button>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4">Next</button>
                                    </div>
                                    <div class="step" v-show="step === 11">
                                        <div class="above-buttons">
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper mb-3 mb-lg-0 me-3">
                                                    <h5 class="font-weight-medium text-white mb-4">What's your phone
                                                        number?</h5>
                                                    <input id="home_phone" type="text" name="home_phone" @input="dynamicValidation"
                                                           placeholder="Phone" @keyup="phoneMask('home_phone')"
                                                           v-bind:class="{'not-valid': v$.fields.home_phone.$error}"
                                                           @keydown="onlyDigitsKeypress" @paste="onlyDigitsPaste"
                                                           v-model.trim="fields.home_phone" maxlength="12">
                                                    <p id="invalid-home_phone"></p>
                                                    <div id="invalid-validation-home_phone">
                                                        <p
                                                            v-for="error of v$.fields.home_phone.$errors"
                                                            :key="error.$uid"
                                                        >
                                                            <span class="text-start text-danger">{{ error.$message }}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <h5 class="font-weight-medium text-white mb-4">Contact Time</h5>
                                                    <select id="contact_time" name="contact_time"
                                                            v-model="fields.contact_time">
                                                        <option v-for="t in this.contact_time" :value="t"
                                                                :key="'contact_time'+t">
                                                            {{ t }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <p class="mt-2 mb-0"><small class="font-weight-light text-white">Format:
                                                999-999-9999</small></p>
                                            <div class="d-flex">
                                                <input class="check-submit-sms" type="checkbox" id="submit_sms"
                                                       name="submit_sms" :checked="fields.submit_sms"
                                                       v-model="fields.submit_sms">
                                                <label class="label-submit-sms" for="submit_sms">
                                                    <small class="font-weight-light text-white">
                                                        By checking the box above, you affirmatively agree to receive
                                                        marketing text messages, including those sent from an
                                                        auto-dialer, from ({{ app_name }}), its lenders, Integrated Delivery
                                                        Solutions (#21347), and third-party marketing partners related
                                                        to your request and additional promotions at the phone number
                                                        you provide, even if your phone number is on a Do Not Call list.
                                                        Consent is not required to submit a loan request or receive
                                                        services. Message and data rates may apply. Message frequency:
                                                        Up to 5 msgs per week. You may opt-out anytime by replying
                                                        “Stop” or “Help” for more information. See <a class="text-white" href="/terms">Terms</a> for more
                                                        information.
                                                    </small>
                                                </label>
                                            </div>
                                        </div>
                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3">Back
                                        </button>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4">Next</button>
                                    </div>
                                    <div class="step" v-show="step === 12">
                                        <div class="above-buttons">
                                            <h5 class="font-weight-medium text-white mb-4">When is your date of birth?</h5>
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper">
                                                    <Datepicker
                                                        v-model="fields.dob"
                                                        :start-date="(new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000) - 5 * 24 * 60 * 60 * 1000)"
                                                        type="date"
                                                        :min-date="(new Date(Date.now() - 100 * 365 * 24 * 60 * 60 * 1000) - 24 * 24 * 60 * 60 * 1000)"
                                                        :max-date="(new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000) - 5 * 24 * 60 * 60 * 1000)"
                                                        :input-attr="{name:'dob',id:'dob'}"
                                                        v-bind:class="{'not-valid': v$.fields.dob.$error}"
                                                        ref="dobDatepicker"
                                                        placeholder="Birthday"
                                                        input-class-name="input-date"
                                                        model-type="MM-dd-yyyy"
                                                        reverse-years
                                                        :year-range="[new Date().getFullYear() - 100,new Date().getFullYear() - 18]"
                                                        format="MM-dd-yyyy"
                                                        :enable-time-picker="false"
                                                        :auto-apply="true"
                                                        week-start="0"
                                                        uid="dob"
                                                    />
                                                    <p id="invalid-dob"></p>
                                                    <div id="invalid-validation-dob">
                                                        <p
                                                            v-for="error of v$.fields.dob.$errors"
                                                            :key="error.$uid"
                                                        >
                                                            <span class="text-start text-danger">{{ error.$message }}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="mt-2 mb-0"><small class="font-weight-light text-white">Format:
                                                mm-dd-yyyy</small></p>
                                        </div>
                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3"
                                                data-name="change-step" data-value="-1">Back
                                        </button>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4"
                                                data-name="change-step" data-value="1" data-check="1">Next
                                        </button>
                                    </div>
                                    <div class="step" v-show="step === 13">
                                        <div class="above-buttons">
                                            <h5 class="font-weight-medium text-white mb-4">What is your monthly
                                                income?*</h5>
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper">
                                                    <input id="net_month_income-1" type="radio" name="net_month_income"
                                                           v-model="fields.net_month_income" value="1000">
                                                    <label for="net_month_income-1">$1000 or less</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="net_month_income-2" type="radio" name="net_month_income"
                                                           v-model="fields.net_month_income" value="1500">
                                                    <label for="net_month_income-2">$1001 - $1500</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="net_month_income-3" type="radio" name="net_month_income"
                                                           v-model="fields.net_month_income" value="2000">
                                                    <label for="net_month_income-3">$1501 - $2000</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="net_month_income-4" type="radio" name="net_month_income"
                                                           v-model="fields.net_month_income" value="2500">
                                                    <label for="net_month_income-4">$2001 - $2500</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="net_month_income-5" type="radio" name="net_month_income"
                                                           v-model="fields.net_month_income" value="3000">
                                                    <label for="net_month_income-5">$2501 - $3000</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="net_month_income-6" type="radio" name="net_month_income"
                                                           v-model="fields.net_month_income" value="3500">
                                                    <label for="net_month_income-6">$3001 - $3500</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="net_month_income-7" type="radio" name="net_month_income"
                                                           v-model="fields.net_month_income" value="4000">
                                                    <label for="net_month_income-7">$3501 - $4000</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="net_month_income-8" type="radio" name="net_month_income"
                                                           v-model="fields.net_month_income" value="4500">
                                                    <label for="net_month_income-8">$4001 -$4500 </label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="net_month_income-9" type="radio" name="net_month_income"
                                                           v-model="fields.net_month_income" value="5000">
                                                    <label for="net_month_income-9">$4501 - $5000</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="net_month_income-10" type="radio" name="net_month_income"
                                                           v-model="fields.net_month_income" value="6000">
                                                    <label for="net_month_income-10">More than $5000</label>
                                                </div>
                                            </div>
                                        </div>
                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3"
                                                data-name="change-step" data-value="-1">Back
                                        </button>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4"
                                                data-name="change-step" data-value="1" data-check="1">Next
                                        </button>
                                    </div>
                                    <div class="step" v-show="step === 14">
                                        <div class="above-buttons">
                                            <h5 class="font-weight-medium text-white mb-4">What's your income type?</h5>
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper" v-for="(t,k) in this.income_type_personal" v-show="fields.lead_type === 'personal'"
                                                     :key="'income_type_personal-'+k">
                                                    <input :id="'income_type_personal-'+k" type="radio" name="income_type"
                                                           v-model="fields.income_type" :value="t">
                                                    <label :for="'income_type_personal-'+k">{{ t }}</label>
                                                </div>
                                                <div class="radio-wrapper" v-for="(t,k) in this.income_type_lead" v-show="fields.lead_type === 'payday'"
                                                     :key="'income_type_lead-'+k">
                                                    <input :id="'income_type_lead-'+k" type="radio" name="income_type"
                                                           v-model="fields.income_type" :value="t">
                                                    <label :for="'income_type_lead-'+k">{{ t }}</label>
                                                </div>
                                                <div class="radio-wrapper" v-for="(t,k) in this.income_type"
                                                     :key="'income_type-'+k">
                                                    <input :id="'income_type-'+k" type="radio" name="income_type"
                                                           v-model="fields.income_type" :value="t">
                                                    <label :for="'income_type-'+k">{{ t }}</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="invalid-validation-income_type">
                                            <p
                                                v-for="error of v$.fields.income_type.$errors"
                                                :key="error.$uid"
                                            >
                                                <span class="text-start text-danger">{{ error.$message }}</span>
                                            </p>
                                        </div>
                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3"
                                                data-name="change-step" data-value="-1">Back
                                        </button>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4"
                                                data-name="change-step" data-value="1" data-check="1">Next
                                        </button>
                                    </div>
                                    <div class="step" v-show="step === 15">
                                        <div class="above-buttons">
                                            <h5 class="font-weight-medium text-white mb-4">How frequently are you paid?</h5>
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper" v-for="(t,k) in this.pay_frequency"
                                                     :key="'pay_frequency-'+k">
                                                    <input :id="'pay_frequency-'+k" type="radio" name="pay_frequency"
                                                           v-model="fields.pay_frequency" :value="t"
                                                           @change="payFrequencyChange()">
                                                    <label :for="'pay_frequency-'+k">{{ t }}</label>
                                                </div>
                                            </div>
                                            <h5 class="font-weight-medium text-white mb-4">How are you paid?</h5>
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper">
                                                    <input id="direct_deposit-1" type="radio" name="direct_deposit"
                                                           v-model="fields.direct_deposit" :value="true">
                                                    <label for="direct_deposit-1">Direct Deposit</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="direct_deposit-2" type="radio" name="direct_deposit"
                                                           v-model="fields.direct_deposit" :value="false">
                                                    <label for="direct_deposit-2">Paper Check</label>
                                                </div>
                                            </div>
                                            <div id="invalid-direct_deposit" class="d-none error"></div>
                                            <div id="invalid-validation-direct_deposit">
                                                <p
                                                    v-for="error of v$.fields.direct_deposit.$errors"
                                                    :key="error.$uid"
                                                >
                                                    <span class="text-start text-danger">{{ error.$message }}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3">Back
                                        </button>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4">Next</button>
                                    </div>
                                    <div class="step" v-show="step === 16">
                                        <div class="row mb-5">
                                            <div class="col-12 col-md-5 col-lg-4 me-5 me-xl-2 radio-wrapper radio-wrapper-date">
                                                <h5 class="font-weight-medium text-white mb-4">When is your next pay
                                                    day?</h5>
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
                                                <p id="invalid-next_pay_day"></p>
                                                <div id="invalid-validation-next_pay_day">
                                                    <p
                                                        v-for="error of v$.fields.next_pay_day.$errors"
                                                        :key="error.$uid"
                                                    >
                                                        <span class="text-start text-danger">{{ error.$message }}</span>
                                                    </p>
                                                </div>
                                                <p class="mt-2 mb-0">
                                                    <small class="font-weight-light text-white">
                                                        Example: 11-03-2021
                                                    </small>
                                                </p>
                                            </div>
                                            <div class="col-12 col-md-5 col-lg-4 ms-md-3 ms-xl-0 radio-wrapper radio-wrapper-date">
                                                <h5 class="font-weight-medium text-white mb-4">When is your second pay
                                                    day?</h5>
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
                                                <p id="invalid-second_pay_day"></p>
                                                <div id="invalid-validation-second_pay_day">
                                                    <p
                                                        v-for="error of v$.fields.second_pay_day.$errors"
                                                        :key="error.$uid"
                                                    >
                                                        <span class="text-start text-danger">{{ error.$message }}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3"
                                                data-name="change-step" data-value="-1">Back
                                        </button>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4"
                                                data-name="change-step" data-value="1" data-check="1">Next
                                        </button>
                                    </div>
                                    <div class="step" v-show="step === 17">
                                        <div class="row mb-5">
                                            <div class="col-12 col-md-5 col-lg-4 me-2 me-lg-0 radio-wrapper">
                                                <h5 class="font-weight-medium text-white mb-4">What's your employer's
                                                    name?</h5>
                                                <input id="emp_name" type="text" name="emp_name" @input="dynamicValidation"
                                                       v-bind:class="{'not-valid': v$.fields.emp_name.$error}"
                                                       placeholder="Employer name" maxlength="128"
                                                       v-model.trim="fields.emp_name">
                                                <p id="invalid-emp_name"></p>
                                                <div id="invalid-validation-emp_name">
                                                    <p
                                                        v-for="error of v$.fields.emp_name.$errors"
                                                        :key="error.$uid"
                                                    >
                                                        <span class="text-start text-danger">{{ error.$message }}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-5 col-lg-4 radio-wrapper">
                                                <h5 class="font-weight-medium text-white mb-4">What's your job
                                                    title?</h5>
                                                <input id="job_title" type="text" name="job_title" @input="dynamicValidation"
                                                       v-bind:class="{'not-valid': v$.fields.job_title.$error}"
                                                       v-model.trim="fields.job_title" maxlength="128"
                                                       placeholder="Job Title">
                                                <p id="invalid-job_title"></p>
                                                <div id="invalid-validation-job_title">
                                                    <p
                                                        v-for="error of v$.fields.job_title.$errors"
                                                        :key="error.$uid"
                                                    >
                                                        <span class="text-start text-danger">{{ error.$message }}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3"
                                                data-name="change-step" data-value="-1">Back
                                        </button>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4"
                                                data-name="change-step" data-value="1" data-check="1">Next
                                        </button>
                                    </div>
                                    <div class="step" v-show="step === 18">
                                        <div class="above-buttons">
                                            <h5 class="font-weight-medium text-white mb-4">How long have you had this income
                                                source?</h5>
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper">
                                                    <input id="emp_time-1" type="radio" name="emp_time"
                                                           v-model="fields.emp_time" value="12">
                                                    <label for="emp_time-1">1 year or less</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="emp_time-2" type="radio" name="emp_time"
                                                           v-model="fields.emp_time" value="24">
                                                    <label for="emp_time-2">2 years</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="emp_time-3" type="radio" name="emp_time"
                                                           v-model="fields.emp_time" value="36">
                                                    <label for="emp_time-3">3 years</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="emp_time-4" type="radio" name="emp_time"
                                                           v-model="fields.emp_time" value="48">
                                                    <label for="emp_time-4">4 years</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="emp_time-5" type="radio" name="emp_time"
                                                           v-model="fields.emp_time" value="60">
                                                    <label for="emp_time-5">5 years</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="emp_time-6" type="radio" name="emp_time"
                                                           v-model="fields.emp_time" value="72">
                                                    <label for="emp_time-6">6 years</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="emp_time-7" type="radio" name="emp_time"
                                                           v-model="fields.emp_time" value="84">
                                                    <label for="emp_time-7">7 years or more</label>
                                                </div>
                                            </div>
                                        </div>
                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3">Back
                                        </button>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4">Next</button>
                                    </div>
                                    <div class="step" v-show="step === 19">
                                        <div class="above-buttons">
                                            <h5 class="font-weight-medium text-white mb-4">Work phone number</h5>
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper">
                                                    <input id="emp_phone" type="text" name="emp_phone" @input="dynamicValidation"
                                                           placeholder="Work phone number" @keyup="phoneMask('emp_phone')"
                                                           v-bind:class="{'not-valid': v$.fields.emp_phone.$error}"
                                                           @keydown="onlyDigitsKeypress" @paste="onlyDigitsPaste"
                                                           v-model.trim="fields.emp_phone" maxlength="12">
                                                    <p id="invalid-emp_phone"></p>
                                                    <div id="invalid-validation-emp_phone">
                                                        <p
                                                            v-for="error of v$.fields.emp_phone.$errors"
                                                            :key="error.$uid"
                                                        >
                                                            <span class="text-start text-danger">{{ error.$message }}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="mt-2 mb-0"><small class="font-weight-light text-white">Lenders require
                                                this to verify employment, you must provide an accurate number to obtain a
                                                loan.
                                                <br>Format: 999-999-9999.</small></p>
                                        </div>
                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3">Back
                                        </button>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4">Next</button>
                                    </div>
                                    <div class="step" v-show="step === 20">
                                        <input id="bank_name" name="bank_name" type="text" class="d-none"
                                               v-model.trim="fields.bank_name">
                                        <input id="bank_phone" name="bank_phone" type="text" class="d-none"
                                               v-model.trim="fields.bank_phone">
                                        <div class="row mb-5">
                                            <div class="col-12 col-md-5 col-lg-4 mb-4 me-2 me-lg-0 radio-wrapper">
                                                <h5 class="font-weight-medium text-white mb-4">ABA/Bank routing
                                                    number</h5>
                                                <input id="routing_number" type="text" name="routing_number"
                                                       placeholder="ABA/Bank routing number"
                                                       @keypress="onlyDigitsKeypress" @input="dynamicValidation"
                                                       v-model.trim="fields.routing_number" autocomplete="off"
                                                       @copy.prevent @paste.prevent @cut.prevent
                                                       v-bind:class="{'not-valid': v$.fields.routing_number.$error}"
                                                       @change="autocompleteAba()">
                                                <p id="invalid-routing_number"
                                                   class="d-none text-start text-danger"></p>
                                                <div id="invalid-validation-routing_number">
                                                    <p
                                                        v-for="error of v$.fields.routing_number.$errors"
                                                        :key="error.$uid"
                                                    >
                                                        <span class="text-start text-danger">{{ error.$message }}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-5 col-lg-4 radio-wrapper">
                                                <h5 class="font-weight-medium text-white mb-4">Bank account number</h5>
                                                <input id="account_number" type="text" name="account_number"
                                                       placeholder="Bank account number" maxlength="30"
                                                       autocomplete="off" @keypress="onlyDigitsKeypress"
                                                       @copy.prevent @paste.prevent @cut.prevent
                                                       v-bind:class="{'not-valid': v$.fields.account_number.$error}"
                                                       v-model.trim="fields.account_number">
                                                <p id="invalid-account_number"></p>
                                                <div id="invalid-validation-account_number">
                                                    <p
                                                        v-for="error of v$.fields.account_number.$errors"
                                                        :key="error.$uid"
                                                    >
                                                        <span class="text-start text-danger">{{ error.$message }}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3">Back
                                        </button>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4">Next</button>
                                    </div>
                                    <div class="step" v-show="step === 21">
                                        <div class="above-buttons">
                                            <h5 class="font-weight-medium text-white mb-4">How long have you had the
                                                account?</h5>
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper">
                                                    <input id="bank_months-1" type="radio" name="bank_months"
                                                           v-model="fields.bank_months" value="12">
                                                    <label for="bank_months-1">1 year or less</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="bank_months-2" type="radio" name="bank_months"
                                                           v-model="fields.bank_months" value="24">
                                                    <label for="bank_months-2">2 years</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="bank_months-3" type="radio" name="bank_months"
                                                           v-model="fields.bank_months" value="36">
                                                    <label for="bank_months-3">3 years</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="bank_months-4" type="radio" name="bank_months"
                                                           v-model="fields.bank_months" value="48">
                                                    <label for="bank_months-4">4 years</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="bank_months-5" type="radio" name="bank_months"
                                                           v-model="fields.bank_months" value="60">
                                                    <label for="bank_months-5">5 years</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="bank_months-6" type="radio" name="bank_months"
                                                           v-model="fields.bank_months" value="72">
                                                    <label for="bank_months-6">6 years</label>
                                                </div>
                                                <div class="radio-wrapper">
                                                    <input id="bank_months-7" type="radio" name="bank_months"
                                                           v-model="fields.bank_months" value="84">
                                                    <label for="bank_months-7">7 years or more</label>
                                                </div>
                                            </div>
                                            <p id="invalid-bank_months"
                                               class="d-none text-start text-danger"></p>
                                            <div id="invalid-validation-bank_months">
                                                <p
                                                    v-for="error of v$.fields.bank_months.$errors"
                                                    :key="error.$uid"
                                                >
                                                    <span class="text-start text-danger">{{ error.$message }}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3">Back
                                        </button>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4">Next</button>
                                    </div>
                                    <div class="step" v-show="step === 22">
                                        <div class="above-buttons">
                                            <div id="invalid-step-ssn" class="text-start text-danger d-none"></div>
                                            <h5 class="font-weight-medium text-white mb-4">What's your SSN?</h5>
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper">
                                                    <input id="ssn" type="text" name="ssn"
                                                           @copy.prevent @paste.prevent @cut.prevent
                                                           placeholder="SSN" autocomplete="off"
                                                           @input="dynamicValidation"
                                                           @keypress="onlyDigitsKeypress" maxlength="9"
                                                           v-bind:class="{'not-valid': v$.fields.ssn.$error}"
                                                           v-model.trim="fields.ssn">
                                                    <p id="invalid-ssn"></p>
                                                    <div id="invalid-validation-ssn">
                                                        <p
                                                            v-for="error of v$.fields.ssn.$errors"
                                                            :key="error.$uid"
                                                        >
                                                            <span class="text-start text-danger">{{ error.$message }}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="mt-2 mb-0"><small class="font-weight-light text-white">256-bit
                                                encrypted<br> Lenders use your SSN to verify your identity. You will be
                                                rejected
                                                if lender verification fails so it is extremely important that you enter
                                                this
                                                information accurately.</small></p>
                                        </div>
                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3">Back
                                        </button>
                                        <button @click="nextStep" type="button" class="btn btn-yellow mt-4">Next</button>
                                    </div>
                                    <div class="step" v-show="step === 23">
                                        <div class="above-buttons">
                                            <div class="radio-input-group">
                                                <div class="radio-wrapper mb-3 mb-lg-0 me-3">
                                                    <h5 class="font-weight-medium text-white mb-4">Driver's license</h5>
                                                    <input id="dl_number" type="text" name="dl_number"
                                                           placeholder="Driver's license" maxlength="128"
                                                           v-bind:class="{'not-valid': v$.fields.dl_number.$error}"
                                                           v-model.trim="fields.dl_number">
                                                    <p id="invalid-dl_number"></p>
                                                    <div id="invalid-validation-dl_number">
                                                        <p
                                                            v-for="error of v$.fields.dl_number.$errors"
                                                            :key="error.$uid"
                                                        >
                                                            <span class="text-start text-danger">{{ error.$message }}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="radio-wrapper mb-3 mb-lg-0 me-3">
                                                    <h5 class="font-weight-medium text-white mb-4">State ID</h5>
                                                    <select id="dl_state" name="dl_state" v-model="fields.dl_state">
                                                        <option value="AK" selected>Alaska</option>
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
                                                </div>
                                            </div>
                                            <p class="mt-2 mb-0"><small class="font-weight-light text-white">256-bit
                                                encrypted
                                                <br>Lenders use this information to help prove your identity. <br> Enter
                                                accurately to increase your chances of acceptance.<br><br>By clicking
                                                “Submit Loan Request,” I confirm that I have reviewed and affirmatively
                                                agree to the <a class="text-white" href="/privacy">Privacy Policy</a>,
                                                <a class="text-white" href="/terms">Terms of Use</a>,
                                                <a class="text-white" href="/econsent">E-Consent</a>,
                                                and <a class="text-white" href="/credit_disclosure"> Credit Disclosure</a>
                                                presented to me on this website and authorize this website to share the
                                                information I provided with lenders and marketing partners to process my
                                                loan request and obtain financial products and services.</small></p>
                                        </div>
                                        <button @click="prevStep" type="button" class="btn btn-yellow mt-4 me-3">Back
                                        </button>
                                        <button @click="nextStep" type="button" :disabled='!network' class="btn btn-yellow mt-4">Submit loan request</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <WaitingPage name="WaitingPage" ref="WaitingPage"></WaitingPage>
    </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";

import {
    checkPhone,
    phoneMask, saveError, saveVariable,
} from '../../../common/js/commonGeneral';
import {
    mainFormData,
    mainFormValidations,
    checkEmail,
    dynamicValidation,
    locationChange,
    mountedMainForm,
    onChangeDebtAmount,
    onChangeRequestedAmount,
    onlyAlphabetsKeypress,
    onlyAlphabetsPaste,
    onlyDigitsPaste,
    onlyLatinKeypress,
    onlyLatinPaste,
    payFrequencyChange,
    prevStep,
    saveState, saveStepVisitor, setRadioButtons,
    submit,
    submitError,
    submitSuccess,
    sendSubmitRequest, nextStep
} from "../../../common/js/mainForms";
import {
    autocompleteAba,
    mountedCommonForm,
    nextPayDayChange,
    onlyDigitsKeypress, removeCookies, sendRequestCheckStatusDecision,
    visibilityChangeListener
} from "../../../common/js/commonForms";
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
            ...mainFormData, ...{
                specialist: 'Emma',
                allSteps: 23,
                step_to_fields: {
                    1: ['requested_amount'],
                    2: ['email'],
                    3: ['reason_for_loan'],
                    4: ['debt_amount', 'specialist_talk'],
                    5: ['credit_score'],
                    6: ['account_type'],
                    7: ['first_name', 'last_name'],
                    8: ['zip', 'address', 'city', 'state'],
                    9: ['address_month', 'citizenship'],
                    10: ['rent_or_own', 'own_car'],
                    11: ['home_phone', 'contact_time'],
                    12: ['dob'],
                    13: ['net_month_income'],
                    14: ['income_type'],
                    15: ['direct_deposit', 'pay_frequency'],
                    16: ['next_pay_day', 'second_pay_day'],
                    17: ['emp_name', 'job_title'],
                    18: ['emp_time'],
                    19: ['emp_phone'],
                    20: ['routing_number', 'account_number', 'bank_phone', 'bank_name'],
                    21: ['bank_months'],
                    22: ['ssn'],
                    23: ['dl_number', 'dl_state']
                },
                fieldsChanged: false,
                assistant_steps: {
                    1: "Hi there, I’m " + (this.specialist === undefined ? "Emma" : this.specialist ) + ". I’m here to help you find your loan. Let me know how much you're looking to borrow and we'll get started with your request",
                    2: "Congratulations you're eligible to make a request, so let's continue. We'll start by collecting your contact information",
                    3: "How do you plan to use the money you'll receive?",
                    4: "How much debt do you have?",
                    5: "What do you estimate is your credit score?",
                    6: "In order to receive a loan you will need an active bank account",
                    7: "Let's get to know you a little better, what's your name?",
                    8: "Next we need to learn a bit about your living circumstances",
                    9: "Next we need to learn a bit about your living circumstances",
                    10: "Next we need to learn a bit about your living circumstances",
                    11: "Please enter your phone number as it may be used by some lenders to validate your account",
                    12: "Please enter your date of birth to confirm your age. You must be over 18 to continue.",
                    13: "Tell us a little bit about your income and employment",
                    14: "Tell us a little bit about your income and employment",
                    15: "Tell us a little bit about your income and employment",
                    16: "Tell us a little bit about your income and employment",
                    17: "Tell us a little bit about your income and employment",
                    18: "Tell us a little bit about your income and employment",
                    19: "Tell us a little bit about your income and employment",
                    20: "Great, we're almost finished. Next we need to collect your banking information for the checking account you will receive funds if your request is successful",
                    21: "Great, we're almost finished. Next we need to collect your banking information for the checking account you will receive funds if your request is successful",
                    22: "Enter your Social Security Number to complete your request",
                    23: "Everything looks good! This is the final step, in order to verify your identity, please provide your Driver's License or State ID number",
                },
                heroImage: siteSettings.elements.EE_hero['background-image'],
                buttonColor: siteSettings.general.main_button_color.value,
                mainColor: siteSettings.general.main_color.value,
                radioButtonColor: siteSettings.general.radio_button_color.value,
                radioButtonTextColor: siteSettings.general.radio_button_text_color.value,
                linkColor: siteSettings.general.link_color.value,
            }
        };
    },
    validations() {
        return mainFormValidations;
    },
    watch: {
        fields: {
            handler(newValue, oldValue) {
                this.fieldsChanged = true;
            },
            deep: true
        }
    },
    async mounted() {
        let useLoader = useLoading();
        let loader = useLoader.show({
            container: this.$refs.formContainer
        });

        await mountedCommonForm(this);
        await mountedMainForm(this, () => {
            if (this.$cookies.isKey('specialist')) {
                this.specialist = this.$cookies.get('specialist');
                this.assistant_steps[1] = "Hi there, I’m " + this.specialist + ". I’m here to help you find your loan. Let me know how much you're looking to borrow and we'll get started with your request";
            } else {
                const names = ['Emma', 'Olivia', 'Amelia', 'Charlotte'];
                const randomIndex = Math.floor(Math.random() * 4);
                this.$cookies.set('specialist', names[randomIndex], 60 * 60);
                this.specialist = names[randomIndex];
                this.assistant_steps[1] = "Hi there, I’m " + this.specialist + ". I’m here to help you find your loan. Let me know how much you're looking to borrow and we'll get started with your request";
            }
        });

        loader.hide();
    },
    computed: {
        heroStyle() {
            return 'background-image: ' + this.heroImage + '; background: #f7fafa no-repeat center; background-size: cover; position: relative; min-height: 650px; display: flex; align-items: center;';
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
        progressBar() {
            return {
                'width': 100 / 23 * this.step + '%',
                '--main-color': this.mainColor,
            }
        }
    },
    methods: {
        checkPhone,
        onChangeRequestedAmount,
        onlyDigitsPaste,
        onlyDigitsKeypress,
        onlyAlphabetsPaste,
        onlyAlphabetsKeypress,
        onlyLatinPaste,
        onlyLatinKeypress,
        onChangeDebtAmount,
        phoneMask,
        payFrequencyChange,
        nextPayDayChange,
        dynamicValidation,
        prevStep,
        saveState,
        checkEmail,
        locationChange,
        autocompleteAba,
        submit,
        visibilityChangeListener,
        sendSubmitRequest,
        sendRequestCheckStatusDecision,
        submitSuccess,
        removeCookies,
        submitError,
        saveError,
        saveVariable,
        saveStepVisitor,
        setRadioButtons,
        nextStep,
    },
};
</script>

<style lang="scss" scoped>
    @import "../../sass/main_form.scss";
    @import "../../sass/forms.scss";
</style>
