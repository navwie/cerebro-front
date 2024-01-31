<template>
    <a v-if="user" :href="'mailto:' + user.email_ccpa">{{ user.email_ccpa }}</a>
</template>

<script>
import axios from "axios";

export default {
    props: {
        user: Object,
    }
};
</script>
