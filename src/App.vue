<script setup>
import NavBar from './components/NavBar.vue';
import LodingOverlay from './components/LodingOverlay.vue';
import { onMounted, toRaw } from 'vue';
import LoginOverlay from './components/LoginOverlay.vue';
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();

// when app mounted

import { getUser } from './apis/auth';
onMounted(() => {
  store.commit('setUser', getUser());
  if (toRaw(store.state.user).user == null) {
    router.push('login');
  }
})
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
