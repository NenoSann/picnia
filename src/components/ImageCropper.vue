<template>
    <div class="cropper-main">
        <VueCropper ref="cropper" :img="img_url" :autoCrop=true :fixed=true :fixedNumber="[1, 1]" :canMoveBox=true
            :centerBox=true :high="true">
        </VueCropper>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { VueCropper } from 'vue-cropper'
import 'vue-cropper/dist/index.css'

const cropper = ref();

const props = defineProps({
    img_url: {
        type: String,
        default: null
    },
    cropperHeight: {
        type: String,
        default: "600px"
    },
    cropperWidth: {
        type: String,
        default: "600px"
    }
})


/**
 * @description 
 */
const startCrop = function () {
    cropper.value.startCrop();
}

const getCropData = function () {
    return new Promise((resolve, reject) => {
        cropper.value.getCropData(data => {
            resolve(data);
        });
    });
}

// expose method 
defineExpose({
    startCrop,
    getCropData
});
</script>

<style lang="scss" scoped>
.cropper-main {
    height: v-bind(cropperHeight);
    width: v-bind(cropperWidth);
}

img {
    display: block;
    height: 100%;
    max-width: 100%;
}
</style>