<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2>{{ hello }}</h2>

    <h2>{{ hello + 'and Ironman 2018' }}</h2>

    <input v-model="hello">

    <input type="checkbox" v-model="toggle">
    {{ toggle }}

  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: '大標題',
      hello: 'Hello 你好嗎? ',
      toggle: false,
    };
  },
};
</script>
