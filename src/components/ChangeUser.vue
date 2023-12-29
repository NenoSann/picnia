<template>
    <div class="main">
        <header class="setting-header">
            {{ type === 'username' ? '用户名设置' : '密码设置' }}
        </header>
        <input :type="type === 'password' ? 'password' : 'text'" v-model="input.previousVal">
        <input :type="type === 'password' ? 'password' : 'text'" v-if="type === 'password'" v-model="input.inputVal">
    </div>
</template>

<script setup>
import { computed, ref, reactive } from 'vue';
import { changeUsername, changeUserPassword } from '../apis/changeUser';

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
</script>

<style scoped lang="scss">
@import '../assets/main.scss';

.main {
    font-family: 'Noto Sans SC', sans-serif;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1.5rem 1.5rem 1.5rem;
    background-color: aliceblue;
    border-radius: 50px;
}

.setting-header {
    font-family: 'Noto Sans SC', sans-serif;
    font-weight: 700;
    font-size: large;
    border-bottom: 2px solid $primary-color;
}
</style>