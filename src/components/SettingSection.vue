<template>
    <div class="main" @click="fn()">
        <slot class="icon"></slot>
        <div class="setting-text">{{ props.Text }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    Text: {
        type: String,
        default: "设置"
    },
    hoverColor: {
        type: String,
        default: "#bababa"
    },
    bg_color: {
        type: String,
        default: "white"
    },
    type: {
        type: String,
        default: 'setting'
    },
    fn: {
        type: Function,
    }
})

</script>

<style lang="scss" scoped>
.main {

    border-radius: 6px;
    margin-top: 8px;
    display: flex;
    align-items: center;
    width: 100%;
    transition: all 0.2s ease-in-out;
    background-color: v-bind(bg_color);
}

.setting-text {
    margin-left: 6px;
}

.main:hover {
    background-color: v-bind(hoverColor);
}

.arrow-icon {
    margin-left: auto;
}
</style>