<template>
    <div class="main">
        <header class="setting-header">
            {{ type === 'username' ? '修改用户名' : '密码设置' }}
        </header>
        <form class="form" autocomplete="off">
            <input autocomplete="false" :type="type === 'password' ? 'password' : 'text'" v-model="input.previousVal">
            <input autocomplete="false" :type="type === 'password' ? 'password' : 'text'" v-if="type === 'password'"
                v-model="input.inputVal">
        </form>
        <div @click="sendRequest">
            <TheButton text="确定"></TheButton>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, reactive, toRaw, getCurrentInstance } from 'vue';
import { changeUsername, changeUserPassword } from '../apis/changeUser';
import TheButton from '../components/TheButton.vue'
import { useStore } from "vuex";
const store = useStore();
// type props should be 'password' or 'username' or something new,
// if want to add more function, you should push that function  
// into functionMap
const props = defineProps({
    type: String
})
const emit = defineEmits(['close', 'test'])
const input = reactive({
    previousVal: '',
    inputVal: ''
});
const functionMap = {
    'password': changeUserPassword,
    'username': changeUsername
}
const user = computed(() => {
    return store?.state.user.user;
})

const userId = computed(() => {
    return user.value.userId;
})

const targetFunction = computed(() => {
    if (props.type) {
        return functionMap[props.type];
    } else {
        return () => {
            console.log('wrong type props');
        }
    }
})

const sendRequest = async function () {
    try {
        store.commit('toggleLoading');
        let res;
        if (props.type === 'password') {
            res = await targetFunction.value(userId.value, input.previousVal, input.intputVal);
        } else if (props.type === 'username') {
            await targetFunction.value(userId.value, input.previousVal);
            const rawUser = toRaw(user.value);
            rawUser.userName = input.previousVal;
            store.commit('setUser', rawUser);
        }
        store.commit('toggleLoading');
        emit('close')
    } catch {
        store.commit('toggleLoading');
    }
}
</script>

<style scoped lang="scss">
@import '../assets/_var.scss';
@import '../assets/main.scss';

.main {
    font-family: 'Noto Sans SC', sans-serif;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 1.5rem 1.5rem 1.5rem 1.5rem;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0px 4.30151px 46.2412px rgba(0, 0, 0, 0.06);
}

.form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    input {
        width: 100%;
    }
}

.setting-header {
    font-family: 'Noto Sans SC', sans-serif;
    font-weight: 700;
    font-size: large;
    border-bottom: 2px solid $primary-color;
}
</style>