<template>
  <div class="login-page-main">
    <img src="../assets/phone2.webp" />
    <LoginTab />
  </div>
</template>

<script setup>
import LoginTab from '../components/LoginTab.vue';
</script>

<style lang="scss" scoped>
.login-page-main {
  margin-top: 40px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

img {
  height: 100%;
  width: auto;
}

@media (max-width: 900px) {
  .image {
    display: none;
  }
}
</style>
