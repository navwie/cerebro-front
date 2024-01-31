<template>
    <div class="col-12 unsubscribe-container" :style="'--btn-color-first:' + btnColorFirst + ';--btn-color-second:' + btnColorSecond + ';'">
        <div class="p-md-5 p-lg-6 m-0">
            <div class="row align-items-center flex-column">
                <div class="col-lg-6 text-justify">
                    <p class="text-muted">If you wish to unsubscribe from receiving future marketing
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
                                           class="form-control form-control-lg not-dark focus-border-animation"
                                           placeholder="Email address"
                                           v-model.trim="fields.email"
                                           v-bind:class="{'is-invalid': v$.fields.email.$error}">
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
                                           class="form-control form-control-lg not-dark focus-border-animation"
                                           v-bind:class="{'is-invalid': v$.fields.captcha.$error}"
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
                                <div class="col-12">
                                    <!-- <div class="get-matches mt-4 d-flex align-items-center" @click="submit">
                                        Unsubscribe
                                    </div> -->
                                    <div class="get-matches get-matches-unsubscribe d-flex align-items-center" @click="submit">
                                        <div class="get-matches-text">Unsubscribe</div>
                                        <span class="get-matches-span ms-auto justify-content-center">
                                            <svg width="42" height="50" viewBox="0 0 42 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M35.3292 3.42317H0.585938C0.262354 3.42317 0 3.68552 0 4.0091V6.74348C0 7.06706 0.262354 7.32942 0.585938 7.32942H35.3292V9.57839C35.3292 10.6224 36.5914 11.1453 37.3297 10.4071L41.5318 6.20495C41.9895 5.74729 41.9895 5.00529 41.5318 4.54768L37.3297 0.345578C36.5915 -0.392655 35.3292 0.130197 35.3292 1.17424V3.42317Z" fill="#F6F6F6"/>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import {useLoading} from 'vue-loading-overlay';

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
            btnColorFirst: document.querySelector('meta[name="card-button-color-first"]').content,
            btnColorSecond: document.querySelector('meta[name="card-button-color-second"]').content,
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
            let useLoader = useLoading();
            let loader = useLoader.show({
                container: this.$refs.formContainer
            });
            axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
            axios
                .post(import.meta.env.VITE_API_CARD_UNSUBSCRIBE, this.fields)
                .then((response) => {
                    loader.hide();
                    window.location.href = '/';
                })
                .catch((error) => {
                    console.log(error);
                    if (error.response.status === 422) {
                        loader.hide();
                        this.submit_error(error);
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
