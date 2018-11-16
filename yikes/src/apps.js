let Apps = [
  { name: "draw", path: "/", display: "Draw", 
    component: () => import(/* webpackChunkName: "draw" */ '@/apps/draw/Draw.vue')
  }
]


export { Apps as appsList }