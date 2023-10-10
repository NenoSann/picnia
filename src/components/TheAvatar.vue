<script setup>
import DefaultAvatar from '../assets/avatarDefault.png';
import TheIcon from './TheIcon.vue';
defineProps({
    image_url: String,
    alt: String,
    widthString: {
        type: String,
        default: "33px"
    },
    editable: {
        type: Boolean,
        default: false,
    },
    heightString: {
        type: String,
        default: "33px"
    }

})


</script>
<template>
    <router-link to="/profile">
        <div class="avatar">
            <div class="edit-btn-container" v-if=editable>
                <TheIcon v-if=editable icon="publish" class="edit-icon"></TheIcon>
            </div>
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
    position: relative;
    width: v-bind(widthString);
    height: v-bind(heightString);
    border-radius: 50%;
    overflow: hidden;
}

.edit-btn-container {
    position: absolute;
    width: v-bind(widthString);
    height: v-bind(heightString);
    backdrop-filter: blur(6px);
    background-color: rgba(255, 255, 255, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease-out;

    /* 处理非触摸设备上效果 */
    @media (hover:hover) {
        &:hover {
            opacity: 1;
        }
    }

    /* 触摸设备上的效果 */
    @media (hover:none) {
        &:active {
            opacity: 1;
            transition: none;
        }
    }
}

.edit-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>