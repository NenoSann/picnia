import { computed, watch, ref } from 'vue'
// eslint-disable-next-line no-unused-vars
import { GlobalThemeOverrides } from 'naive-ui';

const html = document.querySelector('html');
const htmlCssVar = getComputedStyle(html);
const cssColorPrimaryBackground = ref(htmlCssVar.getPropertyValue('--color-primary-background'));

watch(cssColorPrimaryBackground, () => {
    console.log('css changed');
})

/**
 * js文件下使用jsdoc为变量增加类型标注
 * @type {GlobalThemeOverrides}
 */
const themeOverrides = computed(() => {
    console.log('css changed', htmlCssVar.getPropertyValue('--color-primary-background'))
    return {
        Button: cssColorPrimaryBackground
    }
})

export { themeOverrides };