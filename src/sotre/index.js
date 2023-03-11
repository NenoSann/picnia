import { createStore } from "vuex";
import { user } from "./user/index";
import { post } from "./post/index";
import { comment } from "./comment";
export const store = createStore({
    modules: {
        user,
        post,
        comment,
    },
    state() { },
    mutation: {},
    actions: {},
})