<template>
    <div class="post-tab-main">
        <img src="../assets/Persona 5R.png">
        <div class="post-tab-mid">
            <div class="avatar-section">
                <div class="avatar">
                    <img :src="uploader.avatar" id="avatar">
                    <p class="username">{{ uploader.name }}</p>
                </div>
                <p class="post-time">{{ postTime }}</p>
            </div>
            <ButtonSets class="button-sets" :like="likes" :comments="commentsCount" :save="saves"></ButtonSets>
        </div>
        <div class="discription">
            <p>
                {{ postContent }}
            </p>
        </div>
        <div class="tags">
            <a>#P5R</a>
            <a>#JRPG</a>
        </div>
    </div>
</template>

<script setup>
import TheIcon from './TheIcon.vue';
import ButtonSets from './ButtonSets.vue';
import { ref, defineProps } from 'vue';
// data set here
defineProps({
    uploader: {
        type: Object,
        default: () => ({
            avatar: 'src/assets/avatarDefault.png',
            name: 'Unknown',
        }),
    },
    postContent: {
        type: String,
        default: '似乎没有内容呢'
    },
    likes: {
        type: Number,
        default: 0
    },
    commentsCount: {
        type: Number,
        default: 0
    },
    saves: {
        type: Number,
        default: 0
    },
    postTime: {
        type: String,
        default: 'unkown'
    },
})


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
</style>