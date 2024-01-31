<template>
    <div class="GSC_header header-section">
        <div id="EE_header" class="container mw-100 p-0"  :style="mainColor">
            <div class="row">
                <div class="col-12 p-0">
                    <nav class="navbar navbar-expand-lg navbar-light p-0">
                        <a class="navbar-brand me-0 p-0" href="/">
                            <img :src="logoSource" class="CE_header_logo header-logo" alt="logo" height="40" width="177">
                        </a>
                        <button id="header-nav-btn" class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <ul class="navbar-nav w-100 ms-auto d-none d-lg-flex">
                            <li class="nav-item ms-lg-auto"><a class="CE_nav_link nav-link" href="/">HOME</a></li>
                            <li class="nav-item"><a class="CE_nav_link nav-link" type="button" href="/#how-it-works">HOW IT WORKS</a></li>
                            <li class="nav-item"><a class="CE_nav_link nav-link" type="button" href="/#EE_advantages">ADVANTAGES</a></li>
                            <li class="nav-item"><a class="CE_nav_link nav-link" type="button" href="/#EE_wu">WHY US</a></li>
                            <li class="nav-item"><a class="CE_nav_link nav-link" type="button" href="/#EE_faq">FAQ</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <div class="d-block d-lg-none offcanvas offcanvas-end" v-bind:class="{'collapsing': collapsing}" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header d-flex justify-content-end">
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" id="hideMenu"></button>
        </div>
        <div class="offcanvas-body pt-0">
            <ul class="navbar-nav w-100 ms-auto">
                <li class="nav-item ms-lg-auto"><a class="CE_nav_link nav-link" href="/">HOME</a></li>
                <li class="nav-item"><a class="CE_nav_link nav-link" type="button" href="/#how-it-works" @click="hideMenu">HOW IT WORKS</a></li>
                <li class="nav-item"><a class="CE_nav_link nav-link" type="button" href="/#EE_advantages" @click="hideMenu">ADVANTAGES</a></li>
                <li class="nav-item"><a class="CE_nav_link nav-link" type="button" href="/#EE_wu" @click="hideMenu">WHY US</a></li>
                <li class="nav-item"><a class="CE_nav_link nav-link" type="button" href="/#EE_faq" @click="hideMenu">FAQ</a></li>
            </ul>
            <hr>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            collapsing:false,
            logoSrc: siteSettings.elements.EE_header.CE_header_logo.src,
            mainColor: siteSettings.general.main_color.value,
            mainButtonColor: siteSettings.general.main_button_color.value,
        }
    },
    computed: {
        logoSource() {
            return this.logoSrc;
        },
        mainColor() {
            return {
                '--main-color': this.mainColor,
                '--main-button-color': this.mainButtonColor,
            };
        },
    },
    methods: {
        hideMenu(){
            if(window.innerWidth <= 991){
                setTimeout( () => document.getElementById('hideMenu').click(), 400)
            }
        }
    }
};
</script>

<style lang="scss" scoped>
    @import "../../sass/header.scss";
</style>
