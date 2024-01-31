<template>
    <a v-if="user" :href="'mailto:' + user.email_ccpa">{{ user.email_ccpa }}</a>
</template>

<script>
export default {
    props: {
        user: Object,
    }
};
</script>
