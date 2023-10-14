<template>
    <div class="btn-section">
        <div class="btn" @click="$emit('btnLikeOrSave', 'like')">
            <TheIcon icon="like" :like="isLike" stroke="#ed5b51"></TheIcon>
            <p class="count">{{ like }}</p>
        </div>
        <div class="btn">
            <TheIcon icon="comment" :animatable=false></TheIcon>
            <p class="count">{{ comments }}</p>
        </div>
        <div class="btn" @click="$emit('btnLikeOrSave', 'save')">
            <TheIcon icon="favorite" :save="isSave" stroke="#f7bf45"></TheIcon>
            <p class="count">{{ save }}</p>
        </div>
    </div>
</template>

<script setup>
import TheIcon from './TheIcon.vue';
import { computed, ref } from 'vue';
const active = ref(false);
defineEmits(['btnLikeOrSave']);
const props = defineProps({
    scale: {
        type: Number,
        default: 1,
    },
    textTransform: {
        type: Number,
        default: 0,
    },
    like: {
        type: Number,
        default: 0,
    },
    comments: {
        type: Number,
        default: 0
    },
    save: {
        type: Number,
        default: 0
    },
    isLike: {
        type: Boolean,
        default: false
    },
    isSave: {
        type: Boolean,
        default: false
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
            overflow: visible;
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