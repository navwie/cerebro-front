<template>
    <div id="wrapper" class="GSC_mainform clearfix" :style="mainColor">
        <!-- Content
        ============================================= -->
        <section id="content" class="block-form-2" v-show="!waiting">
            <div class="content-wrap py-0">
                <div class="row align-items-stretch justify-content-between g-0 ">
                    <div id="tab-reservation"
                         class="nav nav-pills justify-content-center flex-column flex-lg-row p-5 pt-5 pb-3 d-none d-lg-flex"
                         style="background-color:#fcfcfc ;">
                        <span class="nav-link ms-0" v-bind:class="{'active': step === 1,'click-able': stepClickAble(1)}"
                           @click="goToStep(1)">1. Personal Details</span>
                        <span class="nav-link ms-0 mt-2 mt-lg-0 ms-lg-3"
                           v-bind:class="{'active': step === 2,'click-able': stepClickAble(2)}" @click="goToStep(2)">2.
                            More Details</span>
                        <span class="nav-link ms-0 mt-2 mt-lg-0 ms-lg-3"
                           v-bind:class="{'active': step === 3,'click-able': stepClickAble(3)}" @click="goToStep(3)">3.
                            Employment Status</span>
                        <span class="nav-link ms-0 mt-2 mt-lg-0 ms-lg-3"
                           v-bind:class="{'active': step === 4,'click-able': stepClickAble(4)}" @click="goToStep(4)">4.
                            Bank Account</span>
                    </div>
                    <div id="tab-reservation-mobile"
                         class="nav nav-pills p-5 pt-3 pb-0 d-lg-none d-md-flex justify-content-center"
                         style="background-color:#fcfcfc ;">
                        <span class="nav-link me-2" v-bind:class="{'active': step === 1,'click-able': stepClickAble(1)}"
                           @click="goToStep(1)">1</span>
                        <span class="nav-link me-2" v-bind:class="{'active': step === 2,'click-able': stepClickAble(2)}"
                           @click="goToStep(2)">2</span>
                        <span class="nav-link me-2" v-bind:class="{'active': step === 3,'click-able': stepClickAble(3)}"
                           @click="goToStep(3)">3</span>
                        <span class="nav-link me-2" v-bind:class="{'active': step === 4,'click-able': stepClickAble(4)}"
                           @click="goToStep(4)">4</span>
                    </div>
                    <div class="col-lg-11 col-xl-8 col-12 p-1 p-md-5 p-lg-6 m-auto"
                         style="padding-top: 30px!important;">
                        <div class="form-widget pt-0" data-alert-type="inline">
                            <div class="form-result"></div>
                            <form id="step-form" class="mb-0">
                                <div class="form-process"></div>
                                <div class="tab-content">
                                    <div v-show="step === 1">
                                        <span class="op-05 text-smaller ls1">STEP - 1/4</span>
                                        <h2 class="mb-5 text-uppercase ls1 fw-bold text-green"><i
                                            class="icon-line-folder"></i> Personal Details</h2>
                                        <div class="row">
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="requested_amount">Amount</label>
                                                <select class="form-select select-form" name="requested_amount"
                                                        id="requested_amount" v-model.lazy="fields.requested_amount"
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
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="reason_for_loan">Purpose Of Loan</label>
                                                <select class="form-select select-form" name="reason_for_loan"
                                                        id="reason_for_loan" v-model.lazy="fields.reason_for_loan"
                                                        v-bind:class="{'not-valid': v$.fields.reason_for_loan.$error}">
                                                    <option value="">Choose purpose of loan</option>
                                                    <option v-for="t in this.reasons_for_loan" :value="t"
                                                            :key="'reason_for_loan'+t">
                                                        {{ t }}
                                                    </option>
                                                </select>
                                                <div id="invalid-reason_for_loan" class="d-none error"></div>
                                                <div id="invalid-validation-reason_for_loan">
                                                    <p
                                                        v-for="error of v$.fields.reason_for_loan.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="reason_for_loan"
                                                               class="text-left error">{{ error.$message }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="credit_score">Your Credit Score</label>
                                                <select class="form-select select-form" name="credit_score"
                                                        id="credit_score" v-model.lazy="fields.credit_score"
                                                        v-bind:class="{'not-valid': v$.fields.credit_score.$error}">
                                                    <option value="">Choose credit score</option>
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
                                            <div class="col-12 mt-2 mb-4" style="border-top: 1px solid rgb(236 236 236);
												max-width: 735px;
												margin-left: 12px;"></div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="first_name">First name</label>
                                                <input id="first_name" type="text" name="first_name"
                                                       class="form-control" @input="dynamicValidation"
                                                       @keypress="onlyAlphabetsKeypress" @paste="onlyAlphabetsPaste"
                                                       maxlength="128" autocomplete="on"
                                                       placeholder="First name" v-model.lazy="fields.first_name"
                                                       v-bind:class="{'not-valid': v$.fields.first_name.$error}">
                                                <div id="invalid-first_name" class="d-none error"></div>
                                                <div id="invalid-validation-first_name">
                                                    <p
                                                        v-for="error of v$.fields.first_name.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="first_name"
                                                               class="text-left error">{{ error.$message }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="last_name">Last name</label>
                                                <input id="last_name" type="text" name="last_name" class="form-control"
                                                       @keypress="onlyAlphabetsKeypress" @paste="onlyAlphabetsPaste"
                                                       maxlength="128" @input="dynamicValidation"
                                                       placeholder="Last name" v-model.lazy="fields.last_name"
                                                       v-bind:class="{'not-valid': v$.fields.last_name.$error}">
                                                <div id="invalid-last_name" class="d-none error"></div>
                                                <div id="invalid-validation-last_name">
                                                    <p
                                                        v-for="error of v$.fields.last_name.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="last_name" class="text-left error">{{
                                                                error.$message
                                                            }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-6  mb-4">
                                                <h3>Birthdate</h3>
                                                <Datepicker
                                                    v-model.lazy="fields.dob"
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
                                                <div id="invalid-dob" class="d-none error"></div>
                                                <div id="invalid-validation-dob">
                                                    <p
                                                        v-for="error of v$.fields.dob.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="dob" class="text-left error">{{
                                                                error.$message
                                                            }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="email">Email Address</label>
                                                <input type="email" name="email" id="email" class="form-control"
                                                       placeholder="Enter Your Email" autocomplete="on"
                                                       @change="checkEmail" @input="dynamicValidation"
                                                       v-bind:class="{'not-valid': v$.fields.email.$error}"
                                                       v-model.lazy="fields.email" maxlength="128">
                                                <div id="invalid-email" class="text-left error"></div>
                                                <div id="invalid-validation-email">
                                                    <p
                                                        v-for="error of v$.fields.email.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="email" class="text-left error">{{
                                                                error.$message
                                                            }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="home_phone">Phone Number</label>
                                                <input type="text" name="home_phone" id="home_phone"
                                                       class="form-control" placeholder="Enter Your Phone"
                                                       v-bind:class="{'not-valid': v$.fields.home_phone.$error}"
                                                       @input="dynamicValidation" @keypress="onlyDigitsKeypress"
                                                       @paste="onlyDigitsPaste" v-model.trim="fields.home_phone"
                                                       maxlength="12"  @keyup="phoneMask('home_phone',$event)">
                                                <div id="invalid-home_phone" class="d-none error"></div>
                                                <div id="invalid-validation-home_phone">
                                                    <p
                                                        v-for="error of v$.fields.home_phone.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="home_phone"
                                                               class="text-left error">{{ error.$message }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="contact_time">Best Contact Time</label>
                                                <select class="form-select select-form" name="contact_time"
                                                        id="contact_time" v-model.lazy="fields.contact_time"
                                                        v-bind:class="{'not-valid': v$.fields.contact_time.$error}">
                                                    <option v-for="t in this.contact_time" :value="t"
                                                            :key="'contact_time'+t">
                                                        {{ t }}
                                                    </option>
                                                </select>
                                                <div id="invalid-contact_time" class="d-none error"></div>
                                                <div id="invalid-validation-contact_time">
                                                    <p
                                                        v-for="error of v$.fields.contact_time.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="contact_time"
                                                               class="text-left error">{{ error.$message }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="d-flex">
                                                    <input class="check-submit-sms" type="checkbox" id="submit_sms"
                                                           name="submit_sms" :checked="fields.submit_sms"
                                                           v-model.lazy="fields.submit_sms">
                                                    <label class="label-submit-sms" for="submit_sms">
                                                        <small class="font-weight-light">
                                                            By checking the box above, you affirmatively agree to receive
                                                            marketing text messages, including those sent from an
                                                            auto-dialer, from ({{ app_name }}), its lenders, Integrated Delivery
                                                            Solutions (#21347), and third-party marketing partners related
                                                            to your request and additional promotions at the phone number
                                                            you provide, even if your phone number is on a Do Not Call list.
                                                            Consent is not required to submit a loan request or receive
                                                            services. Message and data rates may apply. Message frequency:
                                                            Up to 5 msgs per week. You may opt-out anytime by replying
                                                            “Stop” or “Help” for more information. See <a href="/terms">Terms</a> for more
                                                            information.
                                                        </small>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-12 ">
                                                <span class="btn px-5 py-2 tab-action-btn-next float-end text-white button-next"
                                                   @click="nextStep">Next Step</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!--STEP2-->
                                    <div v-show="step === 2">
                                        <span class="op-05 text-smaller ls1">STEP - 2/4</span>
                                        <h2 class="mb-5 text-uppercase ls1 fw-bold text-green"><i
                                            class="icon-line-folder-plus"></i> More Details</h2>
                                        <div class="row">
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="address">Address</label>
                                                <input id="address" type="text" name="address" class="form-control"
                                                       placeholder="Address" v-model.lazy="fields.address"
                                                       @input="dynamicValidation" autocomplete="on"
                                                       v-bind:class="{'not-valid': v$.fields.address.$error}"
                                                       @change="locationChange()" maxlength="128">
                                                <div id="invalid-address" class="d-none error"></div>
                                                <div id="invalid-validation-address">
                                                    <p
                                                        v-for="error of v$.fields.address.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="address" class="text-left error">{{
                                                                error.$message
                                                            }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="zip">Zip Code</label>
                                                <input id="zip" type="text" name="zip" class="form-control"
                                                       placeholder="Zip" v-model.lazy="fields.zip" @input="dynamicValidation"
                                                       v-bind:class="{'not-valid': v$.fields.zip.$error}"
                                                       @change="locationChange()" @keypress="onlyDigitsKeypress"
                                                       @paste="onlyDigitsPaste" maxlength="5">
                                                <div id="invalid-zip" class="d-none error"></div>
                                                <div id="invalid-validation-zip">
                                                    <p
                                                        v-for="error of v$.fields.zip.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="zip" class="text-left error">{{
                                                                error.$message
                                                            }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="state">State</label>
                                                <input id="state" type="text" name="state" class="form-control"
                                                       placeholder="State" v-model.lazy="fields.state"
                                                       @input="dynamicValidation"
                                                       v-bind:class="{'not-valid': v$.fields.state.$error}"
                                                       :disabled="this.addressValid" maxlength="2"
                                                       @keypress="onlyLatinKeypress" @paste="onlyLatinPaste">
                                                <div id="invalid-state" class="d-none error"></div>
                                                <div id="invalid-validation-state">
                                                    <p
                                                        v-for="error of v$.fields.state.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="state" class="text-left error">{{
                                                                error.$message
                                                            }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="city">City</label>
                                                <input id="city" type="text" name="city" class="form-control"
                                                       maxlength="128" @input="dynamicValidation"
                                                       placeholder="City" v-model.lazy="fields.city"
                                                       v-bind:class="{'not-valid': v$.fields.city.$error}"
                                                       :disabled="this.addressValid" @keypress="onlyLatinKeypress"
                                                       @paste="onlyLatinPaste">
                                                <div id="invalid-city" class="d-none error"></div>
                                                <div id="invalid-validation-city">
                                                    <p
                                                        v-for="error of v$.fields.city.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="city" class="text-left error">{{
                                                                error.$message
                                                            }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="address_month">Months At Address</label>
                                                <select class="form-select select-form" name="address_month"
                                                        id="address_month" v-model.lazy="fields.address_month"
                                                        v-bind:class="{'not-valid': v$.fields.address_month.$error}">
                                                    <option value="">Choose months at address</option>
                                                    <option value="12">1 year or less</option>
                                                    <option value="24">2 years</option>
                                                    <option value="36">3 years</option>
                                                    <option value="48">4 years</option>
                                                    <option value="60">5 years</option>
                                                    <option value="72">6 years</option>
                                                    <option value="84">7 years or more</option>
                                                </select>
                                                <div id="invalid-address_month" class="d-none error"></div>
                                                <div id="invalid-validation-address_month">
                                                    <p
                                                        v-for="error of v$.fields.address_month.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="address_month"
                                                               class="text-left error">{{ error.$message }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <label for="rent_or_own-1">Home Ownership</label>
                                                <div class="row">
                                                    <div class="col-12 col-md-6">
                                                        <label class="rad-label"
                                                               v-bind:class="{'not-valid': v$.fields.rent_or_own.$error}">
                                                            <input type="radio" class="rad-input" name="rent_or_own" id="rent_or_own-1"
                                                                   v-model.lazy="fields.rent_or_own" :value="true">
                                                            <div class="rad-design"></div>
                                                            <div class="rad-text">Rent</div>
                                                        </label>
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <label class="rad-label"
                                                               v-bind:class="{'not-valid': v$.fields.rent_or_own.$error}">
                                                            <input type="radio" class="rad-input" name="rent_or_own" id="rent_or_own-2"
                                                                   v-model.lazy="fields.rent_or_own" :value="false">
                                                            <div class="rad-design"></div>
                                                            <div class="rad-text">Own</div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div id="invalid-rent_or_own" class="d-none error"></div>
                                                <div id="invalid-validation-rent_or_own">
                                                    <p
                                                        v-for="error of v$.fields.rent_or_own.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="rent_or_own"
                                                               class="text-left error">{{ error.$message }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="citizenship-1">American Citizenship</label>
                                                <div class="row">
                                                    <div class="col-12 col-md-6">
                                                        <label class="rad-label"
                                                               v-bind:class="{'not-valid': v$.fields.citizenship.$error}">
                                                            <input type="radio" class="rad-input" name="citizenship" id="citizenship-1"
                                                                   v-model.lazy="fields.citizenship" :value="true">
                                                            <div class="rad-design"></div>
                                                            <div class="rad-text">Yes</div>
                                                        </label>
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <label class="rad-label"
                                                               v-bind:class="{'not-valid': v$.fields.citizenship.$error}">
                                                            <input type="radio" class="rad-input" name="citizenship" id="citizenship-2"
                                                                   v-model.lazy="fields.citizenship" :value="false">
                                                            <div class="rad-design"></div>
                                                            <div class="rad-text">No</div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div id="invalid-citizenship" class="d-none error"></div>
                                                <div id="invalid-validation-citizenship">
                                                    <p
                                                        v-for="error of v$.fields.citizenship.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="citizenship"
                                                               class="text-left error">{{ error.$message }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 mt-2 mb-4" style="border-top: 1px solid rgb(236 236 236);
												max-width: 735px;
												margin-left: 12px;"></div>
                                            <div class="row">
                                                <div class="col-12 col-md-6 mb-4">
                                                    <label for="dl_number">Driver's license</label>
                                                    <input id="dl_number" type="text" name="dl_number"
                                                           class="form-control" maxlength="128"
                                                           placeholder="Driver's license" v-model.lazy="fields.dl_number"
                                                           v-bind:class="{'not-valid': v$.fields.dl_number.$error}">
                                                    <div id="invalid-dl_number" class="d-none error"></div>
                                                    <div id="invalid-validation-dl_number">
                                                        <p
                                                            v-for="error of v$.fields.dl_number.$errors"
                                                            :key="error.$uid"
                                                            class="m-0"
                                                        >
                                                            <label for="dl_number"
                                                                   class="text-left error">{{ error.$message }}</label>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 mb-4">
                                                    <label for="dl_state">License State</label>
                                                    <select class="form-select select-form" id="dl_state"
                                                            name="dl_state" v-model.lazy="fields.dl_state"
                                                            v-bind:class="{'not-valid': v$.fields.dl_state.$error}">
                                                        <option value="">Choose license state</option>
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
                                                    <div id="invalid-dl_state" class="d-none error"></div>
                                                    <div id="invalid-validation-dl_state">
                                                        <p
                                                            v-for="error of v$.fields.dl_state.$errors"
                                                            :key="error.$uid"
                                                            class="m-0"
                                                        >
                                                            <label for="dl_state"
                                                                   class="text-left error">{{ error.$message }}</label>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <label for="own_car-1">Car Ownership</label>
                                                    <div class="row">
                                                        <div class="col-12 col-md-6">
                                                            <label class="rad-label"
                                                                   v-bind:class="{'not-valid': v$.fields.own_car.$error}">
                                                                <input type="radio" class="rad-input" name="own_car" id="own_car-1"
                                                                       v-model.lazy="fields.own_car" :value="false">
                                                                <div class="rad-design"></div>
                                                                <div class="rad-text">Not own</div>
                                                            </label>
                                                        </div>
                                                        <div class="col-12 col-md-6">
                                                            <label class="rad-label"
                                                                   v-bind:class="{'not-valid': v$.fields.own_car.$error}">
                                                                <input type="radio" class="rad-input" name="own_car" id="own_car-2"
                                                                       v-model.lazy="fields.own_car" :value="true">
                                                                <div class="rad-design"></div>
                                                                <div class="rad-text">Own</div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div id="invalid-own_car" class="d-none error"></div>
                                                    <div id="invalid-validation-own_car">
                                                        <p
                                                            v-for="error of v$.fields.own_car.$errors"
                                                            :key="error.$uid"
                                                            class="m-0"
                                                        >
                                                            <label for="own_car"
                                                                   class="text-left error">{{ error.$message }}</label>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <span class="btn px-5 py-2 tab-action-btn-next float-end text-white button-next"
                                                   @click="nextStep">Next Step</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!--STEP3-->
                                    <div v-show="step === 3">
                                        <span class="op-05 text-smaller ls1">STEP - 3/4</span>
                                        <h2 class="mb-5 text-uppercase ls1 fw-bold text-green"><i
                                            class="icon-line-briefcase"></i> Employment Status</h2>
                                        <div class="row">
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="net_month_income">Monthly Net Income</label>
                                                <select class="form-select select-form" name="net_month_income"
                                                        id="net_month_income" v-model.lazy="fields.net_month_income"
                                                        v-bind:class="{'not-valid': v$.fields.net_month_income.$error}">
                                                    <option value="">Choose Monthly Net Income</option>
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
                                                <label for="income_type">Income Source</label>
                                                <select class="form-select select-form" name="income_type"
                                                        id="income_type" v-model.lazy="fields.income_type"
                                                        v-bind:class="{'not-valid': v$.fields.income_type.$error}">
                                                    <option v-for="t in this.income_type_lead" :value="t" v-show="fields.lead_type === 'payday'"
                                                            :key="'income_type'+t">
                                                        {{ t }}
                                                    </option>s
                                                    <option v-for="t in this.income_type_personal" :value="t" v-show="fields.lead_type === 'personal'"
                                                            :key="'income_type'+t">
                                                        {{ t }}
                                                    </option>
                                                    <option v-for="t in this.income_type" :value="t"
                                                            :key="'income_type'+t">
                                                        {{ t }}
                                                    </option>
                                                </select>
                                                <div id="invalid-income_type" class="d-none error"></div>
                                                <div id="invalid-validation-income_type">
                                                    <p
                                                        v-for="error of v$.fields.income_type.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="income_type"
                                                               class="text-left error">{{ error.$message }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="pay_frequency">Pay Frequency</label>
                                                <select class="form-select select-form" name="pay_frequency"
                                                        id="pay_frequency" v-model.lazy="fields.pay_frequency"
                                                        v-bind:class="{'not-valid': v$.fields.pay_frequency.$error}"
                                                        @change="nextPayDayChange()">
                                                    <option value="">Choose pay frequency</option>
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
                                            <div class="col-12 col-md-6">
                                                <label for="direct_deposit-1">Paid Type</label>
                                                <div class="row">
                                                    <div class="col-12 col-md-6">
                                                        <label class="rad-label"
                                                               v-bind:class="{'not-valid': v$.fields.direct_deposit.$error}">
                                                            <input type="radio" class="rad-input" name="direct_deposit" id="direct_deposit-1"
                                                                   v-model.lazy="fields.direct_deposit" :value="false">
                                                            <div class="rad-design"></div>
                                                            <div class="rad-text">Paper check</div>
                                                        </label>
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <label class="rad-label"
                                                               v-bind:class="{'not-valid': v$.fields.direct_deposit.$error}">
                                                            <input type="radio" class="rad-input" name="direct_deposit" id="direct_deposit-2"
                                                                   v-model.lazy="fields.direct_deposit" :value="true">
                                                            <div class="rad-design"></div>
                                                            <div class="rad-text">Direct deposit</div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div id="invalid-direct_deposit" class="d-none error"></div>
                                                <div id="invalid-validation-direct_deposit">
                                                    <p
                                                        v-for="error of v$.fields.direct_deposit.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="direct_deposit"
                                                               class="text-left error">{{ error.$message }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-6  mb-4">
                                                <h3>Next Pay Day</h3>
                                                <Datepicker
                                                    v-model.lazy="fields.next_pay_day"
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
                                                    v-model.lazy="fields.second_pay_day"
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
                                                <label for="emp_name">Employer Name</label>
                                                <input id="emp_name" type="text" name="emp_name" class="form-control"
                                                       maxlength="128" @input="dynamicValidation"
                                                       placeholder="Employer name" v-model.lazy="fields.emp_name"
                                                       v-bind:class="{'not-valid': v$.fields.emp_name.$error}">
                                                <div id="invalid-emp_name" class="d-none error"></div>
                                                <div id="invalid-validation-emp_name">
                                                    <p
                                                        v-for="error of v$.fields.emp_name.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="emp_name" class="text-left error">{{
                                                                error.$message
                                                            }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="job_title">Job Title</label>
                                                <input id="job_title" type="text" name="job_title" class="form-control"
                                                       maxlength="128" @input="dynamicValidation"
                                                       placeholder="Job title" v-model.lazy="fields.job_title"
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
                                                <label for="emp_phone">Work Phone</label>
                                                <input type="text" name="emp_phone" id="emp_phone" class="form-control"
                                                       placeholder="Enter Work Phone" @input="dynamicValidation"
                                                       v-bind:class="{'not-valid': v$.fields.emp_phone.$error}"
                                                       v-model.lazy="fields.emp_phone" @keypress="onlyDigitsKeypress"
                                                       @paste="onlyDigitsPaste" v-model.trim="fields.emp_phone" maxlength="12"
                                                       @keyup="phoneMask('emp_phone',$event)">
                                                <div id="invalid-emp_phone" class="d-none error"></div>
                                                <div id="invalid-validation-emp_phone">
                                                    <p
                                                        v-for="error of v$.fields.emp_phone.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="emp_phone" class="text-left error">{{
                                                                error.$message
                                                            }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="emp_time">Time Employed</label>
                                                <select class="form-select select-form" name="emp_time" id="emp_time"
                                                        v-model.lazy="fields.emp_time"
                                                        v-bind:class="{'not-valid': v$.fields.emp_time.$error}">
                                                    <option value="">Choose time employed</option>
                                                    <option value="12">1 year or less</option>
                                                    <option value="24">2 years</option>
                                                    <option value="36">3 years</option>
                                                    <option value="48">4 years</option>
                                                    <option value="60">5 years</option>
                                                    <option value="72">6 years</option>
                                                    <option value="84">7 years or more</option>
                                                </select>
                                                <div id="invalid-emp_time" class="d-none error"></div>
                                                <div id="invalid-validation-emp_time">
                                                    <p
                                                        v-for="error of v$.fields.emp_time.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="emp_time" class="text-left error">{{
                                                                error.$message
                                                            }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <span class="btn px-5 py-2 tab-action-btn-next float-end text-white button-next"
                                                   @click="nextStep">Next Step</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!--STEP4-->
                                    <div v-show="step === 4">
                                        <span class="op-05 text-smaller ls1">STEP - 4/4</span>
                                        <h2 class="mb-5 text-uppercase ls1 fw-bold text-green"><i
                                            class="icon-line-clipboard"></i> Bank Account</h2>
                                        <div class="row">
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="routing_number">ABA/Bank Routing Number</label>
                                                <input id="routing_number" type="text" name="routing_number"
                                                       class="form-control" @input="dynamicValidation"
                                                       maxlength="9" @keypress="onlyDigitsKeypress"
                                                       @copy.prevent @paste.prevent @cut.prevent
                                                       @change="autocompleteAba()"
                                                       placeholder="ABA/Bank routing number" autocomplete="off"
                                                       v-model.lazy="fields.routing_number"
                                                       v-bind:class="{'not-valid': v$.fields.routing_number.$error}">
                                                <p id="invalid-routing_number" class="d-none text-left error"></p>
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
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="account_number">Account Number</label>
                                                <input id="account_number" type="text" name="account_number"
                                                       class="form-control"
                                                       maxlength="30" @keypress="onlyDigitsKeypress"
                                                       @copy.prevent @paste.prevent @cut.prevent
                                                       placeholder="Account number" autocomplete="off"
                                                       v-model.lazy="fields.account_number"
                                                       v-bind:class="{'not-valid': v$.fields.account_number.$error}">
                                                <div id="invalid-account_number" class="d-none error"></div>
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
                                                <label for="bank_months">Months At Bank</label>
                                                <select class="form-select select-form" name="bank_months"
                                                        id="bank_months" v-model.lazy="fields.bank_months"
                                                        v-bind:class="{'not-valid': v$.fields.bank_months.$error}">
                                                    <option value="">Choose months at bank</option>
                                                    <option value="12">1 year or less</option>
                                                    <option value="24">2 years</option>
                                                    <option value="36">3 years</option>
                                                    <option value="48">4 years</option>
                                                    <option value="60">5 years</option>
                                                    <option value="72">6 years</option>
                                                    <option value="84">7 years or more</option>
                                                </select>
                                                <div id="invalid-bank_months" class="d-none error"></div>
                                                <div id="invalid-validation-bank_months">
                                                    <p
                                                        v-for="error of v$.fields.bank_months.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="bank_months"
                                                               class="text-left error">{{ error.$message }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="account_type-1">Active Checking Account</label>
                                                <div class="row">
                                                    <div class="col-12 col-md-6">
                                                        <label class="rad-label"
                                                               v-bind:class="{'not-valid': v$.fields.account_type.$error}">
                                                            <input type="radio" class="rad-input" name="account_type" id="account_type-1"
                                                                   v-model.lazy="fields.account_type" value="Checking">
                                                            <div class="rad-design"></div>
                                                            <div class="rad-text">Yes</div>
                                                        </label>
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <label class="rad-label"
                                                               v-bind:class="{'not-valid': v$.fields.account_type.$error}">
                                                            <input type="radio" class="rad-input" name="account_type" id="account_type-2"
                                                                   v-model.lazy="fields.account_type" value="Savings">
                                                            <div class="rad-design"></div>
                                                            <div class="rad-text">No</div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div id="invalid-account_type" class="d-none error"></div>
                                                <div id="invalid-validation-account_type">
                                                    <p
                                                        v-for="error of v$.fields.account_type.$errors"
                                                        :key="error.$uid"
                                                        class="m-0"
                                                    >
                                                        <label for="account_type"
                                                               class="text-left error">{{ error.$message }}</label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="debt_amount">Debt Amount</label>
                                                <select class="form-select select-form" name="debt_amount"
                                                        id="debt_amount" v-model.lazy="fields.debt_amount"
                                                        v-bind:class="{'not-valid': v$.fields.debt_amount.$error}"
                                                        @change="onChangeDebtAmount">
                                                    <option value="">Choose Debt Amount</option>
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
                                                <div id="invalid-debt_amount" class="d-none error"></div>
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
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="specialist_talk-1">Would you like to speak with a debt relief specialist about
                                                    reducing your debt?</label>
                                                <div class="row">
                                                    <div class="col-12 col-md-6">
                                                        <label class="rad-label"
                                                               v-bind:class="{'not-valid': v$.fields.specialist_talk.$error}">
                                                            <input type="radio" class="rad-input" name="specialist_talk" id="specialist_talk-1"
                                                                   v-model.lazy="fields.specialist_talk" :value="true"
                                                                   :disabled="fields.debt_amount == 0">
                                                            <div class="rad-design"></div>
                                                            <div class="rad-text">Yes</div>
                                                        </label>
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <label class="rad-label"
                                                               v-bind:class="{'not-valid': v$.fields.specialist_talk.$error}">
                                                            <input type="radio" class="rad-input" name="specialist_talk" id="specialist_talk-2"
                                                                   v-model.lazy="fields.specialist_talk" :value="false"
                                                                   :disabled="fields.debt_amount == 0">
                                                            <div class="rad-design"></div>
                                                            <div class="rad-text">No</div>
                                                        </label>
                                                    </div>
                                                    <div id="invalid-specialist_talk" class="d-none error"></div>
                                                    <div id="invalid-validation-specialist_talk">
                                                        <p
                                                            v-for="error of v$.fields.specialist_talk.$errors"
                                                            :key="error.$uid"
                                                            class="m-0"
                                                        >
                                                            <label for="specialist_talk"
                                                                   class="text-left error">{{ error.$message }}</label>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 mb-4">
                                                <label for="ssn">Social Security Number</label>
                                                <input id="ssn" type="text" name="ssn" class="form-control"
                                                       @copy.prevent @paste.prevent @cut.prevent
                                                       @keypress="onlyDigitsKeypress"
                                                       placeholder="SSN" autocomplete="off" maxlength="9"
                                                       v-model.lazy="fields.ssn" @input="dynamicValidation"
                                                       v-bind:class="{'not-valid': v$.fields.ssn.$error}">
                                                <div id="invalid-ssn" class="d-none error"></div>
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
                                            <div class="col-12 ">
                                                <button class="btn px-5 py-2 tab-action-btn-next float-end text-white button-next" type="button"
                                                   @click="nextStep" :disabled='!network'>Submit Now</button>
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
import {useLoading} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import useVuelidate from "@vuelidate/core";

import {
    checkPhone, phoneMask, saveVariable, saveError
} from '../../../common/js/commonGeneral';
import axios from 'axios';
import {
    dynamicValidation,
    goToStep,
    locationChange,
    mainFormData,
    mainFormValidations,
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
    saveState,
    saveStepVisitor, setClickAbleStepsAllTrue,
    setRadioButtons,
    setStepToClickAble,
    stepClickAble, submit, submitError,
    submitSuccess, sendSubmitRequest
} from "../../../common/js/mainForms";
import {
    autocompleteAba,
    disableNextPayDay,
    disableSecondPayDay,
    mountedCommonForm,
    nextPayDayChange, onlyDigitsKeypress,
    removeCookies, sendRequestCheckStatusDecision, visibilityChangeListener
} from "../../../common/js/commonForms";


export default {
    name: "loan-form",
    setup() {
        return {v$: useVuelidate()};
    },
    data() {
        return {
            ...mainFormData, ...{
                allSteps: 4,
                step_to_fields: {
                    1: ['requested_amount', 'reason_for_loan', 'credit_score', 'first_name', 'last_name', 'email', 'dob', 'home_phone', 'contact_time'],
                    2: ['zip', 'address', 'city', 'state', 'dl_number', 'dl_state', 'own_car', 'rent_or_own', 'citizenship', 'address_month'],
                    3: ['direct_deposit', 'net_month_income', 'income_type', 'pay_frequency', 'emp_name', 'job_title', 'emp_time', 'emp_phone', 'next_pay_day', 'second_pay_day'],
                    4: ['ssn', 'bank_months', 'routing_number', 'account_number', 'bank_phone', 'bank_name', 'account_type', 'debt_amount', 'specialist_talk'],
                },
                clickAbleSteps: {
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                },
                token: document.querySelector('meta[name="form-token"]').content,
                mainColor: siteSettings.general.main_color.value,
                buttonColor: siteSettings.general.main_button_color.value,
                buttonHoverBgColor: siteSettings.general.button_hover_bg_color.value,
                buttonHoverColor: siteSettings.general.button_hover_color.value,
            }
        };
    },
    validations() {
        return mainFormValidations;
    },
    watch: {
        fields: {
            handler(newValue, oldValue) {
                this.saveState();
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
            if (this.$cookies.isKey('fieldsGetStarted')) {
                let fields = this.$cookies.get('fieldsGetStarted');
                for (const field in fields) {
                    this.fields[field] = fields[field];
                }
            } else {
                this.fields.requested_amount = '2500';
            }
            if (this.$cookies.isKey('customerDataMain')) {
                this.setClickAbleStepsAllTrue();
            }
        });

        loader.hide()
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
        disableNextPayDay,
        disableSecondPayDay,
        dynamicValidation,
        async nextStep() {
            if (this.step === this.allSteps) {
                if (this.network) {
                    this.submit();
                }
                return;
            }
            if (this.error_follow) {
                let fields = this.step_to_fields[this.step];
                let error = false;
                if (fields) {
                    for (let i = 0; i < fields.length; i++) {
                        this.v$.fields[fields[i]].$touch();
                        if (this.v$.fields[fields[i]].$error) {
                            error = true;
                        }
                    }
                }
                if (!error) {
                    if (this.step === this.allSteps) {
                        this.submit();
                    } else {
                        this.step = this.error_steps.shift();
                    }
                    if (this.error_steps.length === 0) {
                        this.error_follow = false;
                    }
                }
            } else {
                let fields = this.step_to_fields[this.step];
                let error = false;
                if (fields) {
                    for (let i = 0; i < fields.length; i++) {
                        this.v$.fields[fields[i]].$touch();
                        if (this.v$.fields[fields[i]].$error) {
                            error = true;
                        }
                    }
                }
                if (!error) {
                    this.setStepToClickAble(this.step);
                    if (this.step === this.allSteps) {
                        this.submit();
                    } else {
                        this.step++;
                        this.saveState();
                        this.saveStepVisitor();
                    }
                }
            }
            if (this.step === 3 && this.fields.income_type === '') {
                if (this.fields.lead_type === 'personal') {
                    this.fields.income_type = 'Employed';
                } else if (this.fields.lead_type === 'payday') {
                    this.fields.income_type = 'Job Income';
                }
            }
            document.getElementById("step-form").scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            });
        },
        async checkEmail() {
            await this.saveStepVisitor();
            if (this.from_reapply) {
                return;
            }
            this.v$.fields.email.$touch();
            if (this.v$.fields.email.$error) {
                return;
            }
            let useLoader = useLoading();
            let loader = useLoader.show({
                container: this.$refs.formContainer
            });
            this.emailValid = true;
            document.getElementById('invalid-email').classList.add('d-none');
            document.getElementById('email').classList.remove('not-valid');
            axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
            try {
                await axios
                    .post(import.meta.env.VITE_API_SEARCH_REAPPLY, {
                        email: this.fields.email,
                        click_id: this.fields.click_id,
                        state: this.$cookies.get('customerState'),
                    })
                    .then((response) => {
                        loader.hide();
                        if (response.data.status === 'not found') {
                            this.$cookies.remove('requestedamount');
                        } else {
                            this.$cookies.set('requestedamount', this.fields.requested_amount);
                            this.$cookies.set('email', this.fields.email, 60 * 60 * 24 * 90);
                            this.$cookies.set('share_cookies', 1, 600);
                            let click_id = this.$cookies.get('click_id');
                            window.location.href = '/reapply' + (click_id === null ? '' : '?click_id=' + click_id);
                        }
                    })
                    .catch((error) => {
                        loader.hide();
                        this.emailValid = false;
                        document.getElementById('invalid-email').classList.remove('d-none');
                        document.getElementById('invalid-email').textContent = error.response.data.message;
                    });
            } catch (e) {
                this.saveError(e);
            }
        },
        saveStepVisitor,
        goToStep,
        setStepToClickAble,
        stepClickAble,
        prevStep,
        saveState,
        locationChange,
        autocompleteAba,
        submit,
        visibilityChangeListener,
        sendSubmitRequest,
        sendRequestCheckStatusDecision,
        submitSuccess,
        removeCookies,
        saveError,
        saveVariable,
        setRadioButtons,
        submitError,
        setClickAbleStepsAllTrue
    },
};
</script>

<style lang="scss" scoped>
    @import "../../sass/forms.scss";
    @import "../../sass/main_form.scss";
</style>
