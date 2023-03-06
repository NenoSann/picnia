<template>
    <div class="create-post-tab-main">
        <Teleport to="body">
            <div class="image-section">
                <input type="file" name="image-upload" id="image-input">
                <label for="image-input">请选择图片</label>
            </div>
            <div class="text-section">
                <textarea id="text" cols="30" rows="10" placeholder="写点什么？"></textarea>
            </div>
        </Teleport>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.create-post-tab-main {
    width: 600px;
    height: 600px;
    border-radius: 51px;
}

input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
}

#text {
    resize: none;
}
</style>