<template>
  <li>
    <div v-if="!updateMode">
      <!-- <label>
        <input type="checkbox" :checked="item.done" @change="toggleTodo(item.key)">
        {{ item.content }}
      </label> -->
      <custom-checkbox :item="item" @toggleTodo="toggleTodo"></custom-checkbox>
      <!-- 切換 修改 按鈕 -->
      <button class="btn btn-xs btn-primary" @click="showEditMode">
        <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
      </button>
      <button class="btn btn-xs btn-danger" @click="deleteTodo(item.key)">
        <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
      </button>
    </div>

    <div v-if="updateMode">
      <input class="edit-input" placeholder="edit Todo.."
        v-focus="updateMode" :value="item.content"
        @keyup.enter="actionEdit" @blur="cancelEdit" @keyup.esc="cancelEdit">
    </div>
  </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import customCheckbox from './customCheckbox';

export default {
  components: {
   customCheckbox
  },
  props: {
    item: Object,
  },
  data() {
    return {
      updateMode: false,
    };
  },
  /*
    此 directives 是參考作者的 code
    主要功能是切換模式之後 focus input 功能
    value 為 updateMode
    $nextTick 功能是：上個動作完成後，才執行裡面包含的程式。
    之後會寫一篇關於自訂：Vue Directive
  */
  directives: {
    focus (el, {value}, {context}) {
      if (value) {
        context.$nextTick(() => {
          el.focus();
        });
      }
    },
  },
  methods: {
    ...mapActions([
      'toggleTodo',
      'deleteTodo',
      'updateTodo',
    ]),
    showEditMode() {
      this.updateMode = true;
    },
    actionEdit(e) {
      const userChange = e.target.value.trim();
      console.log('userChange', this.item.key, userChange);
      this.updateTodo({
        key: this.item.key,
        update: userChange,
      });
      this.updateMode = false;
    },
    cancelEdit(e) {
      e.target.value = this.item.title;
      this.updateMode = false;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
