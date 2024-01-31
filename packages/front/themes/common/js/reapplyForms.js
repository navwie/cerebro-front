//related to reapply forms only
import {useLoading} from "vue-loading-overlay";
import axios from "axios";
import {helpers, maxLength, minLength, numeric, required} from "@vuelidate/validators";
import {next_pay_day, onlyLatinAlphabetsNumeric, second_pay_day} from "./validations";
export let reapplyData = {
    attempts: 4,
    post_back_amount: 0,
    personal_min_req: 0,
    waiting: false,
    pay_frequency: [
        'Weekly',
        'Every 2 Weeks',
        'Twice A Month',
        'Monthly'
    ],
    credit_scores: {720: '720+', 670: '660-719', 620: '600-659', 599: '599 or less'},
    phone: '',
    network: true,
    mark_imported: 0,
    debt_fields_show: 0,
    reapplyData: {},
    fields: {
        request_id: '',
        lead_type: '',
        auto_redirect_to_lead: false,
        ssn: null,
        pay_frequency: null,
        requested_amount: '800',
        net_month_income: null,
        second_pay_day: null,
        next_pay_day: null,
        credit_score: 599,
        job_title: null,
        first_name: null,
        debt_amount: 0,
        bank_name: '',
        bank_phone: '',
        account_number: '',
        routing_number: '',
        email: null,
        click_id: null,
        offer_params: '',
        sub_ids: {},
        flow_id:1,
        visitor_id: 0,
        cookie_mark: 0,
    },
    action_type: 'reapply',
    token: document.querySelector('meta[name="form-token"]').content,
    intervalCheckDecision: '',
    hideSpecialist: false,
}

export let reapplyValidations2 = {
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
        debt_amount:  {required},
        account_number: {required, numeric, minLengthValue: minLength(4), maxLengthValue: maxLength(30)},
        bank_name: {required} ,
        bank_phone: {required} ,
        routing_number:{required, numeric, minLengthValue: minLength(9), maxLengthValue: maxLength(9)},
    }
}

export let reapplyValidations = {
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
        account_number: this.mark_imported ? {required, numeric, minLengthValue: minLength(4), maxLengthValue: maxLength(30)} : {},
        bank_name: this.mark_imported ? {required} : {},
        bank_phone: this.mark_imported ? {required} : {},
        routing_number: this.mark_imported ? {required, numeric, minLengthValue: minLength(9), maxLengthValue: maxLength(9)} : {},
    }
}

export async function mountedReapply(vue, mountedCallback) {
    mountedCallback();

    await getReapply(vue);
    if (JSON.stringify(vue.reapplyData) !== "{}") {
        try {
            const flow = vue.$cookies.get('flow_id');
            const customerData = vue.reapplyData;
            if (customerData['imported_mark'] && flow === '2') {
                vue.mark_imported = 1;
            }
            if (customerData['debt_amount'] === 0 && flow === '2') {
                vue.debt_fields_show = 1;
            }
            for (let field in customerData) {
                if (vue.fields[field] !== undefined) {
                    vue.fields[field] = customerData[field];
                }
            }
            vue.fields.net_month_income = '3000';
            vue.phone = vue.phoneMask(customerData.phone);
            vue.setRadioButtons();
            vue.fields.requested_amount = vue.$cookies.get('requestedamount');
            if (vue.fields.requested_amount == null || vue.fields.requested_amount == 'null') {
                vue.fields.requested_amount = 800;
            }
            let next_pay_day = new Date(vue.fields.next_pay_day);
            next_pay_day.setDate(next_pay_day.getDate() + 1);
            let second_pay_day = new Date(vue.fields.second_pay_day);
            let today = new Date();
            if (today > next_pay_day && today < second_pay_day) {
                vue.fields.next_pay_day = vue.fields.second_pay_day;
            } else if (today > next_pay_day && today > second_pay_day) {
                vue.fields.next_pay_day = vue.fields.second_pay_day = '';
            }
            vue.onChangeRequestedAmount();
            vue.nextPayDayChange();
        } catch (e) {
            console.log(e)
        }
    } else {
        window.location.href = '/form';
    }

    vue.fields.visitor_id = vue.$cookies.get('visit_id');
}

export function onChangeRequestedAmount() {
    if ((parseFloat(this.fields.requested_amount) >= this.personal_min_req) && this.fields.lead_type !== 'personal') {
        this.fields.lead_type = 'personal';
    } else if ((parseFloat(this.fields.requested_amount) < this.personal_min_req) && this.fields.lead_type !== 'payday') {
        this.fields.lead_type = 'payday';
    }
}

export async function refill() {
    this.v$.fields.ssn.$touch();
    if (this.v$.fields.ssn.$error) {
        return;
    }
    this.attempts--;
    if (this.attempts === 0) {
        this.removeCookies();
        window.location.href = '/form';
    }
    let useLoader = useLoading();
    let loader = useLoader.show({
        container: this.$refs.formContainer
    });
    axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
    axios
        .get(import.meta.env.VITE_API_SEARCH_MAIN, {
            params: {
                email: this.fields.email,
                ssn: this.fields.ssn
            }
        })
        .then((response) => {
            loader.hide();
            this.refillSuccess(response);
        })
        .catch((error) => {
            document.getElementById('invalid-ssn').innerHTML = '<p class="text-left error">User not found</p>';
            loader.hide();
        });
}

export async function submit() {
    this.v$.$touch();
    if (this.v$.$error) {
        return;
    }
    this.attempts--;
    if (this.attempts === 0) {
        this.removeCookies();
        window.location.href = '/form';
    }
    let useLoader = useLoading();
    let loader = useLoader.show({
        container: this.$refs.formContainer
    });
    axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
    if(!this.mark_imported) {
        delete this.fields.bank_name;
        delete this.fields.bank_phone;
        delete this.fields.routing_number;
        delete this.fields.account_number;
    }
    if(!this.debt_fields_show) {
        delete this.fields.debt_amount;
    }
    axios.post(import.meta.env.VITE_API_VALIDATION_UPDATE_REAPPLY, this.fields)
        .then((response) => {
            loader.hide();
            this.$refs.WaitingPage.startTimer();
            this.fields.request_id = response.data.request_id;
            this.fields.cookie_mark = this.$cookies.isKey('cookie_mark');
            this.$cookies.set('request_id', response.data.request_id, 60 * 60 * 2);
            this.sendSubmitRequest();
        })
        .catch((error) => {
            loader.hide();
            if (error.response.status) {
                if (error.response.status === 422) {
                    document.removeEventListener("visibilitychange", this.visibilityChangeListener);
                    document.getElementById('invalid-ssn').innerHTML = '<p class="text-start text-danger">User not found</p>';
                    this.$refs.WaitingPage.stopTimer();
                } else if (error.response.status === 429) {
                    document.removeEventListener("visibilitychange", this.visibilityChangeListener);
                    document.getElementById('invalid-ssn').innerHTML = '<p class="text-start text-danger">Too many attempts!</p>';
                    this.$refs.WaitingPage.stopTimer();
                }
            }
        });
}

export function sendSubmitRequest(url) {
    axios.post(import.meta.env.VITE_API_UPDATE_REAPPLY, this.fields)
        .catch((error) => {
            setTimeout(this.$toast.clear, 100);
            clearInterval(this.intervalCheckDecision);
            try {
                if (error.message === 'Network Error') {
                    return;
                }
                if (error.response.status) {
                    if (error.response.status === 422) {
                        document.removeEventListener("visibilitychange", this.visibilityChangeListener);
                        document.getElementById('invalid-ssn').innerHTML = '<p class="text-start text-danger">User not found</p>';
                        this.$refs.WaitingPage.stopTimer();
                    } else if (error.response.status === 429) {
                        document.removeEventListener("visibilitychange", this.visibilityChangeListener);
                        document.getElementById('invalid-ssn').innerHTML = '<p class="text-start text-danger">Too many attempts!</p>';
                        this.$refs.WaitingPage.stopTimer();
                    } else {

                    }
                }
            } catch (e) {
                this.saveVariable(error);
                this.saveError(e);
            }
        });
    document.addEventListener("visibilitychange", this.visibilityChangeListener);
    clearInterval(this.intervalCheckDecision);
    this.intervalCheckDecision = setInterval(() => {
        this.sendRequestCheckStatusDecision();
    }, import.meta.env.VITE_DELAY_STATUS_DECISION_CHECK * 1000)
}

export function refillSuccess(response) {
    try {
        this.removeCookies(false);
        this.$cookies.set('customerDataMain', JSON.stringify(response.data.customerDataMain), 60 * 60);
        window.location.href = '/form';
    } catch (e) {
        this.saveError(e);
    }
}

export async function submitSuccess(response) {
    if (response.data.status === "sold" || response.data.status === "test") {
        this.waiting = this.$refs.WaitingPage.waiting = true;
        this.removeCookies();
        window.location.href = import.meta.env.VITE_MARK_REDIRECTED_LINK + '?id=' + response.data.decision_id;
    } else if (response.data.status === "reject") {
        if (this.fields.lead_type === 'personal') {
            this.fields.requested_amount = this.post_back_amount;
            this.fields.lead_type = 'payday';
            this.fields.auto_redirect_to_lead = true;
            this.setRadioButtons();
            this.submit();
        } else {
            window.location.href = '/reject';
        }
    } else if (response.data.status === "error" || response.data.status === "vpn_or_proxy") {
        this.removeCookies();
        this.saveVariable(response);
        window.location.href = '/reject';
    }
}

export async function getReapply(vue){
    if(!vue.$cookies.isKey('email')) {
        window.href = '/form';
    }else{
        axios.defaults.headers.common["Authorization"] = "Bearer " + vue.token;
        await axios
            .post(import.meta.env.VITE_API_GET_REAPPLY, {
                email: vue.$cookies.get('email'),
            })
            .then((response) => {
                if (response.data.status === 'not found') {
                    vue.$cookies.remove('email');
                    vue.$cookies.set('delete_shared_cookies', 1, 600);
                    window.location.href = '/form';
                } else {
                    vue.reapplyData = response.data.customerDataReapply;
                }
            })
            .catch((error) => {
                vue.$cookies.remove('email');
                vue.$cookies.set('delete_shared_cookies', 1, 600);
                window.location.href = '/form';
            })
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
        case (this.fields.net_month_income < 5000):
            this.fields.net_month_income = 4000;
            break;
        case (this.fields.net_month_income < 6000):
            this.fields.net_month_income = 5000;
            break;
        case (this.fields.net_month_income >= 6000):
            this.fields.net_month_income = 6000;
            break;
    }
}
