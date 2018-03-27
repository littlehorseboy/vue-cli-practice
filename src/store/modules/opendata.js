// root types
import * as rootypes from '../mutations_type';

const types = {
  OPEN_1999: 'open/OPEN_1999',
};

const state = {
  opendata: [],
};

const getters = {
  getOpen1999: state => state.opendata,
};

// actions 也是以 Object 形式建構
const actions = {
  open1999({ commit }) {
    // 啟動 Loading
    commit(rootypes.LOADING, true);

    const httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      commit(rootypes.LOADING, false);
      return false;
    }
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          const data = JSON.parse(httpRequest.responseText);
          // 把 json 傳給 mutation
          commit(types.OPEN_1999, data);
          // 關閉 loading
          commit(rootypes.LOADING, false);
        } else {
          console.error('There was a problem with the request.');
          commit(rootypes.LOADING, false);
        }
      } else {
        commit(rootypes.LOADING, false);
      }
    };
    httpRequest.open('GET', 'http://work1999.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery');
    httpRequest.send();
  },
};

// mutations 變動
const mutations = {
  // 新增
  [types.OPEN_1999](state, data) {
    state.opendata = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
