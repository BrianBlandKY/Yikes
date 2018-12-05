import Vue from 'vue'
import Router from 'vue-router'
import { views } from '@/views.js'
import store from './store'

Vue.use(Router)

let routes = []

views.forEach((view) => {
  routes.push({
    path: view.path,
    name: view.name,
    component: view.component
  })
})

var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

// Navigation hooks, logging
router.beforeEach((to, from, next) => {
  store.dispatch("logger/log",{ 
    action: "navigation", 
    message: "Vue-Router navigation.",
    data: {
      to: to.fullPath,
      from: from.fullPath
    }
  });
  next();
})

export default router