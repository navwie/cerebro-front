//related to main forms only
import {alpha, alphaNum, email, helpers, maxLength, minLength, numeric, required} from "@vuelidate/validators";
import {
    address,
    age_less_than_100,
    age_more_then_18,
    alphabets,
    city,
    emailSymbols, next_pay_day,
    onlyLatinAlphabetsNumeric, phone, second_pay_day, zip
} from "./validations";
import {useLoading} from "vue-loading-overlay";
import axios from "axios";
import {triggerReapplyForm} from "./commonGeneral";

export let mainFormData = {
    waiting: false,
    personal_min_req: 0,
    post_back_amount: 0,
    from_reapply: false,
    step: 1,
    addressValid: false,
    credit_scores: {720: '720+', 670: '660-719', 620: '600-659', 599: '599 or less'},
    contact_time: [
        'Anytime',
        'Morning',
        'Afternoon',
        'Evening'
    ],
    income_type: [
        'Self Employed',
        'Pension',
        'Social Security',
        'Military',
        'Other'
    ],
    income_type_personal: [
        'Employed',
        'Disability',
    ],
    income_type_lead: [
        'Job Income',
        'Benefits',
        'Disability Income',
    ],
    pay_frequency: [
        'Weekly',
        'Every 2 Weeks',
        'Twice A Month',
        'Monthly'
    ],
    reasons_for_loan: [
        'Debt Consolidation',
        'Emergency Situation',
        'Auto Repair',
        'Auto Purchase',
        'Moving',
        'Home Improvement',
        'Medical',
        'Business',
        'Vacation',
        'Taxes',
        'Rent Or Mortgage',
        'Wedding',
        'Major Purchase',
        'Student Loan Refinance',
        'Credit Card Consolidation',
        'Other'
    ],
    network: true,
    fields: {
        request_id: '',
        reapply_id: null,
        click_id: null,
        auto_redirect_to_lead: false,
        lead_type: 'payday',
        reason_for_loan: 'Debt Consolidation',
        account_type: 'Checking',
        requested_amount: '800',
        email: null,
        direct_deposit: true,
        debt_amount: '0',
        unsecureddebt: false,
        specialist_talk: true,
        first_name: null,
        last_name: null,
        dob: null,
        account_number: null,
        address: null,
        address_month: '12',
        armed_forces: false,
        bank_months: '12',
        bank_name: null,
        bank_phone: null,
        citizenship: true,
        city: null,
        contact_time: 'Anytime',
        credit_score: '720',
        dl_number: null,
        dl_state: "AK",
        emp_name: null,
        emp_phone: null,
        emp_time: '12',
        home_phone: null,
        income_type: 'Employed',
        job_title: null,
        net_month_income: '3000',
        next_pay_day: null,
        pay_frequency: 'Every 2 Weeks',
        rent_or_own: true,
        own_car: true,
        routing_number: null,
        second_pay_day: null,
        ssn: null,
        state: null,
        zip: null,
        submit_sms: true,
        offer_params: '',
        sub_ids: {},
        flow_id: 1,
        visitor_id: 0,
    },
    timeout_save_state: false,
    error_steps: [],
    error_follow: false,
    errors: {},
    autocomplete: null,
    intervalCheckDecision: '',
    action_type: 'full',
    token: document.querySelector('meta[name="form-token"]').content,
    app_name: document.querySelector('title').content,
}

export let mainFormValidations = {
    fields: {
        account_type: {required},
        requested_amount: {required, numeric},
        reasons_for_loan: {required},
        email: {
            required,
            email: helpers.withMessage('Please enter a valid email address', email),
            emailSymbols: helpers.withMessage('Not allowed chars', emailSymbols),
        },
        reason_for_loan: {required},
        debt_amount: {required},
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
        dob: {
            required,
            age_more_then_18: helpers.withMessage('You should be 18 y.o.', age_more_then_18),
            age_less_than_100: helpers.withMessage('You must be under 100 years old', age_less_than_100)
        },
        account_number: {required, numeric, minLengthValue: minLength(4), maxLengthValue: maxLength(30)},
        address: {
            required,
            minLengthValue: minLength(5),
            maxLengthValue: maxLength(128),
            address: helpers.withMessage('Not allowed chars', address),
        },
        address_month: {required},
        armed_forces: {required},
        bank_months: {required},
        bank_name: {required},
        bank_phone: {required},
        citizenship: {required},
        city: {
            required,
            city: helpers.withMessage('Not valid city', city),
            minLengthValue: minLength(2),
            maxLengthValue: maxLength(128)
        },
        contact_time: {required},
        credit_score: {required},
        dl_number: {required, alphaNum, maxLengthValue: maxLength(32)},
        dl_state: {required, alpha, minLengthValue: minLength(2), maxLengthValue: maxLength(2)},
        emp_name: {
            required,
            minLengthValue: minLength(2),
            maxLengthValue: maxLength(128),
            onlyLatinAlphabetsNumeric: helpers.withMessage('Not allowed chars', onlyLatinAlphabetsNumeric),
        },
        emp_phone: {required, phone: helpers.withMessage('Not valid phone', phone)},
        emp_time: {required},
        home_phone: {required, phone: helpers.withMessage('Not valid phone', phone)},
        income_type: {required},
        job_title: {
            required,
            minLengthValue: minLength(2),
            maxLengthValue: maxLength(128),
            onlyLatinAlphabetsNumeric: helpers.withMessage('Not allowed chars', onlyLatinAlphabetsNumeric),
        },
        net_month_income: {required, numeric},
        next_pay_day: {
            required,
            next_pay_day: helpers.withMessage('Next pay day must be later than yesterday', next_pay_day)
        },
        second_pay_day: {
            required,
            second_pay_day: helpers.withMessage('Second pay day must be later than next pay day', second_pay_day)
        },
        pay_frequency: {required},
        rent_or_own: {required},
        own_car: {required},
        routing_number: {required, numeric, minLengthValue: minLength(9), maxLengthValue: maxLength(9)},
        ssn: {required, numeric, minLengthValue: minLength(9), maxLengthValue: maxLength(9)},
        state: {required, alpha, minLengthValue: minLength(2), maxLengthValue: maxLength(2)},
        zip: {required, zip: helpers.withMessage('Not valid zip', zip)},
        direct_deposit: {required},
        specialist_talk: {required},
    }
}

export async function mountedMainForm(vue, mountedCallback) {
    await triggerReapplyForm(vue);

    if (vue.$cookies.isKey('customerState')) {
        let state = vue.$cookies.get('customerState');
        vue.step = state.step;
        vue.fields = state.fields;
        vue.clickAbleSteps = state.clickAbleSteps;
        vue.fields.lead_type = '';//force load income types
    }
    vue.$cookies.set('requestedamount', 800);
    if (vue.$cookies.isKey('customerDataMain')) {
        try {
            const customerDataMain = vue.$cookies.get('customerDataMain');
            vue.fields.reapply_id = customerDataMain.id;
            for (let field in vue.fields) {
                if(field === 'click_id' || field === 'sub_ids' || field === 'offer_params' || field === 'flow_id'){
                    continue;
                }
                if (customerDataMain[field] !== undefined) {
                    vue.fields[field] = customerDataMain[field];
                } else {
                    vue.fields[field] = null;
                }
            }
            vue.fields.direct_deposit = '';
            vue.fields.account_type = '';
            vue.phoneMask('home_phone');
            vue.phoneMask('emp_phone');
            vue.from_reapply = true;
            vue.fields.auto_redirect_to_lead = false;
            vue.setRadioButtons();
        } catch (e) {
            console.log(e)
        }
    }
    if (vue.fields.reapply_id !== null) {
        let today = new Date();
        if (today.getDay() === 6) {
            today.setDate(today.getDate() + 2);
        } else if (today.getDay() === 0) {
            today.setDate(today.getDate() + 1);
        }
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        vue.fields.next_pay_day = mm + '-' + dd + '-' + yyyy;

        vue.nextPayDayChange();
    }

    vue.fields.visitor_id = vue.$cookies.get('visit_id');

    document.querySelector('html').addEventListener("keydown", (e) => {
        let step = vue.step;
        if (e.keyCode === 13 && step !== vue.allSteps) {
            vue.$refs.dobDatepicker.closeMenu();
            vue.$refs.next_pay_dayDatepicker.closeMenu();
            vue.$refs.second_pay_dayDatepicker.closeMenu();
            e.preventDefault();
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            vue.nextStep();
        }
    });

    vue.onChangeRequestedAmount();
    mountedCallback();
    if(vue.$cookies.isKey('email') && !vue.$cookies.isKey('customerDataMain')) {
        let click_id = vue.$cookies.get('click_id');
        window.location.href = '/reapply' + (click_id === null ? '' : '?click_id=' + click_id);
    }
}



export function onChangeRequestedAmount() {
    if ((parseFloat(this.fields.requested_amount) >= this.personal_min_req) && this.fields.lead_type !== 'personal') {
        this.fields.lead_type = 'personal';
        this.fields.income_type = 'Employed';
    } else if ((parseFloat(this.fields.requested_amount) < this.personal_min_req) && this.fields.lead_type !== 'payday') {
        this.fields.lead_type = 'payday';
        this.fields.income_type = 'Job Income';
    }
}
 export function onlyDigitsPaste(event) {
     let chars = event.clipboardData.getData('Text').split('');
     for (let i = 0; i < chars.length; i++) {
         if ("1234567890-".indexOf(chars[i]) === -1) {
             event.preventDefault();
         }
     }
 }

 export function onlyAlphabetsPaste(event) {
     let chars = event.clipboardData.getData('Text').split('');
     for (let i = 0; i < chars.length; i++) {
         if (chars[i].match(/[^a-zA-Z/`/-]/g)) {
             this.v$.fields[event.target.id].$touch();
         }
     }
 }

export function onlyAlphabetsKeypress(event) {
    if (event.key) {
        if (event.key === 'Backspace' || event.key === 'Tab' || event.ctrlKey) {
            return;
        }
        if (event.key.match(/[^a-zA-Z/`/-]/g)) {
            this.v$.fields[event.target.id].$touch();
        }
    }
}

export function onlyLatinPaste(event) {
    let chars = event.clipboardData.getData('Text').split('');
    for (let i = 0; i < chars.length; i++) {
        if (chars[i].match(/[^a-zA-Z]/g)) {
            this.v$.fields[event.target.id].$touch();
        }
    }
}

export function onlyLatinKeypress(event) {
    if (event.key) {
        if (event.key === 'Backspace' || event.key === 'Tab' || event.ctrlKey) {
            return;
        }
        if (event.key.match(/[^a-zA-Z]/g)) {
            this.v$.fields[event.target.id].$touch();
        }
    }
}

export function onChangeDebtAmount() {
    if (this.fields.debt_amount === 0) {
        this.fields.specialist_talk = false;
    }
}

export function payFrequencyChange(){
    this.nextPayDayChange();
}

export function dynamicValidation(event){
    const field = event.target.id;
    const value = this.fields[field];
    if(!value){
        return;
    }
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

    if( field === 'first_name'  || field === 'last_name'
        || field === 'zip'      || field === 'city'
        || field === 'emp_name' || field === 'job_title'){
        if(value.length >= 2){
            this.v$.fields[field].$touch();
        }
    }

    if(field === 'address'){
        if(value.length >= 5){
            this.v$.fields[field].$touch();
        }
    }

    if(field === 'home_phone' || field === 'emp_phone'){
        if(value.length >= 12){
            this.v$.fields[field].$touch();
        }
    }

    if(field === 'routing_number'){
        if(value.length === 9){
            this.v$.fields[field].$touch();
            event.target.blur();
        }
    }

    if(field === 'ssn'){
        if(value.length === 9){
            this.v$.fields[field].$touch();
        }
    }
}

export async function nextStep() {
    if (this.step === this.allSteps) {
        if (this.network) {
            this.submit();
        }
        return;
    }
    if (this.step === 2 && !this.from_reapply && !this.error_follow) {
        await this.checkEmail();
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
            this.step = this.error_steps.shift();
            this.saveState();
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
            if(this.clickAbleSteps){
                this.setStepToClickAble(this.step);
            }
            this.step++;
            this.saveStepVisitor();
            this.saveState();
        }
    }
    if(document.getElementById("form") !== null) {
        document.getElementById("form").scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });
    }
}
export function prevStep() {
    this.error_follow = false;
    if (this.step > 1) {
        this.step--;
    }
}

export function saveState() {
    if(!this.timeout_save_state){
        let state = {};
        state.step = this.step;
        state.fields = this.fields;
        state.addressValid = this.addressValid;
        state.clickAbleSteps = this.clickAbleSteps;
        state.step_carousel = this.step_carousel;
        this.$cookies.set('customerState', state, 60 * 60);
        if(this.fields.email){
            this.timeout_save_state = true;
            setTimeout(() => {
                this.timeout_save_state = false;
            },2000)
            axios.post(import.meta.env.VITE_API_SAVE_CUSTOMER_STATE, {
                email: this.fields.email,
                click_id: this.fields.click_id,
                state: state,
            })
        }
    }
}

export async function checkEmail(toFirstStep) {
    this.saveStepVisitor();
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
                visitor_id: this.$cookies.get('visit_id'),
                state: this.$cookies.get('customerState'),
            })
            .then((response) => {
                loader.hide();
                if (response.data.status === 'not found') {
                    this.$cookies.remove('requestedamount');
                    if (this.clickAbleSteps) {
                        this.setStepToClickAble(this.step);
                    }
                    if (toFirstStep) {
                        this.step = 1;
                    } else {
                        this.step++;
                    }
                    this.saveState();
                } else {
                    this.$cookies.set('requestedamount', this.fields.requested_amount);
                    this.$cookies.set('email', this.fields.email, 60 * 60 * 24 * 90);
                    this.$cookies.set('share_cookies', 1, 600);
                    let click_id = this.$cookies.get('click_id');
                    window.location.href = '/reapply' + (click_id === null ? '' : '?click_id=' + click_id);
                }
            })
            .catch((error) => {
                let element = document.getElementById('invalid-email');
                element.classList.remove('d-none');
                element.textContent = error.response.data.message;
                document.getElementById('email').classList.add('not-valid');
                loader.hide();
            });
    } catch (e) {
        this.saveError(e);
    }
}

export async function locationChange() {
    const zip = this.fields.zip;
    const address = this.fields.address;
    this.v$.fields.address.$touch();
    this.v$.fields.zip.$touch();
    if (this.v$.fields.address.$error || this.v$.fields.zip.$error) {
        if (this.addressValid) {
            this.fields.state = '';
            this.fields.city = '';
            this.addressValid = false;
        }
        return false;
    }
    let useLoader = useLoading();
    let loader = useLoader.show({
        container: this.$refs.formContainer
    });
    try {
        await axios.get(import.meta.env.VITE_URL_GET_LOCATION, {
            params: {
                'address': address,
                'zip': zip
            }
        }).then((response) => {
            const data = response.data;
            if (data.Address.State !== undefined || data.Address.City !== undefined) {
                document.getElementById('invalid-address').classList.add('d-none');
                this.fields.state = data.Address.State;
                this.fields.city = data.Address.City;
                this.addressValid = true;
            } else {
                let message = data.Address.Error.Description;
                message += 'Please enter data manual.';
                let element = document.getElementById('invalid-address');
                element.classList.remove('d-none');
                element.textContent = message;
                this.fields.state = '';
                this.fields.city = '';
                this.addressValid = false;
            }
            loader.hide();
        });
    } catch (e) {
        this.saveError(e);
    }
}

export function submit(){
    this.v$.fields.dl_number.$touch();
    if (this.v$.fields.dl_number.$error) {
        return false;
    }
    this.saveStepVisitor();
    let useLoader = useLoading();
    let loader = useLoader.show({
        container: this.$refs.formContainer
    });
    this.fields.home_phone = this.fields.home_phone.replace(/\D/g, '');
    this.fields.emp_phone = this.fields.emp_phone.replace(/\D/g, '');
    this.fields.armed_forces = this.fields.income_type === 'Military';
    this.fields.unsecureddebt = this.fields.debt_amount >= 10000;
    let url = '';
    let url_validation = '';
    if (this.fields.reapply_id !== null) {
        url = import.meta.env.VITE_API_UPDATE_MAIN;
        url_validation = import.meta.env.VITE_API_VALIDATION_UPDATE_MAIN;
    } else {
        url = import.meta.env.VITE_API_STORE;
        url_validation = import.meta.env.VITE_API_VALIDATION_FORM;
    }
    axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
    axios.post(url_validation, this.fields)
        .then((response) => {
            loader.hide();
            this.$refs.WaitingPage.startTimer();
            this.fields.request_id = response.data.request_id;
            this.$cookies.set('request_id', response.data.request_id, 60 * 60 * 2);
            this.sendSubmitRequest(url);
        })
        .catch((error) => {
            loader.hide();
            this.submitError(error)
        });
}

export function sendSubmitRequest(url){
    axios.post(url, this.fields)
        .catch((error) => {
            setTimeout(this.$toast.clear, 100);
            clearInterval(this.intervalCheckDecision);
            if (error.message === "Network Error") {
                setTimeout(() => {
                    this.$toast.error("Internet connection lost. Please, do not refresh the page.", {duration: 0})
                }, 1000);
                return;
            }
            this.$refs.WaitingPage.stopTimer(() => {
                this.submitError(error)
            });
        });
    document.addEventListener("visibilitychange", this.visibilityChangeListener);
    clearInterval(this.intervalCheckDecision);
    this.intervalCheckDecision = setInterval(() => {
        this.sendRequestCheckStatusDecision();
    }, import.meta.env.VITE_DELAY_STATUS_DECISION_CHECK * 1000)
}

export function submitSuccess(response) {
    if (response.data.status === "sold" || response.data.status === "test") {
        this.waiting = this.$refs.WaitingPage.waiting = true;
        this.removeCookies();
        window.location.href = import.meta.env.VITE_MARK_REDIRECTED_LINK + '?id=' + response.data.decision_id;
    } else if (response.data.status === "reject") {
        if (this.fields.lead_type === 'personal') {
            this.fields.lead_type = 'payday';
            this.fields.auto_redirect_to_lead = true;
            this.fields.reapply_id = response.data.reapply_id;
            this.setRadioButtons();
            this.submit();
        } else {
            window.location.href = '/reject';
        }
    } else if (response.data.status === "error" || response.data.status === "vpn_or_proxy") {
        this.removeCookies();
        window.location.href = '/reject';
    }
}

export function submitError(error) {
    if( error.message === 'Network Error' ) {
        return;
    }
    this.phoneMask('home_phone');
    this.phoneMask('emp_phone');
    if (error.response.status === 422) {
        document.removeEventListener("visibilitychange", this.visibilityChangeListener);
        let step_fields = [];
        let error_steps = [];
        this.error_follow = true;
        this.errors = error.response.data.errors;
        if (error.response.data.errors.ssn_non_encrypted) {
            this.errors.ssn = error.response.data.errors.ssn_non_encrypted;
        }

        if (error.response.data.errors.account_number_non_encrypted) {
            this.errors.account_number = error.response.data.errors.account_number_non_encrypted;
        }
        let elements = document.querySelectorAll('[id^=ivalid-]');
        for (const element of elements) {
            element.classList.add('d-none');
        }
        for (let i = 1; i <= this.allSteps; i++) {
            if (this.step_to_fields[i]) {
                step_fields = this.step_to_fields[i];
                for (let j = 0; j < step_fields.length; j++) {
                    if (this.errors[step_fields[j]]) {
                        if (error_steps[error_steps.length - 1] !== i) {
                            error_steps.push(i);
                        }
                        elements = document.querySelectorAll('input[name="' + step_fields[j] + '"]');
                        for (const element of elements) {
                            element.classList.add('not-valid');
                        }
                        for (let k = 0; k < this.errors[step_fields[j]].length; k++) {
                            if(step_fields[j] === 'bank_phone' || step_fields[j] === 'bank_name') {
                                continue;
                            }
                            let element = document.getElementById('invalid-' + step_fields[j]);
                            element.classList.remove('d-none');
                            element.innerHTML = '<span class="text-start text-danger">' + this.errors[step_fields[j]][k] + '</span>';
                        }
                    }
                }
            }
        }
        this.error_steps = error_steps;
        if (error_steps[error_steps.length] !== this.allSteps) {
            error_steps[error_steps.length] = this.allSteps;
        }

        let inputs = document.querySelectorAll('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("input", function() {
                this.classList.remove('not-valid');
                document.getElementById('invalid-' + this.name).classList.add('d-none');
            });
        }

        this.step = this.error_steps.shift();
    } else if (error.response.status === 429) {
        document.removeEventListener("visibilitychange", this.visibilityChangeListener);
        this.$refs.WaitingPage.stopTimer();
        this.step = this.allSteps;
        let element = document.getElementById('invalid-ssn');
        element.classList.remove('d-none');
        element.textContent = error.response.data.message;
    }
}

export async function saveStepVisitor(){
    axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
    const data = {
        'visitor_id':this.$cookies.get('visit_id'),
        'click_id':this.$cookies.get('click_id'),
        'step':this.step,
    };
    await axios.post(import.meta.env.VITE_API_SAVE_STEP_VISITOR,data);
}

export function goToStep(step) {
    this.clickAbleSteps[this.step] = true;
    if (this.stepClickAble(step)) {
        this.step = step;
        if (this.step === 3 && (this.fields.income_type === '' || this.fields.income_type === 'Employed' || this.fields.income_type === 'Job Income')) {
            if (this.fields.lead_type === 'personal') {
                this.fields.income_type = 'Employed';
            } else if (this.fields.lead_type === 'payday') {
                this.fields.income_type = 'Job Income';
            }
        }
    }
}

export function setStepToClickAble(step) {
    this.clickAbleSteps[step] = true;
}

export function stepClickAble(step) {
    return this.clickAbleSteps[step];
}

export function setClickAbleStepsAllTrue(){
    for (const [key] of Object.entries(this.clickAbleSteps)) {
        this.clickAbleSteps[key] = true;
    }
}

export function setRadioButtons() {
    switch (true) {
        case (this.fields.requested_amount < 500):
            this.fields.requested_amount = 500;
            break;
        case (this.fields.requested_amount < 800):
            this.fields.requested_amount = 500;
            break;
        case (this.fields.requested_amount < 1000):
            this.fields.requested_amount = 800;
            break;
        case (this.fields.requested_amount < 1500):
            this.fields.requested_amount = 1000;
            break;
        case (this.fields.requested_amount < 2500):
            this.fields.requested_amount = 1500;
            break;
        case (this.fields.requested_amount < 3500):
            this.fields.requested_amount = 2500;
            break;
        case (this.fields.requested_amount < 4500):
            this.fields.requested_amount = 3500;
            break;
        case (this.fields.requested_amount > 4500):
            this.fields.requested_amount = 4500;
            break;
    }

    switch (true) {
        case (this.fields.debt_amount < 7500):
            this.fields.debt_amount = 0;
            break;
        case (this.fields.debt_amount < 10000):
            this.fields.debt_amount = 7500;
            break;
        case (this.fields.debt_amount < 15000):
            this.fields.debt_amount = 10000;
            break;
        case (this.fields.debt_amount < 20000):
            this.fields.debt_amount = 15000;
            break;
        case (this.fields.debt_amount < 25000):
            this.fields.debt_amount = 20000;
            break;
        case (this.fields.debt_amount < 30000):
            this.fields.debt_amount = 25000;
            break;
        case (this.fields.debt_amount < 35000):
            this.fields.debt_amount = 30000;
            break;
        case (this.fields.debt_amount < 40000):
            this.fields.debt_amount = 35000;
            break;
        case (this.fields.debt_amount < 45000):
            this.fields.debt_amount = 40000;
            break;
        case (this.fields.debt_amount < 50000):
            this.fields.debt_amount = 45000;
            break;
        case (this.fields.debt_amount > 50000):
            this.fields.debt_amount = 50000;
            break;
    }

    switch (true) {
        case (this.fields.credit_score <= 599):
            this.fields.credit_score = 599;
            break;
        case (this.fields.credit_score < 660):
            this.fields.credit_score = 620;
            break;
        case (this.fields.credit_score < 720):
            this.fields.credit_score = 670;
            break;
        case (this.fields.credit_score > 720):
            this.fields.credit_score = 720;
            break;
    }

    switch (true) {
        case (this.fields.address_month < 12):
            this.fields.address_month = 12;
            break;
        case (this.fields.address_month < 24):
            this.fields.address_month = 12;
            break;
        case (this.fields.address_month < 36):
            this.fields.address_month = 24;
            break;
        case (this.fields.address_month < 48):
            this.fields.address_month = 36;
            break;
        case (this.fields.address_month < 60):
            this.fields.address_month = 48;
            break;
        case (this.fields.address_month < 72):
            this.fields.address_month = 60;
            break;
        case (this.fields.address_month < 84):
            this.fields.address_month = 72;
            break;
        case (this.fields.address_month > 84):
            this.fields.address_month = 84;
            break;
    }

    switch (true) {
        case (this.fields.net_month_income < 1000):
            this.fields.net_month_income = 1000;
            break;
        case (this.fields.net_month_income < 1500):
            this.fields.net_month_income = 1000;
            break;
        case (this.fields.net_month_income < 2000):
            this.fields.net_month_income = 1500;
            break;
        case (this.fields.net_month_income < 2500):
            this.fields.net_month_income = 2000;
            break;
        case (this.fields.net_month_income < 3000):
            this.fields.net_month_income = 2500;
            break;
        case (this.fields.net_month_income < 3500):
            this.fields.net_month_income = 3000;
            break;
        case (this.fields.net_month_income < 4000):
            this.fields.net_month_income = 3500;
            break;
        case (this.fields.net_month_income < 4500):
            this.fields.net_month_income = 4000;
            break;
        case (this.fields.net_month_income < 5000):
            this.fields.net_month_income = 4500;
            break;
        case (this.fields.net_month_income < 6000):
            this.fields.net_month_income = 5000;
            break;
        case (this.fields.net_month_income > 6000):
            this.fields.net_month_income = 6000;
            break;
    }

    switch (true) {
        case (this.fields.emp_time < 12):
            this.fields.emp_time = 12;
            break;
        case (this.fields.emp_time < 24):
            this.fields.emp_time = 12;
            break;
        case (this.fields.emp_time < 36):
            this.fields.emp_time = 24;
            break;
        case (this.fields.emp_time < 48):
            this.fields.emp_time = 36;
            break;
        case (this.fields.emp_time < 60):
            this.fields.emp_time = 48;
            break;
        case (this.fields.emp_time < 72):
            this.fields.emp_time = 60;
            break;
        case (this.fields.emp_time < 84):
            this.fields.emp_time = 72;
            break;
        case (this.fields.emp_time > 84):
            this.fields.emp_time = 84;
            break;
    }
}
