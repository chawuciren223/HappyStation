import { createRouter, createWebHistory } from 'vue-router'

// createRouter 创建路由实例
// 配置history模式
// 1. history模式: createWebHistory      地址不带 #
// 2. hash模式:    createWebHashHistory  地址带 #
// vite中的环境变量 import.meta.env.BASE_URL 就是vite.config.js中的base配置项

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // 如果有保存位置，则直接滚动到保存的位置
      return savedPosition
    } else {
      // 没有保存位置时，滚动到页面的顶部
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/video/recommend',
      children: [
        {
          path: '/video/recommend',
          component: () => import('@/views/layout/videoRecommend.vue')
        },
        {
          path: '/video/sort',
          component: () => import('@/views/layout/videoSort.vue')
        },
        {
          path: '/video/dynamic',
          component: () => import('@/views/layout/videoDynamic.vue')
        },
        {
          path: '/video/person',
          component: () => import('@/views/layout/videoPerson.vue')
        },
        {
          path: '/video/detail',
          component: () => import('@/views/layout/videoDetail.vue')
        },
        {
          path: '/video/search',
          component: () => import('@/views/layout/videoSearch.vue')
        },
        {
          path: '/video/play',
          component: () => import('@/views/layout/videoPlay.vue'),
          meta: {
            forceRefresh: true
          }
        }
      ]
    }
  ]
})

export default router
