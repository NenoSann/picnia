<template>
    <div class="main">
        <n-carousel :show-arrow="single_img" :touchable="single_img" class="carousel">
            <div class="media-container" v-for="(url, index) in img_urls" :key="index">
                <img class="carousel-image" :src="url">
            </div>
        </n-carousel>
    </div>
</template>

<script setup>
import { NCarousel } from 'naive-ui';
import { computed } from 'vue';
const props = defineProps({
    img_urls: {
        type: Array,
        default: []
    }
})
const single_img = computed(() => props.img_urls?.length !== 1);

</script>

<style lang="scss" scoped>
@import '../assets/main.scss';

.carousel-image {
    max-height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
}

.main {
    width: 100%;
}

.media-container {
    height: 100%;
    @extend .flex-center;
}
</style>