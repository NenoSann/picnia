<template>
    <Teleport to="body">
        <Transition name="postTab">
            <div class="create-post-tab-main" v-if="open">
                <n-spin :show="spining" size="large" stroke="#66ccff" :delay="300">
                    <div class="main-container"
                        :style="{ width: `${postData.mainWidth}vw`, height: `${postData.mainHeight}vh` }">
                        <div class="image-section" :style="{ height: `${postData.imageHeight}%` }">
                            <input @change="setInputAsBackground" ref="imageInput" type="file" name="image-upload"
                                id="image-input" accept="image/*" multiple>
                            <label for="image-input">
                                <img :src="postData.imageSrc" id="inputed-image" alt=""
                                    v-show="postData.imageSrc?.length !== 0">
                                <p class="choose-text" v-show="postData.imageSrc?.length === 0">
                                    选择一张图片吧！
                                </p>
                            </label>
                        </div>
                        <div class="text-section" :style="{ height: `${100 - postData.imageHeight}%` }">
                            <textarea id="text" cols="30" rows="10" placeholder="写点什么？"
                                v-model="postData.text"></textarea>
                        </div>
                        <span class="close-button" @click="hideTab">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        <button class="button-post" @click="sendPost">
                            发布
                        </button>
                    </div>
                </n-spin>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import createPost from '../apis/createPost';
import { ref, reactive } from 'vue';
import { useStore } from 'vuex';
import { NSpin, NAlert } from 'naive-ui';
const store = useStore();
const user = store.state.user.user;
const postData = reactive({
    image: [],
    text: '',
    imageSrc: [],
    mainWidth: 60,
    mainHeight: 80,
    imageHeight: 70,
    imageRatio: 1,
    orientation: ''
});
const spining = ref(false);
const emit = defineEmits(['toggleTab']);
const props = defineProps({
    open: {
        type: Boolean,
        default: false
    }
})

function hideTab() {
    emit('toggleTab');
}

async function setInputAsBackground(event) {
    const input = event.target;
    // get input files and bind into reactive data
    postData.image = input.files[0];
    postData.imageSrc = URL.createObjectURL(postData.image);
    const imageResult = await readImageRatio(postData.image);
    postData.imageRatio = imageResult.ratio;
    postData.mainWidth = imageResult.mainWidth;
    postData.mainHeight = imageResult.mainHeight;
    postData.orientation = imageResult.mainHeight > imageResult.mainWidth ? 'portrait' : 'landscape';
}

async function readImageRatio(image) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const image = new Image();
            image.onload = () => {
                resolve({
                    width: image.width,
                    height: image.height,
                    ratio: image.width / image.height
                });
            }
            image.src = event.target.result;
        }
        reader.readAsDataURL(image);
    })
}

/**
 * @description handle the send button event, it will collect all input  
 *              context and request a geolocation (if possible) and send  
 *              to server
 */
async function sendPost() {
    const location = await requestGeolocation();
    startSpining();
    // build the request body
    const json = {
        author: user?.userName ? user.userName : 'undefined',
        date: Date.now(),
        content: postData.text,
        comments: '',
        imageRatio: postData.imageRatio,
        orientation: postData.orientation,
        location,
    }
    const requestBody = {
        json: JSON.stringify(json),
        image: postData.image
    };
    try {
        const response = await createPost(requestBody);
        const localPost = {
            ...json,
            postId: response.newPostId,
            image: postData.image
        }
        await store.dispath('addPostLocal', localPost);
        emit('toggleTab');
    } finally {
        stopSpining();
    }
}

/**
 * @description request user to give geolocation, return as promise  
 *              the promise might got rejected
 * @returns {Promise}
 */
async function requestGeolocation() {
    return new Promise((resolve, reject) => {
        function success(position) {
            resolve(`${position.coords.longitude},${position.coords.latitude}`);
        }
        function error() {
            resolve(null);
        }
        window.navigator.geolocation.getCurrentPosition(success, error);
    })
}

function startSpining() {
    spining.value = true;
}
function stopSpining() {
    spining.value = false;
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