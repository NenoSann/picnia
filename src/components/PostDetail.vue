<template>
    <Teleport to="body">
        <div class="modal">
            <button class="close-btn">
            </button>
            <img src="src/assets/testImage1.png" class="image">
            <div class="content">
                <div class="uploader">
                    <div class="detail">
                        <TheAvatar image_url="src/assets/avatar2.JPG"></TheAvatar>
                        <p class="user-name">NenoSan</p>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import TheAvatar from './TheAvatar.vue';

</script>

<style scoped lang="scss">
.modal {
    position: fixed;
    top: 20vh;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    background-color: aquamarine;
    border-radius: 51px;
    overflow: hidden;
}

.image {
    width: 400px;
    height: auto;
}

.close-btn {
    position: absolute;
}

.content {
    padding: 20px 30px;
}

.detail {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.user-name {
    padding-left: 20px;
}
</style>