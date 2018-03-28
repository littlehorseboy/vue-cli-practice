// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueI18n from 'vue-i18n';

import App from './App';
import router from './router';
import store from './store';

// directive
import './directive/custom-directive';
// filter
import './filters/custom-filter';

import en from './i18n/en.json';
import tw from './i18n/tw.json';
const locales = {
  en: en,
  tw: tw,
};

Vue.use(VueI18n);

// set Lang from state
// Lang 對應的是 Locales 的 key 目前有: en, tw
Vue.config.lang = store.state.lang;

// set Locales
Object.keys(locales).forEach(function(lang) {
  // Vue.locale(lang, locales[lang]);
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
