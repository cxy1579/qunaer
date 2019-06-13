import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeLink',
      component: resolve => require(['@/components/home/Home'], resolve),
    },
    {
      path: '/city',
      name: 'CityLink',
      component: resolve => require(['@/components/city/City'], resolve),
    },
    {
      path: '/detail/:id',
      name: 'DetailLink',
      component: resolve => require(['@/components/detail/Detail'], resolve),
    },
    {
      path: '/week/:id',
      name: 'WeekLink',
      component: resolve => require(['@/components/week/Week'], resolve),
    }
  ]
})
