import { getUser } from "../../apis/auth"
import { userRegister } from "../../apis/auth"

export const user = {
    state() {
        return {
            user: getUser() || {},
        };
    },
    mutation: {
        setUser(state, user) {
            state.user = user;
        },
    },
    actions: {
        async registerUser({ commit }, { email, username, password }) {
            const user = await userRegister(email, username, password);
            commit("setUser", user);
        },
    },
};