import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/index'
import Details from '@/components/details'
import Analysis from '@/components/analysis'
import Count from '@/components/count'
import Forecats from '@/components/forecast'
import Publish from '@/components/analysis'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/details',
      name: 'Details',
      component: Details,
      children: [
        {
          path:'analysis',
          name:Analysis,
          component:Analysis
        },
        {
          path:'count',
          name:Count,
          component:Count
        },
        {
          path:'forecats',
          name:Forecats,
          component:Forecats
        },
        {
          path:'publish',
          name:Publish,
          component:Publish
        },
      ]
    }
  ]
})
