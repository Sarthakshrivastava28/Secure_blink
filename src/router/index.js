// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../Pages/MainPage.vue';
import LoginPage from '../Pages/Login.vue';
import Dashboard from '../Pages/Dashboard.vue';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
    children: [
      {
        path: '',
        component: () => import('../components/HelloWorld.vue')
      },
      {
        path: 'aboutus',
        component: () => import('../components/Aboutus.vue')
      },
      {
        path: 'ourservices',
        component: () => import('../components/Ourservices.vue')
      },
      {
        path: 'core',
        component: () => import('../components/Core.vue')
      },
      {
        path: 'end',
        component: () => import('../components/End.vue') 
    
    }
    ]
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;