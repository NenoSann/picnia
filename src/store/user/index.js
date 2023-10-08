import { getUser } from "../../apis/auth"
import { register } from "../../apis/auth"

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
        }
    },
};