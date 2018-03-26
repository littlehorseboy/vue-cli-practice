import Vue from 'vue';
import Vuex from 'vuex';
// root
import * as getters from './getters';
// modules
import count from './modules/count';
import todo from './modules/todo';

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  modules: {
    count,
    todo,
  },
  strict: true,
});
