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

        /**
         * 在用户注册前将信息发往服务器,查看注册信息是否正确
         * 例如:查看用户名和邮箱是否重复
         * @param {*} param0 
         * @param {*} param1 
         */
        async checkRegisterInfo({ _commit }, { email, username, password }) {
            try {

            } catch (err) {

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