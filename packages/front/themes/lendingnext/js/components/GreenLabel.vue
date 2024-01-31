<template>
    <h2 class="green-label flex-container" :class="extraClass">
        <svg width="48" height="35" viewBox="0 0 48 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="18" rx="4" fill="var(--main-color)" />
        </svg> 
        &nbsp;
        <span :style="{ color: color ? color : 'var(--main-color)' }">
            {{ title }}
        </span>
    </h2>
</template>

<script setup>
defineProps({
    title: String,
    color: String, 
    extraClass: {
        type: String,
        default: ''
    },
});
</script>

<style lang="scss" scoped>
@import '../../sass/pages.scss';
@import '../../sass/green_label.scss';

</style>
