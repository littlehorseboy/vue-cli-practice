<template>
  <div>
    <div class="container">
      <!-- <h2>count: <span>{{ count }}</span></h2> -->
      <!-- <button @click="increase"> + </button>
      <button @click="decrease"> - </button> -->
      <h2 style="color: red;">actionCount: <span>{{ actionCount }}</span></h2>

      Set Number:
      <input type="number" v-model.number="num">

      <button @click="actionIncrease(num ? num : 0)"> +{{ num }}</button>
      <button @click="actionDecrease(num ? num : 0)"> -{{ num }}</button>

      <button @click="actionCountReset">歸零</button>
    </div>
  </div>
</template>

<script>
// 引用 vuex
// mapActions 在 computed 中使用, 提取 action 函式的方法, 使用函式名稱
// mapGetters 在 methods 中使用, 提取 getter 函式的方法, 可以利用物件 key: value
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'count',
  data() {
    return {
      num: 1,
    };
  },
  computed: {
    // ...
    ...mapGetters({
      //  getCount return value 將會存在別名為 count 的 data 上
      actionCount: 'getCount',
    }),
    // numToNumber() { // v-model 在 input 改變時 會變成 string 一定得要自己轉型?
    //   return Number(this.num);
    // },
  },
  methods: {
    // increase() {
    //   this.actionCount += 1;
    // },
    // decrease() {
    //   this.actionCount -= 1;
    // },
    ...mapActions([
      'actionIncrease',
      'actionDecrease',
      'actionCountReset',
    ]),
    // 其他 method call action 的方法
    callAction() {
      // this.actionIncrease();
    },
  },
  watch: {
    num(val) {
      console.log(val);
      console.log(typeof val);
    },
  },
};
</script>
