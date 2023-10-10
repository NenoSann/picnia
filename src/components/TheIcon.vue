<template>
    <svg>
        <use :href="`${sprite}#icon-${icon}`"></use>
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
</style>