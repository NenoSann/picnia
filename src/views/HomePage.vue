<template>
    <div class="content">
        <PostList :posts="posts" :colunm="3"></PostList>
    </div>
</template>

<script setup>
import PostList from '../components/PostList.vue';
import { computed, onMounted, toRaw } from 'vue';
import { useStore } from 'vuex';
import { useDialog } from 'naive-ui';
import { useRouter } from 'vue-router';
import { getUser, getJwtToken } from '../apis/auth';
import { jwtTokenValidate } from '../utils/validator.js';
const router = useRouter();
const dialog = useDialog();
const store = useStore();
const posts = computed(() => {
    return Array.from(store.state.post.post.values()).reverse();
})
const dialogConfigs = {
    tokenError: {
        title: 'Token过期',
        content: '你的登录Token已经过期了, 要不要重新登陆?',
        positiveText: '重新登陆',
        onPositiveClick: () => {
            router.push('/picnia/login');
        }
    }
}


function handleError(dialogConfig) {
    dialog.error(dialogConfig);
}

onMounted(async () => {
    store.commit('setUser', getUser());
    if (toRaw(store.state.user).user == null) {
        router.push('/picnia/login');
    }
    if (!jwtTokenValidate(getJwtToken())) {
        handleError(dialogConfigs.tokenError);
    } else {
        await store.dispatch('pullPost');
    }
})
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    justify-content: center;
}

.tab {
    display: flex;
    justify-content: center;
}
</style>