<template>
    <n-config-provider :themeOverrides="themeOverrides">
        <form class="login-tab-main" @submit.prevent>
            <p class="title">Picnia</p>
            <Transition>
                <n-input @change="debounce(check, 200)('username', userName)" :loading="userNameLoading"
                    class="username" :status="userNameValid" placeholder="用户名" v-model:value="userName"
                    v-if="isRegister">
                    <template #suffix>
                        <n-icon :component="Checkmark" v-if="userNameError === false && !userNameLoading"></n-icon>
                    </template>
                </n-input>
            </Transition>
            <n-input @change="debounce(check, 200)('useremail', email)" :loading="userEmailLoading" :status="emailValid"
                class="email" placeholder="邮箱" v-model:value="email">
                <template #suffix>
                    <n-icon :component="Checkmark"
                        v-if="email.length && userEmailError === false && !userEmailLoading"></n-icon>
                </template>
            </n-input>
            <n-input type="password" class="password" show-password-on="mousedown" placeholder="密码"
                v-model:value="password"></n-input>
            <n-button :disabled="!allValid" class="login-button" type="info" v-if="isRegister"
                @click.prevent="createUser">注册</n-button>
            <n-button :disabled="!allValid" class="login-button" type="info" v-else-if="!isRegister"
                @click="login">登录</n-button>
            <div class="agreement">
                <input type="checkbox" name="checkbox" id="checkbox" v-model="agreementCheckd">
                <label for="checkbox">我已阅读且同意用户协议</label>
            </div>
            <p class="select" @click="() => { isRegister = !isRegister }">{{ isRegister ? "已有账号？点击登陆！" :
                "还没有加入Picnia吗？点击注册！"
                }}
            </p>
        </form>
    </n-config-provider>
</template>

<script setup>
import { emailValidate } from '../utils/validator';
import { NButton, NConfigProvider, NInput, NIcon } from 'naive-ui';
import { Checkmark } from '@vicons/carbon';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'
import { useStore } from "vuex";
import { debounce } from 'lodash';
import { checkValidity } from '../apis/Query/index';
let isRegister = ref(false);

// data ream
const email = ref("");
const userName = ref("");
const password = ref("");
const message = ref('');
const agreementCheckd = ref(false);
const userNameLoading = ref(false);
const userNameError = ref(null);
const userEmailLoading = ref(null);
const userEmailError = ref(null);
// component
const router = useRouter();
const store = useStore();

const emailValid = computed(() => {
    if (email.value.length === 0) {
        return 'error';
    }
    return emailValidate(email.value) && !userEmailError.value ? 'success' : 'error';
})

const userNameValid = computed(() => {
    if (!userNameError.value && userName.value.length) {
        return 'success';
    }
    return 'error';
})

const allValid = computed(() => {
    if (!isRegister.value) {
        return emailValid.value && password.value.length;
    } else {
        return emailValid.value && password.value.length;
    }
})

const success = computed(() => {
    return message.value.includes('success');
})


const colorPrimary = 'var(--color-primary)';
const colorBackgroundTer = 'var(--color-teriary-background)';
const colorPrimaryTrans = 'var(--color-primary-trans-50)';
const colorLabelTer = 'var(--color-teriary-label)';
const colorFocusError = 'var(--color-error)';
const themeOverrides = {
    Button: {
        textColor: 'var(--color-primary-label)',
        colorInfo: colorPrimary
    },
    Input: {
        border: `1px solid ${colorBackgroundTer}`,
        placeholderColor: colorLabelTer,
        caretColor: colorPrimary,
        loadingColor: colorPrimary,
        colorFocus: colorPrimaryTrans,
        colorFocusError: colorFocusError,
        boxShadowFocus: `0 0 8px 0 ${colorPrimaryTrans}`,
        borderHover: `1px solid ${colorPrimary}`,
        borderFocus: `1px solid ${colorPrimary}`,
    }
}

async function createUser() {
    if (!agreementCheckd.value) {
        alert("请先阅读并且统一隐私协议和使用规范");
        return;
    } else if (allValid.value) {
        message.value = await store.dispatch('registerUser', {
            email: email.value,
            username: userName.value,
            password: password.value
        })
        if (success.value) {
            isRegister.value = !isRegister.value
        }
    }
}

/**
 * @description 处理登录函数 
 */
async function login() {
    if (!agreementCheckd.value) {
        alert("请先阅读并且统一隐私协议和使用规范");
        return;
    } else {
        message.value = await store.dispatch('loginUser', {
            email: email.value,
            password: password.value
        });
        if (message.value === 'correct') {
            message.value = '';
            console.log('登陆成功')
            router.replace('/picnia');
        }
        console.log(message.value);
    }
}

/**
 * 检查输入的注册用户名和邮箱是否有重复
 */
async function check(type, value) {
    if (isRegister.value) {
        if (type === 'username') {
            userNameLoading.value = true;
            checkValidity(type, value).then((result) => {
                if (result?.status === 'fail') {
                    userNameError.value = true;
                } else {
                    userNameError.value = false;
                }
            }).finally(() => {
                userNameLoading.value = undefined;
            });
        } else if (type === 'useremail' && emailValidate(email.value)) {
            userEmailLoading.value = true;
            checkValidity(type, value).then((result) => {
                if (result?.status === 'fail') {
                    userEmailError.value = true;
                } else {
                    userEmailError.value = false;
                }
            }).finally(() => {
                userEmailLoading.value = undefined;
            });
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
    color: var(--color-primary-label);
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



:deep(.login-button) {
    width: 320px;
    border-radius: 6px;

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