/**
 * @description set the theme mode in the html, set to browser preference
 *              if param is undefined
 * @param {'light' | 'dark' | undefined} mode 
 */
function setTheme(mode) {
    const darkPrefer = window.matchMedia("(prefres-color-scheme: dark)");
    const dataset = document.documentElement.dataset;
    if (!mode) {
        dataset['theme'] = darkPrefer ? 'dark' : 'light';
    } else {
        dataset['theme'] = mode;
    }
}

export { setTheme }

