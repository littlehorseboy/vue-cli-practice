<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link :to="{ name: 'Hello' }" class="navbar-brand">Hello</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link :to="{ name: 'Hello' }" class="nav-link">
              Hello<span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'CtoF' }" class="nav-link">CtoF</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'LearnComponent' }" class="nav-link">LearnComponent</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Count' }" class="nav-link">Count</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Todo' }" class="nav-link">Todo</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-link :to="{ name: 'Hello' }">Hello</router-link>
    <router-link :to="{ name: 'CtoF' }">CtoF</router-link>
    <router-link :to="{ name: 'LearnComponent' }">LearnComponent</router-link>
    <router-link :to="{ name: 'Count' }">Count</router-link>
    <router-link :to="{ name: 'Todo' }">Todo</router-link> -->

    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

export default {
  name: 'App',
  created() {
    Vue.axios.get('/data/youbike')
      .then((response) => {
        console.log(response.data);
      });
  },
};
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
