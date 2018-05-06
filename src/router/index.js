import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/tabbar/home'
import Member from '@/components/tabbar/member'
import Cart from '@/components/tabbar/cart'
import Search from '@/components/tabbar/search'

import GoodsList from '@/components/goods/list'
import GoodDetail from '@/components/goods/detail'

import NewsList from '@/components/news/list'
import NewDetail from '@/components/news/detail'

import PicList from '@/components/pictures/list'
import PicDetail from '@/components/pictures/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/home",
      component:Home
    },
    {
      path: "/member",
      component: Member
    },
    {
      path: "/cart",
      component: Cart
    },
    {
      path: "/search",
      component: Search
    },
    //商品
    {
      path: "/goodsList",
      component: GoodsList
    },
    {
      path: "/goodDetail",
      component: GoodDetail
    },
    //详情
    {
      path: "/newsList",
      component: NewsList
    },
    {
      path: "/newDetail",
      component: NewDetail
    },
    //
    {
      path: "/picList",
      component: PicList
    },
    {
      path: "/picDetail",
      component: PicDetail
    }
  ]
})
