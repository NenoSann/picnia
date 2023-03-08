<template>
    <div class="profile-main">
        <div class="avatar-section">
            <TheAvatar image_url="src/assets/avatar2.JPG" widthString="186px" heightString="186px" class="avatar">
            </TheAvatar>
            <div class="user-info">
                <div class="user-name">
                    <p>NenoSan</p>
                    <span>编辑个人资料</span>
                </div>
                <p class="user-id">@FpsNoobuuu</p>
                <p class="introduction">我是NenoSan，正在学习frontend development！<br>
                    欢迎来我的github，看看我的repo，给我star！<br>
                    谢谢你捏！<br>
                </p>
            </div>
        </div>
        <div class="button-section">
            <div class="button">
                <TheIcon icon="posts"></TheIcon>
                <p class="text">我的</p>
            </div>
            <div class="button">
                <TheIcon icon="like"></TheIcon>
                <p class="text">赞过</p>
            </div>
            <div class="button">
                <TheIcon icon="favorite"></TheIcon>
                <p class="text">收藏</p>
            </div>
        </div>
        <p class="posts-count">162 篇帖子</p>
    </div>
</template>

<script setup>
import TheAvatar from '../components/TheAvatar.vue';
import TheIcon from '../components/TheIcon.vue';
</script>

<style lang="scss" scoped>
.profile-main {
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.avatar-section {
    display: flex;
}

.avatar {
    margin-right: 10vh;
}

.user-info {
    .user-id {
        margin-top: 8px;
        color: #848484;
    }

    .introduction {
        margin-top: 16px;
    }

    .user-name {
        display: flex;
        align-items: center;

        p {
            font-size: 2rem;
        }

        span {
            margin-left: 40px;
            color: #1DA0FF;
        }
    }
}

.button-section {
    padding-top: 6vh;
    display: flex;
    flex-direction: row;
    gap: 14vw;
    color: grey;

    svg {
        height: 32px;
        width: 32px;
        stroke: grey;
        fill: transparent;
    }
}

.posts-count {
    margin-top: 16px;
}
</style>