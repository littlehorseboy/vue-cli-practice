import Vue from 'vue';
import * as types from './mutations_type';

export const state = {
  count: 5,
};

export const mutations = {
  // action 發出 commit 會對應到 mutation 使用的是 Object key 方式
  [types.INCREASE](state, num) {
    // 在 mutation 改變 state (只有 mutation 可以改變!)
    state.count += num;
    console.log(`INCREASE ${num} state? ${state.count}`);
  },
  [types.DECREASE](state, num) {
    state.count -= num;
    console.log(`DECREASE ${num} state? ${state.count}`);
  },
  [types.COUNT_RESET](state) {
    state.count = 0;
    console.log(`COUNT_RESET - state? ${state.count}`);
  },
};
