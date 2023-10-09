<template>
    <div class="header-main">
        <router-link to="/">
            <p class="header-title">Picnia</p>
        </router-link>
        <div class="search-main">
            <TheIcon icon="search"></TheIcon>
            <input type="search" name="search" placeholder="搜索">
        </div>
        <div class="header-icons">
            <TheIcon icon="home" />
            <TheIcon icon="publish" @click="toggleTab"></TheIcon>
            <TheAvatar :alt="userName" :image_url="userAvatar" widthString="40px" heightString="40px"></TheAvatar>
        </div>
        <!-- dropdown -->
        <ul class="profile-menu">
            <li><router-link to="/profile">个人主页</router-link></li>
            <li>退出登陆</li>
        </ul>
        <CreatePostTab :open="this.openTab" @toggleTab="onCloseTab"></CreatePostTab>
    </div>
</template>

<script>
import TheIcon from './TheIcon.vue';
import TheAvatar from './TheAvatar.vue';
import CreatePostTab from './CreatePostTab.vue';
import { sendUserData } from '../apis/sendUserData';
import { useStore } from 'vuex';


export default {
    data() {
        return {
            openTab: false,
        }
    },
    components: {
        TheIcon,
        TheAvatar,
        CreatePostTab,
    },
    methods: {
        toggleTab() {
            this.openTab = !this.openTab;
        },
        onCloseTab() {
            this.openTab = false;
        },
    },
    computed: {
        userAvatar() {
            return this.$store.state.user.userAvatar || 'src/assets/avatarDefault.png';
        },
        userName() {
            return this.$store.state.user.userName || '未登录';
        }
    },
}

</script>

<style lang="scss" scoped>
.header-main {
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    height: 5rem;
    background-color: white;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.search-main {
    display: flex;
    align-items: center;
    border-radius: 14px;
    background-color: #F1F1F1;
    overflow: hidden;
    padding-left: 16px;

    >svg {
        width: 20px;
        height: 20px;
    }
}

.header-title {
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 2rem;
    cursor: pointer;
    color: black;
}

.header-icons {
    width: 160px;
    display: flex;
    justify-content: space-between;

    >* {
        // add thie property to all child elements
        cursor: pointer;
    }
}


.profile-menu {
    opacity: 0%;
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    top: 66px;
    right: 86px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
    background-color: white;
    border-radius: 6px;

    li {
        list-style-type: none;
        padding: 10px 20px;

        a {
            text-decoration: none;
        }
    }
}



input {
    height: 2rem;
    background-color: #F1F1F1;
    border: none;
}

::placeholder {
    color: #949494;
    opacity: 1;
}

a.router-link-active.router-link-exact-active {
    text-decoration: none;
}
</style>