<template>
    <Transition name="modal">
        <div class="modal-mask" v-if="props.show">
            <div class="modal">
                <div class="close-btn" @click="$emit('close')">
                    <svg width="18px" height="18px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                        stroke="#383838">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M3 21.32L21 3.32001" stroke="#383838" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path d="M3 3.32001L21 21.32" stroke="#383838" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </g>
                    </svg>
                </div>
                <slot></slot>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    WidthPx: {
        type: Number,
        default: 400
    },
    HeightPx: {
        type: Number,
        default: 560
    }
})
const computedCss = computed(() => {
    return {
        width: `${props.WidthPx}px`,
        height: `${props.HeightPx}px`
    }
})
</script>

<style scoped>
.modal-mask {
    position: fixed;
    z-index: 4;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: rgba(0, 0, 0, 0.5); */
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;
}

.modal {
    position: relative;
    width: v-bind(computedCss.width);
    max-width: v-bind(computedCss.height);
}

.close-btn {
    cursor: pointer;
    position: absolute;
    height: 18px;
    width: 18px;
    top: 18px;
    right: 18px;
}

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>