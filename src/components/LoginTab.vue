<template>
    <div class="login-tab-main">
        <p class="title">Picnia</p>
        <input type="mail" class="email" placeholder="邮箱">
        <input type="password" class="password" placeholder="密码">
        <button class="login-button">登录</button>
        <a href="">还没有加入Picnia吗？点击注册！</a>
    </div>
</template>

<script setup>
defineProps({
    isLogin: {
        type: Boolean,
        default: true,
    }
})
</script>

<style lang="scss" scoped>
.login-tab-main {
    max-height: 460px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    border: 40px solid transparent;
    box-shadow: 0px 4.30151px 46.2412px rgba(0, 0, 0, 0.06);
    border-radius: 31.1859px;
}

.title {
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 2rem;
    color: black;
    margin-bottom: 30px;
    margin-top: 10px;
    // margin: 40px 0;
}

input {
    background-color: #fafafa;
    border-radius: 6px;
    width: 100%;
}

.login-button {
    width: 100%;
    background-image: linear-gradient(to right, #00c2ff, #0047ff, );
    border-radius: 6px;
    color: white;
}

a {
    text-decoration: none;

    &:visited {
        color: #1DA0FF;
    }
}
</style>