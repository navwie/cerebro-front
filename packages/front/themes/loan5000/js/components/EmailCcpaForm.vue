<template>
    <a :href="'mailto:'+email_ccpa">{{ email_ccpa }}</a>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            token: document.querySelector('meta[name="form-token"]').content,
            email_ccpa: ''
        }
    },
    mounted() {
        axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
        axios.get(import.meta.env.VITE_API_GET_USER).then((response) => {
            this.email_ccpa = response.data.email_ccpa;
        });
    }
};
</script>
