<template>
    <div class="comment-main">
        <div class="user-status">
            <TheAvatar :image_url="avatar" widthString="33px" heightString="33px"></TheAvatar>
            <p class="user-name">{{ userName }}</p>
            <p class="time">{{ commentTime }}</p>
        </div>
        <p class="comment">
            {{ comment }}
        </p>
    </div>
</template>

<script setup>
import TheAvatar from './TheAvatar.vue';
defineProps({
    avatar: {
        type: String,
        default: "src/assets/IMG_1446.JPG",
    },
    userName: {
        type: String,
        default: "NenoSan",
        // require:true,
    },
    commentTime: {
        type: String,
        default: "None",
    },
    comment: {
        type: String,
        default: "非常好图片！爱来自China🦸",
    }
});
</script>

<style lang="scss" scoped>
.comment-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.user-status {
    display: flex;
    align-items: center;
    width: 100%;

    .user-name {
        margin-left: 16px;
    }

    .time {
        margin-left: auto;
        color: #a7a7a7;
    }
}

.comment {
    width: 100%;
}
</style>