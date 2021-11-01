import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

export default store;
