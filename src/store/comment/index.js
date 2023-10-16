import { pullComments } from "../../apis/pullComments";
import { createComment } from "../../apis/createComment";
export const comment = {
    state() {
        comments: []
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
        pushComment(state, comment) {
            state.comments.push(comment);
        }
    },
    actions: {
        /**
         * @NenoSann
         * @description: pass in postId and send request to server for 
         * the comments of this post
         * @param {String} postId 
         */
        async pullComment({ state, commit, rootState }, postId) {
            const newCommentsArray = await pullComments(postId);
            console.log('new Comments Array: ', newCommentsArray)
            commit('replaceComments', newCommentsArray);
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
                sender: commentBody.sender,
                reception: commentBody.reception,
                content: commentBody.content,
                data: Date.now().toLocaleString()
            })
        },
    },
}
