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
});
</script>

<style lang="scss" scoped>
svg {
    height: 40px;
    width: 40px;
    transition: stroke 0.3 ease-in-out;
}

use {
    transition: stroke 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        stroke: v-bind(stroke);
    }
}
</style>