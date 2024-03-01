<template>
    <n-carousel centered-slides trigger="hover" show-arrow>
        <img v-for="(url, index) in img_urls" class="carousel-image" :src="url" :key="index">
    </n-carousel>
</template>

<script setup>
import { NCarousel } from 'naive-ui';
const props = defineProps({
    img_urls: {
        type: Array,
        default: []
    }
})
</script>

<style lang="scss" scoped>
.carousel-image {
    width: -webkit-fill-available;
    max-height: 100%;
    object-fit: contain;
    object-position: 50% 50%;
}
</style>