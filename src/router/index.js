import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import End from '@/components/End'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/end',
      name: 'End',
      component: End
    },
  ]
})
