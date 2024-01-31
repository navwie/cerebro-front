//related to homepages only
import axios from "axios";
import {email, helpers, maxLength, minLength, numeric, required} from "@vuelidate/validators";
import {emailSymbols} from "./validations";

export let getStartedFormFields = {
        email: '',
        requested_amount: '2500',
        ssn: ''
}

export let getStartedFormValidations = {
    fields: {
        email: {
            required,
            email: helpers.withMessage('Please enter a valid email address', email),
            emailSymbols: helpers.withMessage('Not allowed chars', emailSymbols)
        },
        requested_amount: {required, numeric},
        ssn: {required, numeric, minLengthValue: minLength(4), maxLengthValue: maxLength(4)},
    }
}

export function getStarted(){
    this.v$.$touch()
    if (!this.v$.$errors.length) {
        this.$cookies.remove('requestedamount');
        this.$cookies.remove('customerDataMain');
        this.$cookies.remove('customerState');
        axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
        try {
            axios
                .post(import.meta.env.VITE_API_GET_STARTED, this.fields)
                .then((response) => {
                    if (response.status === 200) {
                        this.$cookies.set('requestedamount', this.fields.requested_amount);
                        this.$cookies.set('email', this.fields.email, 60 * 60 * 24 * 90);
                        this.$cookies.set('share_cookies', 1, 600);
                        let click_id = this.$cookies.get('click_id');
                        window.location.href = '/reapply?ssn=' + this.fields.ssn + (click_id === null ? '' : '&click_id=' + click_id);
                    }
                })
                .catch((error) => {
                    document.getElementById('invalid-ssn').classList.add('d-none');
                    if (error.response.status === 404) {
                        let fieldsGetStarted = {
                            'email': this.fields.email,
                            'requested_amount': this.fields.requested_amount,
                        }
                        this.$cookies.set('fieldsGetStarted', fieldsGetStarted, 60 * 60);
                        window.location.href = '/form';
                    } else if (error.response.status === 422) {
                        document.getElementById('invalid-ssn').classList.remove('d-none');
                        this.v$.fields.ssn.error = true;
                        if (error.response.data.errors) {
                            document.getElementById('invalid-ssn').innerHTML = '<p class="text-left error mb-0">' + error.response.data.message + '</p>';
                        } else {
                            document.getElementById('invalid-ssn').innerHTML = '<p class="text-left error mb-0">User not found</p>';
                        }
                    } else if (error.response.status === 429) {
                        document.getElementById('invalid-ssn').classList.remove('d-none');
                        document.getElementById('invalid-ssn').innerHTML = '<p class="text-left error mb-0">Too many attempts! Try it later.</p>';
                    }
                });
        } catch (e) {
            this.saveError(e);
        }
    }
}

export function checkEmail(){
    axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
    try {
        axios
            .post(import.meta.env.VITE_API_SEARCH_REAPPLY,  {
                email: this.fields.email
            })
            .then((response) => {
                if (response.data.status !== 'not found') {
                    this.$cookies.set('requestedamount', this.fields.requested_amount);
                    this.$cookies.set('email', this.fields.email, 60 * 60 * 24 * 90);
                    this.$cookies.set('share_cookies', 1, 600);
                    let click_id = this.$cookies.get('click_id');
                    window.location.href = '/reapply' + (click_id === null ? '' : '?click_id=' + click_id);
                }
            })
            .catch((error) => {
                // let fieldsGetStarted = {
                //     'email':email,
                //     'requested_amount':800,
                // }
                // this.$cookies.set('fieldsGetStarted',fieldsGetStarted,60 * 60);
                // window.location.href = '/form';
            });
    } catch (e) {
        this.saveError(e);
    }
}

