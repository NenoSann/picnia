<template>
    <svg>
        <use :href="`${sprite}#icon-${icon}`"
            :class="{ being_like: like, being_save: save, isActive: animatable && animatinoActive }"
            @click="animatinoActive = !animatinoActive"></use>
    </svg>
</template>

<script setup>
import { ref } from 'vue'
import sprite from "../assets/icons/sprite.svg";
const animatinoActive = ref(props.like || props.save);
const props = defineProps({
    icon: String,
    fill: String,
    stroke: String,
    height: {
        type: String,
        default: '40px',
    },
    width: {
        type: String,
        default: '40px'
    },
    like: {
        type: Boolean,
        default: false
    },
    save: {
        type: Boolean,
        default: false
    },
    animatable: {
        type: Boolean,
        default: true
    }
});
</script>

<style lang="scss" scoped>
svg {
    height: v-bind(height);
    width: v-bind(width);
    transition: stroke 0.3 ease-in-out;
}

use {
    transition: stroke 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        stroke: v-bind(stroke);
    }

    &:active {
        stroke: v-bind(stroke);
    }

    &:focus {
        stroke: v-bind(stroke);
    }
}

.being_like {
    transition: all 0.2s ease-in-out;
    stroke: #ed5b51;
}

.isActive {
    transform-origin: center;
    animation: likeAnimation 0.4s 1 ease-in-out alternate-reverse;
}

.being_save {
    transition: all 0.2s ease-in-out;
    stroke: #f7bf45;
}

@keyframes likeAnimation {
    0% {
        scale: 1;
    }

    70% {
        scale: 1.4;
    }

    100% {
        scale: 1;
    }
}
</style>