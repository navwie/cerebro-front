<template>
    <div class="GSC_main" :style="mainColors">
        <div class="container">
            <section class="page-section">
                <div class="row">
                    <div class="col roboto">
                        <GreenLabel :title="'TERMS OF SERVICE'" :color="'var(--main-color)'" :extraClass="'roboto'"/>
                    </div>
                </div>
                <div class="row page-text p-8">
                    <div class="col">
                        <TermsText></TermsText>
                    </div>
                </div>
            </section>
        </div>
        <section class="page-section container-fluid">
            <BrownBlock />
        </section>
    </div>
</template>

<script>
import GreenLabel from "../components/GreenLabel.vue"
import BrownBlock from "../components/BrownBlock.vue"

export default {
    name: "Terms",
    components: {
        GreenLabel,
        BrownBlock,
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
    mounted() {
        this.app_name = document.querySelector('title').text;
        this.mainColor = siteSettings.general.main_color.value;
    },
    methods: {
        getMetaContent(name) {
            const element = document.querySelector(`meta[name="${name}"]`);
            return element && element.content ? element.content : '';
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../sass/pages.scss";
</style>
