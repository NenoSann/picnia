<template>
    <div class="modal">
        <div class="btn-close">
            <TheIcon icon="close" style="cursor: pointer;" @click="$emit('closeDetail')"></TheIcon>
        </div>
        <img :src="postData.postImage" class="image">
        <div class="content">
            <div class="uploader">
                <div class="detail">
                    <TheAvatar :image_url="postData.uploader.avatar"></TheAvatar>
                    <p class="user-name">{{ postData.uploader.userName }}</p>
                </div>
                <p class="present">
                    {{ postData.postContent }}
                </p>
                <p class="hash-tag">
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
                    <ButtonSets :scale="0.8" :textTransform="-10" :like="postData.likes" :comments="postData.commentCounts"
                        :save="postData.saves" @btnLikeOrSave="likeOrSave" :isLike="postData.isLiked"
                        :isSave="postData.isSaved"></ButtonSets>
                    <p class="time">{{ postData.postTime }}</p>
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
import TheIcon from './TheIcon.vue';
import TheAvatar from './TheAvatar.vue';
import Comment from './Comment.vue';
import ButtonSets from './ButtonSets.vue';
import { throttle } from 'lodash'
import { likeOrSavePost } from '../apis/likeOrSavePost';
import { useStore } from 'vuex';
import { ref, onMounted, computed } from 'vue';
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
    return store.state.comment.comments;
})

// computed newComment is sent when hit send button
/**
  What server expected: 
 * {
            post: postId,
            sender: sender,
            reception: reception,
            content: content,
        }
 */
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
    console.log(store.comment)
    store.dispatch('pullComment', props.postData.postID);
})
</script>

<style scoped lang="scss">
.modal {
    z-index: 9999;
    position: fixed;
    top: 12vh;
    left: 50%;
    max-height: 80vh;
    transform: translateX(-50%);
    display: flex;
    background-color: white;
    border-radius: 51px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.btn-close {
    width: 32px;
    height: 32px;
    position: absolute;
    right: 20px;
    top: 20px;
}

.image {
    width: 400px;
    height: auto;
    object-fit: cover;
}

.close-btn {
    position: absolute;
}

.content {
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
}

.detail {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.user-name {
    font-family: Arial, 'PingFang SC', 'Microsoft Yahei', sans-serif;
    padding-left: 16px;
}

.present {
    color: #4b4b4b;
    padding-top: 20px;
    width: 30vw;
    max-width: 1200px;
    min-width: 300px;
}

.hash-tag {
    color: #1DA0ff;
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