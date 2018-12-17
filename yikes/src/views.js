let views = [
  { name: "about", path: "/", 
    component: () => import(/* webpackChunkName: "draw" */ '@/views/About.vue')
  },
  { name: "draw", path: "/draw", display: "Draw",
    component: () => import(/* webpackChunkName: "draw" */ '@/views/Draw.vue')
  },
  { name: "preview", path: "/preview", display: "Preview",  
    component: () => import(/* webpackChunkName: "draw" */ '@/views/Preview.vue')
  },
  { name: "library", path: "/library", display: "Library",
    component: () => import(/* webpackChunkName: "draw" */ '@/views/Library.vue')
  },
  { name: "logger", path: "/logger", display: "Logger",
    component: () => import(/* webpackChunkName: "draw" */ '@/views/Logger.vue')
  }
]

export { views }