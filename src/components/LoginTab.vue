<template>
    <form class="login-tab-main" @submit.prevent>
        <p class="title">Picnia</p>
        <Transition>
            <input type="username" class="username" placeholder="用户名" v-if="isRegister" v-model="userName"
                :class="{ error: usernameError, shake: usernameError }">
        </Transition>
        <input type="mail" class="email" placeholder="邮箱" v-model="email" :class="{ error: emailError, shake: emailError }">
        <input type="password" class="password" placeholder="密码" v-model="password">
        <button type="submit" class="login-button" v-if="isRegister" @click.prevent="createUser">注册</button>
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
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'
import { useStore } from "vuex";
let isRegister = ref(false);

// data ream
const email = ref("");
const userName = ref("");
const password = ref("");
const message = ref('');
const agreementCheckd = ref(false);

// component
const router = useRouter();
const store = useStore();


//computed value
const emailError = computed(() => {
    return message.value.includes('duplicate') && message.value.includes('email');
})

const usernameError = computed(() => {
    return message.value.includes('duplicate') && message.value.includes('userName');
})

const success = computed(() => {
    return message.value.includes('success');
})

async function createUser() {
    if (!agreementCheckd.value) {
        alert("请先阅读并且统一隐私协议和使用规范");
        return;
    } else {
        message.value = await store.dispatch('registerUser', {
            email: email.value,
            username: userName.value,
            password: password.value
        })
        console.log(message.value)
        console.log(emailError.value)
        if (success.value) {
            isRegister.value = !isRegister.value
        }
    }

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

.error {
    background: rgb(224, 12, 40);
    background: linear-gradient(90deg, rgba(224, 12, 40, 0.5346931008731617) 0%, rgba(222, 1, 1, 1) 100%);
    animation: errorAnimation 0.3s ease-in-out infinite;
}

.shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
}

@keyframes shake {

    10%,
    90% {
        transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
        transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
        transform: translate3d(4px, 0, 0);
    }
}
</style>