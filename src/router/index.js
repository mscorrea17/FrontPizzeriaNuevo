import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../views/Inicio.vue';
import LoginView from '../views/LoginView.vue';
import Menu from '../views/Menu.vue';

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/menu', // Cambiar el path a '/menu'
    name: 'menu',
    component: Menu
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
