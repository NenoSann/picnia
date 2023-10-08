<script setup>
import NavBar from './components/NavBar.vue';
import LodingOverlay from './components/LodingOverlay.vue';
import TheIcon from './components/TheIcon.vue';
import CreatePostTab from './components/CreatePostTab.vue';
import PostDetail from './components/PostDetail.vue';
import { computed } from 'vue';
import LoginOverlay from './components/LoginOverlay.vue';

</script>

<template>
  <NavBar class="nav"></NavBar>
  <router-view class="main-content"></router-view>
  <!-- <CreatePostTab /> -->
  <!-- <PostDetail /> -->
  <LodingOverlay></LodingOverlay>
  <LoginOverlay></LoginOverlay>
</template>

<style scoped lang="scss">
.main-content {
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
</style>
