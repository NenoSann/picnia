<template>
    <div class="header-main">
        <router-link to="/picnia/">
            <p class="header-title">Picnia</p>
        </router-link>
        <div class="search-main">
            <TheIcon icon="search" :animatable=false></TheIcon>
            <input class="header-input" autocomplete="false" type="text" name="search" placeholder="搜索">
        </div>
        <div class="header-icons">
            <Icon size="40">
                <explore />
            </Icon>
            <Icon @click="toggleTab" size="40">
                <send />
            </Icon>
            <TheAvatar :image_url="userAvatar" widthString="40px" heightString="40px" :profile_Url="userProfileURL">
            </TheAvatar>
            <Setting>
            </Setting>
        </div>
        <CreatePostTab :open="this.openTab" @toggleTab="onCloseTab"></CreatePostTab>
    </div>
</template>

<script>
import { TheIcon, TheAvatar, CreatePostTab, Icon, Setting } from './index';
import { Explore, Send } from '@vicons/carbon'
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
        Icon,
        Explore, Send,
        Setting
    },
    methods: {
        toggleTab() {
            this.openTab = !this.openTab;
        },
        onCloseTab() {
            this.openTab = false;
        },
        async testPullPost() {
            this.$store.commit('toggleLoading');
            await this.$store.dispatch('pullPost');
            this.$store.commit('toggleLoading');
        },
        openSetting() {
            this.$store.commit('toggleSetting', true);
        }
    },
    computed: {
        userAvatar() {
            return this.$store.state.user.user ? this.$store.state.user.user.avatar : undefined;
        },
        userName() {
            // return this.$store.state.user.user.userName || '未登录';
            return this.$store.state.user.user ? this.$store.state.user.user.userName : '未登陆';
        },
        userProfileURL() {
            return this.$store.state.user.user ? `/picnia/profile/${this.$store.state.user.user.userName}` : '/picnia';
        }
    },
}

</script>

<style lang="scss" scoped>
@import '../assets/main.scss';

.header-main {
    z-index: 0;
    display: flex;
    height: 5rem;
    min-height: 5rem;
    background-color: var(--color-primary-background);
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    @extend .s-shadow;
}

.search-main {
    display: flex;
    align-items: center;
    border-radius: 14px;
    background-color: var(--color-secondary-background);
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
    color: var(--color-primary-label);
}

.header-icons {
    width: 200px;
    display: flex;
    justify-content: space-between;

    >* {
        // add thie property to all child elements
        cursor: pointer;
    }
}

.header-input {
    background-color: transparent;
}

#setting-icon {
    width: 40px;
    height: 40px;
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