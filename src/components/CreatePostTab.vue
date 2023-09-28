<template>
    <Teleport to="body">
        <Transition name="postTab">
            <div class="create-post-tab-main" v-show="open">
                <div class="main-container">
                    <div class="image-section">
                        <input ref="imageInput" type="file" name="image-upload" id="image-input" accept="image/*" multiple>
                        <label for="image-input">
                            <p class="choose-text">
                                选择一张图片吧！
                            </p>
                        </label>
                    </div>
                    <div class="text-section">
                        <textarea id="text" cols="30" rows="10" placeholder="写点什么？" v-model="text"></textarea>
                    </div>
                    <span class="close-button" @click="hiddeTab">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </span>
                    <button class="button-post" @click="testTheImage">
                        发布
                    </button>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script>
import TheIcon from './TheIcon.vue';
export default {
    data() {
        return {
            images: [],
            text: '',
        }
    },
    props: {
        open: Boolean,
    },
    emits: ['toggleTab'],
    methods: {
        hiddeTab() {
            this.$emit('toggleTab');
        },
        testTheImage() {
            const fileInput = this.$refs.imageInput;
            const images = fileInput.files;
            this.images = images;
            console.log(images, this.text)
        }
    },
    components: {
        TheIcon,
    }
}
</script>

<style lang="scss" scoped>
.create-post-tab-main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;


    width: 600px;
    height: 600px;
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
        height: 600px;
    }
}

.image-section {
    border-radius: 51px 51px 0 0;
    border-bottom: 1px solid #e7e7e7;
    height: 60%;
    overflow: hidden;
    background-color: white;
}

.choose-text {
    color: #757575;
    margin-top: 30%;
    text-align: center;
}

.text-section {
    overflow: hidden;
}

input {
    position: absolute;
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    z-index: -1;

    overflow: hidden;
}

#text {
    overflow: hidden;
    width: 100%;
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