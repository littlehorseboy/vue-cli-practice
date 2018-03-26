/*
  這邊可以改為用 types 物件取代 matutions_type.js (繼續用也可以)
  然後在前面加上模組名稱作為前綴，用來避免與其他模組重複。
  因為 action、mutation、和 getter 依然是註冊在全域的命名空間
*/
const types = {
  CREATE_TODO: 'todo/CREATE_TODO',
  TOGGLE_TODO: 'todo/TOGGLE_TODO',
  DELETE_TODO: 'todo/DELETE_TODO',
  UPDATE_TODO: 'todo/UPDATE_TODO',
};

// count state 必須是 Object
const state = {
  todos: [
    { key: 0, content: 'vue.js 2.0', done: true },
    { key: 1, content: 'vuex 2.0', done: false },
    { key: 2, content: 'vue-router 2.0', done: false },
    { key: 3, content: 'vue-resource 2.0', done: false },
    { key: 4, content: 'webpack', done: false },
  ],
};

// getters 整理到這邊直接返回 count 內容
const getters = {
  getDone(state) {
    return state.todos.filter((item) => {
      return item.done;
    });
  },
  getTodo(state) {
    return state.todos.filter((item) => {
      return !item.done;
    });
  },
};

// actions 也是以 Object 形式建構
const actions = {
  addTodo({ commit }, newTodo) {
    commit(types.CREATE_TODO, newTodo);
  },
  toggleTodo({ commit }, obj) {
    commit(types.TOGGLE_TODO, obj);
  },
  deleteTodo({ commit }, key) {
    commit(types.DELETE_TODO, key);
  },
  updateTodo({ commit }, obj) {
    commit(types.UPDATE_TODO, obj);
  },
};

// 流水 key
let todoKey = state.todos.length;

// mutations 變動
const mutations = {
  // 新增
  [types.CREATE_TODO](state, newTodo) {
    state.todos.push({
      key: todoKey,
      content: newTodo,
      done: false,
    });

    todoKey += 1;
  },

  // 改變狀態
  [types.TOGGLE_TODO](state, obj) {
    for (let i in state.todos) {
      const item = state.todos[i];
      if (item.key === obj.key) {
        item.done = obj.checked;
        console.log('TOGGLE_TODO:', item.content, '| obj.checked?', obj.checked, '| done?', item.done);
        break;
      }
    }
  },

  // 刪除
  [types.DELETE_TODO](state, key) {
    for (let i in state.todos) {
      const item = state.todos[i];
      if (item.key === key) {
        console.log('DELETE_TODO:', item.content, ', index?', i);
        // 刪除，單純將 todo Array 從 splice 出去。
        state.todos.splice(i, 1);
        break;
      }
    }
  },
  [types.UPDATE_TODO](state, obj) {
    for (let i in state.todos) {
      const item = state.todos[i];
      if (item.key === obj.key) {
        console.log('UPDATE_TODO:', item.content, ' to →', obj.update);
        state.todos[i].content = obj.update;
        break;
      }
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
