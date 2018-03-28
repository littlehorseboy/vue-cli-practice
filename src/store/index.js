import Vue from 'vue';
import Vuex from 'vuex';
// root
import * as getters from './getters';
import {state, actions, mutations} from './root';
// modules
import count from './modules/count';
import todo from './modules/todo';
import shop from './modules/shop';
import opendata from './modules/opendata';

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  state,
  actions,
  mutations,
  modules: {
    count,
    todo,
    shop,
    opendata,
  },
  strict: true,
});
