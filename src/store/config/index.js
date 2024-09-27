const configKey = 'config';
export const config = {
  state() {
    const darkPrefer = window.matchMedia('(prefres-color-scheme: dark)').matches ? 'dark' : 'light';
    const configJSON = localStorage.getItem(configKey)
      ? JSON.parse(localStorage.getItem(configKey))
      : {};
    return {
      theme: configJSON.theme ? configJSON.theme : darkPrefer
    };
  },
  mutations: {
    /**
     * @param {string} mode
     */
    setTheme(state, mode) {
      state.theme = mode;
    }
  },
  actions: {
    saveConfig({ _commit, state }) {
      localStorage.setItem(configKey, JSON.stringify(state));
    },

    /**
     * @description set the theme mode in the html, set to browser preference
     *              if param is undefined
     * @param {'light' | 'dark' | 'system' | undefined} mode
     */
    setTheme({ commit, state, dispatch }, mode) {
      const darkPrefer = window.matchMedia('(prefres-color-scheme: dark)');
      const dataset = document.documentElement.dataset;

      if (mode === undefined) {
        if (state.theme) {
          dataset['theme'] = state.theme;
          dispatch('saveConfig');
          return;
        } else {
          dispatch('setTheme', 'system');
        }
      }

      if (mode === 'system') {
        const theme = darkPrefer.matches ? 'dark' : 'light';
        dataset['theme'] = theme;
        commit('setTheme', theme);
      } else {
        dataset['theme'] = mode;
        commit('setTheme', mode);
      }
      dispatch('saveConfig');
    }
  }
};