import * as types from './mutations_type';

export const state = {
  loading: false,
};

export const action = {
  toggleLodding({ commit }, isLoading) {
    commit(types.LOADING, isLoading);
  },
};
