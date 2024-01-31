<template>
    <div :style="mainColors">
        <a href="/form" class="btn get-started-2" :style="{ width: width }">
            {{ displayText }}&nbsp;&nbsp;
            <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Polygon 1" d="M9.36246 6.77187C9.84505 7.1708 9.8465 7.91006 9.36548 8.31087L1.98899 14.4574C1.33836 14.9995 0.350501 14.538 0.348842 13.6911L0.324819 1.42703C0.32316 0.580135 1.3092 0.114732 1.96195 0.65432L9.36246 6.77187Z" fill="white" />
            </svg>
        </a>
    </div>
</template>

<script setup>
defineProps({
    text: String,
    width: String,
});
</script>


<script>
export default {
    name: "GetStartedButton",
    props: {
        text: {
            type: String,
            default: 'Get&nbsp;Started' 
        },
        width: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            mainColor: siteSettings.general.main_color.value,
            buttonHoverBgColor: siteSettings.general.button_hover_bg_color.value,
            buttonHoverColor: siteSettings.general.button_hover_color.value,
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
        displayText() {
            return this.text || 'Get Started';
        }
    },
    mounted() {
        this.mainColor = siteSettings.general.main_color.value
        this.buttonHoverBgColor = siteSettings.general.button_hover_bg_color.value
        this.buttonHoverColor = siteSettings.general.button_hover_color.value
        // this.buttonColor = this.getMetaContent('button-color');
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
@import '../../sass/pages.scss';
@import '../../sass/get_started_button.scss';
</style>
