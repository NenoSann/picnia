<template>
    <div class="loading-overlay" v-if="isLoding">
        <div class="loading-spinner"></div>
        加载中，请稍后
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue'
const store = useStore();
const isLoding = computed(() => store.state.isLoading);

</script>

<style lang="scss" scoped>
.loading-overlay {
    z-index: 99999;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.5);
    color: #555;
    font-size: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

.loading-spinner {
    margin-bottom: 20px;
    width: 20vw;
    height: 20vw;
    border: 3px solid #ccc;
    border-top-color: #555;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>