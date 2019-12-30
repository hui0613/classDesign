import Vue from 'vue'
import Router from 'vue-router'
import bakLogin from '@/components/bak-login'
import bakHome from '@/components/bak-home'
import bakUserManage from '@/components/bak-userManage'
import bakUserInfo from '@/components/bak-userInfo'
import bakMusicList from '@/components/bak-musicList'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/bak-login',
      name: 'bak-login',
      component: bakLogin,
      hidden: true
    }, {
      path: '/bak-home',
      name: '用户管理',
      component: bakHome,
      hidden: false,
      children: [{
        path: '/userManage',
        name: '所有用户',
        component: bakUserManage,
        hidden: false
      }, {
        path: '/userInfo',
        name: '用户信息',
        component: bakUserInfo,
        hidden: true
      }],
    },
    {
      path: '/bak-home',
      name: '音乐管理',
      component: bakHome,
      children: [{
        path: '/bak-musicList',
        name: "所有音乐",
        component: bakMusicList,
        hidden: false
      }]
    }
  ]
})
