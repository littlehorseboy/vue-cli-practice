// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import i18n from './i18n/lang';
import App from './App';
import router from './router';
import store from './store';

// directive
import './directive/custom-directive';
// filter
import './filters/custom-filter';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>',
});
