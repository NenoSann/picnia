<template>
    <div class="content">
        <PostList :posts="posts" :colunm=3></PostList>
    </div>
</template>

<script setup>
import PostTab from '../components/PostTab.vue';
import PostList from '../components/PostList.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const posts = computed(() => {
    return Array.from(store.state.post.post.values()).reverse();
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