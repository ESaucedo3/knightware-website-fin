import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/Home.vue');
const About = () => import('../views/About.vue');
const Products = () => import('../views/Products.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
    // Add more if needed for additional webpages
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
