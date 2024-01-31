<template>
    <div class="container pt-5 pt-md-0 pb-5">
        <div class="row py-md-5">
            <div class="GSC_terms col-12" :style="mainColor">
                <h2>Terms of Service</h2>
                <div class="mb-5 decor-bottom"></div>
                <TermsText></TermsText>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Terms",
    data() {
        return {
            app_name: document.querySelector('title').text,
            mainColor: siteSettings.general.main_color.value,
            linkColor: siteSettings.general.link_color.value,
        };
    },
    computed: {
        mainColor() {
            return {
                '--main-color': this.mainColor,
                '--link-color': this.linkColor
            };
        },
    },
}
</script>

<style lang="scss" scoped>
    @import "../../sass/pages.scss";
</style>
