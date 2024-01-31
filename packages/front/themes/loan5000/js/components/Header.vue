<template>
    <header id="header" class="GSC_header full-header transparent-header border-full-header header-size-custom sticky-top"
            :style="mainColor" >
        <div id="EE_header" style="background-color: #FFFFFF;">
            <div class="container">
                <div class="header-row">
                    <div id="logo">
                        <a href="/" class="standard-logo">
                            <img class="CE_header_logo2" :src="logoSource1" alt="RapidMutual Logo" width="210" height="70">
                        </a>
                        <a href="/" class="retina-logo">
                            <img class="CE_header_logo" :src="logoSource2" alt="RapidMutual Logo" width="210" height="70">
                        </a>
                    </div>
                    <button class="navbar-toggler border-unset d-lg-none collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon custom"></span>
                    </button>
                    <div class="w-100 w-md-unset collapse" id="navbar">
                        <nav class="primary-menu d-lg-none">
                            <ul class="one-page-menu menu-container">
                                <li class="menu-item" data-bs-toggle="collapse" data-bs-target="#navbar">
                                    <a href="/#hiw" class="menu-link">
                                        <div>How it Works</div>
                                    </a>
                                </li>
                                <li class="menu-item" data-bs-toggle="collapse" data-bs-target="#navbar">
                                    <a href="/#whyus" class="menu-link">
                                        <div>Why Us</div>
                                    </a>
                                </li>
                                <li class="menu-item" data-bs-toggle="collapse" data-bs-target="#navbar">
                                    <a href="/#advantages" class="menu-link">
                                        <div>Advantages</div>
                                    </a>
                                </li>
                                <li class="menu-item" data-bs-toggle="collapse" data-bs-target="#navbar">
                                    <a href="/#faq" class="menu-link">
                                        <div>Faq</div>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="/form" class="menu-link my-3" id="getStarted-header"
                                       @click="removeRefillData">Get Started</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="w-100 w-md-unset">
                        <nav class="primary-menu d-none d-lg-block">
                            <ul class="one-page-menu menu-container" style="width: 628.766px;">
                                <li class="menu-item">
                                    <a href="/#hiw" class="menu-link">
                                        <div class="CE_nav_link">How it Works</div>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="/#whyus" class="menu-link">
                                        <div class="CE_nav_link">Why Us</div>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="/#advantages" class="menu-link">
                                        <div class="CE_nav_link">Advantages</div>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="/#faq" class="menu-link">
                                        <div class="CE_nav_link">Faq</div>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="/form" class="menu-link" style="padding-right: 0px;"
                                       @click="removeRefillData">
                                        <div class="getStarted-header">Get Started</div>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            // logoSrc1: document.querySelector('meta[name="logo-image"]').content,
            logoSrc1: siteSettings.elements.EE_header.CE_header_logo2.src,
            // logoSrc2: document.querySelector('meta[name="logo-image"]').content,
            logoSrc2: siteSettings.elements.EE_header.CE_header_logo.src,
            // mainColor: document.querySelector('meta[name="main-color"]').content,
            // buttonColor: document.querySelector('meta[name="button-color"]').content,
            mainColor: siteSettings.general.main_color.value,
            buttonColor: siteSettings.general.main_button_color.value,
            buttonHoverBgColor: siteSettings.general.button_hover_bg_color.value,
            buttonHoverColor: siteSettings.general.button_hover_color.value,
            mobileMenuBgColor: siteSettings.general.mobile_menu_background_color.value,
            mobileMenuColor: siteSettings.general.mobile_menu_color.value,
        }
    },
    mounted() {
        document.getElementById("header").parentElement.style = 'display:unset;';
        if (window.innerWidth > 991) {
            document.getElementById('navbar').classList.remove('collapse');
        }
    },
    computed: {
        logoSource1() {
            return this.logoSrc1;
        },
        logoSource2() {
            return this.logoSrc2;
        },
        mainColor() {
            return {
                '--main-color': this.mainColor,
                '--main-button-color': this.buttonColor,
                '--main-button-hover-bg-color': this.buttonHoverBgColor,
                '--main-button-hover-color': this.buttonHoverColor,
                '--mobile-menu-background-color': this.mobileMenuBgColor,
                '--mobile-menu-color': this.mobileMenuColor,
            };
        },
    },
    methods: {
        removeRefillData() {
            this.$cookies.remove('fieldsGetStarted');
            this.$cookies.remove('customerDataMain');
            this.$cookies.remove('customerState');
        }
    }
};
</script>

<style lang="scss" scoped>
    @import "../../sass/header.scss";
</style>
