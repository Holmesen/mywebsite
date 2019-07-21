import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import personal from '@/views/personal'
import album from '@/views/album'
import albumInfo from '@/views/album/albumInfo'
import blog from '@/views/blog'
import blogInfo from '@/views/blog/blogInfo'

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
    },{
      path: '/album/albumInfo',
      name: 'albumInfo',
      component: albumInfo
    },{
      path: '/blog',
      name: 'blog',
      component: blog
    },{
      path: '/blog/blogInfo',
      name: 'blogInfo',
      component: blogInfo
    }
  ]
})
