<template>
    <div class="post-list">
        <slot></slot>
    </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    colunm: {
        type: Number,
        default: 2,
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

@media (max-width:1200px) {
    .post-list {
        width: 100%;
        padding-top: 60px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2vw;
    }
}

@media (max-width: 820px) {
    .post-list {
        grid-template-columns: 1fr;
    }
}
</style>