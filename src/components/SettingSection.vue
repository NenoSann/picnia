<template>
    <div class="main" @click="$emit('settingSectionActive', type)">
        <slot class="icon"></slot>
        <div class="setting-text">{{ props.settingText }}</div>
        <svg class="arrow-icon" width="32px" height="32px" viewBox="-2.4 -2.4 28.80 28.80" fill="none"
            xmlns="http://www.w3.org/2000/svg" stroke="#bababa" transform="rotate(0)matrix(1, 0, 0, -1, 0, 0)">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
                stroke-width="0.43200000000000005"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M10 7L15 12L10 17" stroke="#bababa" stroke-width="1.056" stroke-linecap="round"
                    stroke-linejoin="round"></path>
            </g>
        </svg>
    </div>
</template>

<script setup>
defineEmits(['settingSectionActive'])
const props = defineProps({
    settingText: {
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