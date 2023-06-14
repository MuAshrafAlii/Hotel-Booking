import { createStore } from "vuex";

export default createStore({
  state: {
    loading: true,
  },
  getters: {},
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {},
  modules: {},
});
