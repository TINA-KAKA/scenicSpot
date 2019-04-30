import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/main/Main'
import Login from '@/components/login/Login'
import Home from '@/components/page/Home'
import Instruction from "@/components/page/Instruction";
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
        },
      ]
    },
  ]
})
