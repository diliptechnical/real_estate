import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueMeta from 'vue-meta'
Vue.use(VueMeta)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/myaccount',
    name: 'myaccount',
    component: () => import('../views/myaccount.vue')
  },
   {
    path: '/forgot',
    name: 'forgot',
    component: () => import('../views/Forgot.vue')
  },
  {
    path: '/Resetpassword',
    name: 'Resetpassword',
    component: () => import('../views/Resetpassword.vue')

  },
  {
    path: '/property/:name?/:key?',
    name: 'Property',
    component: () => import('../views/Property.vue')
  },
  {
    path: '/propertydetail/:id',
    name: 'PropertyDetail',
    component: () => import('../views/PropertyDetail.vue')
  },

  
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/signup.vue')
  },
  {
    path: '/details/:id/:name',
    name: '',
    component: () => import('../views/details.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
