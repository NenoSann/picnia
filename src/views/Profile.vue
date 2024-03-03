<template>
    <div class="profile-main">
        <div class="avatar-section">
            <TheAvatar @click="handleClick" :image_url="profileData.avatar" widthString="186px" heightString="186px"
                class="avatar" :editable="true">
            </TheAvatar>
            <div class="user-info">
                <div class="user-name">
                    <p>{{ profileData.userName }}</p>
                    <span @click="() => { isEditting = !isEditting }">{{ isEditting ? '完成编辑' : '编辑资料' }}</span>
                </div>
                <p class="user-id">{{ profileData.email }}</p>
                <p class="introduction" v-if="!isEditting">{{ profileData.userBrief }}
                </p>
                <textarea class="introduction" cols="20" v-if="isEditting" v-model="brief"></textarea>
            </div>
        </div>
        <div class="button-section">
            <div class="button" @click="requestUserPost('own')">
                <TheIcon icon="posts" stroke="#32adf0" :animatable="false"></TheIcon>
                <p class="text">我的</p>
            </div>
            <div class="button" @click="requestUserPost('like')">
                <TheIcon icon="like" stroke="#ed5b51" :animatable="false"></TheIcon>
                <p class="text">赞过</p>
            </div>
            <div class="button" @click="requestUserPost('save')">
                <TheIcon icon="favorite" stroke="#f7bf45" :animatable="false"></TheIcon>
                <p class="text">收藏</p>
            </div>
        </div>
        <div v-show="isLoading">
            <n-spin></n-spin>
        </div>
        <p class="posts-count">{{ posts.length + '篇帖子' }}</p>
        <PostList :posts="posts" :colunm="3"></PostList>
    </div>
</template>

<script setup>
import TheAvatar from '../components/TheAvatar.vue';
import TheIcon from '../components/TheIcon.vue';
import PostList from '../components/PostList.vue';
import { NSpin } from 'naive-ui';
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from "vuex";
import { getProfileData } from '../apis/getProfileData';
import { pullUserPost } from '../apis/pullPost';
const store = useStore();
const route = useRoute();
const profileData = reactive({
    userName: '',
    userBrief: '',
    avatar: '',
    posts: [],
    likePosts: [],
    savedPosts: [],
    userId: ''
});
const posts = ref([]);
const isLoading = ref(true);
const isEditting = ref(false);
const targetUserName = computed(() => {
    return route.params['userName'];
})

// 使得Avatar在click时触发input的点击事件
const handleClick = () => {
    store.commit('toggleAvatarCropper', true);
}

/**
 * @description pull current profile user's posts, depends on type
 * @param {'save'|'own'|'like'} type 
 * @returns {[*]}
 */
async function requestUserPost(type) {
    try {
        isLoading.value = true;
        const newPosts = await pullUserPost({ type, userId: profileData.userId })
        posts.value.length = 0;
        posts.value.push(...newPosts.post);
    } catch {

    } finally {
        isLoading.value = false;
    }
}

onMounted(async () => {
    const requestedData = await getProfileData(targetUserName.value);
    Object.assign(profileData, requestedData);
    requestUserPost('own');
})
</script>

<style lang="scss" scoped>
.profile-main {
    border: none;
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