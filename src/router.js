import Vue from 'vue'
import Router from 'vue-router'

import menus from './config/menu-config'
import Layout from './views/Layout'

Vue.use(Router)

var routes = [{
  path: '/Login',
  name: 'Login',
  component: () => import('./views/Login')
}]

// routes.push({
//   path: '/Home',
//   name: 'Layout',
//   component: Layout,
//   children: [
//     {
//       path: 'BasicLayout',
//       name: 'BasicLayout',
//       component: () => import('./components/BasicLayout')
//     }
//   ]
// })

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


routes.push({
  path: '/Home',
  name: 'Layout',
  component: Layout,
  children: LayoutChildren
  // children: menus.map((item) => {
  //   return {
  //     path: item.name,
  //     name: item.name,
  //     component: () => import(`./components/${item.name}`)
  //   }
  // })
})

export default new Router({routes})
