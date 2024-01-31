<template>
    <section class="GSC_unsubscribe" :style="mainColor">
        <h2 class="mb-5 d-flex justify-content-between align-items-center">
            Unsubscribe
            <svg type="button" data-bs-dismiss="modal" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8516 8.59375L16.7378 3.70752C17.3374 3.10791 17.3374 2.13574 16.7378 1.53564L15.6519 0.449707C15.0522 -0.149902 14.0801 -0.149902 13.48 0.449707L8.59375 5.33594L3.70752 0.449707C3.10791 -0.149902 2.13574 -0.149902 1.53564 0.449707L0.449707 1.53564C-0.149902 2.13525 -0.149902 3.10742 0.449707 3.70752L5.33594 8.59375L0.449707 13.48C-0.149902 14.0796 -0.149902 15.0518 0.449707 15.6519L1.53564 16.7378C2.13525 17.3374 3.10791 17.3374 3.70752 16.7378L8.59375 11.8516L13.48 16.7378C14.0796 17.3374 15.0522 17.3374 15.6519 16.7378L16.7378 15.6519C17.3374 15.0522 17.3374 14.0801 16.7378 13.48L11.8516 8.59375Z" fill="#4B4B4B"/>
            </svg>
        </h2>
        <p>If you wish to unsubscribe from receiving future marketing
            messages from
            our website, please complete the form below or contact us at
            <EmailForm :user="user"></EmailForm>
            so that we may assist you in answering any questions you may have.
        </p>
        <form id="widget-subscribe" @submit.prevent="submit" v-show="!waiting">
            <div class="mb-4 d-flex align-items-center flex-column">
                <input id="email-unsubscribe" type="text" name="email"
                       class="form-control" v-model.trim="fields.email"
                       placeholder="Email address"
                       v-bind:class="{'not-valid': v$.fields.email.$error}" autocomplete="on">
                <div class="unsubscribe-wrapper-error">
                    <p class="text-end"
                         id="invalid-email-unsubscribe"></p>
                </div>
                <div class="unsubscribe-wrapper-error">
                    <p
                        class="text-end"
                        v-for="error of v$.fields.email.$errors"
                        :key="error.$uid"
                    >
                        <span class="error">{{ error.$message }}</span>
                    </p>
                </div>
            </div>
            <div class="position-relative mb-4 d-flex align-items-center flex-column">
                <input id="captcha" type="text" name="captcha"
                       placeholder="Human check"
                       class="form-control"
                       v-bind:class="{'not-valid': v$.fields.captcha.$error}"
                       v-model.trim="fields.captcha">
                <span class="position-absolute" id="captcha_img">
                    <img :src="img_src">
                </span>
                <span class="position-absolute" id="captcha_refresh"
                      @click="get_captcha()">&#x21bb;</span>
                <div class="unsubscribe-wrapper-error d-none" id="invalid-captcha">
                    <p class="text-end error mb-0">
                        Incorrect captcha.
                    </p>
                </div>
                <div class="unsubscribe-wrapper-error">
                    <p
                        class="text-end"
                        v-for="error of v$.fields.captcha.$errors"
                        :key="error.$uid"
                    >
                        <span class="error">{{ error.$message }}</span>
                    </p>
                </div>
            </div>
            <div class="mb-4 mt-m400px-50px d-flex justify-content-center">
                <button
                    class="main-button btn">
                    Unsubscribe
                </button>
            </div>
        </form>
        <WaitingPage ref="WaitingPage"></WaitingPage>
    </section>
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
    props: {
        user: Object,
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
            buttonColorSecond: siteSettings.general.button_color_second.value,
            mainButtonColor: siteSettings.general.main_button_color.value,
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
                '--main-button-color': this.mainButtonColor,
                '--main-button-color-second': this.buttonColorSecond,
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
                } else if (field === 'email') {
                    document.querySelector('#invalid-email-unsubscribe').innerHTML = '<span class="error">' + error.response.data.errors['email'][0] + '</span>';
                    document.querySelector('#invalid-email-unsubscribe').classList.remove('d-none');
                }
            }
        }
    },
    mounted() {
        this.get_captcha();
    },
};
</script>
