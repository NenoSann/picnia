<template>
    <n-icon :size="size">
        <slot></slot>
    </n-icon>
</template>

<script setup>
import { NIcon } from 'naive-ui';
const props = defineProps({
    size: {
        type: String,
        default: '40'
    }
})
</script>

<style lang="scss"></style>
