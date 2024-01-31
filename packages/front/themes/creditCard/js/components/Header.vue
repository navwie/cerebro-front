<template>
    <header>
        <div class="container">
            <a href="/">
                <img :src="logoSource" alt="RapidMutual Logo">
            </a>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            logoSrc: document.querySelector('meta[name="logo"]').content,
        }
    },
    mounted() {

    },
    computed: {
        logoSource() {
            return this.logoSrc;
        },
    },
    methods: {

    }
};
</script>
