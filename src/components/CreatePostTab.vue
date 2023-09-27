<template>
    <Teleport to="body">
        <div class="create-post-tab-main" v-show="open">
            <div class="main-container">
                <div class="image-section">
                    <input type="file" name="image-upload" id="image-input">
                    <label for="image-input">
                        <TheIcon></TheIcon>
                        <div class="choose-image">
                            请在这里选择图片
                        </div>
                    </label>
                </div>
                <div class="text-section">
                    <textarea id="text" cols="30" rows="10" placeholder="写点什么？"></textarea>
                </div>
                <span class="close-button" @click="hiddeTab">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </span>
            </div>
        </div>
    </Teleport>
</template>

<script>
import TheIcon from './TheIcon.vue';
export default {
    props: {
        open: Boolean,
    },
    emits: ['toggleTab'],
    data() {
        return {
        }
    },
    methods: {
        hiddeTab() {
            this.$emit('toggleTab');
        },
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

    .main-container {
        position: relative;
        height: 600px;
    }
}

.image-section {
    border-radius: 51px 51px 0 0;
    border-bottom: 2px solid gray;
    height: 60%;
    overflow: hidden;
    background-color: aqua;
}

.choose-image {
    width: 100%;
    height: 60%;
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
}
</style>