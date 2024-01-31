//relate to reapply and main forms
import {useLoading} from "vue-loading-overlay";
import axios from "axios";
import {countClick, handleGetParams, sendVisitorActionTypeRequest} from "./commonGeneral";

export async function mountedCommonForm(vue, fromReapply = 0) {
    if (vue.$cookies.isKey('request_id')) {
        checkDecisionByRequestId(vue);
    }
    await handleGetParams(vue);
    await countClick(vue, fromReapply);
    await sendVisitorActionTypeRequest(vue);
    vue.fields.click_id = vue.$cookies.get('click_id');
    if (vue.$cookies.isKey('offer_params')) {
        vue.fields.offer_params = vue.$cookies.get('offer_params');
    }
    if (vue.$cookies.isKey('sub_ids')) {
        vue.fields.sub_ids = vue.$cookies.get('sub_ids');
    }
    if (vue.$cookies.isKey('flow_id')) {
        vue.fields.flow_id = vue.$cookies.get('flow_id');
    }

    window.addEventListener('online', () => {
        setTimeout(vue.$toast.clear, 100);
        vue.network = true;
    });
    window.addEventListener('offline', () => {
        vue.$toast.error("Internet connection lost.");
        vue.network = false;
    });

    axios.defaults.headers.common["Authorization"] = "Bearer " + vue.token;
    await axios.get(import.meta.env.VITE_API_GET_USER).then((response) => {
        if (response.data.personal_min_req) {
            vue.personal_min_req = response.data.personal_min_req;
        } else {
            vue.personal_min_req = 1500;
        }
        if (response.data.post_back_amount) {
            vue.post_back_amount = response.data.post_back_amount;
        } else {
            vue.post_back_amount = 500;
        }
    });
    vue.onChangeRequestedAmount();
}

export function nextPayDayChange() {
    //    MM-DD-YYYY
    if (this.fields.next_pay_day !== '' && this.fields.next_pay_day != null && this.fields.pay_frequency !== '' && this.fields.pay_frequency != null) {
        let date = this.fields.next_pay_day.split("-");
        let second_pay_day = new Date();
        let next_pay_day = new Date(date[2], date[0] - 1, date[1]);
        if (this.fields.pay_frequency === "Weekly") {
            second_pay_day.setFullYear(date[2], date[0] - 1, next_pay_day.getDate() + 7);
        } else if (this.fields.pay_frequency === "Every 2 Weeks") {
            second_pay_day.setFullYear(date[2], date[0] - 1, next_pay_day.getDate() + 14);
        } else if (this.fields.pay_frequency === "Twice A Month") {
            second_pay_day.setFullYear(date[2], date[0] - 1, next_pay_day.getDate() + 14);
        } else if (this.fields.pay_frequency === "Monthly") {
            second_pay_day.setFullYear(date[2], date[0], next_pay_day.getDate());
        }
        if (second_pay_day.getDay() === 0) {
            second_pay_day.setDate(second_pay_day.getDate() + 1);
        } else if (second_pay_day.getDay() === 6) {
            second_pay_day.setDate(second_pay_day.getDate() + 2);
        }
        date = second_pay_day.toLocaleDateString('en-US').split('/');
        if (date[1].length === 1) {
            date[1] = '0' + date[1];
        }
        if (date[0].length === 1) {
            date[0] = '0' + date[0];
        }
        this.fields.second_pay_day = date.join('-');
    }
}

export function disableNextPayDay(date) {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (yesterday > date) {
        return true;
    }
    const day = new Date(date).getDay();
    return day === 0 || day === 6;
}

export function disableSecondPayDay(date) {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (yesterday > date) {
        return true;
    }
    const day = new Date(date).getDay();
    return day === 0 || day === 6;
}

export function onlyDigitsKeypress(event) {
    if (event.key) {
        if (event.key === 'Backspace' || event.key === 'Tab' || event.ctrlKey) {
            return;
        }
        if (event.key.match(/[^0-9]/g)) {
            event.preventDefault();
        }
    }
}

export async function autocompleteAba() {
    this.v$.fields.routing_number.$touch();
    if (this.v$.fields.routing_number.$error) {
        return false;
    }
    this.fields.bank_name = null;
    this.fields.bank_phone = null;
    document.getElementById('invalid-routing_number').classList.add('d-none');
    let useLoader = useLoading();
    let loader = useLoader.show({
        container: this.$refs.formContainer
    });
    axios.get(import.meta.env.VITE_URL_GET_BANK, {params: {'rn': this.fields.routing_number}}).then((response) => {
        const data = response.data
        if (data.code === 200) {
            this.fields.bank_name = data.customer_name;
            this.fields.bank_phone = data.telephone.replace(/-/g, '');
        } else {
            this.fields.bank_name = null;
            this.fields.bank_phone = null;
            document.getElementById('invalid-routing_number').textContent = data.message;
            document.getElementById('invalid-routing_number').classList.remove('d-none');
        }
        loader.hide();
    });
}

export function visibilityChangeListener() {
    if (document.visibilityState === "visible") {
        clearInterval(this.intervalCheckDecision);
        this.sendRequestCheckStatusDecision();
        this.intervalCheckDecision = setInterval(() => {
            this.sendRequestCheckStatusDecision();
        }, import.meta.env.VITE_DELAY_STATUS_DECISION_CHECK * 1000)
    }
}

export function sendRequestCheckStatusDecision() {
    axios
        .post(import.meta.env.VITE_API_CHECK_STATUS_DECISION, {
            email: this.fields.email,
            click_id: this.fields.click_id,
            request_id: this.fields.request_id,
            lead_type: this.fields.lead_type,
        })
        .then((response) => {
            if (response.data.message !== 'No data found') {
                clearInterval(this.intervalCheckDecision);
                document.removeEventListener("visibilitychange", this.visibilityChangeListener);
                this.$refs.WaitingPage.stopTimer(() => {
                    this.$cookies.remove('request_id');
                    this.submitSuccess(response)
                });
            }
            if (response.data.timeout === 1) {
                this.saveVariable(response);
                window.onbeforeunload = null;
                window.location.href = '/reject';
            }
        })
}

export function removeCookies(with_get_params = true) {
    this.$cookies.remove('requestedamount');
    this.$cookies.remove('customerDataMain');
    this.$cookies.remove('customerState');
    if (with_get_params) {
        this.$cookies.remove('click_id');
        this.$cookies.remove('offer_params');
        this.$cookies.remove('sub_ids');
        this.$cookies.remove('visit');
        this.$cookies.remove('click');
    }
}

function checkDecisionByRequestId(vue) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + vue.token;
    axios.get(import.meta.env.VITE_API_CHECK_DECISION, {
        params: {
            request_id: vue.$cookies.get('request_id')
        }
    }).then((response) => {
        if (response.data.status) {
            window.location.href = import.meta.env.VITE_MARK_REDIRECTED_LINK + '?id=' + response.data.decision_id +'&request_id_mark=1';
        }
    });
}
