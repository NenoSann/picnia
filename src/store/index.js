import { createStore } from 'vuex';
import { user } from './user/index';
import { post } from './post/index';
import { comment } from './comment';
import { config } from './config/index';

export const store = createStore({
  modules: {
    user,
    post,
    comment,
    config
  },
  state() {
    return {
      isLoading: false,
      loginSuccess: false,
      isSetting: false,
      isAvatar: false
    };
  },
  mutations: {
    toggleLoading(state) {
      state.isLoading = !state.isLoading;
    },
    toggleLogin(state) {
      state.loginSuccess = !state.loginSuccess;
    },
    toggleSetting(state, status) {
      state.isSetting = status;
    },
    clearUser(state) {
      state.user.user = {};
    },
    toggleAvatarCropper(state, status) {
      state.isAvatar = status;
    }
  },
  actions: {}
});
