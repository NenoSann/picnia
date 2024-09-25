<template>
    <div class="modal s-shadow">
        <n-icon class="btn-close" size="32" @click="$emit('closeDetail')" :component="Close"></n-icon>
        <div class="image-container">
            <!-- <img :src="postData.postImage"> -->
            <TheCarousel :img_urls="[postData.postImage]"></TheCarousel>
        </div>
        <div class="content">
            <div class="uploader">
                <div class="detail">
                    <TheAvatar :image_url="postData.uploader.avatar"></TheAvatar>
                    <p class="user-name">{{ postData.uploader.userName }}</p>
                </div>
                <p class="present">
                    {{ postData.postContent }}
                </p>
                <br>
                <span style="color:var(--color-secondary-label)">{{ formatTimestamp(postData.postTime) }}</span>
                <p class="hash-tag" v-if="postData?.hashTag">
                    {{ postData.hashTag ? postData.hashTag : null }}
                </p>
            </div>
            <div class="comments-list">
                <Comment v-for="comment in comments" :key="comment._id" :comment="comment"
                    v-if="comments && comments.length !== 0">
                </Comment>
                <p v-if="comments && comments.length === 0">现在还没有评论哦</p>
            </div>
            <div class="button-section">
                <div class="sent-comment">
                    <ButtonSets :scale="0.8" :textTransform="-10" :like="postData.likes"
                        :comments="postData.commentCounts" :save="postData.saves" @btnLikeOrSave="likeOrSave"
                        :isLike="postData.isLiked" :isSave="postData.isSaved"></ButtonSets>
                    <p class="time">{{ formatTimestamp(postData.postTime) }}</p>
                </div>
            </div>
            <div class="input-section">
                <input type="text" placeholder="发条评论吧😄" v-model="commentContent">
                <p class="submit" style="cursor: pointer;" @click="sendComment">发布</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { TheAvatar, Comment, ButtonSets, TheCarousel } from './index.js';
import { throttle } from 'lodash'
import { likeOrSavePost } from '../apis/likeOrSavePost';
import { formatTimestamp } from '../utils';
import { useStore } from 'vuex';
import { ref, onMounted, computed } from 'vue';
import { NIcon } from 'naive-ui';
import { Close } from '@vicons/carbon';
const store = useStore();


// props
const props = defineProps({
    postData: {
        type: Object,
        required: true
    }
})


defineEmits(['closeDetail']);
// data filed
const commentContent = ref('');

//comments is computed from store and cache locally
const comments = computed(() => {
    console.log('debug:check postData  ', props.postData.postID);
    return store.state.comment.comments[props.postData.postID];
})

const newComment = computed(() => {
    return {
        postId: props.postData.postID,
        sender: store.state.user.user.userId,
        reception: props.postData.uploader.userId,
        content: commentContent.value,
    }
})

// methods 
/**
 * @description 按照type来like或者save当前的post，
 * @param {'like'|'save'} type 
 */
const likeOrSave = throttle(function (type) {
    likeOrSavePost({
        'target': type,
        'userName': store.state.user.user.userName,
        'postId': props.postData.postID
    })
    if (type === 'like') {
        store.commit('toggleLike', props.postData.postID);
    } else if (type === 'save') {
        store.commit('toggleSave', props.postData.postID);
    }
}, 500);

const sendComment = function () {
    store.dispatch('sendComment', newComment.value);
}

//hook

/**
 * @description pull comments when post detail is mounted
 */
onMounted(() => {
    store.dispatch('pullComment', props.postData.postID);
})
</script>

<style scoped lang="scss">
@import '../assets/main.scss';
@import '../assets/_var.scss';

.modal {
    position: fixed;
    z-index: 10;
    display: flex;
    overflow: hidden;
    background-color: var(--color-background);
}

@media (max-width:$md) {
    .modal {
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        transform: none;
    }

    .image-container {
        max-width: 100%;
        min-height: 50vw;
        max-height: 60vw;
    }

    .btn-close {
        z-index: 11;
        top: 12px;
        left: 12px;
    }
}

@media (min-width:$md) {
    .modal {
        border-radius: 18px;
        flex-direction: row;
        top: 12vh;
        left: 50%;
        height: 80vh;
        max-width: 80vw;
        transform: translateX(-50%);
    }

    .image-container {
        flex-shrink: 1;
        flex-grow: 2;
        height: 100%;
        max-width: 70%;
    }

    .btn-close {
        top: 12px;
        right: 12px;
    }
}

.btn-close {
    position: absolute;
    cursor: pointer;
    @extend .full-round;
    @extend .blur;
}


.image-container {
    display: flex;
    overflow: hidden;
    background-color: var(--color-primary-background);

    img {
        width: -webkit-fill-available 100%;
        max-height: 100%;
        object-fit: contain;
        object-position: 50% 50%;
    }
}

.content {
    background-color: var(--color-secondary-background);
    flex-grow: 1;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
}

.detail {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.user-name {
    font-family: Arial, 'PingFang SC', 'Microsoft Yahei', sans-serif;
    padding-left: 16px;
    color: var(--color-secondary-label);
}

.present {
    color: var(--color-primary-label);
    padding-top: 20px;
    max-width: 1200px;
    min-width: 300px;
}

.hash-tag {
    color: $primary-color;
    margin-top: 20px;
}

.uploader {
    border-bottom: 1px solid #aaa8a8;
}

.comments-list {
    height: 100%;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

}

.sent-comment {
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-top: 1px solid #aaa8a8;

    .time {
        color: #a7a7a7;
        margin-left: auto;
    }
}

.input-section {
    display: flex;
    flex-direction: row;
    align-items: center;

    input {
        width: 80%;
        height: 35px;
        border-radius: 50px;
        background-color: #F6F6F6;
    }

    .submit {
        margin-left: auto;
        color: #1DA0ff;
    }
}
</style>