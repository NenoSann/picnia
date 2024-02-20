import { randomPullPost, pullUserPost } from "../../apis/pullPost";

export const post = {
    state() {
        return {
            post: new Map()
        }
    },
    mutations: {
        /**
         * 
         * @param {*} state 
         * @param {Array} post
         */
        pushPost(state, post) {
            for (let i of post) {
                state.post.set(i.postID, i);
            }
        },
        replaceSet(state, post) {
            const newSet = new Map();
            for (let i of post) {
                newSet.set(i.postID, i);
            }
            state.post = newSet;
        },
        pushSinglePost(state, post) {
            state.post.set(post.postID, post);
        },
        toggleLike(state, postId) {
            const targetPost = state.post.get(postId);
            // if post is liked. then post.likes -1, else +1
            targetPost.isLiked ? targetPost.likes = targetPost.likes - 1 : targetPost.likes = targetPost.likes + 1;
            targetPost.isLiked = !state.post.get(postId).isLiked;
        },
        toggleSave(state, postId) {
            const targetPost = state.post.get(postId)
            // if post is saved. then post.saves -1, else +1
            targetPost.isSaved ? targetPost.saves = targetPost.saves - 1 : targetPost.saves = targetPost.saves + 1;
            targetPost.isSaved = !state.post.get(postId).isSaved;
        },
        setCommentCount(state, { postId, count }) {
            console.log('set comment count', count)
            state.post.get(postId).commentCounts = state.post.get(postId).commentCounts + count;
        }
    },
    actions: {
        async pullPost({ commit, rootState }) {
            if (rootState.user?.user?.userName !== undefined) {
                try {
                    commit('toggleLoading');
                    const newPost = await randomPullPost(rootState.user.user.userName);
                    commit('pushPost', newPost);
                } catch (err) {
                    console.log('debug: catch error');
                } finally {
                    commit('toggleLoading');
                }
            }
        },
        async pullUserPost({ commit, rootState }, requestBody) {
            const newPost = await pullUserPost(requestBody);
            commit('replaceSet', newPost.post);
        },
        async addPostLocal({ commit, state, rootState }, data) {
            // ES6 decouple object
            const { date, content, comments, location, postId } = data;
            console.log('addPostLocal / data: ', data);
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
                postImage: URL.createObjectURL(image),
                postID: postId,
                isSave: false,
                isLike: false,
            };
            commit('pushSinglePost', newPost);
        }
    },
}
