<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2>{{ hello }}</h2>

    <h2>{{ hello + 'and Ironman 2018' }}</h2>

    <input v-model="hello">

    <input type="checkbox" v-model="toggle">
    {{ toggle }}

    <div class="container">
      <h2>count: <span>{{ count }}</span></h2>
      <button @click="increase"> + </button>
      <button @click="decrease"> - </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'llll標題',
      hello: 'Hello 你好嗎? ',
      toggle: false,
      count: 0,
    };
  },
  methods: {
    increase() {
      this.count += 1;
    },
    decrease() {
      this.count -= 1;
    },
  },
};
</script>
