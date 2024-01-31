<template>
    <section class="GSC_unsubscribe d-none d-sm-block" id="page-title" :style="mainColor">
        <div class="container clearfix" style="padding-left: 3rem;
            padding-right: 3rem;">
            <h1>Unsubscribe
            </h1>
            <div class="clearfix">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active text-gray" aria-current="page">Unsubscribe</li>
                </ol>
            </div>
        </div>
    </section>
    <div class="col-12" :style="mainColor">
        <div class="section shadow-sm rounded p-1 p-md-5 p-lg-6 m-0">
            <div class="row align-items-center flex-column">
                <div class="col-lg-6">
                    <p class="text-muted text-center">If you wish to unsubscribe from receiving future marketing
                        messages from
                        our website, please complete the form below or contact us at
                        <email-form></email-form>
                        so that we may assist you in answering any questions you may have.
                    </p>
                    <div class="widget subscribe-widget mt-2" v-show="!waiting">
                        <div class="widget-subscribe-form-result"></div>
                        <form id="widget-subscribe-form-2" class="mb-0" @submit.prevent="submit">
                            <div class="row">
                                <div class="col-12 mb-4">
                                    <input id="email" type="text" name="email"
                                           class="form-control form-control-lg"
                                           placeholder="Email address" autocomplete="on"
                                           v-model.trim="fields.email"
                                           v-bind:class="{'not-valid': v$.fields.email.$error}">
                                    <p class="d-flex flex-row-reverse bd-highlight mb-0 d-none"
                                       id="invalid-email"></p>
                                    <p
                                        class="d-flex flex-row-reverse bd-highlight mb-0"
                                        v-for="error of v$.fields.email.$errors"
                                        :key="error.$uid"
                                    >
                                        <span class="error">{{ error.$message }}</span>
                                    </p>
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col-12 position-relative">
                                    <input id="captcha" type="text" name="captcha"
                                           placeholder="Human check"
                                           class="form-control form-control-lg"
                                           v-bind:class="{'not-valid': v$.fields.captcha.$error}"
                                           v-model.trim="fields.captcha">
                                    <span class="position-absolute" style="right:8%;top:6px;" id="captcha_img">
                                                        <img :src="img_src">
                                                    </span>
                                    <span class="position-absolute" style="right:4%;top:13px;cursor: pointer;"
                                          @click="get_captcha()">&#x21bb;</span>
                                    <p id="invalid-captcha" class="text-end error mb-0 d-none">Incorrect
                                        captcha.</p>
                                    <p
                                        class="d-flex flex-row-reverse bd-highlight mb-0"
                                        v-for="error of v$.fields.captcha.$errors"
                                        :key="error.$uid"
                                    >
                                        <span class="error">{{ error.$message }}</span>
                                    </p>
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col-12 d-flex justify-content-end">
                                    <button
                                        class="button button-large rounded m-0 unsubscribe-btn">
                                        Unsubscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <WaitingPage ref="WaitingPage"></WaitingPage>
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
            mainColor: siteSettings.general.main_color.value,
            buttonColor: siteSettings.general.main_button_color.value,
            buttonHoverBgColor: siteSettings.general.button_hover_bg_color.value,
            buttonHoverColor: siteSettings.general.button_hover_color.value,
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
        submit() {
            let elements = document.querySelectorAll('.not-valid');
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.remove('not-valid');
            }
            elements = document.querySelectorAll('p[id^="invalid-"]');
            for (let i = 0; i < elements.length; i++) {
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
                    for (let i = 0; i < elements.length; i++) {
                        elements[i].classList.remove('not-valid');
                    }
                    for (let k = 0; k < error.response.data.errors[field].length; k++) {
                        let element = document.getElementById('invalid-' + field);
                        element.classList.remove('d-none');
                        element.innerHTML = '<span class="text-start error">' + error.response.data.errors[field][k] + '</span>';
                        document.querySelector('#invalid-' + field).classList.remove('d-none');
                    }
                }
            }
        }
    },
    mounted() {
        this.get_captcha();
    },
};
</script>

<style lang="scss" scoped>
    @import "../../sass/pages.scss";
</style>
