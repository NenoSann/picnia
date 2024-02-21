<template>
    <Teleport to="body">
        <Transition name="postTab">
            <div class="create-post-tab-main" v-if="open">
                <div class="main-container"
                    :style="{ width: `${postContent.mainWidth}vw`, height: `${postContent.mainHeight}vh` }">
                    <div class="image-section" :style="{ height: `${postContent.imageHeight}%` }">
                        <input @change="setInputBackground" ref="imageInput" type="file" name="image-upload"
                            id="image-input" accept="image/*" multiple>
                        <label for="image-input">
                            <img :src="this.imageSrc" id="inputed-image" alt="" v-show="postContent.postImageSrc !== ''">
                            <p class="choose-text" v-show="this.imageSrc === ''">
                                选择一张图片吧！
                            </p>
                        </label>
                    </div>
                    <div class="text-section" :style="{ height: `${100 - imageHeight}%` }">
                        <textarea id="text" cols="30" rows="10" placeholder="写点什么？" v-model="text"></textarea>
                    </div>
                    <span class="close-button" @click="hiddeTab">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </span>
                    <button class="button-post" @click="sendPost">
                        发布
                    </button>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import TheIcon from './TheIcon.vue';
import createPost from '../apis/createPost';
import { ref, reactive } from 'vue';
const postContent = reactive({
    postImage: {},
    postText: '',
    postImageSrc: '',
    postImageRatio: 1,
    mainWidth: 60,
    mainHeight: 80,
    imageHeight: 70,
})
const props = defineProps({
    open: {
        type: Boolean,
        default: false
    }
});
const emit = defineEmits(['toggleTab']);

function hiddeTab() {
    emit('toggleTab');
};

function setInputBackground(event) {
    console.log('post image input :\n', event.target.files)
}
</script>

<style lang="scss" scoped>
.create-post-tab-main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;


    // width: 60vw;
    border-radius: 51px;
    background-color: white;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);

    font-family: Arial, 'PingFang SC', 'Microsoft Yahei', sans-serif;
    transition-property: opacity, transform;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    // transition: opacity 0.3s ease, transform 0.3s ease;

    .main-container {
        position: relative;
        height: 100%;
    }
}

.image-section {
    position: relative;
    border-radius: 51px 51px 0 0;
    border-bottom: 1px solid #e7e7e7;
    // height: 70%;
    width: 100%;
    overflow: hidden;
    // need to add background image
}

.choose-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #757575;
    text-align: center;
    z-index: 10;
}

.text-section {
    overflow: hidden;
    height: 30%;
}

input {
    position: absolute;
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    z-index: -1;

    overflow: hidden;
}

#inputed-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

#text {
    overflow: hidden;
    width: 100%;
    height: 80%;
    resize: none;
    border: none;
    outline: none;
}

.close-button {
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
}

.button-post {
    position: absolute;
    bottom: 24px;
    right: 24px;

    border-radius: 24px;
    background-color: #1DA0FF;
    color: white;
}

.postTab-enter-from {
    opacity: 0;
    -webkit-transform: scale(1.1);
    transform: scale(1.1) translate(-50%, -50%);
}

.postTab-leave-to {
    opacity: 0;
    -webkit-transform: scale(1.1);
    transform: scale(1.1) translate(-50%, -50%);

}

.postTab-enter-from .create-post-tab-main,
.postTab-leave-to .create-post-tab-main {
    -webkit-transform: scale(1.1);
    transform: scale(1.1) translate(-50%, -50%);
}
</style>