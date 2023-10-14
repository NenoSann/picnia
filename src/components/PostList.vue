<template>
    <div class="post-list">
        <TransitionGroup name="postGroup">
            <div v-for=" post in posts" :key="post.postID">
                <PostTab :postData="post" :key="post.postID"></PostTab>
            </div>
        </TransitionGroup>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import PostTab from './PostTab.vue';
const props = defineProps({
    colunm: {
        type: Number,
        default: 2,
    },
    // posts is a MapIterator from post state in vuex,
    // the value is Map.values();
    posts: {
        type: Object,
    }
})

let templateColumn = computed(() => {
    let res = [];
    for (let count = 0; count < props.colunm; count++) {
        res.push('1fr');
    }
    res = res.join(' ');
    return res;
})
</script>

<style lang="scss" scoped>
.post-list {
    width: 100%;
    margin: 0 10vw;
    padding-top: 60px;
    display: grid;
    grid-template-columns: v-bind(templateColumn);
    gap: 2vw;
}

@media (max-width:1440px) {
    .post-list {
        width: 100%;
        padding-top: 60px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2vw;
    }
}

// @media (max-width:2560px) {
//     .post-list {
//         width: 100%;
//         padding-top: 60px;
//         display: grid;
//         grid-template-columns: 1fr 1fr 1fr;
//         gap: 2vw;
//     }
// }

@media (max-width: 820px) {
    .post-list {
        grid-template-columns: 1fr;
    }
}

.postGroup-move,
/* 对移动中的元素应用的过渡 */
.postGroup-enter-active,
.postGroup-leave-active {
    transition: all 1s ease;
}

.postGroup-enter-from,
.postGroup-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.postGroup-leave-active {
    position: absolute;
}
</style>