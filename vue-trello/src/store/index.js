import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

//localStorage에서 token정보를 읽어와 로그인하게 해주는 로직
const { token } = localStorage;
store.commit("LOGIN", token);

export default store;
