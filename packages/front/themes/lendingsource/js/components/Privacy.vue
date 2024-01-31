<template xmlns="http://www.w3.org/1999/html">
    <div class="container pt-5 pt-md-0 pb-5">
        <div class="row py-md-5">
            <div class="GSC_privacy col-12" :style="mainColor">
                <h2>Privacy Policy</h2>
                <div class="mb-5 decor-bottom"></div>
                <PrivacyText></PrivacyText>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PrivacyPolicy",
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
