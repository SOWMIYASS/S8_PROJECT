import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let lastTimeout;

export default new Vuex.Store({
  state: {
    snackbar: {
      show: false,
      success:true,
      title:"",
      message: ""
    }
  },
  mutations: {
    showSnackbar(state, payload) {
      state.snackbar.show = true;
      state.snackbar.message = payload.message;
      state.snackbar.title = payload.title;
    },
    hideSnackbar(state) {
      state.snackbar.show = false;
      state.snackbar.success = true;
      state.snackbar.title = '';
      state.snackbar.message = '';
    }
  },
  actions: {
    showSnackbar({ commit }, payload) {
      clearTimeout(lastTimeout);
      commit('showSnackbar', payload);
      lastTimeout = setTimeout(() => {
        commit('hideSnackbar');
      }, 5000);

    }
  },
  modules: {
  }
})
