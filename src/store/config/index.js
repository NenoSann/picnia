export const config = {
    state() {
        return {
            theme: document.querySelector('html').dataset['theme']
        }
    }
}