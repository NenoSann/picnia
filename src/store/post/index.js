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
        },
        pushSinglePost(state, post) {
            state.post.push(post);
        }
    },
    actions: {
        async pullPost({ commit }) {
            const newPost = await randomPullPost();
            commit('pushPost', newPost);
        },
        async addPostLocal({ commit, state, rootState }, data) {
            // ES6 decouple object
            const { date, content, comments, location } = JSON.parse(data.json);
            const image = data.image;
            const newPost = {
                uploader: {
                    userName: rootState.user.user.userName,
                    email: rootState.user.user.email,
                    avatar: rootState.user.user.avatar
                },
                location: location,
                postTime: date,
                postContent: content,
                likes: 0,
                saves: 0,
                commentsCounts: 0,
                comments,
                postImage: URL.createObjectURL(image)
            };
            commit('pushSinglePost', newPost);
        }
    },
}
