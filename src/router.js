import Vue from 'vue'
import Router from 'vue-router'

import menus from './config/menu-config'
import Layout from './views/Layout'

Vue.use(Router)

const routes = []


// 登录路由
routes.push({
  path: '/',
  name: 'Login',
  component: () => import('./views/Login')
})

// 侧边栏二级菜单路由
let LayoutChildren = []
menus.forEach((item) => {
  item.sub.forEach((cell) => {
    LayoutChildren.push({
      path: cell.name,
      name: cell.name,
      meta: cell.meta,
      component: () => import(`./components/${cell.name}`)
    })
  })
})

// 侧边栏菜单路由
routes.push({
  path: '/Home',
  name: 'Layout',
  component: Layout,
  children: LayoutChildren
})

export default new Router({routes})
