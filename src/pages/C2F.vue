<template>
  <div class="container">
    <h1>Temperature Conversion</h1>

    <input type="checkbox" id="toggleTemperature" v-model="isCelsius">
    <label for="toggleTemperture">切換: {{ toggleTemperature }}</label>

    <h2 v-if="isCelsius">攝氏: {{ celsius }} °C</h2>
    <h2 v-if="!isCelsius">華氏: {{ fahrenheit }} °F</h2>

    <div class="celsius">
      <span v-show="!isCelsius">攝氏: </span>
      <span v-show="isCelsius">華氏: </span>
      <input type="number" v-model.number="userInput">
    </div>

    <p>
      <button @click="temperatureConversion(userInput);">
        Temperature Conversion
      </button>
    </p>

  </div>
</template>

<script>
export default {
  // name: 'hello',
  data() {
    return {
      userInput: 0,
      isCelsius: false,
    };
  },
  computed: {
    fahrenheit() {
      return ((this.userInput * 9) / 5) + 32;
    },
    celsius() {
      return ((this.userInput - 32) * 5) / 9;
    },
    toggleTemperature() {
      return this.isCelsius ? '攝氏 轉換 華氏' : '華氏 轉換 攝氏';
    },
  },
  methods: {
    temperatureConversion() {
      if (this.isCelsius) {
        alert(`攝氏: ${this.celsius}`);
      } else {
        alert(`華氏: ${this.fahrenheit}`);
      }
    },
  },
  watch: {
    userInput(val) {
      console.log(val);
      console.log(typeof val);
    },
  },
};
</script>
