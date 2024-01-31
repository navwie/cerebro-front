<template>
    <div class="white-block">
      <div class="row">
        <div class="col-md-6 col-12 zi-5">
            <h2 v-html="title"></h2>
          <p v-if="isCombined">{{ description }}</p>
        </div>
        <div class="col-md-6 col-12 d-flex image-container">
          <img v-if="img" :src="img" alt="" :class="{'combined': isCombined}">
        </div>
      </div>
      <div class="row" v-if="!isCombined">
        <div class="col-12">
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    img: String,
    isCombined: {
        type: Boolean,
        default: false
    }
});
</script>

<style lang="scss" scoped>
@import "../../sass/white_block.scss";

</style>
