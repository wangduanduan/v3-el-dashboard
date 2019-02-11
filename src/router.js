import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import menus from './config/menu-config'

Vue.use(Router)

var routes = []

routes.push({
  path: '/',
  redirect: {
    name: 'BasicLayout'
  }
})

menus.forEach((item) => {
  item.sub.forEach((sub) => {
    routes.push({
      path: `/${sub.name}`,
      name: sub.name,
      component: () => import(`./components/${sub.name}`)
    })
  })
})

export default new Router({routes})

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })
