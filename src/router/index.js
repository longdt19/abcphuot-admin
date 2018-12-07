import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/layout'
import SimList from '@/components/sim'
import WifiList from '@/components/wifi'
import BlogList from '@/components/blog/list'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/sim-list',
      children: [
        {
          path: 'sim-list',
          name: 'SimList',
          component: SimList
        },
        {
          path: 'wifi-list',
          name: 'WifiList',
          component: WifiList
        },
        {
          path: 'blog-list',
          name: 'BlogList',
          component: BlogList
        }
      ]
    }
  ]
})
