<template>
    <div>
        <div class="GSC_unsubscribe gray-dark-section" :style="mainColor">
            <div class="container py-5">
                <div class="row py-md-4">
                    <div class="col-12">
                        <h3 class="mb-4">Unsubscribe </h3>
                        <p class="text-gray mb-4">If you wish to unsubscribe from receiving future marketing messages
                            from our website, please complete the form below or contact us at <EmailForm></EmailForm> so that we may
                            assist you in answering any questions you may have. </p>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="!waiting" :style="mainColor">
            <div class="form-wrapper">
                <div class="container-wrapper py-5">
                    <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <form method="POST" class="steps text-start" @submit.prevent="submit" >
                                <div class="step">
                                    <div class="above-buttons">
                                        <div class="radio-input-group">
                                            <div class="radio-wrapper mb-3 mb-lg-0 me-3 z-index-2">
                                                <h5 class="font-weight-medium text-white mb-4">Email address</h5>
                                                <input id="email" type="text" name="email"
                                                       placeholder="Email address"
                                                       v-model.trim="fields.email" autocomplete="on"
                                                       v-bind:class="{'not-valid': v$.fields.email.$error}">
                                                <p id="invalid-email"></p>
                                                <p
                                                    v-for="error of v$.fields.email.$errors"
                                                    :key="error.$uid"
                                                >
                                                    <span class="text-start text-danger">{{ error.$message }}</span>
                                                </p>
                                            </div>
                                            <div class="radio-wrapper z-index-2">
                                                <h5 class="font-weight-medium text-white mb-4">Human check</h5>
                                                <div class="position-relative">
                                                    <input id="captcha" type="text" name="captcha"
                                                           placeholder="Human check"
                                                           class="w-100"
                                                           v-bind:class="{'not-valid': v$.fields.captcha.$error}"
                                                           v-model.trim="fields.captcha">
                                                    <span class="position-absolute" style="right:8%;top:10px;" id="captcha_img">
                                                        <img :src="img_src">
                                                    </span>
                                                    <span class="position-absolute" style="right:3%;top:15px;cursor: pointer;" @click="get_captcha()">&#x21bb;</span>
                                                </div>
                                                <p id="invalid-captcha" class="text-start text-danger d-none">Incorrect.</p>
                                                <p
                                                    v-for="error of v$.fields.captcha.$errors"
                                                    :key="error.$uid"
                                                >
                                                    <span class="text-start text-danger">{{ error.$message }}</span>
                                                </p>
                                                <div class="d-flex flex-row-reverse w-100">
                                                    <button type="submit" class="btn btn-yellow mt-5 float-right">Unsubscribe</button>
                                                </div>
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
    required,
    email,
} from "@vuelidate/validators";
import axios from "axios";
export default {
    setup() {
        return {v$: useVuelidate()};
    },
    data() {
        return {
            waiting: false,
            img_src: '',
            fields: {
                email: null,
                captcha: null,
                captcha_key: null,
            },
            token: document.querySelector('meta[name="form-token"]').content,
            heroImage: siteSettings.elements.EE_hero['background-image'],
            buttonColor: siteSettings.general.main_button_color.value,
            mainColor: siteSettings.general.main_color.value,
            radioButtonColor: siteSettings.general.radio_button_color.value,
            radioButtonTextColor: siteSettings.general.radio_button_text_color.value,
        };
    },
    validations() {
        return {
            fields: {
                email: {required, email},
                captcha: {required}
            },
        };
    },
    computed: {
        heroStyle() {
            return 'background: #f7fafa url("' + this.heroImage + '") no-repeat center; background-size: cover; position: relative; min-height: 650px; display: flex; align-items: center;';
        },
        mainColor() {
            return {
                '--main-color': this.mainColor,
                '--main-button-color': this.buttonColor,
                '--radio-button-color': this.radioButtonColor,
                '--radio-button-text-color': this.radioButtonTextColor
            };
        },
    },
    methods: {
        submit() {
            let elements = document.querySelectorAll('.not-valid');
            for(let i = 0; i < elements.length; i++){
                elements[i].classList.remove('not-valid');
            }
            elements = document.querySelectorAll('p[id^="invalid-"]');
            for(let i = 0; i < elements.length; i++){
                elements[i].classList.add('d-none');
            }
            this.v$.$touch();
            if (this.v$.$error) {
                return;
            }
            this.$refs.WaitingPage.startTimer();
            axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
            axios
                .post(import.meta.env.VITE_API_UNSUBSCRIBE, this.fields)
                .then((response) => {
                    this.$refs.WaitingPage.stopTimer(() => {
                        this.waiting = this.$refs.WaitingPage.waiting = true;
                        window.location.href = '/'
                    });
                })
                .catch((error) => {
                    if (error.response.status === 422) {
                        this.$refs.WaitingPage.stopTimer(() => {
                            this.submit_error(error)
                        });
                    }
                });
        },
        get_captcha() {
            axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
            axios
                .get(import.meta.env.VITE_API_GET_CAPTCHA)
                .then((response) => {
                    this.img_src = response.data.captcha;
                    this.fields.captcha_key = response.data.key
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        submit_error(error) {
            this.get_captcha();
            for (let field in error.response.data.errors) {
                document.querySelector('#' + field).classList.add('not-valid');
                if (field === 'captcha') {
                    document.querySelector('#invalid-captcha').classList.remove('d-none');
                } else {
                    let elements = document.querySelectorAll('.not-valid');
                    for(let i = 0; i < elements.length; i++){
                        elements[i].classList.remove('not-valid');
                    }
                    for (let k = 0; k < error.response.data.errors[field].length; k++) {
                        let element = document.getElementById('invalid-'+ field);
                        element.classList.remove('d-none');
                        element.innerHTML = '<span class="text-start text-danger">' + error.response.data.errors[field][k] + '</span>';
                        document.querySelector('#invalid-'+ field).classList.remove('d-none');
                    }
                }
            }
        }
    },
    mounted() {
        this.get_captcha();
        document.querySelector('html body #app .form-wrapper .container-wrapper').style.backgroundColor = this.mainColor + 'E6';
    },
};
</script>

<style lang="scss" scoped>
    @import "../../sass/forms.scss";
</style>
