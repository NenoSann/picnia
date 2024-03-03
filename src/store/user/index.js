import { getUser, saveUser } from "../../apis/auth"
import { register, login } from "../../apis/auth"
import { changeAvatar } from "../../apis/changeAvatar";
export const user = {
    state() {
        return {
            user: getUser() || {},
        };
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            saveUser(user);
        }
    },
    actions: {
        async registerUser({ commit }, { email, username, password }) {
            try {
                commit('toggleLoading');
                const { user, message } = await register(email, username, password);
                commit("setUser", user);
                return message;
            }
            finally {
                commit('toggleLoading');
            }
        },
        async loginUser({ commit }, { email, password }) {
            try {
                commit('toggleLogin');
                const res = await login(email, password);
                commit('setUser', getUser());
                return res;
            } finally {
                commit('toggleLogin')
            }
        },
        async changeAvatar({ commit, state }, { avatar, imgType, blob }) {
            commit('toggleLoading');
            // create new userData from previous
            const userData = state.user;
            changeAvatar(JSON.stringify({
                userName: state.user.userName,
                email: state.user.email,
                imgType
            }), blob).then(() => {
                userData.avatar = avatar;
                commit('setUser', userData);
                commit('toggleLoading');
                commit('toggleAvatarCropper', false);
            });
        }
    },
};