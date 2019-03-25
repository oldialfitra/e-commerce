import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import List from './views/List.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import AddProduct from './views/AddProduct.vue';
import MyCart from './views/MyCart.vue';
import Transaction from './views/Transaction.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/products',
    name: 'products',
    component: List,
  },
  {
    path: '/addProduct',
    name: 'addProduct',
    component: AddProduct,
  },
  {
    path: '/myCart',
    name: 'myCart',
    component: MyCart,
  },
  {
    path: '/transaction',
    name: 'transaction',
    component: Transaction,
  },
  ],
});
