import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// import { RouteMiddleware } from '@/middlewares/routes.js'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

// router.beforeEach(RouteMiddleware.setPageTitle)

export default router