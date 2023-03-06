<template>
    <div class="avatar">
        <img :src="image || DefaultAvatar">
    </div>
</template>

<script setup>
import DefaultAvatar from '../assets/avatarDefault.png'
defineProps({
    image: String,
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

<style lang="scss" scoped>
img {
    width: v-bind(widthString);
    height: v-bind(heightString);
    border-radius: 50%;
    overflow: hidden;
}
</style>