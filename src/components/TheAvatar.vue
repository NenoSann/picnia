<script setup>
import defaultAvatar from '/avatarDefault.png';
import TheIcon from './TheIcon.vue';
import { useRouter } from 'vue-router';
import { computed } from 'vue'
const router = useRouter();

const props = defineProps({
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
    },
    profile_Url: {
        type: String,
        default: null
    }
})

function redirectToProfile() {
    if (props.profile_Url) {
        router.push(props.profile_Url);
    }
}

const isCursor = computed(() => {
    return props.profile_Url ? true : false;
})
</script>
<template>
    <div class="avatar" @click="redirectToProfile" :class="{ pointer: isCursor }">
        <div class="edit-btn-container" v-if=editable>
            <TheIcon v-if=editable icon="publish" class="edit-icon"></TheIcon>
        </div>
        <img :src="image_url || defaultAvatar">
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

.pointer {
    cursor: pointer;
}
</style>