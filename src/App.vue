<script setup>
import NavBar from './components/NavBar.vue';
import LoadingOverlay from './components/LoadingOverlay.vue';
import { onMounted, toRaw } from 'vue';
import LoginOverlay from './components/LoginOverlay.vue';
import Setting from './components/Setting.vue';
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();

// when app mounted

import { getUser } from './apis/auth';
import ChangeAvatar from './components/ChangeAvatar.vue';
onMounted(async () => {
  store.commit('setUser', getUser());
  if (toRaw(store.state.user).user == null) {
    router.push('/picnia/login');
  }
  await store.dispatch('pullPost');
})
</script>

<template>
  <NavBar class="nav"></NavBar>
  <router-view class="main-content" v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </Transition>
  </router-view>
  <Transition name="fade">
    <Setting v-if="store.state.isSetting">
    </Setting>
  </Transition>
  <LoadingOverlay></LoadingOverlay>
  <LoginOverlay></LoginOverlay>
  <Transition name="fade">
    <ChangeAvatar></ChangeAvatar>
  </Transition>
</template>

<style scoped lang="scss">
.main-content {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
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
