import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../views/Inicio.vue';
import LoginView from '../views/LoginView.vue';
import Menu from '../views/Menu.vue';
import ordenes from '../views/ordenes.vue';

const routes = [
  {
    path: '/Inicio',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },

  {
    path: '/ordenes',
    name: 'ordenes',
    component: ordenes
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
