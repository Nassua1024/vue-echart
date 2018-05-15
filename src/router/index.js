import Vue from 'vue'
import Router from 'vue-router'
import Chart from '@/views/chart/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Chart',
      component: Chart
    }
  ]
})
