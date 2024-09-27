<template>
  <n-dropdown
    :menu-props="menuProps"
    :node-props="nodeProps"
    trigger="click"
    :options="options"
    :show-arrow="true"
  >
    <n-icon size="32">
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
// import { setTheme } from '../utils/index';
const store = useStore();
const router = useRouter();
const changeTheme = (mode) => {
  store.dispatch('setTheme', mode);
};
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};
const menuProps = () => {
  return {
    class: 'dropdown-menu'
  };
};

const nodeProps = () => {
  return {
    class: 'n-dropdown-option',
    id: 'dropdown-item'
  };
};

const options = [
  {
    label: '清除本地数据',
    key: 'local',
    props: {
      onClick: () => window.localStorage.clear(),
      class: 'dropdown-item'
    }
  },
  {
    label: '切换配色',
    key: 'theme',
    children: [
      {
        label: '跟随系统',
        key: 0,
        props: { onClick: () => changeTheme('system') },
        icon: renderIcon(AudioConsole)
      },
      {
        label: '浅色',
        key: 1,
        props: { onClick: () => changeTheme('light') },
        icon: renderIcon(Sun)
      },
      {
        label: '深色',
        key: 2,
        props: { onClick: () => changeTheme('dark') },
        icon: renderIcon(Moon)
      }
    ]
  },
  {
    label: '退出登录',
    key: 'exit',
    props: {
      onClick: () => {
        exit();
      }
    }
  }
];

const exit = function () {
  console.log('即将退出登陆');
  window.localStorage.clear();
  close();
  router.replace('/picnia/login');
  store.commit('clearUser');
};

const close = function () {
  store.commit('toggleSetting', false);
};
</script>

<style lang="scss" scoped></style>
