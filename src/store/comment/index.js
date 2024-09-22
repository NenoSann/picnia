/* eslint-disable no-unused-vars */
import { pullComments } from "../../apis/pullComments";
import { createComment } from "../../apis/createComment";
export const comment = {
    state() {
        return {
            comments: {}
        }
    },
    getters: {
        // return a function to use parameter
        getCommentsByPostId: (state) => (postId) => {
            return state.comments[postId];
        }
    },
    mutations: {
        replaceComments(state, comments) {
            state.comments = comments;
        },
        /**
         * @NenoSann
         * @description push single comment into store,
         * use in action sendComment
         * @param {*} state 
         * @param {Object} comment 
         */
        pushComment(state, { postId, comments }) {
            state.comments[postId] = comments;
        },
        /**
         * 
         * @param {String} postId 
         * @description check wether comments map contains psotId, return true/false
         * @returns {Boolean}
         */
        checkCommentMap(state, postId) {
            return state?.comments[postId] !== undefined;
        }
    },
    actions: {
        /**
         * @NenoSann
         * @description: pass in postId and send request to server for 
         * the comments of this post
         * @param {String} postId 
         */
        async pullComment({ commit, rootState }, postId) {
            const newComments = await pullComments(postId);
            commit('pushComment', {
                postId: newComments.postId,
                comments: newComments.item
            });
        },
        /**
         * @NenoSann
         * @description pass in the comment body and send to server, then save the 
         * comment locally
         * @param {Object} commentBody 
         */
        async sendComment({ state, commit, rootState }, commentBody) {
            // sending the comment
            await createComment(commentBody);
            // optimistic save the comment in local
            commit('pushComment', {
                post: commentBody.postId,
                sender: {
                    avatar: rootState.user.user.avatar,
                    userName: rootState.user.user.userName,
                    userId: rootState.user.user.userId
                },
                reception: commentBody.reception,
                content: commentBody.content,
                data: Date.now().toLocaleString()
            });
            commit('setCommentCount', { postId: commentBody.postId, count: 1 })
        },
    },
}
