<template>
    <div class="GSC_main" :style="mainColors">
        <div class="container">
            <section class="page-section">
                <div class="row">
                    <div class="col">
                        <GreenLabel :title="'Privacy Policy'" :color="'var(--main-color)'" :extraClass="'roboto'"/>
                    </div>
                </div>
                <div class="row page-text p-8">
                    <div class="col" :style="mainColor">
                        <PrivacyText></PrivacyText>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import GreenLabel from "../components/GreenLabel.vue"
export default {
    name: "PrivacyPolicy",
    components: {
        GreenLabel,
    },
    data() {
        return {
            app_name: document.querySelector('title').text,
            mainColor: siteSettings.general.main_color.value,
            buttonHoverBgColor: siteSettings.general.button_hover_bg_color.value,
            buttonHoverColor: siteSettings.general.button_hover_color.value,
            linkColor: siteSettings.general.link_color.value,
        };
    },
    computed: {
        mainColors() {
            return {
                '--main-color': this.mainColor,
                '--main-button-hover-bg-color': this.buttonHoverBgColor,
                '--main-button-hover-color': this.buttonHoverColor,
                '--link-color': this.linkColor
            };
        },
    },
}
</script>

<style lang="scss" scoped>
    @import "../../sass/pages.scss";
</style>
