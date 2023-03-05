<template>
    <div class="login-page-main">
        <div class="image">
            <img src="../assets/phone.png">
        </div>
        <LoginTab />
    </div>
</template>

<script setup>
import LoginTab from '../components/LoginTab.vue';
</script>

<style lang="scss" scoped>
.login-page-main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

img {
    width: 460px;
    height: auto;
}

@media (max-width: 900px) {
    .image {
        display: none;
    }
}
</style>