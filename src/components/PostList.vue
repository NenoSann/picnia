<template>
    <div class="post-list">
        <slot></slot>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.post-list {
    padding-top: 60px;
    display: grid;
    grid-template-columns: 600px 600px;
    gap: 50px;
}
</style>