<template>
    <n-dropdown :menu-props="menuProps" :node-props="nodeProps" trigger="hover" :options="options" :show-arrow="true">
        <n-icon size="40">
            <Settings />
        </n-icon>
    </n-dropdown>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed, h, reactive } from 'vue';
import { NDropdown, NIcon } from 'naive-ui';
import { Settings, Sun, Moon, AudioConsole } from '@vicons/carbon';
import { setTheme } from '../utils/index';
const store = useStore();
const router = useRouter();
const renderIcon = (icon) => {
    return () => {
        return h(NIcon, null, {
            default: () => h(icon)
        })
    }
}
const menuProps = () => {
    return {
        class: 'dropdown-menu'
    }
}

const nodeProps = () => {
    return {
        class: 'n-dropdown-option',
        id: 'dropdown-item'
    }
}
const options = [
    {
        label: '清除本地数据',
        key: 'local',
        props: {
            onClick: () => window.localStorage.clear(),
            class: 'dropdown-item'
        },
    },
    {
        label: '切换配色',
        key: 'theme',
        children: [
            { label: '跟随系统', key: 0, props: { onClick: () => setTheme() }, icon: renderIcon(AudioConsole) },
            { label: '浅色', key: 1, props: { onClick: () => setTheme('light') }, icon: renderIcon(Sun) },
            { label: '深色', key: 2, props: { onClick: () => setTheme('dark') }, icon: renderIcon(Moon) }
        ]
    },
    {
        label: '退出登录',
        key: 'exit',
        props: {
            onClick: () => { exit() }
        }
    }
]

const userInfo = computed(() => {
    return store.state.user.user;
})

const modalConfig = reactive({
    show: false,
    type: 'username'
})

const exit = function () {
    console.log('即将退出登陆')
    window.localStorage.clear()
    close();
    router.replace('/picnia/login')
    store.commit('clearUser');
}

const close = function () {
    store.commit('toggleSetting', false);
}

const changeUsername = function () {
    changeModalType('username');
    toggleModal();
}

const changePassword = function () {
    changeModalType('password');
    toggleModal();
}

const changeModalType = function (type) {
    modalConfig.type = type;
}

const toggleModal = function () {
    modalConfig.show = !modalConfig.show;
}
</script>

<style lang="scss" scoped>
.close-btn {
    cursor: pointer;
    position: absolute;
    right: 20px;
}

.setting-main {
    position: absolute;
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: rgba($color: #000000, $alpha: 0.2);

    .setting-body {
        position: relative;
        padding: 20px;
        border-radius: 12px;
        width: 60%;
        height: 80%;
        background-color: white;
    }
}

.info-main {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    .avatar {
        flex-grow: 0;
        flex-shrink: 0;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .email {
        margin-top: 10px;
        color: #5f6361;
        font-size: 14px;
    }

    .text-section {
        margin-left: 16px;
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        justify-content: center;
        align-items: baseline;
    }
}

.general-main {
    margin-bottom: 20px;
}

.header {
    font-size: 16px;
    font-weight: 700;
    border-bottom: 1px solid #c5c9c6;
    padding-bottom: 8px;
}
</style>