<template>
    <div class="post-tab-main">
        <img :src="postData.postImage" @click="showOpenDetail = true">
        <div class="post-tab-mid">
            <div class="avatar-section">
                <div class="avatar">
                    <img :src="postData.uploader.avatar" id="avatar">
                    <p class="username">{{ postData.uploader.userName }}</p>
                </div>
                <p class="post-time">{{ postData.postTime }}</p>
            </div>
            <ButtonSets class="button-sets" :like="postData.likes" :comments="postData.commentCounts"
                :save="postData.saves">
            </ButtonSets>
        </div>
        <div class="discription">
            <p>
                {{ postData.postContent }}
            </p>
        </div>
        <div class="tags">
            <a>#P5R</a>
            <a>#JRPG</a>
        </div>
    </div>
    <Transition name="postDetail">
        <PostDetail :postData="postData" v-if="showOpenDetail" @closeDetail="showOpenDetail = false"></PostDetail>
    </Transition>
</template>

<script setup>
import ButtonSets from './ButtonSets.vue';
import { ref } from 'vue'
import PostDetail from './PostDetail.vue';
// data set here

defineProps({
    postData: {
        type: Object,
        required: true,
    },
});
const showOpenDetail = ref(false);


</script>

<style lang="scss" scoped>
.post-tab-main {
    width: 100%;
    background-color: white;
    max-height: 600px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 6px 6px;
    display: flex;
    flex-direction: column;

    img {
        max-width: 100%;
        max-height: 400px;
        background-color: #c4c4c4;
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