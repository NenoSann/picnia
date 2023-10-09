import { getUser } from "../../apis/auth"
import { register, login } from "../../apis/auth"

export const user = {
    state() {
        return {
            user: getUser() || {},
        };
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
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
                console.log('user before login: ', getUser())
                commit('toggleLogin');
                const res = await login(email, password);
                commit('setUser', getUser());
                console.log('user after login: ', getUser())
                return res;
            } finally {
                commit('toggleLogin')
            }
        }
    },
};