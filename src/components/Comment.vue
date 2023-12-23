<template>
    <div class="comment-main">
        <div class="user-status">
            <TheAvatar :image_url="comment.sender.avatar ? comment.sender.avatar : null" widthString="33px"
                heightString="33px">
            </TheAvatar>
            <p class="user-name">{{ comment.sender.userName }}</p>
            <p class="time">{{ comment.date !== undefine ? formatTimestamp(comment.date) : undefined }}</p>
        </div>
        <p class="comment">
            {{ comment.content }}
        </p>
    </div>
</template>

<script setup>
import TheAvatar from './TheAvatar.vue';
import { formatTimestamp } from '../utils/date';
defineProps({
    comment: {
        type: Object
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
    font-size: 0.9rem;
}
</style>