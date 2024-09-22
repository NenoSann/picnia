<template>
    <div class="main flex-center">
        <n-result class="description" status="404" size="huge" title="404 资源不存在" description="生活总归带点荒谬">
            <template #footer>
                <n-button class="button" type="info" @click="redirectToHomepage">
                    带我回家
                </n-button>
            </template>
        </n-result>
    </div>
</template>

<script setup>
import { NResult, NButton } from 'naive-ui';
import { useRouter } from 'vue-router';
const router = useRouter();
function redirectToHomepage() {
    router.replace('/picnia/');
}
</script>

<style lang="scss" scoped>
@import '../assets/main.scss';

.main {
    width: 100%;
    margin-top: -24vh;
    background-color: var(--color-primary-background);
}

.button {
    padding-left: 16px;
    padding-right: 16px;
    background-color: var(--color-primary);
}

// make result description color variable
:deep(.description .n-result-header__title) {
    color: var(--color-primary-label);
}
</style>