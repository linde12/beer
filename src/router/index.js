import Vue from 'vue'
import Router from 'vue-router'
import Beers from '@/pages/Beers'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/beers',
      name: 'Beers',
      component: Beers,
    }
  ]
})
