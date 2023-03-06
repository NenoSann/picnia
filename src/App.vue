<script setup>
import NavBar from './components/NavBar.vue';
import TheIcon from './components/TheIcon.vue';
import CreatePostTab from './components/CreatePostTab.vue';
import { computed } from 'vue';
let hideNav = computed({

})

</script>

<template>
  <NavBar class="nav"></NavBar>
  <!-- <router-view class="main-content"></router-view> -->
  <CreatePostTab />
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
