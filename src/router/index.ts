import { createRouter, createWebHistory } from 'vue-router'

import RentalView from '@/views/RentalView.vue'
import EquipmentView from '@/views/EquipmentView.vue'
const routes = [
  {
    path: '/',
    name: 'Equipment',
    component: EquipmentView
  },
  {
    path: '/rentals',
    name: 'Rentals',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: RentalView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})
export { routes }
export default router
