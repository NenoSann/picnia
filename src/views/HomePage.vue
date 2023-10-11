<template>
    <div class="content">
        <PostList>
            <PostTab class="post-tab" v-for="post in posts" :postData="post">
            </PostTab>
        </PostList>
    </div>
</template>

<script setup>
import PostTab from '../components/PostTab.vue';
import PostList from '../components/PostList.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const posts = computed(() => {
    return store.state.post.post;
})

</script>

<style lang="scss" scoped>
// .post-list {
//     padding-top: 60px;
//     display: grid;
//     grid-template-columns: 600px 600px;
//     gap: 50px;
// }

.content {
    display: flex;
    justify-content: center;
}

.tab {
    display: flex;
    justify-content: center;
}
</style>