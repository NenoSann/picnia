<template>
    <div class="content">
        <PostList>
            <PostTab class="post-tab" v-for="n in 10">
            </PostTab>
        </PostList>
    </div>
</template>

<script setup>
import PostTab from '../components/PostTab.vue';
import PostList from '../components/PostList.vue';
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