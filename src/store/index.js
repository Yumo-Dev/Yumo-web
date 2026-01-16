import {
  createStore
} from 'vuex'

export default createStore({
  state: () => ({
    smooth: "",
    account: localStorage.getItem("Account-YUMO") || "",
    balance: "",
    i18nLocal: "",
  }),
  getters: {
    smooth: (state) => state.smooth,
    account: (state) => state.account,
    balance: (state) => state.balance,
    i18nLocal: (state) => state.i18nLocal,
  },
  mutations: {
    setSmooth(state, data) {
      state.smooth = data;
    },
    setAccount(state, data) {
      state.account = data;
    },
    setBalance(state, data) {
      state.balance = data;
    },
    setI18nLocal(state, data) {
      state.i18nLocal = data;
    },
  },
  actions: {},
  modules: {},
})