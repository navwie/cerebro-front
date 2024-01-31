<template>
    <div id="pagetop" class="position-fixed icon-angle-up" v-show="scY > 300" @click="toTop">
    </div>
</template>

<script>
export default {
    name: "GoToTop",
    data() {
        return {
            scTimer: 0,
            scY: 0,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll: function () {
            if (this.scTimer) return;
            this.scTimer = setTimeout(() => {
                this.scY = window.scrollY;
                clearTimeout(this.scTimer);
                this.scTimer = 0;
            }, 100);
        },
        toTop: function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
    },
}


</script>
