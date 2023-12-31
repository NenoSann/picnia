<template>
    <div class="btn-container">
        <p>{{ text }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    text: String
})
</script>

<style lang="scss" scoped>
.btn-container {
    padding: 0.4rem;
    text-align: center;
    width: 100%;
    background-image: linear-gradient(to right, #00c2ff, #0047ff, );
    border-radius: 6px;
    color: white;
    cursor: pointer;
}
</style>