<template>
    <a v-if="user" :href="'mailto:' + user.email" :style="color ? ('color:' + color) : ''">
        <i v-if="icon" class="icon-email" style="font-size: 10px;"></i>{{ user.email }}
    </a>
    <a v-else :href="'mailto:' + email" :style="color ? ('color:' + color) : ''">
        <i v-if="icon" class="icon-email" style="font-size: 10px;"></i>{{ email }}
    </a>
</template>

<script>
import axios from "axios";

export default {
    props: {
        icon: Boolean,
        color: String,
        user: Object
    },
    data() {
        return {
            token: document.querySelector('meta[name="form-token"]').content,
            email:''
        }
    },
    mounted () {
        if(this.user === undefined){
            axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
            axios.get(import.meta.env.VITE_API_GET_USER).then((response) => {
                this.email = response.data.email;
            });
        }
    }
};
</script>
