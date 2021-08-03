import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
Vue.use(VueRouter)
var user = localStorage.getItem('user')
const routes = [{
    path: '/',
    name: 'Home',
    //component: user ? Home : Login
    component: Home
}, {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresNoAuth: true }
}, {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresNoAuth: true }
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.MIX_NEWS_NAME,
    routes
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!user) {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            next()
        }
    } else {
        next()
    }
    if (to.matched.some(record => record.meta.requiresNoAuth)) {
        if (user) {
            next({
                path: '/',
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            next()
        }
    } else {
        next()
    }
})
export default router
