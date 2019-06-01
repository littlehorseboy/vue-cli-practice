<template>
  <div>
    <div class="container">
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <router-link :to="{ name: 'Cart' }" class="navbar-brand">Shopping Cart</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <router-link :to="{ name: 'Cart' }" class="btn">
              <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
              <span class="badge badge-dark">{{ cartTotal }}</span>
            </router-link>
          </form>
        </div>
      </nav>
      <!-- Recommended Products -->
      <div class="recommend">
        <div class="row" v-if="!recommend">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                已售完
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-if="recommend">
          <div class="col-md-3">
            <img :src="recommend.image" style="width: 100%;">
          </div>
          <div class="col-md-9">
            <div class="recommend-info">
              <h2>{{ recommend.title }}</h2>
              <hr>
              <h3>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum. Just some random text, Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.
              </h3>
              <h2>${{ recommend.price }}</h2>
              <button class="btn btn-danger" @click="addCart(recommend.title)">
                <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                加購
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          總計: <span>$ {{ total }}</span> 元
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>項目</th>
            <th>價錢</th>
            <th>餐點</th>
            <th>取消預訂</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cart, index) in cartList" :key="index">
            <td>{{ index += 1 }}</td>
            <td>{{ cart.price }}</td>
            <td>{{ cart.title }}</td>
            <td>
              <button class="btn btn-danger btn-sm" @click="cancelCart(cart.title)">-</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col-md-6">
          <router-link :to="{name: 'Shop'}" class="btn btn-warning btn-lg btn-block">
            <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
            back to Shop
          </router-link>
        </div>
        <div class="col-md-6">
          <button class="btn btn-success btn-lg btn-block center-block">
            <span class="glyphicon glyphicon-usd" aria-hidden="true"></span>
            buy now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      cartTotal: 'getShoppingCartTotal',
      cartList: 'getShoppingCart',
      total: 'getCartPriceTotal',
      recommend: 'getRecommendedProducts',
    }),
  },
  methods: mapActions([
    'addCart',
    'cancelCart',
  ]),
};
</script>

<style scoped>
  a.specialImgLink:hover > img {
    transform: scale(1.2);
  }
</style>
