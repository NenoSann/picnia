<template>
    <div class="content">
        <div class="post-list">
            <PostTab class="post-tab" v-for="n in 10">
            </PostTab>
        </div>
    </div>
</template>

<script setup>
import PostTab from '../components/PostTab.vue';

</script>

<style lang="scss" scoped>
.post-list {
    padding-top: 60px;
    display: grid;
    grid-template-columns: 600px 600px;
    gap: 50px;
}

.content {
    display: flex;
    justify-content: center;
}

.tab {
    display: flex;
    justify-content: center;
}
</style>