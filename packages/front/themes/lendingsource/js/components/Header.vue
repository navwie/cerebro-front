<template>
    <div class="header-section" id="EE_header" :style="mainColor">
        <div class="container GSC_header ">
            <div class="row">
                <div class="col-12 py-0">
                    <nav class="navbar navbar-expand-lg navbar-light py-lg-0">
                        <a class="navbar-brand me-0" href="/">
                            <img :src="logoSource" class="CE_header_logo header-logo" alt="logo" width="200" height="40">
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" v-bind:class="{'collapsing': collapsing}" id="navbarSupportedContent">
                            <ul class="navbar-nav w-100 ms-auto">
                                <li class="nav-item ms-lg-auto">
                                    <a class="CE_nav_link nav-link" href="/" >Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="CE_nav_link nav-link" href="/#EE_wu" @click="hideMenu">Why Choose Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="CE_nav_link nav-link" href="/#how-it-works" @click="hideMenu">How it Works</a>
                                </li>
                                <li class="nav-item">
                                    <a class="CE_nav_link nav-link" href="/#faq" @click="hideMenu">FAQ</a>
                                </li>
                                <li class="nav-item">
                                    <a class="CE_nav_link nav-link" href="/credit_disclosure">Credit Disclosure</a>
                                </li>
                                <li class="nav-item header-button ms-lg-auto mt-3 mb-4">
                                    <a id="EE_main_button" class="nav-link" @click="removeRefillData" href="/form">Get Started</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            logoSrc: siteSettings.elements.EE_header.CE_header_logo.src,
            mainColor: siteSettings.general.main_color.value,
            collapsing:false,
        }
    },
    computed: {
        logoSource() {
            return this.logoSrc;
        },
        mainColor() {
            return {
                '--main-color': this.mainColor,
            };
        },
    },
    mounted() {

    },
    methods:{
        removeRefillData(){
            this.$cookies.remove('customerState');
            this.$cookies.remove('customerDataMain');
        },
        hideMenu(){
            if(window.innerWidth <= 991){
                this.collapsing = true;
                setTimeout(() => this.collapsing = false,10)
            }
        }
    }
};
</script>

<style lang="scss" scoped>
    @import "../../sass/header.scss";
</style>
