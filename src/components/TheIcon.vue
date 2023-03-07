<template>
    <svg>
        <use :href="`${sprite}#icon-${icon}`"></use>
    </svg>
</template>

<script setup>
import sprite from "../assets/icons/sprite.svg";

defineProps({
    icon: String,
});
</script>

<style lang="scss" scoped>
svg {
    height: 40px;
    width: 40px;

}
</style>