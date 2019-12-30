import Vue from 'vue'
import Router from 'vue-router'
import bakLogin from '@/components/bak-login'
import bakHome from '@/components/bak-home'
import bakUserManage from '@/components/bak-userManage'
import bakUserInfo from '@/components/bak-userInfo'
import bakMusicList from '@/components/bak-musicList'
import bakAddMusic from '@/components/bak-addMusic'
import bakMusicInfo from '@/components/bak-musicInfo'

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
        },
        {
          path: '/bak-addMusic',
          name: '添加音乐',
          component: bakAddMusic,
          hidden: false
        },
        {
          path: '/bak-musicInfo',
          name: '音乐信息',
          component: bakMusicInfo,
          hidden: true
        }
      ]
    }
  ]
})
