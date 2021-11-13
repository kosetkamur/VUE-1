import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewDetail from '../components/NewsDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  { path: '/news/:id',
    name: 'NewDetail',
    component: NewDetail,
    props: {
      id: {
        type: [String, Number],
        default: null,
    },
    },
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
