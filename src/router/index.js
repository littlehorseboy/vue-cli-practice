import Vue from 'vue';
import Router from 'vue-router';

import Hello from '@/pages/Hello';
import CtoF from '@/pages/C2F';
// import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/c2f',
      name: 'CtoF',
      component: CtoF,
    },
    {
      path: '/*',
      redirect: '/hello',
    },
  ],
});
