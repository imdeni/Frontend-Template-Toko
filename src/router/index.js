import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/penjualan',
      name: 'penjualan',
      component: () => import('../views/PenjualanView.vue')
    },
    {
      path: '/pembelian',
      name: 'pembelian',
      component: () => import('../views/PembelianView.vue')
    },
    {
      path: '/retur',
      name: 'retur',
      component: () => import('../views/ReturView.vue')
    },
    {
      path: '/laporan',
      name: 'laporan',
      component: () => import('../views/LaporanView.vue')
    },
    {
      path: '/barang',
      name: 'barang',
      component: () => import('../views/BarangView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    }
  ]
})

export default router
