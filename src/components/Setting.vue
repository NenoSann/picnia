<template>
    <div class="setting-main">
        <div class="setting-body">
            <div class="close-btn" @click="close">
                <svg width="18px" height="18px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                    stroke="#383838">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M3 21.32L21 3.32001" stroke="#383838" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        <path d="M3 3.32001L21 21.32" stroke="#383838" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </g>
                </svg>
            </div>
            <div class="account-main main ">
                <div class="header">账号信息</div>
                <div class="info-main main">
                    <div class="avatar">
                        <TheAvatar heightString="78px" widthString="78px" :image_url="userInfo.avatar">
                        </TheAvatar>
                    </div>
                    <div class="text-section">
                        <div class="userName">{{ userInfo.userName }}</div>
                        <div class="email">{{ userInfo.email }}</div>
                    </div>
                </div>
            </div>
            <div class="general-main main">
                <div class="header">通用设置</div>
                <SettingSection @settingSectionActive="handleSettingSection" type="clearLocal" settingText="清除本地数据"
                    hoverColor="#f0242b">
                    <svg fill="#383838" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" width="18px"
                        height="18px" stroke="#383838" stroke-width="0.00512">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
                            stroke-width="24.576"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <g>
                                    <rect x="166.4" y="230.4" width="25.6" height="204.8"></rect>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="243.2" y="230.4" width="25.6" height="204.8"></rect>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="320" y="230.4" width="25.6" height="204.8"></rect>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path
                                        d="M422.4,51.2H320V25.6C320,11.46,308.54,0,294.4,0h-76.8C203.46,0,192,11.46,192,25.6v25.6H89.6 C75.46,51.2,64,62.66,64,76.8V128c0,14.14,11.46,25.6,25.6,25.6v332.8c0,14.14,11.46,25.6,25.6,25.6h281.6 c14.14,0,25.6-11.46,25.6-25.6V153.6c14.14,0,25.6-11.46,25.6-25.6V76.8C448,62.66,436.54,51.2,422.4,51.2z M217.6,25.6h76.8v25.6 h-76.8V25.6z M396.8,486.4H115.2V153.6h281.6V486.4z M422.4,128H89.6V76.8h332.8V128z">
                                    </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </SettingSection>
                <SettingSection @settingSectionActive="handleSettingSection" type="exit" settingText="退出登陆">
                    <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        stroke="#383838">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M9 4.5H8C5.64298 4.5 4.46447 4.5 3.73223 5.23223C3 5.96447 3 7.14298 3 9.5V10M9 19.5H8C5.64298 19.5 4.46447 19.5 3.73223 18.7678C3 18.0355 3 16.857 3 14.5V14"
                                stroke="#383838" stroke-width="1.5" stroke-linecap="round"></path>
                            <path
                                d="M13.6576 2.34736C11.4955 1.97026 10.4145 1.78171 9.70725 2.4087C9 3.03569 9 4.18259 9 6.4764V17.5236C9 19.8174 9 20.9643 9.70725 21.5913C10.4145 22.2183 11.4955 22.0297 13.6576 21.6526L15.9864 21.2465C18.3809 20.8288 19.5781 20.62 20.2891 19.7417C21 18.8635 21 17.5933 21 15.0529V8.94711C21 6.40672 21 5.13652 20.2891 4.25826C19.814 3.67133 19.1217 3.38338 18 3.13228"
                                stroke="#383838" stroke-width="1.5" stroke-linecap="round"></path>
                            <path d="M12 11V13" stroke="#383838" stroke-width="1.5" stroke-linecap="round"></path>
                        </g>
                    </svg>
                </SettingSection>
            </div>
            <div class="account-setting">
                <div class="header">
                    账号设置
                </div>
                <SettingSection settingText="修改密码">
                    <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        stroke="#383838">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M9 17.5C9 18.8807 7.88071 20 6.5 20C5.11929 20 4 18.8807 4 17.5C4 16.1193 5.11929 15 6.5 15C7.88071 15 9 16.1193 9 17.5ZM9 17.5H15.125M19 20V17.75C19 17.6119 18.8881 17.5 18.75 17.5M15.125 17.5H18.75M15.125 17.5V20M18.75 17.5Lnan nanCnan nan nan nan nan nanLnan nanCnan nan nan nan nan nanL18.75 17.5ZM5 11H19C20.1046 11 21 10.1046 21 9V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V9C3 10.1046 3.89543 11 5 11Z"
                                stroke="#383838" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <circle cx="7.5" cy="7.5" r="1.5" fill="#383838"></circle>
                            <circle cx="12" cy="7.5" r="1.5" fill="#383838"></circle>
                            <circle cx="16.5" cy="7.5" r="1.5" fill="#383838"></circle>
                        </g>
                    </svg>
                </SettingSection>
                <SettingSection settingText="修改用户名">
                    <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        stroke="#383838">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <circle cx="12" cy="6" r="4" stroke="#383838" stroke-width="1.5"></circle>
                            <path
                                d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                                stroke="#383838" stroke-width="1.5"></path>
                        </g>
                    </svg>
                </SettingSection>
                <SettingSection settingText="**删除账号**" bg_color="#f0242b">
                    👿
                </SettingSection>
            </div>
        </div>
    </div>
</template>

<script setup>
import TheAvatar from './TheAvatar.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import SettingSection from './SettingSection.vue';
const store = useStore();
const router = useRouter();
const userInfo = computed(() => {
    return store.state.user.user;
})

/**
 * @description 根据settingSection emits的参数类型来决定进行哪种操作
 * @param {String} type 
 */
const handleSettingSection = function (type) {
    const functionMap = {
        "clearLocal": clearLocalStorage,
        "exit": exit,
    }
    functionMap[type]();
}

const clearLocalStorage = function () {
    console.log('即将清除本地数据')
    window.localStorage.clear();
    close();
}

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
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    .avatar {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .userName {
        margin-left: 40px;
    }

    .email {
        margin-top: 10px;
        color: #5f6361;
        font-size: 14px;
    }

    .text-section {
        display: flex;
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