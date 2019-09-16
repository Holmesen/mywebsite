import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import personal from '@/views/personal'
import album from '@/views/album'
import albumInfo from '@/views/album/albumInfo'
import blog from '@/views/blog'
import blogInfo from '@/views/blog/blogInfo'
import writeBlog from '@/views/blog/writeBlog'
import life from '@/views/life'
import lifeInfo from '@/views/life/lifeInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },{
      path: '/blog/writeBlog',
      name: 'writeBlog',
      component: writeBlog
    },{
      path: '/life',
      name: 'life',
      component: life
    },{
      path: '/life/lifeInfo',
      name: 'lifeInfo',
      component: lifeInfo
    }
  ]
})
