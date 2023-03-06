<template>
    <Teleport to="body">
        <div class="modal">
            <button class="close-btn">
            </button>
            <img src="src/assets/testImage2.png" class="image">
            <div class="content">
                <div class="uploader">
                    <div class="detail">
                        <TheAvatar image_url="src/assets/avatar2.JPG"></TheAvatar>
                        <p class="user-name">NenoSan</p>
                    </div>
                    <p class="present">
                        好可爱的插画！好可爱的插画！🧋
                        好可爱的插画！好可爱的插画！🧋
                        好可爱的插画！好可爱的插画！🧋
                        好可爱的插画！好可爱的插画！🧋
                        好可爱的插画！好可爱的插画！🧋
                    </p>
                    <p class="hash-tag">
                        #Maid #BeautiGirl #Illustration
                    </p>
                </div>
                <div class="comments">

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
    top: 12vh;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    background-color: white;
    border-radius: 51px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
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
    padding-left: 16px;
}

.present {
    color: #4b4b4b;
    padding-top: 20px;
    width: 30vw;
    max-width: 1200px;
    min-width: 300px;
}

.hash-tag {
    color: #1DA0ff;
    margin-top: 20px;
}

.uploader {
    border-bottom: 1px solid #aaa8a8;
}
</style>