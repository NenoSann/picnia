<template>
    <div class="cropper-main">
        <img ref="avatar" id="image" src="src/assets/Persona 5R.png" alt="avatar">
    </div>
</template>

<script setup>
import { VueCropper } from 'vue-cropper'

</script>

<style lang="scss" scoped>
.cropper-main {
    height: 100vh;
    width: 100vw;
}

img {
    display: block;
    height: 100%;
    max-width: 100%;
}
</style>