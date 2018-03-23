<template>
  <div class="container">
    <h2 v-if="isCelsius">攝氏: {{ celsius }} °C</h2>
    <h2 v-if="!isCelsius">華氏: {{ fahrenheit }} °F</h2>

    <h2>華氏: {{ celsius * 9/5 + 32 }} °F</h2>

    <h2>華氏: {{ fahrenheit }} °F</h2>

    <div>
      攝氏:
      <input type="number" v-model="celsius"> °C
    </div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      celsius: 0,
    };
  },
  computed: {
    fahrenheit() {
      return ((this.celsius * 9) / 5) + 32;
    },
  },
};
</script>
