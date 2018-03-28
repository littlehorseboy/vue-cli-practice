import * as types from './mutations_type';
import { resolve } from 'dns';

export const state = {
  loading: false,
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
          commit(types.LOADING, false);
          resolve();
        } else {
          commit(types.LOADING, false);
          reject();
        }
      }, 1500);
    });
  },
};

export const mutations = {
  [types.LOADING](state, isLoading) {
    state.loading = isLoading;
  },
};
