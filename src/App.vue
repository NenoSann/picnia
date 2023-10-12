<script setup>
import NavBar from './components/NavBar.vue';
import LodingOverlay from './components/LodingOverlay.vue';
import { onMounted, toRaw } from 'vue';
import LoginOverlay from './components/LoginOverlay.vue';
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import ThePopup from './components/ThePopup.vue';
const store = useStore();
const router = useRouter();

// when app mounted

import { getUser } from './apis/auth';
onMounted(async () => {
  store.commit('setUser', getUser());
  if (toRaw(store.state.user).user == null) {
    router.push('login');
  }
  store.commit('toggleLoading');
  await store.dispatch('pullPost');
  store.commit('toggleLoading')
})
</script>

<template>
  <NavBar class="nav"></NavBar>
  <router-view class="main-content" v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </Transition>
  </router-view>
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

ThePopup {
  margin-top: 50vh;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>
