<template>
    <div class="btn-section">
        <div class="btn">
            <TheIcon icon="like"></TheIcon>
            <p class="count">1m</p>
        </div>
        <div class="btn">
            <TheIcon icon="comment"></TheIcon>
            <p class="count">1m</p>
        </div>
        <div class="btn">
            <TheIcon icon="favorite"></TheIcon>
            <p class="count">1m</p>
        </div>
    </div>
</template>

<script setup>
import TheIcon from './TheIcon.vue';
import { computed } from 'vue';
const props = defineProps({
    scale: {
        type: Number,
        default: 1,
    },
    textTransform: {
        type: Number,
        default: 0,
    }
})
let scale = computed(() => {
    return props.scale
})
let transform = computed(() => {
    return props.textTransform + "px";
})
</script>

<style lang="scss" scoped>
.btn-section {
    display: flex;
    flex-direction: row;
    // margin-left: auto;
    gap: 10px;

    .btn {
        svg {
            scale: v-bind(scale);
            width: 32px;
            height: 32px;
            stroke: black;
            fill: transparent;
        }
    }

    p {
        transform: translateY(v-bind(transform));
        scale: v-bind(scale);
        font-size: 1rem;
        text-align: center;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
}
</style>