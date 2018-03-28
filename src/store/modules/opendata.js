// root types
import * as rootypes from '../mutations_type';

const types = {
  OPEN_1999: 'open/OPEN_1999',
  OPENDATA_SEARCH_REGION: 'open/OPENDATA_SEARCH_REGION',
  OPENDATA_SEARCH_KEYWORD: 'open/OPENDATA_SEARCH_KEYWORD',
};

const state = {
  opendata: [],
  search: {
    region: 'all',
    keyword: '',
  },
};

const getters = {
  getOpen1999: (state) => {
    let _opendata = state.opendata;

    if (state.search.region !== 'all') {
      _opendata = _opendata.filter(item => (item.ZipName_ === state.search.region));
    }
    if (state.search.keyword !== '') {
      _opendata = _opendata.filter(item => (JSON.stringify(item).indexOf(state.search.keyword) !== -1));
    }

    return _opendata;
  },
  getRegionOption: (state) => {
    let regionOption = [];
    state.opendata.forEach((obj) => {
      if (obj.ZipName_) {
        regionOption.push(obj.ZipName_);
      }
    });

    const unique = regionOption.filter((value, index, array) => array.indexOf(value) === index);
    return unique;
  },
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
      }
      // else {
      //   commit(rootypes.LOADING, false);
      // }
    };
    httpRequest.open('GET', 'http://work1999.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery');
    httpRequest.send();
  },

  opendataSearchRegion({ commit }, region) {
    console.log('opendataSearchRegion', region);
    commit(types.OPENDATA_SEARCH_REGION, region);
  },

  opendataSearchKeyword({ commit }, keyword) {
    commit(types.OPENDATA_SEARCH_KEYWORD, keyword);
  },
};

// mutations 變動
const mutations = {
  // 新增
  [types.OPEN_1999](state, data) {
    state.opendata = data;
  },

  [types.OPENDATA_SEARCH_REGION] (state, region) {
    state.search.region = region;
  },

  [types.OPENDATA_SEARCH_KEYWORD](state, keyword) {
    state.search.keyword = keyword;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
