<template>
  <div class="modal light-shadow">
    <div class="btn-close">
      <TheIcon icon="close" style="cursor: pointer" @click="$emit('closeDetail')"></TheIcon>
    </div>
    <div class="image">
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
        <p class="hash-tag">
          {{ postData.hashTag ? postData.hashTag : null }}
        </p>
      </div>
      <div class="comments-list">
        <div class="comment-wrapper" v-if="comments && comments.length !== 0">
          <Comment v-for="comment in comments" :key="comment._id" :comment="comment">
          </Comment>
        </div>
        <p v-if="comments && comments.length === 0">现在还没有评论哦</p>
      </div>
      <div class="button-section">
        <div class="sent-comment">
          <ButtonSets :scale="0.8" :textTransform="-10" :like="postData.likes" :comments="postData.commentCounts"
            :save="postData.saves" @btnLikeOrSave="likeOrSave" :isLike="postData.isLiked" :isSave="postData.isSaved">
          </ButtonSets>
          <p class="time">{{ formatTimestamp(postData.postTime) }}</p>
        </div>
      </div>
      <div class="input-section">
        <input type="text" placeholder="发条评论吧😄" v-model="commentContent" />
        <p class="submit" style="cursor: pointer" @click="sendComment">
          发布
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheIcon from '../components/TheIcon.vue';
import TheAvatar from '../components/TheAvatar.vue';
import Comment from '../components/Comment.vue';
import ButtonSets from '../components/ButtonSets.vue';
import TheCarousel from '../components/TheCarousel.vue';
import { throttle } from 'lodash';
import { likeOrSavePost } from '../apis/likeOrSavePost';
import { formatTimestamp } from '../utils/date';
import { useStore } from 'vuex';
import { ref, onMounted, computed } from 'vue';
const store = useStore();

// props
const props = defineProps({
  postData: {
    type: Object,
    required: true
  }
});

defineEmits(['closeDetail']);
// data filed
const commentContent = ref('');

//comments is computed from store and cache locally
const comments = computed(() => {
  return store.state.comment.comments[props.postData.postID];
});

const newComment = computed(() => {
  return {
    postId: props.postData.postID,
    sender: store.state.user.user.userId,
    reception: props.postData.uploader.userId,
    content: commentContent.value
  };
});

// methods
/**
 * @description 按照type来like或者save当前的post，
 * @param {'like'|'save'} type
 */
const likeOrSave = throttle(function (type) {
  likeOrSavePost({
    target: type,
    userName: store.state.user.user.userName,
    postId: props.postData.postID
  });
  if (type === 'like') {
    store.commit('toggleLike', props.postData.postID);
  } else if (type === 'save') {
    store.commit('toggleSave', props.postData.postID);
  }
}, 500);

const sendComment = function () {
  store.dispatch('sendComment', newComment.value);
};

//hook

/**
 * @description pull comments when post detail is mounted
 */
onMounted(() => {
  store.dispatch('pullComment', props.postData.postID);
});
</script>

<style scoped lang="scss">
@import url('../assets//main.scss');

.modal {
  // z-index: 40;
  position: fixed;
  top: 12vh;
  left: 50%;
  height: 80vh;
  max-width: 80vw;
  transform: translateX(-50%);
  display: flex;
  border-radius: 51px;

  @media screen {}
}

.btn-close {
  width: 32px;
  height: 32px;
  position: absolute;
  right: 20px;
  top: 20px;
}

.image {
  flex-shrink: 1;
  flex-grow: 2;
  height: 100%;
  max-width: 70%;
  display: flex;

  overflow: hidden;

  img {
    width: -webkit-fill-available 100%;
    max-height: 100%;
    object-fit: contain;
    object-position: 50% 50%;
  }
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
  color: var(--color-primary-label);
  padding-top: 20px;
  width: 30vw;
  max-width: 1200px;
  min-width: 300px;
}

.hash-tag {
  color: #1da0ff;
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
    background-color: #f6f6f6;
  }

  .submit {
    margin-left: auto;
    color: #1da0ff;
  }
}
</style>
