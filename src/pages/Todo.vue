<template>
  <div class="container">
    <h1>vue & vuex Todo List</h1>
    <hr>
    <div class="row">
      <div class="input-group col-md-4">
        <!--
        加一個 input 用來新增 todo
        希望按 enter 也可以增加 todo
        在 Vue 裡面要捕捉 "按鍵事件" 可以使用 @keyup.[鍵位碼]
        加入 @keyup.enter(修飾) 也等於 @keyup.13
      -->
      <input class="form-control" placeholder="add Todo..." v-model="newTodo" @keyup.enter="actionAddTodo">
      <button class="btn btn-success" @click="actionAddTodo">
        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
      </button>
      </div>
    </div><!-- end row -->
    <div class="row">
      <div class="col-md-6">
        <h2>Todo List:</h2>
        <!-- <li v-for="(item) in todoList" :key="item.key">
          <label>
            !--
              改變狀態
              套用 vuex 因此不能使用 v-model 做雙向綁定，會報錯誤
              1. 將 list 的 value bind 到 input checked 屬性上，改變樣式。
              2. onchange 事件發出 action 帶入 key
            --
             <input type="checkbox" :checked="item.done" @change="toggleTodo(item.key)">
             {{ item.content }}
          </label>
          !--
            刪除按鈕
            onclick 事件發出 action 帶入 key
          --
          <button class="btn btn-xs btn-danger" @click="deleteTodo(item.key)">
            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
          </button>
        </li> -->
        <ol>
          <todoItem v-for="item in todoList" :item="item" :key="item.key"></todoItem>
        </ol>
      </div>

      <div class="col-md-6">
        <h2>Done List:</h2>
        <!-- <li v-for="(item) in doneList" :key="item.key">
          <label>
             <input type="checkbox" :checked="item.done" @change="toggleTodo(item.key)">
             {{ item.content }}
          </label>
          <button class="btn btn-xs btn-danger" @click="deleteTodo(item.key)">
            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
          </button>
        </li> -->
        <ol>
          <li v-for="item in doneList" :key="item.key">
            <label>
              <!-- <input type="checkbox" :checked="item.done" @change="toggleTodo(item.key)">
              {{ item.content }} -->
              <custom-checkbox :item="item" @toggleTodo="toggleTodo"></custom-checkbox>
            </label>
            <button class="btn btn-xs btn-danger" @click="deleteTodo(item.key)">
              <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
            </button>
          </li>
        </ol>
      </div>
    </div><!-- end row -->

  </div>
</template>

<script>
// 引用 vuex
// mapActions 在 computed 中使用, 提取 action 函式的方法, 使用函式名稱
// mapGetters 在 methods 中使用, 提取 getter 函式的方法, 可以利用物件 key: value
import { mapGetters, mapActions } from 'vuex';
import todoItem from '../components/TodoItem';
import customCheckbox from '../components/customCheckbox';

export default {
  components: {
    todoItem,
    customCheckbox,
  },
  data() {
    return {
      newTodo: '',
    }
  },
  computed: {
    // ...
    ...mapGetters({
      //  getTodo return value 將會存在別名為 todos 的 data 上
      todoList: 'getTodo',
      doneList: 'getDone',
    }),
  },
  methods: {
    ...mapActions([
      // 'addTodo', // 方法一、先引入
      'toggleTodo',
      'deleteTodo',
    ]),
    actionAddTodo () {
      // 方法一、使用
      // this.addTodo(this.newTodo);

      // 方法二，不需要先引入 action 可以直接呼叫（調用）。
      // 使用 this.$store.dispatch( action(String), value );
      this.$store.dispatch('addTodo', this.newTodo);

      this.newTodo = '';
    },
  }
};
</script>
