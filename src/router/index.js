import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import personal from '@/views/personal'
import album from '@/views/album'

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
    },{
      path: '/album',
      name: 'album',
      component: album
    }
  ]
})
