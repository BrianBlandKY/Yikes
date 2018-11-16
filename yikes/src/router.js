import Vue from 'vue'
import Router from 'vue-router'
import { appsList } from '@/apps.js'

Vue.use(Router)

let routes = []

appsList.forEach((app) => {
  routes.push({
    path: app.path,
    name: app.name,
    component: app.component
  })
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
