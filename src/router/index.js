import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '@/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        login: true
      }
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  
  const requiresAuth = to.matched.some(record => record.meta.login);
  if (requiresAuth && !auth.currentUser) {
    // Redirige a la página de inicio de sesión si el usuario no está autenticado
    next({ path: '/login' });
  } else {
    next(); // Permite la navegación si está autenticado o no requiere autenticación
  }
});

export default router
