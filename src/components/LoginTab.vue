<template>
    <form class="login-tab-main" @submit.prevent>
        <p class="title">Picnia</p>
        <Transition>
            <input type="username" class="username" placeholder="用户名" v-if="isRegister" v-model="userName">
        </Transition>
        <input type="mail" class="email" placeholder="邮箱" v-model="email">
        <input type="password" class="password" placeholder="密码" v-model="password">
        <button type="submit" class="login-button" v-if="isRegister" @click="register">注册</button>
        <button type="submit" class="login-button" v-else-if="!isRegister">登陆</button>
        <div class="agreement">
            <input type="checkbox" name="checkbox" id="checkbox" v-model="agreementCheckd">
            <label for="checkbox">我已阅读且同意用户协议</label>
        </div>
        <p class="select" @click="() => { isRegister = !isRegister }">{{ isRegister ? "已有账号？点击登陆！" : "还没有加入Picnia吗？点击注册！"
        }}
        </p>
    </form>
</template>
<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
let isRegister = ref(false);
const email = ref("");
const userName = ref("");
const password = ref("");
const agreementCheckd = ref(false);

const store = useStore();
const router = useRouter();
async function register() {
    if (!agreementCheckd.value) {
        alert("请先阅读并且统一隐私协议和使用规范");
        return;
    }
    await store.dispatch("registerUser", {
        email: email.value,
        username: userName.value,
        password: password.value,
    });
    router.replace("/");
}
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease-in;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.login-tab-main {
    max-height: 560px;
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
}

.agreement {
    margin-top: -24px;

    input {
        width: auto;
    }

    display: flex;
    flex-direction: row;
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

.select {
    cursor: pointer;
    text-decoration: none;
    color: #1DA0FF;
}
</style>