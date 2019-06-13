import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import personal from '@/views/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/personal',
      name: 'personal',
      component: personal
    }
  ]
})
