import Vue from 'vue'
import Router from 'vue-router'
import bakLogin from '@/components/bak-login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bak-login',
      component: bakLogin
    }
  ]
})
