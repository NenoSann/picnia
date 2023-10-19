<template>
    <div class="main" v-if="showCropper">
        <div class="content">
            <input @change="getInput" type="file" ref="avatarInput" id="avatar-upload" accept="image/*">
            <ImageCropper cropperHeight="500px" cropperWidth="500px"></ImageCropper>
            <div class="btn-section">
                <TheButton heightString="32px" widthString="64px">选择图片</TheButton>
                <TheButton heightString="32px" widthString="64px" textSize="36px"></TheButton>
                <TheButton heightString="32px" widthString="64px" @click="closeCropper">关闭</TheButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import ImageCropper from './ImageCropper.vue';
import TheButton from './TheButton.vue';
import { computed } from 'vue'
import { useStore } from 'vuex';
const store = useStore();
const showCropper = computed(() => { return store.state.isAvatar })
const closeCropper = () => store.commit('toggleAvatarCropper', false);
</script>

<style lang="scss" scoped>
.main {
    position: absolute;
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: rgba($color: #000000, $alpha: 0.2);
}

.content {
    border-radius: 20px;
    height: 600px;
    width: 500px;
    background-color: white;
    overflow: hidden;
}

.btn-section {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

#avatar-upload {
    position: absolute;
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
}

.camera {
    background-color: aqua;
    border-radius: 999px;
}
</style>