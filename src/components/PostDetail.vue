<template>
    <Teleport to="body">
        <div class="modal">
            <TheIcon icon="close" class="btn-close" style="cursor: pointer;"></TheIcon>
            <img src="src/assets/testImage3.png" class="image">
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
                <div class="comments-list">
                    <Comment v-for="n in 7"></Comment>
                </div>
                <div class="button-section">
                    <div class="sent-comment">
                        <ButtonSets :scale="0.8" :textTransform="-10"></ButtonSets>
                        <p class="time">2h</p>
                    </div>
                </div>
                <div class="input-section">
                    <input type="text" placeholder="发条评论吧😄">
                    <p class="submit" style="cursor: pointer;">发布</p>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import TheIcon from './TheIcon.vue';
import TheAvatar from './TheAvatar.vue';
import Comment from './Comment.vue';
import ButtonSets from './ButtonSets.vue';
</script>

<style scoped lang="scss">
.modal {
    position: fixed;
    top: 12vh;
    left: 50%;
    max-height: 80vh;
    transform: translateX(-50%);
    display: flex;
    background-color: white;
    border-radius: 51px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.btn-close {
    width: 32px;
    height: 32px;
    position: absolute;
    right: 20px;
    top: 20px;
}

.image {
    width: 400px;
    height: auto;
    object-fit: cover;
}

.close-btn {
    position: absolute;
}

.content {
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
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

.comments-list {
    height: 100%;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

}

.sent-comment {
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-top: 1px solid #aaa8a8;

    .time {
        color: #a7a7a7;
        margin-left: auto;
    }
}

.input-section {
    display: flex;
    flex-direction: row;
    align-items: center;

    input {
        width: 80%;
        height: 35px;
        border-radius: 50px;
        background-color: #F6F6F6;
    }

    .submit {
        margin-left: auto;
        color: #1DA0ff;
    }
}
</style>