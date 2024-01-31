<template>
    <div :style="mainColors" v-show="!waiting" class="GSC_main container">
        <section class="page-section">
            <div class="row p-h2-0">
                <div class="col-lg-8 col-md-6 roboto">
                    <GreenLabel :title="'UNSUBSCRIBE'" :color="'var(--main-color)'" :extraClass="'roboto'" />
                    <p class="unsubscribe">We'll be sad to see you go, care to reconsider?</p>
                </div>
                <div class="col-lg-4 col-md-6 p-8">
                    <form class="unsubscribe-form" @submit.prevent="submit">
                        <div class="">
                            <div class="input-group">
                                <span class="input-group-text">@</span>
                                <input class="form-control" id="email" placeholder="Email Address" v-model.trim="fields.email" autocomplete="on" v-bind:class="{ 'not-valid': v$.fields.email.$error }">
                            </div>
                        </div>
                        <span id="invalid-email"></span>
                        <span v-for="error of v$.fields.email.$errors" :key="error.$uid">
                            <span class="text-start text-danger">{{ error.$message }}</span>
                        </span>
                        <div class="position-relative">
                            <div class="input-group mt-3">
                                <span class="input-group-text">?</span>
                                <input id="captcha" type="text" name="captcha" placeholder="Human check" class="form-control" v-bind:class="{ 'not-valid': v$.fields.captcha.$error }" v-model.trim="fields.captcha">
                                <span class="position-absolute" style="right:10%;top:6px;z-index: 5;" id="captcha_img">
                                    <img :src="img_src">
                                </span>
                                <span class="position-absolute" style="right:5%;top:11px;cursor: pointer;z-index: 5;" @click="get_captcha()">&#x21bb;</span>
                            </div>
                        </div>
                        <span id="invalid-captcha" class="text-start text-danger d-none">Incorrect.</span>
                        <span v-for="error of v$.fields.captcha.$errors" :key="error.$uid">
                            <span class="text-start text-danger">{{ error.$message }}</span>
                        </span>
                        <div class="mt-3">
                            <button type="submit" class="btn unsubscribe-button">Unsubscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <section class="page-section container-fluid">
            <BrownBlock />
        </section>
    </div>
    <WaitingPage ref="WaitingPage" />
</template>



<script>
import BrownBlock from '../components/BrownBlock.vue'
import GreenLabel from '../components/GreenLabel.vue'
import useVuelidate from "@vuelidate/core";

import {
    required,
    email,
} from "@vuelidate/validators";
import axios from "axios";

export default {
    name: "Unsubscribe",
    components: {
        BrownBlock,
        GreenLabel
    },
    setup() {
        return { v$: useVuelidate() };
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
            buttonHoverBgColor: siteSettings.general.button_hover_bg_color.value,
            buttonHoverColor: siteSettings.general.button_hover_color.value,
        };
    },
    validations() {
        return {
            fields: {
                email: { required, email },
                captcha: { required }
            },
        };
    },
    computed: {
        mainColors() {
            return {
                '--main-color': this.mainColor,
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
                        element.innerHTML = '<span class="text-start text-danger">' + error.response.data.errors[field][k] + '</span>';
                        document.querySelector('#invalid-' + field).classList.remove('d-none');
                    }
                }
            }
        }
    },
    mounted() {
        this.get_captcha();
        // document.querySelector('html body #app .form-wrapper .container-wrapper').style.backgroundColor = this.mainColor + 'E6';
    },
};
</script>

<style lang="scss" scoped>
@import "../../sass/forms.scss";
@import "../../sass/unsubscribe_form.scss";
@import "../../sass/pages.scss";
</style>
