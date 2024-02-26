<template>
    <div class="main" v-if="showCropper">
        <div class="content">
            <input @change="getInput" type="file" ref="avatarInput" id="avatar-upload" accept="image/*">
            <ImageCropper ref="cropper" cropperHeight="600px" cropperWidth="500px" :img_url="inputImage"></ImageCropper>
            <div class="btn-section">
                <n-button :focusable="false" type="info" circle size="large" strong class="button" @click="activateInput">
                    <svg width="52px" height="52px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill="#ffffffc"
                                d="M170 160a6 6 0 1 0 0-12v12Zm-148-6h-6a6.002 6.002 0 0 0 6 6v-6Zm0-68v-6a6 6 0 0 0-6 6h6Zm154-48a6 6 0 1 0-12 0h12Zm-12 92a6 6 0 1 0 12 0h-12ZM22 38v-6a6 6 0 0 0-6 6h6Zm124 6a6 6 0 1 0 0-12v12ZM16 62a6 6 0 1 0 12 0H16Zm154 86H22v12h148v-12Zm-142 6V86H16v68h12ZM164 38v92h12V38h-12ZM22 44h124V32H22v12Zm-6-6v24h12V38H16Zm6 54c34.242 0 62 27.758 62 62h12c0-40.869-33.13-74-74-74v12Z">
                            </path>
                            <circle cx="132" cy="76" r="14" stroke="#ffffff" stroke-width="12"></circle>
                        </g>
                    </svg>
                </n-button>
                <n-button :focusable="false" type="info" circle size="large" strong class="button" @click="startCrop">
                    <div class="inner-camera"></div>
                </n-button>
                <n-button :focusable="false" type="info" circle size="large" strong class="button" @click="closeCropper">
                    <svg width="46px" height="46px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M3 1C2.44771 1 2 1.44772 2 2V13C2 13.5523 2.44772 14 3 14H10.5C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13H3V2L10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1H3ZM12.6036 4.89645C12.4083 4.70118 12.0917 4.70118 11.8964 4.89645C11.7012 5.09171 11.7012 5.40829 11.8964 5.60355L13.2929 7H6.5C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H13.2929L11.8964 9.39645C11.7012 9.59171 11.7012 9.90829 11.8964 10.1036C12.0917 10.2988 12.4083 10.2988 12.6036 10.1036L14.8536 7.85355C15.0488 7.65829 15.0488 7.34171 14.8536 7.14645L12.6036 4.89645Z"
                                fill="#ffffff"></path>
                        </g>
                    </svg>
                </n-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import ImageCropper from './ImageCropper.vue';
import { computed, ref, onMounted } from 'vue'
import { NButton } from 'naive-ui';
import { useStore } from 'vuex';
const store = useStore();
const showCropper = computed(() => { return store.state.isAvatar })

// reference area
const cropper = ref();
const inputImage = ref(null);
const avatarInput = ref()
const cuttedImage = ref();
// method area
const closeCropper = () => store.commit('toggleAvatarCropper', false);
const activateInput = () => {
    avatarInput.value.click();
}
/**
 * @description funtion that handle the camera click📸
 */
const startCrop = async function () {
    cropper.value.startCrop();
    cuttedImage.value = await cropper.value.getCropData();
    const imgType = cuttedImage.value.split(';')[0].split('/')[1];
    const cuttedImageBlob = await cropper.value.getCropBlob();
    store.dispatch('changeAvatar', { avatar: cuttedImage.value, imgType, blob: cuttedImageBlob });
}



/**
 * @author NenoSan
 * @description Get image input when input element is chagned, 
 * and set the result to inputImage.
 * @param {} event 
 */
const getInput = (event) => {
    const reader = new FileReader();
    reader.onload = (res) => {
        inputImage.value = res.target.result
    };
    reader.readAsDataURL(event.target.files[0]);
}

</script>

<style lang="scss" scoped>
@import '../assets/main.scss';

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
    position: relative;
    border-radius: 20px;
    height: 600px;
    width: 500px;
    background-color: white;
    overflow: hidden;
}

.btn-section {
    position: absolute;
    margin-top: 8px;
    width: 100%;


    bottom: 4%;
    left: 50%;
    transform: translate(-50%);

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



.inner-camera {
    aspect-ratio: 1;
    height: 48px;
    width: 48px;
    background-color: white;
    border: 2px solid transparent;
    border-radius: 999px;
}

.button {
    height: 64px;
    width: 64px;
}
</style>