<template>
    <div class="GSC_main_form" :style="mainColor">
        <header>
            <a href="/">
                <img :src="logoSource" height="40" width="177" alt="Logo">
            </a>
        </header>
        <div v-show="!waiting">
            <div class="d-flex justify-content-center wrapper-skill">
                <div class="d-flex justify-content-center skill" id="step-bar">
                    <div class="outer">
                        <div class="inner d-flex flex-column">
                            <div id="number">
                                {{ Math.round(step / allSteps * 100)}}%
                            </div>
                            <div id="completed">
                                COMPLETED
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160" height="160">
                        <defs>
                            <linearGradient id="GradientColor" gradientTransform="rotate(90)">
                                <stop offset="0%" :stop-color="stepBarColor" />
                                <stop offset="100%" :stop-color="buttonColor" />
                            </linearGradient>
                        </defs>
                        <circle :style="'stroke-dashoffset:' + circleDashoffset" cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
            <div class="d-flex justify-content-center form-div-1">
                <div class="d-flex flex-column bd-highlight form-head">
                    <p class="title-step mb-0 mt-auto bd-highlight">{{ titles[step] }}</p>
                </div>
            </div>
            <div class="justify-content-center question-div-wrapper" v-bind:class="{ 'd-flex': step === 21, 'd-none': step !== 21}">
                <div class="d-flex flex-column bd-highlight question-div">
                    <small>
                        How long have you had this bank account opened for?
                    </small>
                </div>
            </div>
        </div>
        <WaitingPage name="WaitingPage" ref="WaitingPage" :waiting="false"></WaitingPage>
        <div v-show="!waiting">
            <div class="d-flex justify-content-center form-div-2">
                <div class="d-flex flex-column bd-highlight">
                    <div class="form-wrapper" v-show="step === 1">
                        <div class="d-flex flex-row-reverse input-group">

                            <select class="form-select" v-model="fields.requested_amount" aria-invalid="false"
                                    v-bind:class="{'error-border': v$.fields.requested_amount.$error}" id="requested_amount">
                                <option value="500">$100 - $500</option>
                                <option value="800">$500 - $1000</option>
                                <option value="1000">$1000 - $1500</option>
                                <option value="1500">$1500 - $2000</option>
                                <option value="2500">$2000 - $3000</option>
                                <option value="3500">$3000 - $4000</option>
                                <option value="4500">$4000 - $5000</option>
                                <option value="6000">$5000 - $7000</option>
                                <option value="8000">$7000 - $10000</option>
                            </select>
                            <span class="input-group-text">
                                <svg width="30" height="30" viewBox="-1 -5 15 30" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.314 0V2.395H3.518C1.889 2.395 0.524 3.76 0.524 5.389V6.587C0.524 8.216 1.578 9.557 3.135 9.964L9.266 11.545C9.602 11.641 10.081 12.239 10.081 12.599V13.796C10.081 14.132 9.817 14.395 9.482 14.395H3.494C3.207 14.395 2.991 14.299 2.895 14.252V12H0.5V14.395C0.5 15.21 0.979 15.904 1.554 16.264C2.105 16.647 2.799 16.79 3.494 16.79H5.29V19.186H7.686V16.79H9.482C11.135 16.79 12.476 15.449 12.476 13.796V12.599C12.476 10.97 11.422 9.629 9.865 9.222L3.734 7.641C3.398 7.545 2.919 6.946 2.919 6.587V5.389C2.919 5.054 3.183 4.79 3.518 4.79H9.506C9.769 4.79 10.009 4.886 10.105 4.934V7.186H12.5V4.79C12.5 3.976 12.021 3.281 11.446 2.922C10.895 2.539 10.201 2.395 9.506 2.395H7.71V0H5.314Z"
                                        fill="white"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div class="form-wrapper" v-show="step === 2">
                        <div class="d-flex flex-row-reverse input-group">
                            <input type="text" v-model.lazy="fields.email" id="email"
                                   v-bind:class="{'error-border': v$.fields.email.$error}"
                                   class="form-control" placeholder="Enter your Email" autocomplete="on">
                            <span class="input-group-text">
                            <svg width="30" height="30" viewBox="1 -5 15 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.18092 17.9028C7.74602 17.9028 6.46856 17.7072 5.34853 17.3158C4.2285 16.929 3.28165 16.36 2.50798 15.6088C1.7343 14.8621 1.14505 13.949 0.740223 12.8694C0.335394 11.7899 0.132979 10.5619 0.132979 9.18549C0.132979 7.82706 0.335394 6.59458 0.740223 5.48805C1.14955 4.38151 1.74555 3.43241 2.52822 2.64075C3.31089 1.84458 4.26674 1.23284 5.39576 0.805519C6.52929 0.378199 7.82024 0.164539 9.26863 0.164539C10.6091 0.164539 11.8056 0.360207 12.8581 0.751543C13.9152 1.14288 14.8103 1.70064 15.5435 2.42484C16.2812 3.14453 16.8412 4.00142 17.2235 4.99551C17.6104 5.98509 17.8015 7.08038 17.797 8.28137C17.8015 9.10902 17.7296 9.8692 17.5811 10.5619C17.4327 11.2546 17.1988 11.8596 16.8794 12.3769C16.5646 12.8897 16.1507 13.2968 15.638 13.5981C15.1252 13.895 14.5044 14.0637 13.7757 14.1042C13.254 14.1447 12.8311 14.1064 12.5073 13.9895C12.1834 13.8725 11.936 13.6993 11.7651 13.4699C11.5987 13.236 11.4907 12.9639 11.4412 12.6535H11.3603C11.2523 12.9234 11.0409 13.1686 10.726 13.389C10.4112 13.6049 10.0266 13.7736 9.57225 13.895C9.12244 14.012 8.6434 14.0547 8.13511 14.0232C7.60433 13.9917 7.10055 13.868 6.62375 13.6521C6.15145 13.4362 5.73087 13.1236 5.36203 12.7143C4.99768 12.3049 4.7098 11.7989 4.49839 11.1961C4.29148 10.5934 4.18577 9.89619 4.18127 9.10453C4.18577 8.32185 4.29598 7.64039 4.51189 7.06014C4.73229 6.47988 5.02242 5.99184 5.38227 5.596C5.74662 5.20017 6.15144 4.8898 6.59676 4.66489C7.04207 4.43999 7.48963 4.29605 7.93944 4.23308C8.44773 4.15661 8.92903 4.15661 9.38333 4.23308C9.83764 4.30954 10.22 4.43324 10.5304 4.60417C10.8452 4.7751 11.0409 4.95952 11.1174 5.15744H11.2118V4.40175H13.3237V10.987C13.3282 11.2974 13.3979 11.538 13.5328 11.7089C13.6678 11.8799 13.85 11.9653 14.0794 11.9653C14.3897 11.9653 14.6484 11.8281 14.8553 11.5537C15.0667 11.2794 15.2241 10.8588 15.3276 10.292C15.4355 9.72526 15.4895 9.00332 15.4895 8.12619C15.4895 7.28054 15.3771 6.53836 15.1522 5.89962C14.9317 5.2564 14.6214 4.70988 14.221 4.26006C13.8252 3.80576 13.3642 3.43691 12.8379 3.15353C12.3116 2.87015 11.7403 2.66324 11.1241 2.53279C10.5124 2.40235 9.88262 2.33712 9.2349 2.33712C8.11487 2.33712 7.13653 2.50805 6.29988 2.84991C5.46323 3.18727 4.76603 3.66182 4.20826 4.27356C3.6505 4.8853 3.23217 5.60275 2.95329 6.4259C2.67891 7.24456 2.53947 8.13743 2.53497 9.10453C2.53947 10.1706 2.6879 11.1152 2.98028 11.9383C3.27716 12.757 3.71347 13.4452 4.28923 14.003C4.86499 14.5607 5.57569 14.9836 6.42133 15.2714C7.26698 15.5593 8.23857 15.7032 9.3361 15.7032C9.85339 15.7032 10.3594 15.665 10.8542 15.5885C11.349 15.5166 11.7966 15.4266 12.1969 15.3187C12.5972 15.2152 12.9188 15.114 13.1617 15.015L13.8297 16.9717C13.5463 17.1336 13.1617 17.2843 12.6759 17.4238C12.1947 17.5677 11.6504 17.6824 11.0431 17.7679C10.4404 17.8578 9.81965 17.9028 9.18092 17.9028ZM8.87055 11.8034C9.41932 11.8034 9.85564 11.6977 10.1795 11.4863C10.5079 11.2749 10.7418 10.9622 10.8812 10.5484C11.0251 10.1301 11.0926 9.61506 11.0836 9.00332C11.0791 8.46355 11.0094 8.00699 10.8745 7.63364C10.744 7.2558 10.5169 6.97017 10.193 6.77676C9.87363 6.57884 9.42832 6.47988 8.85706 6.47988C8.35777 6.47988 7.9327 6.58559 7.58184 6.797C7.23549 7.00841 6.9701 7.30528 6.78568 7.68762C6.60575 8.06546 6.51354 8.51078 6.50904 9.02356C6.51354 9.50036 6.59001 9.95242 6.73845 10.3797C6.88689 10.8026 7.13203 11.1467 7.47389 11.4121C7.81574 11.6729 8.2813 11.8034 8.87055 11.8034Z"
                                    fill="white"/>
                            </svg>
                        </span>
                        </div>
                        <div id="invalid-email" class="text-start text-danger"></div>
                        <div id="invalid-validation-email"
                             v-for="error of v$.fields.email.$errors"
                             :key="error.$uid"
                        >
                            <span class="text-start text-danger">{{ error.$message }}</span>
                        </div>
                        <p>
                            <small>
                                By clicking “Next Step”, you agree to our
                                <span data-bs-toggle="modal" data-bs-target="#terms" type="button">
                                    Terms & Conditions,
                                </span>
                                <span data-bs-toggle="modal" data-bs-target="#privacy" type="button">
                                    Privacy Policy,
                                </span>
                                <span data-bs-toggle="modal" data-bs-target="#credit_disclosure" type="button">
                                    Credit Disclosure,
                                </span>
                                and to receive important notices and other communications electronically.
                            </small>
                        </p>
                    </div>
                    <div class="form-wrapper" v-show="step === 3">
                        <select class="form-select without-span" v-model.lazy="fields.reason_for_loan"
                                v-bind:class="{'not-valid': v$.fields.reason_for_loan.$error}" id="reason_for_loan">
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
                    <div class="form-wrapper" v-show="step === 4">
                        <select class="form-select without-span" name="debt_amount"
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
                    <div class="form-wrapper" v-show="step === 5">
                        <input id="first_name" type="text" name="first_name"
                               class="form-control without-span" @input="dynamicValidation"
                               @keypress="onlyAlphabetsKeypress" @paste="onlyAlphabetsPaste"
                               maxlength="128" autocomplete="on"
                               placeholder="Your First Name" v-model.lazy="fields.first_name"
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
                        <input id="last_name" type="text" name="last_name" class="form-control without-span mt-4"
                               @keypress="onlyAlphabetsKeypress" @paste="onlyAlphabetsPaste"
                               maxlength="128" @input="dynamicValidation" autocomplete="on"
                               placeholder="Your Last Name" v-model.lazy="fields.last_name"
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
                    <div class="form-wrapper" v-show="step === 6">
                        <Datepicker
                            v-model.lazy="fields.dob"
                            :start-date="(new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000) - 5 * 24 * 60 * 60 * 1000)"
                            type="date"
                            :min-date="(new Date(Date.now() - 100 * 365 * 24 * 60 * 60 * 1000) - 24 * 24 * 60 * 60 * 1000)"
                            :max-date="(new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000) - 5 * 24 * 60 * 60 * 1000)"
                            v-bind:class="{'not-valid': v$.fields.dob.$error}"
                            ref="dobDatepicker"
                            placeholder="MM/DD/YYYY"
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
                    <div class="form-wrapper" v-show="step === 7">
                        <select class="form-select without-span" name="credit_score"
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
                    <div class="form-wrapper" v-show="step === 8">
                        <input id="address" type="text" name="address" class="form-control without-span"
                               placeholder="Your Address" v-model.lazy="fields.address"
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
                        <input id="zip" type="text" name="zip" class="form-control without-span mt-4"
                               placeholder="Your Zip Code" v-model.lazy="fields.zip" @input="dynamicValidation"
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
                        <select class="form-select without-span mt-4" id="state"
                                name="state" v-model.lazy="fields.state"
                                :disabled="this.addressValid"
                                v-bind:class="{'not-valid': v$.fields.state.$error}">
                            <option value="null">Choose license state</option>
                            <option value="AK">AK</option>
                            <option value="AL">AL</option>
                            <option value="AR">AR</option>
                            <option value="AZ">AZ</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                            <option value="DC">DC</option>
                            <option value="DE">DE</option>
                            <option value="FL">FL</option>
                            <option value="GA">GA</option>
                            <option value="HI">HI</option>
                            <option value="IA">IA</option>
                            <option value="ID">ID</option>
                            <option value="IL">IL</option>
                            <option value="IN">IN</option>
                            <option value="KS">KS</option>
                            <option value="KY">KY</option>
                            <option value="LA">LA</option>
                            <option value="MA">MA</option>
                            <option value="MD">MD</option>
                            <option value="ME">ME</option>
                            <option value="MI">MI</option>
                            <option value="MN">MN</option>
                            <option value="MO">MO</option>
                            <option value="MS">MS</option>
                            <option value="MT">MT</option>
                            <option value="NC">NC</option>
                            <option value="ND">ND</option>
                            <option value="NE">NE</option>
                            <option value="NH">NH</option>
                            <option value="NJ">NJ</option>
                            <option value="NM">NM</option>
                            <option value="NV">NV</option>
                            <option value="NY">NY</option>
                            <option value="OH">OH</option>
                            <option value="OK">OK</option>
                            <option value="OR">OR</option>
                            <option value="PA">PA</option>
                            <option value="RI">RI</option>
                            <option value="SC">SC</option>
                            <option value="SD">SD</option>
                            <option value="TN">TN</option>
                            <option value="TX">TX</option>
                            <option value="UT">UT</option>
                            <option value="VA">VA</option>
                            <option value="VT">VT</option>
                            <option value="WA">WA</option>
                            <option value="WI">WI</option>
                            <option value="WV">WV</option>
                            <option value="WY">WY</option>
                        </select>
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
                        <input id="city" type="text" name="city" class="form-control without-span mt-4"
                               maxlength="128" @input="dynamicValidation"
                               placeholder="Your City" v-model.lazy="fields.city"
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
                    <div class="form-wrapper" v-show="step === 9">
                        <select class="form-select without-span" name="address_month"
                                id="address_month" v-model.lazy="fields.address_month"
                                v-bind:class="{'not-valid': v$.fields.address_month.$error}">
                            <option value="">Choose time at address</option>
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
                    <div class="form-wrapper" v-show="step === 10">
                        <div class="row mt-2">
                            <div class="col-6 p-1 ps-0">
                                <label class="radio-label"
                                       v-bind:class="{'not-valid': v$.fields.rent_or_own.$error, 'active': fields.rent_or_own}">
                                    <input type="radio" class="rad-input" name="rent_or_own"
                                           v-model.lazy="fields.rent_or_own" :value="true">
                                    <div class="radio-design">
                                        <div class="rad-design-2">
                                        </div>
                                    </div>
                                    <div class="rad-text">I Rent</div>
                                </label>
                            </div>
                            <div class="col-6 p-1 pe-0">
                                <label class="radio-label"
                                       v-bind:class="{'not-valid': v$.fields.rent_or_own.$error, 'active': !fields.rent_or_own}">
                                    <input type="radio" class="rad-input" name="rent_or_own"
                                           v-model.lazy="fields.rent_or_own" :value="false">
                                    <div class="radio-design">
                                        <div class="rad-design-2">
                                        </div>
                                    </div>
                                    <div class="rad-text">I Own</div>
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
                        <div class="d-flex justify-content-center form-div-1 mb-30px mt-10px">
                            <div class="d-flex flex-column bd-highlight form-head">
                                <p class="title-step mb-0 mt-auto bd-highlight">{{ titles[10.2] }}</p>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-6 p-1 ps-0">
                                <label class="radio-label"
                                       v-bind:class="{'not-valid': v$.fields.own_car.$error, 'active': fields.own_car}">
                                    <input type="radio" class="rad-input" name="own_car"
                                           v-model.lazy="fields.own_car" :value="true">
                                    <div class="radio-design">
                                        <div class="rad-design-2">
                                        </div>
                                    </div>
                                    <div class="rad-text">Own</div>
                                </label>
                            </div>
                            <div class="col-6 p-1 pe-0">
                                <label class="radio-label"
                                       v-bind:class="{'not-valid': v$.fields.own_car.$error, 'active': !fields.own_car}">
                                    <input type="radio" class="rad-input" name="own_car"
                                           v-model.lazy="fields.own_car" :value="false">
                                    <div class="radio-design">
                                        <div class="rad-design-2">
                                        </div>
                                    </div>
                                    <div class="rad-text">Not own</div>
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
                    <div class="form-wrapper" v-show="step === 11">
                        <input type="text" name="home_phone" id="home_phone"
                               class="form-control without-span" placeholder="Enter Your Phone"
                               v-bind:class="{'not-valid': v$.fields.home_phone.$error}"
                               @input="dynamicValidation" @keypress="onlyDigitsKeypress"
                               @paste="onlyDigitsPaste" v-model.trim="fields.home_phone"
                               maxlength="12" @keyup="phoneMask('home_phone',$event)">
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
                        <span class="contact-time">
                            Best time to call:
                            <select class="" name="contact_time"
                                    id="contact_time" v-model.lazy="fields.contact_time">
                                <option v-for="t in this.contact_time" :value="t"
                                        :key="'contact_time'+t">
                                    {{ t }}
                                </option>
                            </select>
                        </span>
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
                        <p>
                            <small>
                                By checking the box above, you affirmatively agree to receive
                                marketing text messages, including those sent from an
                                auto-dialer, from ({{ app_name }}), its lenders, Integrated Delivery
                                Solutions (#21347), and third-party marketing partners related
                                to your request and additional promotions at the phone number
                                you provide, even if your phone number is on a Do Not Call list.
                                Consent is not required to submit a loan request or receive
                                services. Message and data rates may apply. Message frequency:
                                Up to 5 msgs per week. You may opt-out anytime by replying
                                “Stop” or “Help” for more information. See  <span data-bs-toggle="modal" data-bs-target="#terms" type="button">
                                    Terms
                                </span> for more information.
                            </small>
                        </p>
                    </div>
                    <div class="form-wrapper" v-show="step === 12">
                        <select class="form-select without-span" name="income_type"
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
                    <div class="form-wrapper" v-show="step === 13">
                        <select class="form-select without-span" name="net_month_income"
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
                    <div class="form-wrapper" v-show="step === 14">
                        <select class="form-select without-span" name="pay_frequency"
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
                        <div class="row mt-2">
                            <div class="col-6 p-1 ps-0">
                                <label class="radio-label"
                                       v-bind:class="{'not-valid': v$.fields.direct_deposit.$error, 'active': fields.direct_deposit === true}">
                                    <input type="radio" class="rad-input" name="direct_deposit"
                                           v-model.lazy="fields.direct_deposit" :value="true">
                                    <div class="radio-design">
                                        <div class="rad-design-2">
                                        </div>
                                    </div>
                                    <div class="rad-text" style="font-size:15px">Direct deposit</div>
                                </label>
                            </div>
                            <div class="col-6 p-1 pe-0">
                                <label class="radio-label"
                                       v-bind:class="{'not-valid': v$.fields.direct_deposit.$error, 'active': fields.direct_deposit === false}">
                                    <input type="radio" class="rad-input" name="direct_deposit"
                                           v-model.lazy="fields.direct_deposit" :value="false">
                                    <div class="radio-design">
                                        <div class="rad-design-2">
                                        </div>
                                    </div>
                                    <div class="rad-text" style="font-size:15px">Paper check</div>
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
                    <div class="form-wrapper" v-show="step === 15">
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
                        <Datepicker
                            class="mt-4"
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
                    <div class="form-wrapper" v-show="step === 16">
                        <input id="emp_name" type="text" name="emp_name" class="form-control without-span"
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
                        <input id="job_title" type="text" name="job_title" class="form-control mt-4 without-span"
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
                    <div class="form-wrapper" v-show="step === 17">
                        <select class="form-select without-span" name="emp_time" id="emp_time"
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
                    <div class="form-wrapper" v-show="step === 18">
                        <input type="text" name="emp_phone" id="emp_phone" class="form-control without-span"
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
                    <div class="form-wrapper" v-show="step === 19">
                        <input id="bank_name" name="bank_name" type="text" class="d-none"
                               v-model.trim="fields.bank_name">
                        <input id="bank_phone" name="bank_phone" type="text" class="d-none"
                               v-model.trim="fields.bank_phone">
                        <input id="routing_number" type="text" name="routing_number"
                               class="form-control without-span" @input="dynamicValidation"
                               maxlength="9" @keypress="onlyDigitsKeypress"
                               @copy.prevent @paste.prevent @cut.prevent
                               @change="autocompleteAba()"
                               placeholder="ABA/Bank routing number" autocomplete="off"
                               v-model.lazy="fields.routing_number"
                               v-bind:class="{'not-valid': v$.fields.routing_number.$error}">
                        <p id="invalid-routing_number" class="d-none text-left error"></p>
                        <p id="invalid-bank_phone" class="d-none text-left error"></p>
                        <p id="invalid-bank_name" class="d-none text-left error"></p>
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
                        <input id="account_number" type="text" name="account_number"
                               class="form-control mt-4 without-span"
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
                    <div class="form-wrapper" v-show="step === 20">
                        <div class="row mt-2">
                            <div class="col-6 p-1 ps-0">
                                <label class="radio-label"
                                       v-bind:class="{'not-valid': v$.fields.account_type.$error, 'active': fields.account_type === 'Checking'}">
                                    <input type="radio" class="rad-input" name="account_type"
                                           v-model.lazy="fields.account_type" value="Checking"
                                    >
                                    <div class="radio-design">
                                        <div class="rad-design-2">
                                        </div>
                                    </div>
                                    <div class="rad-text">Checking account</div>
                                </label>
                            </div>
                            <div class="col-6 p-1 pe-0">
                                <label class="radio-label"
                                       v-bind:class="{'not-valid': v$.fields.account_type.$error, 'active': fields.account_type === 'Savings'}">
                                    <input type="radio" class="rad-input" name="account_type"
                                           v-model.lazy="fields.account_type" value="Savings"
                                    >
                                    <div class="radio-design">
                                        <div class="rad-design-2">
                                        </div>
                                    </div>
                                    <div class="rad-text">Savings account</div>
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
                    <div class="form-wrapper" v-show="step === 21">
                        <select class="form-select without-span" name="bank_months"
                                id="bank_months" v-model.lazy="fields.bank_months"
                                v-bind:class="{'not-valid': v$.fields.bank_months.$error}">
                            <option value="">Choose time at bank</option>
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
                    <div class="form-wrapper" v-show="step === 22">
                        <input id="dl_number" type="text" name="dl_number"
                               class="form-control without-span" maxlength="128"
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
                        <select class="form-select without-span mt-4" id="dl_state"
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
                    <div class="form-wrapper" v-show="step === 23">
                        <input id="ssn" type="text" name="ssn" class="form-control without-span"
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
                    <div class="form-wrapper mb-auto">
                        <div class="main-button btn position-relative" @click="nextStep" v-show="step !== allSteps">
                            <span>
                                Next Step
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
                        <div class="main-button btn position-relative" @click="nextStep"
                             v-bind:class='{"disabled": !network}' v-show="step === allSteps">
                            <span>
                                Submit
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
                        <div class="bit-ssl">
                            <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.11899 0C4.26264 0 5.19835 0.950316 5.19835 2.11181V3.16772H5.23804C5.79032 3.16772 6.23804 3.61543 6.23804 4.16772V7.1875C6.23804 7.73978 5.79032 8.1875 5.23804 8.1875H0.999941C0.447657 8.1875 -5.81741e-05 7.73978 -5.81741e-05 7.1875V4.16772C-5.81741e-05 3.61544 0.447657 3.16772 0.999942 3.16772H1.03962V2.11181C1.03962 0.950316 1.97534 0 3.11899 0ZM3.11899 1.05591C2.53677 1.05591 2.07931 1.52051 2.07931 2.11181V3.16772H4.15867V2.11181C4.15867 1.52051 3.70121 1.05591 3.11899 1.05591Z"
                                    fill="#4B4B4B"/>
                            </svg>
                            256-BIT SSL
                        </div>
                        <div class="btn-back" @click="prevStep">
                            <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5 7.72676C6.5 8.59687 5.46568 9.05187 4.82428 8.46392L1.30417 5.23715C0.871801 4.84082 0.871801 4.15918 1.30417 3.76285L4.82427 0.536082C5.46568 -0.0518694 6.5 0.403131 6.5 1.27324L6.5 7.72676Z" fill="#7A7A7A"/>
                            </svg>
                            <span>
                                Back
                            </span>
                        </div>
                    </div>
    <!--                    carrousel                -->
<!--                    <div class="form-wrapper steps-wrapper d-flex justify-content-center align-items-center">-->
<!--                        <svg class="mt-1" width="9" height="12" viewBox="0 0 9 12" fill="none" type="button"-->
<!--                             xmlns="http://www.w3.org/2000/svg" @click="stepCarouselPrev">-->
<!--                            <path-->
<!--                                d="M5.70711 0.707107C5.31658 0.316583 4.68342 0.316583 4.29289 0.707107L0.707106 4.29289C0.316582 4.68342 0.316583 5.31658 0.707107 5.70711L4.29289 9.29289C4.68342 9.68342 5.31658 9.68342 5.70711 9.29289L6.16789 8.83211C6.55842 8.44158 6.55842 7.80842 6.16789 7.41789L4.45711 5.70711C4.06658 5.31658 4.06658 4.68342 4.45711 4.29289L6.16789 2.58211C6.55842 2.19158 6.55842 1.55842 6.16789 1.16789L5.70711 0.707107Z"-->
<!--                                :fill="colorPrevStepArrow()"/>-->
<!--                        </svg>-->
<!--                        <div class="d-flex overflow-hidden carousel-wrapper">-->
<!--                            <div class="d-flex justify-content-center carousel-step-item"-->
<!--                                 v-bind:style="getCarouselMargin()">-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 1,'click-able-step': stepClickAble(1)}"-->
<!--                                     @click="goToStep(1)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 2,'click-able-step': stepClickAble(2)}"-->
<!--                                     @click="goToStep(2)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 3,'click-able-step': stepClickAble(3)}"-->
<!--                                     @click="goToStep(3)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 4,'click-able-step': stepClickAble(4)}"-->
<!--                                     @click="goToStep(4)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 5,'click-able-step': stepClickAble(5)}"-->
<!--                                     @click="goToStep(5)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 6,'click-able-step': stepClickAble(6)}"-->
<!--                                     @click="goToStep(6)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 7,'click-able-step': stepClickAble(7)}"-->
<!--                                     @click="goToStep(7)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 8,'click-able-step': stepClickAble(8)}"-->
<!--                                     @click="goToStep(8)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 9,'click-able-step': stepClickAble(9)}"-->
<!--                                     @click="goToStep(9)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 10,'click-able-step': stepClickAble(10)}"-->
<!--                                     @click="goToStep(10)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 11,'click-able-step': stepClickAble(11)}"-->
<!--                                     @click="goToStep(11)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 12,'click-able-step': stepClickAble(12)}"-->
<!--                                     @click="goToStep(12)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 13,'click-able-step': stepClickAble(13)}"-->
<!--                                     @click="goToStep(13)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 14,'click-able-step': stepClickAble(14)}"-->
<!--                                     @click="goToStep(14)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 15,'click-able-step': stepClickAble(15)}"-->
<!--                                     @click="goToStep(15)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 16,'click-able-step': stepClickAble(16)}"-->
<!--                                     @click="goToStep(16)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 17,'click-able-step': stepClickAble(17)}"-->
<!--                                     @click="goToStep(17)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 18,'click-able-step': stepClickAble(18)}"-->
<!--                                     @click="goToStep(18)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 19,'click-able-step': stepClickAble(19)}"-->
<!--                                     @click="goToStep(19)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 20,'click-able-step': stepClickAble(20)}"-->
<!--                                     @click="goToStep(20)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 21,'click-able-step': stepClickAble(21)}"-->
<!--                                     @click="goToStep(21)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 22,'click-able-step': stepClickAble(22)}"-->
<!--                                     @click="goToStep(22)"></div>-->
<!--                                <div class="step"-->
<!--                                     v-bind:class="{'active': step === 23,'click-able-step': stepClickAble(23)}"-->
<!--                                     @click="goToStep(23)"></div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                            <svg class="rotate-180" width="9" height="12" viewBox="0 0 9 12" fill="none" type="button"-->
<!--                                 xmlns="http://www.w3.org/2000/svg" @click="stepCarouselNext">-->
<!--                                <path-->
<!--                                    d="M5.70711 0.707107C5.31658 0.316583 4.68342 0.316583 4.29289 0.707107L0.707106 4.29289C0.316582 4.68342 0.316583 5.31658 0.707107 5.70711L4.29289 9.29289C4.68342 9.68342 5.31658 9.68342 5.70711 9.29289L6.16789 8.83211C6.55842 8.44158 6.55842 7.80842 6.16789 7.41789L4.45711 5.70711C4.06658 5.31658 4.06658 4.68342 4.45711 4.29289L6.16789 2.58211C6.55842 2.19158 6.55842 1.55842 6.16789 1.16789L5.70711 0.707107Z"-->
<!--                                    :fill="colorNextStepArrow()"/>-->
<!--                            </svg>-->
<!--                    </div>-->
                </div>
            </div>
        </div>
        <div class="form-footer-wrapper">
            <div class="form-footer bg-white">
                <span class="footer-item" data-bs-toggle="modal" data-bs-target="#privacy">Privacy Policy</span>
                <span class="footer-item" data-bs-toggle="modal" data-bs-target="#terms">Terms of Use</span>
                <span class="footer-item" data-bs-toggle="modal" data-bs-target="#ccpa">CCPA-Dont Sell Info</span>
                <span class="footer-item" data-bs-toggle="modal" data-bs-target="#econsent">E-Consent</span>
                <span class="footer-item" data-bs-toggle="modal"
                      data-bs-target="#credit_disclosure">Credit Disclosure</span>
                <span class="footer-item" data-bs-toggle="modal" data-bs-target="#unsubscribe">Unsubscribe</span>
            </div>
            <div class="form-footer-mobile bg-white">
                <div class="w-50 d-flex flex-column">
                    <span class="footer-item" data-bs-toggle="modal" data-bs-target="#privacy">Privacy Policy</span>
                    <span class="footer-item" data-bs-toggle="modal" data-bs-target="#terms">Terms of Use</span>
                    <span class="footer-item" data-bs-toggle="modal" data-bs-target="#ccpa">CCPA-Dont Sell Info</span>
                </div>
                <div class="w-50 d-flex flex-column">
                    <span class="footer-item" data-bs-toggle="modal" data-bs-target="#econsent">E-Consent</span>
                    <span class="footer-item" data-bs-toggle="modal"
                          data-bs-target="#credit_disclosure">Credit Disclosure</span>
                    <span class="footer-item" data-bs-toggle="modal" data-bs-target="#unsubscribe">Unsubscribe</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'vue-loading-overlay/dist/css/index.css';
import useVuelidate from "@vuelidate/core";
import {checkPhone, saveVariable, saveError, phoneMask} from '../../../common/js/commonGeneral';

import {
    checkEmail, dynamicValidation,
    goToStep,
    locationChange,
    mainFormData,
    mainFormValidations,
    mountedMainForm, nextStep,
    onChangeDebtAmount,
    onChangeRequestedAmount,
    onlyAlphabetsKeypress, onlyAlphabetsPaste,
    onlyDigitsPaste,
    onlyLatinKeypress, onlyLatinPaste, payFrequencyChange, prevStep,
    saveState,
    saveStepVisitor,
    sendSubmitRequest, setClickAbleStepsAllTrue,
    setRadioButtons,
    setStepToClickAble,
    stepClickAble,
    submit,
    submitError,
    submitSuccess
} from "../../../common/js/mainForms";
import {
    autocompleteAba, disableNextPayDay, disableSecondPayDay,
    mountedCommonForm, nextPayDayChange, onlyDigitsKeypress, removeCookies, sendRequestCheckStatusDecision,
    visibilityChangeListener
} from "../../../common/js/commonForms";
import {useLoading} from "vue-loading-overlay";
import 'vue-loading-overlay/dist/css/index.css';


export default {
    setup() {
        return {v$: useVuelidate()};
    },
    data() {
        return {
            ...mainFormData, ...{
                logoSrc: siteSettings.elements.EE_header.CE_header_logo.src,
                allSteps: 23,
                titles: {
                    1: 'Loan amount',
                    2: 'Email',
                    3: 'Purpose Of Loan',
                    4: 'Debt',
                    5: 'Your Legal Name',
                    6: 'Your Date Of Birth',
                    7: 'Your Credit Score',
                    8: 'Address Of Residence',
                    9: 'Time At Current Residence',
                    10: 'Home Ownership',
                    10.2: 'Car Ownership',
                    11: 'Cell Phone Number',
                    12: 'Source Of Income',
                    13: 'Monthly Net Income',
                    14: 'Pay information',
                    15: 'Pay dates',
                    16: 'Work information',
                    17: 'Time Employed',
                    18: 'Work Phone',
                    19: 'Bank information',
                    20: 'Active Checking Account',
                    21: 'Length of Bank Account',
                    22: 'Driver\'s license',
                    23: 'Social Security Number',
                },
                step_to_fields: {
                    1: ['requested_amount'],
                    2: ['email'],
                    3: ['reason_for_loan'],
                    4: ['debt_amount'],
                    5: ['first_name', 'last_name'],
                    6: ['dob'],
                    7: ['credit_score'],
                    8: ['zip', 'address', 'city', 'state'],
                    9: ['address_month'],
                    10: ['rent_or_own', 'own_car'],
                    11: ['home_phone', 'contact_time'],
                    12: ['income_type'],
                    13: ['net_month_income'],
                    14: ['direct_deposit', 'pay_frequency'],
                    15: ['next_pay_day', 'second_pay_day'],
                    16: ['emp_name', 'job_title'],
                    17: ['emp_time'],
                    18: ['emp_phone'],
                    19: ['routing_number', 'account_number', 'bank_phone', 'bank_name'],
                    20: ['account_type'],
                    21: ['bank_months'],
                    22: ['dl_number', 'dl_state'],
                    23: ['ssn'],
                },
                // clickAbleSteps: {
                //     1: false,
                //     2: false,
                //     3: false,
                //     4: false,
                //     5: false,
                //     6: false,
                //     7: false,
                //     8: false,
                //     9: false,
                //     10: false,
                //     11: false,
                //     12: false,
                //     13: false,
                //     14: false,
                //     15: false,
                //     16: false,
                //     17: false,
                //     18: false,
                //     19: false,
                //     20: false,
                //     21: false,
                //     22: false,
                //     23: false,
                // },
                // buttonColor: document.querySelector('meta[name="button-color"]').content,
                mainButtonColor: siteSettings.general.main_button_color.value,
                buttonColorSecond: siteSettings.general.button_color_second.value,
                stepBarColor: siteSettings.general.step_bar_color.value,
                mainColor: siteSettings.general.main_color.value,
                step_carousel: 1,
                circleDashoffset: 450 - (450 / 23),
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
        },
        step: {
            handler(newValue, oldValue) {
                this.circleDashoffset = 450 - ((450 / (this.allSteps + 1)) * this.step);
                if (window.innerWidth > 400) {
                    if (this.step % 7 === 1) {
                        this.step_carousel = Math.floor(this.step / 7) + 1;
                    }
                } else if (window.innerWidth > 260) {
                    if (this.step % 5 === 1) {
                        this.step_carousel = Math.floor(this.step / 5) + 1;
                    }
                } else {
                    if (this.step % 3 === 1) {
                        this.step_carousel = Math.floor(this.step / 3) + 1;
                    }
                }
            }
        }
    },
    async mounted() {
        let useLoader = useLoading();
        let loader = useLoader.show({
            container: this.$refs.formContainer
        });

        await mountedCommonForm(this);
        await mountedMainForm(this, () => {
            setTimeout(() => document.getElementById('EE_footer').remove(), 10);
            if (this.$cookies.isKey('fieldsGetStarted') && !this.$cookies.isKey('customerState')) {
                let fields = this.$cookies.get('fieldsGetStarted');
                if (fields) {
                    this.step = 3;
                }
                for (const field in fields) {
                    this.fields[field] = fields[field];
                }
            } else {
                this.fields.requested_amount = '2500';
            }
        });

        loader.hide();
    },
    computed: {
        logoSource() {
            return this.logoSrc;
        },
        mainColor() {
            return {
                '--main-color': this.mainColor,
                '--main-button-color': this.mainButtonColor,
                '--main-button-color-second': this.buttonColorSecond,
                '--step-bar-color': this.stepBarColor,
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
        nextStep,
        checkEmail,
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
        submitError,
        saveError,
        saveVariable,
        setRadioButtons,
        setClickAbleStepsAllTrue,
        // colorPrevStepArrow() {
        //     return this.step_carousel > 1 ? '#424242' : '#a3a3a3';
        // },
        // colorNextStepArrow() {
        //     if (window.innerWidth > 400) {
        //         return this.step_carousel < 4 ? '#424242' : '#a3a3a3';
        //     } else if (window.innerWidth > 260) {
        //         return this.step_carousel < 5 ? '#424242' : '#a3a3a3';
        //     } else {
        //         return this.step_carousel < 8 ? '#424242' : '#a3a3a3';
        //     }
        // },
        // stepCarouselPrev() {
        //     if (this.step_carousel > 1) {
        //         this.step_carousel--;
        //     }
        // },
        // stepCarouselNext() {
        //     if (window.innerWidth > 400) {
        //         if (this.step_carousel < 4) {
        //             this.step_carousel++;
        //         }
        //     } else if (window.innerWidth > 260) {
        //         if (this.step_carousel < 5) {
        //             this.step_carousel++;
        //         }
        //     } else {
        //         if (this.step_carousel < 8) {
        //             this.step_carousel++;
        //         }
        //     }
        // },
        // getCarouselMargin() {
        //     if (window.innerWidth > 400) {
        //         return 'margin-left:-' + 100 * (this.step_carousel - 1) + '%';
        //     } else if (window.innerWidth > 260) {
        //         return 'margin-left:-' + 240 * (this.step_carousel - 1) + 'px';
        //     } else {
        //         return 'margin-left:-' + 144 * (this.step_carousel - 1) + 'px';
        //     }
        // },
    },
};
</script>

<style lang="scss" scoped>
    @import "../../sass/main_form.scss";
</style>
