import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/main/Main'
import Login from '@/components/login/Login'
import Home from '@/components/page/Home'
import Instruction from "@/components/page/Instruction";
import Search from "@/components/page/Search";
import User from "@/components/page/User";

import PictureList from "@/components/page/PictureList";
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:"/main"},
    {
      path: '/',
      name: 'login',
      component: Login
    } ,{
      path: '/main',
      name: 'main',
      component: Main,
      children:[
        {path:'/main',redirect:"/main/home"},
        {
          path: '/main/home',
          name: 'home',
          component: Home,
        },{
          path: '/main/instruction',
          name: 'instruction',
          component: Instruction,
        },{
          path: '/main/search',
          name: 'search',
          component: Search,
        },{
          path: '/main/user',
          name: 'user',
          component: User,
        },{
          path: '/main/picturelist',
          name: 'picturelist',
          component: PictureList,
        },
      ]
    },
  ]
})
