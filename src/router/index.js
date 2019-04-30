import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/main/Main'
import Login from '@/components/login/Login'


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
      component: Main
    },
  ]
})
