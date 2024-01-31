<template>
    <a :href="'mailto:'+email">{{email}}</a>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            token: document.querySelector('meta[name="form-token"]').content,
            email:''
        }
    },
    mounted() {
        axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
        axios.get(import.meta.env.VITE_API_GET_USER).then((response)=>{
            this.email = response.data.email;
        });
    }
};
</script>
