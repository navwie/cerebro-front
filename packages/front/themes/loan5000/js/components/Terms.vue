<template>
    <section class="GSC_terms d-none d-sm-block" id="page-title" :style="mainColor">
        <div class="row d-flex justify-content-around w-100">
            <div style="width: calc(100% - 250px);">
                <h1>Terms of Service</h1>
            </div>
            <div style="width:250px">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active text-gray" aria-current="page">Terms of Servicey</li>
                </ol>
            </div>
        </div>
    </section>
    <section id="content" :style="mainColor">
        <div class="content-wrap">
            <div class="container" style="padding-left: 3rem;
                padding-right: 3rem;">
                <div class="row col-mb-50">
                    <div class="col-12">
                        <TermsText></TermsText>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Terms",
    data() {
        return {
            mainColor: siteSettings.general.main_color.value,
            buttonColor: siteSettings.general.main_button_color.value,
            buttonHoverBgColor: siteSettings.general.button_hover_bg_color.value,
            buttonHoverColor: siteSettings.general.button_hover_color.value,
        };
    },
    computed: {
        mainColor() {
            return {
                '--main-color': this.mainColor,
                '--main-button-color': this.buttonColor,
                '--main-button-hover-bg-color': this.buttonHoverBgColor,
                '--main-button-hover-color': this.buttonHoverColor,
            };
        },
    },
}
</script>

<style lang="scss" scoped>
    @import "../../sass/pages.scss";
</style>
