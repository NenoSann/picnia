<template>
    <div class="btn-container">
        <div>
            <slot></slot>

        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    widthString: {
        type: String,
        default: '32px'
    },
    heightString: {
        type: String,
        default: '16px'
    },
    textSize: {
        type: String,
        default: '1rem'
    }
})
</script>

<style lang="scss" scoped>
.btn-container {
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    height: v-bind(heightString);
    width: v-bind(widthString);
    font-size: v-bind(textSize);
    line-height: 1;
}
</style>