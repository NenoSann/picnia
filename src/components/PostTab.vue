<template>
    <div class="post-tab-main">
        <img id="PostImage" :src="postData.postImage" @click="showOpenDetail = true">
        <div class="post-tab-mid">
            <div class="avatar-section">
                <div class="avatar">
                    <TheAvatar :image_url="postData.uploader.avatar" :profile_Url="avatarProfileURL" id="avatar">
                    </TheAvatar>
                    <p class="username">{{ postData.uploader.userName }}</p>
                </div>
                <p class="post-time">{{ formatTimestamp(postData.postTime) }}</p>
            </div>
            <ButtonSets class="button-sets" :like="postData.likes" :comments="postData.commentCounts"
                :save="postData.saves" @btnLikeOrSave="likeOrSave" :isLike="postData.isLiked"
                :isSave="postData.isSaved">
            </ButtonSets>
        </div>
        <div class="discription">
            <p>
                {{ postData.postContent }}
            </p>
        </div>
        <div class="tags">
            {{ postData.hashTag ? postData.hashTag : null }}
        </div>
    </div>
    <Transition name="postDetail">
        <PostDetail :postData="postData" v-if="showOpenDetail" @closeDetail="showOpenDetail = false"></PostDetail>
    </Transition>
</template>

<script setup>
import { ButtonSets, PostDetail, TheAvatar } from './index';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { likeOrSavePost } from '../apis/likeOrSavePost';
import { throttle } from 'lodash'
import { formatTimestamp } from '../utils'
import { useRoute } from 'vue-router';
const route = useRoute();
const store = useStore();
const user = store.state.user.user;
const uploader = props.postData.uploader;

const props = defineProps({
    postData: {
        type: Object,
        required: true,
    },
});
const avatarProfileURL = computed(() => {
    return `${route.fullPath}profile/${uploader.userName}`;
})
const showOpenDetail = ref(false);
// methods 
/**
 * @description 按照type来like或者save当前的post，
 * @param {'like'|'save'} type 
 */
const likeOrSave = throttle(function (type) {
    likeOrSavePost({
        'target': type,
        'userName': user.userName,
        'postId': props.postData.postID
    })
    if (type === 'like') {
        store.commit('toggleLike', props.postData.postID);
    } else if (type === 'save') {
        store.commit('toggleSave', props.postData.postID);
    }
}, 500);

</script>

<style lang="scss" scoped>
@import '../assets/main.scss';

.post-tab-main {
    width: 100%;
    background-color: var(--color-background);
    max-height: 600px;
    border-radius: 0 0 6px 6px;
    display: flex;
    flex-direction: column;
    @extend .s-shadow;

    img {
        max-width: 100%;
        max-height: 400px;
        object-fit: cover;
        object-position: center;
    }
}

.post-tab-mid {
    display: flex;
    padding: 20px;

    .avatar-section {
        display: flex;
        flex-direction: column;

        .avatar {
            display: flex;
            align-items: center;

            .username {
                padding-left: 10px;
                font-size: 1.2rem;
                font-weight: 100;
                font-family: "Raleway", "Noto Sans SC", sans-serif;
            }

            #avatar {
                width: 33px;
                height: 33px;
                border-radius: 50px;
            }
        }

        .post-time {
            margin-top: 10px;
            color: #9f9f9f;
            font-family: "Noto Sans SC", sans-serif;
        }
    }

}

#PostImage {
    transition: all .2s ease;

    &:hover {
        filter: brightness(50%);
    }
}

.discription {
    padding: 0 20px;
}

.tags {
    padding: 20px 20px;
    margin-top: auto;
    margin-bottom: 20px;

    a {
        color: #1DA0FF;
    }
}

.button-sets {
    margin-left: auto;
}

.postDetail-enter-active,
.postDetail-leave-active {
    transition: opacity 0.3s ease-out;
}

.postDetail-enter-from,
.postDetail-leave-to {
    opacity: 0;
}
</style>