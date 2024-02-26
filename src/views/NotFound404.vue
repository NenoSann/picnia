<template>
    <div class="main flex-center">
        <n-result status="404" size="huge" title="404 资源不存在" description="你似乎来到了没人来过的地方">
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
}

.button {
    padding-left: 16px;
    padding-right: 16px;
    background-color: $primary-color;
}
</style>