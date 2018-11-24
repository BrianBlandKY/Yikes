import Vue from 'vue'
import Router from 'vue-router'
import { views } from '@/views.js'

Vue.use(Router)

let routes = []

views.forEach((view) => {
  routes.push({
    path: view.path,
    name: view.name,
    component: view.component
  })
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
