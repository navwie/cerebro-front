<template>
    <div class="GSC_header header" :style="mainColorStyle">
        <div id="EE_header" class="container">
            <nav class="navbar navbar-expand-xl navbar-light d-flex">
                <a class="navbar-brand" href="/">
                    <img :src="logoSource" class="CE_header_logo me-1" alt="logo">
                    <!-- <span class="grey">LENDING</span><span class="green">NOW</span> -->
                </a>
                <div class="d-flex align-items-center">
                    <a class="btn btn-get-started btn-get-started-1 me-2" href="/form">Get&nbsp;Started</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu"
                        aria-controls="offcanvasMenu" aria-expanded="false" aria-label="Toggle navigation"
                        :class="{ 'bi-x-lg': isOffcanvasOpen, 'bi-list': !isOffcanvasOpen }"
                        :style="offcanvasButtonStyles">
                    </button>
                </div>
                <div class="offcanvas offcanvas-end" id="offcanvasMenu">
                    <!-- <div class="offcanvas-header">
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div> -->
                    <div class="offcanvas-body">
                        <ul class="navbar-nav ms-auto navbar-top align-items-center t-aa-end">
                            <li class="nav-item">
                                <a href="/" class="CE_nav_link nav-link activ e">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="/why_choose_us" class="CE_nav_link nav-link activ e">Why Choose Us</a>
                            </li>
                            <li class="nav-item">
                                <a href="/how_it_works" class="CE_nav_link nav-link activ e">How It Works</a>
                            </li>
                            <li class="nav-item">
                                <a href="/faq" class="CE_nav_link nav-link activ e">FAQ</a>
                            </li>
                            <li class="nav-item">
                                <a href="/credit_disclosure" class="CE_nav_link nav-link activ e">Credit Disclosure</a>
                            </li>
                            <li class="nav-item">
                                <a class="btn btn-get-started btn-get-started-2" href="/form">Get&nbsp;Started</a>
                            </li>
                        </ul>
                        <ul class="bottom-menu navbar-nav ms-auto hidden">
                            <li class="nav-item">
                                <a href="/terms" class="CE_nav_link nav-link activ e">Terms of service</a>
                            </li>
                            <li class="nav-item">
                                <a href="/ccpa" class="CE_nav_link nav-link activ e">CCPA-Don't Sell Info</a>
                            </li>
                            <li class="nav-item">
                                <a href="/econsent" class="CE_nav_link nav-link activ e">E-Consent</a>
                            </li>
                            <li class="nav-item">
                                <a href="/privacy" class="CE_nav_link nav-link activ e">Privacy Policy</a>
                            </li>
                            <li class="nav-item">
                                <a href="/unsubscribe" class="CE_nav_link nav-link activ e">Unsubscribe</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            logoSrc: siteSettings.elements.EE_header.CE_header_logo.src, 
            mainColor: siteSettings.general.main_color.value,
            buttonHoverBgColor: siteSettings.general.button_hover_bg_color.value,
            buttonHoverColor: siteSettings.general.button_hover_color.value,
            mobileMenuBgColor: siteSettings.general.mobile_menu_bg_color.value,
            mobileMenuColor: siteSettings.general.mobile_menu_color.value,
            isOffcanvasOpen: false,
        }
    },
    computed: {
        logoSource() {
            return this.logoSrc;
        },
        mainColorStyle() {
            return {
                '--main-color': this.mainColor,
                '--main-button-hover-bg-color': this.buttonHoverBgColor,
                '--main-button-hover-color': this.buttonHoverColor,
                '--mobile-menu-bg-color': this.mobileMenuBgColor,
                '--mobile-menu-color': this.mobileMenuColor,
            };
        },
        offcanvasButtonStyles() {
            if (this.isOffcanvasOpen) {
                return {
                    backgroundColor: 'var(--mobile-menu-bg-color)',
                    color: 'var(--mobile-menu-color)',
                };
            }
            return {};
        },
    },
    watch: {
        isOffcanvasOpen(newValue) {
            const body = document.body;
            const html = document.documentElement;
            const mainElement = document.querySelector('main');
            if (newValue) {
                body.classList.add('scroll-lock');
                html.classList.add('scroll-lock');
                mainElement.style.filter = 'blur(10px)';
            } else {
                body.classList.remove('scroll-lock');
                html.classList.remove('scroll-lock');
                mainElement.style.filter = '';
            }
            
        }
    },
    mounted() {
        this.updateActiveLink();
        window.addEventListener('popstate', this.updateActiveLink);
        const offcanvasButton = this.$el.querySelector('.navbar-toggler');
        const offcanvasMenu = this.$el.querySelector('#offcanvasMenu');

        offcanvasButton.addEventListener('click', () => {
            this.isOffcanvasOpen = !this.isOffcanvasOpen;
        });

        offcanvasMenu.addEventListener('hidden.bs.offcanvas', () => {
            this.isOffcanvasOpen = false;
        });
    },
    beforeUnmount() {
        window.removeEventListener('popstate', this.updateActiveLink);
        document.body.classList.remove('scroll-lock');
        document.documentElement.classList.remove('scroll-lock');
    },
    methods: {
        removeRefillData() {
            this.$cookies.remove('customerState');
            this.$cookies.remove('customerDataMain');
        },
        hideMenu() {
            if (window.innerWidth <= 991) {
                this.collapsing = true;
                setTimeout(() => this.collapsing = false, 350);
            }
        },
        updateActiveLink() {
            const currentPath = window.location.pathname;
            const links = this.$el.querySelectorAll('.nav-link');
            links.forEach(link => {
                if (link.getAttribute('href') === currentPath) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../sass/header.scss";
</style>
