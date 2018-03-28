import Vue from 'vue';
import * as types from './mutations_type';

export const state = {
  loading: false,
  token: '',
  lang: 'en',
};

export const actions = {
  // loading 特效
  toggleLodding({ commit }, isLoading) {
    commit(types.LOADING, isLoading);
  },

  // Login
  actionLogin({ commit }, { email, password }) {
    console.log('1. actionLogin');
    commit(types.LOADING, true);

    // 使用 Promise 包裝 API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'lll@lll.lll' && password === '123') {
          console.log('2. Promise resolve');
          commit(types.TOKEN, '3345678');
          commit(types.LOADING, false);
          resolve();
        } else {
          commit(types.LOADING, false);
          reject();
        }
      }, 1500);
    });
  },

  setLanguage({ commit }, lang) {
    commit(types.LANGUAGE, lang);
  },
};

export const mutations = {
  [types.LOADING](state, isLoading) {
    state.loading = isLoading;
  },

  [types.TOKEN](state, token) {
    state.token = token;
  },

  [types.LANGUAGE](state, setlang) {
    state.lang = setlang;
    // 設定 Vue config 將會改變 i18n 使用的語言包而更改語系!
    Vue.config.lang = state.lang;
  },
};
