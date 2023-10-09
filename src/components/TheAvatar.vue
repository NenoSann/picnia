<script setup>
import DefaultAvatar from '../assets/avatarDefault.png';
import { useRouter } from "vue-router";
defineProps({
    image_url: String,
    alt: String,
    widthString: {
        type: String,
        default: "33px"
    },
    heightString: {
        type: String,
        default: "33px"
    }

})
const router = useRouter();
async function pushIntoRouter() {
    router.push()
}


</script>
<template>
    <router-link to="/profile">
        <div class="avatar">
            <img :src="image_url || DefaultAvatar" :alt="alt">
        </div>
    </router-link>
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