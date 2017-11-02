import Vue from 'vue';
import Router from 'vue-router';
import ShopCart from '@/components/ShopCart';
import TodoList from '@/components/TodoList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShopCart',
      component: ShopCart,
    },
    {
      path: '/todo',
      name: 'TodoList',
      component: TodoList
    }
  ],
});
