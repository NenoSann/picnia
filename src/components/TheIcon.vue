<template>
    <svg>
        <use :href="`${sprite}#icon-${icon}`" :class="{ being_like: like, being_save: save }"></use>
    </svg>
</template>

<script setup>
import sprite from "../assets/icons/sprite.svg";

defineProps({
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

.being_save {
    transition: all 0.2s ease-in-out;
    stroke: #f7bf45;
}
</style>