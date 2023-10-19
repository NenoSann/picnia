<template>
    <div class="cropper-main">
        <VueCropper :ref="cropper" img="src\assets\testImage3.png" autoCrop=true fixed=true :fixedNumber="[1, 1]"
            :canMoveBox="false" centerBox=true canMoveBox=false :high="true">
        </VueCropper>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { VueCropper } from 'vue-cropper'
import 'vue-cropper/dist/index.css'

const props = defineProps({
    img_url: {
        type: String,
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