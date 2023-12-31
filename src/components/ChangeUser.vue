<template>
    <div class="main">
        <header class="setting-header">
            {{ type === 'username' ? '修改用户名' : '密码设置' }}
        </header>
        <input :type="type === 'password' ? 'password' : 'text'" v-model="input.previousVal">
        <input :type="type === 'password' ? 'password' : 'text'" v-if="type === 'password'" v-model="input.inputVal">
        <TheButton text="确定" @click="sendRequest"></TheButton>
    </div>
</template>

<script setup>
import { computed, ref, reactive } from 'vue';
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
const input = reactive({
    previousVal: '',
    inputVal: ''
})
const functionMap = {
    'password': changeUserPassword,
    'username': changeUsername
}

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
        console.log('DEBUG:changeUserName');
        store.commit('toggleLoading');
    } catch {
        store.commit('toggleLoading');
    }
}
</script>

<style scoped lang="scss">
@import '../assets/main.scss';

.main {
    font-family: 'Noto Sans SC', sans-serif;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 1.5rem 1.5rem 1.5rem 1.5rem;
    background-color: aliceblue;
    border-radius: 12px;
    box-shadow: 0px 4.30151px 46.2412px rgba(0, 0, 0, 0.06);
}

.setting-header {
    font-family: 'Noto Sans SC', sans-serif;
    font-weight: 700;
    font-size: large;
    border-bottom: 2px solid $primary-color;
}
</style>