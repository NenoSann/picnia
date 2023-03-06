<script setup>
import DefaultAvatar from '../assets/avatarDefault.png';
import { ref } from 'vue';
defineProps({
    image_url: String,
    widthString: {
        type: String,
        default: "33px"
    },
    heightString: {
        type: String,
        default: "33px"
    }
})


</script>
<template>
    <div class="avatar">
        <img :src="image_url || DefaultAvatar">
    </div>
</template>



<style scoped>
img {
    width: 100%;
    height: auto;
    overflow: hidden;
    object-fit: cover;
    object-position: top center;
}

.avatar {
    width: v-bind(widthString);
    height: v-bind(heightString);
    border-radius: 50%;
    overflow: hidden;
}
</style>