import Vue from 'vue';
import Router from 'vue-router';

import store from '../store';

import Hello from '@/pages/Hello';
import CtoF from '@/pages/C2F';
import LearnComponent from '@/pages/LearnComponent';
import Count from '@/pages/Count';
import Todo from '@/pages/Todo';
import Shop from '@/pages/Shop';
import Cart from '@/pages/Cart';
import Open1999 from '@/pages/Open1999';
import Login from '@/pages/Login';
import DemoFilter from '@/pages/DemoFilter';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      meta: { requiresAuth: true },
    },
    {
      path: '/c2f',
      name: 'CtoF',
      component: CtoF,
      meta: { requiresAuth: true },
    },
    {
      path: '/learnComponent',
      name: 'LearnComponent',
      component: LearnComponent,
      meta: { requiresAuth: true },
    },
    {
      path: '/count',
      name: 'Count',
      component: Count,
      meta: { requiresAuth: true },
    },
    {
      path: '/todo-list',
      name: 'Todo',
      component: Todo,
      meta: { requiresAuth: true },
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      meta: { requiresAuth: true },
      children: [ // 對應到 path 的 component 放進 Shop.vue 的 <router-view></router-view>
        {
          path: 'cart', // url = shop/cart
          component: Cart,
          meta: { requiresAuth: true },
        },
        {
          path: 'todo', // url = shop/todo
          component: Todo,
          // meta: { requiresAuth: true },
        },
        {
          path: 'hello', // url = shop/hello
          component: Hello,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: { requiresAuth: true },
    },
    {
      path: '/open1999',
      name: 'Open1999',
      component: Open1999,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { requiresAuth: false },
    },
    {
      path: '/multiple',
      name: 'Multiple',
      components: {
        viewLeft: Shop,
        viewRight: Cart,
      },
    },
    {
      path: '/demoFilter',
      name: 'DemoFilter',
      component: DemoFilter,
      // meta: { requiresAuth: false },
    },
    {
      path: '/*',
      redirect: '/login',
    },
  ],
});

router.beforeEach((to, from, next) => {
  // 如果 router 轉跳的頁面需要驗證 requiresAuth: true
  console.log('to =', to.fullPath, '| from =', from.fullPath);
  if (to.matched.some((record) => {
    console.log(record.name, record.meta.requiresAuth);
    return record.meta.requiresAuth;
  })) {
    console.log('token?', store.state.token);
    if (store.state.token === '') {
      // 轉跳到 Login Page
      next({ path: '/login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
