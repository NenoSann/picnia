import { randomPullPost } from "../../apis/pullPost";
export const post = {
    state() {
        return {
            post: []
        }
    },
    mutations: {
        pushPost(state, post) {
            state.post = post;
        }
    },
    actions: {
        async pullPost({ commit }) {
            const newPost = await randomPullPost();
            commit('pushPost', newPost);
        }
    },
}
