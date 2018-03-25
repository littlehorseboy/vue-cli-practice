<template>
  <div class="container">
    <!-- Example row of columns -->
    <div class="row">
      <div class="col-md-4" v-for="item in list" :key='item'>
        <h2>{{ item.title }}</h2>
        <p>{{ item.info }}</p>
        <p>
          <a class="btn btn-secondary" href="#" role="button">{{ item.btntext }}</a>
        </p>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    list: Array,
  }
};
</script>
