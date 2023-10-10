<template>
    <div class="profile-main">
        <div class="avatar-section">
            <input @change="getInput" type="file" ref="avatarInput" id="avatar-upload" accept="image/*">
            <TheAvatar @click="handleClick" :image_url="avatarUrl" widthString="186px" heightString="186px" class="avatar"
                :editable="true">
            </TheAvatar>
            <div class="user-info">
                <div class="user-name">
                    <p>{{ userName }}</p>
                    <span @click="() => { isEditting = !isEditting }">{{ isEditting ? '完成编辑' : '编辑资料' }}</span>
                </div>
                <p class="user-id">{{ email }}</p>
                <p class="introduction" v-if="!isEditting">{{ brief }}
                </p>
                <textarea class="introduction" cols="20" v-if="isEditting" v-model="brief"></textarea>
            </div>
        </div>
        <div class="button-section">
            <div class="button">
                <TheIcon icon="posts" stroke="#32adf0"></TheIcon>
                <p class="text">我的</p>
            </div>
            <div class="button">
                <TheIcon icon="like" stroke="#ed5b51"></TheIcon>
                <p class="text">赞过</p>
            </div>
            <div class="button">
                <TheIcon icon="favorite" stroke="#f7bf45"></TheIcon>
                <p class="text">收藏</p>
            </div>
        </div>
        <p class="posts-count">162 篇帖子</p>
        <PostList :colunm="3" class="post-list">
            <PostTab v-for="n in 10"></PostTab>
        </PostList>
    </div>
</template>

<script setup>
import TheAvatar from '../components/TheAvatar.vue';
import TheIcon from '../components/TheIcon.vue';
import PostList from '../components/PostList.vue';
import PostTab from '../components/PostTab.vue';
import { ref, computed, toRaw, toRef } from 'vue'
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
const router = useRouter();
const store = useStore();

//将user数据格式从store中提取出来，避免多重链式调用
const user = function () {
    return store.state.user.user;
}


// ref data
const isEditting = ref(false);
const avatarInput = ref('');
const avatarUrl = computed(() => {
    return user().userAvatar !== undefined ? user().userAvatar : "src/assets/avatarDefault.png";

})
const userName = computed(() => {
    return user().userName !== undefined ? user().userName : '未登录';

})
const brief = computed(() => {
    return user().userBrief ? user().userBrief : '这个人虽然不懒，但还是什么都没写';
})

const email = computed(() => {
    return user().email ? user().email : '';
})

const getInput = function (e) {
    const reader = new FileReader();
    reader.onload = function (event) {
        const userData = user();
        userData.userAvatar = event.target.result;
        store.commit('setUser', userData);
    }
    reader.readAsDataURL(e.target.files[0]);
}

// 使得Avatar在click时触发input的点击事件
const handleClick = () => {
    avatarInput.value.click();
}
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
    margin-right: min(8vw, 160px);
}

.user-info {
    .user-id {
        margin-top: 8px;
        color: #848484;
    }

    .introduction {
        max-width: max(30vw, 300px);
        max-height: max(30vh, 300px);
        min-height: fit-content;
        width: 99999px;
        margin-top: 16px;
        resize: vertical;
        // box-sizing: border-box;
    }

    .user-name {
        display: flex;
        align-items: center;

        p {
            font-size: 2rem;
        }

        span {
            cursor: pointer;
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

.post-list {
    margin-top: 16px;
    padding: 0 8vw;
}

input {
    position: absolute;
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    // z-index: -1;

    // overflow: hidden;
}

#avatar-upload {

    width: 0.1px;
    height: 0.1px;
}
</style>