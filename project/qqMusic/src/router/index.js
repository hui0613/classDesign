import Vue from 'vue'
import Router from 'vue-router'
import bakLogin from '@/components/bak-login'
import bakHome from '@/components/bak-home'
import bakUserManage from '@/components/bak-userManage'
import bakUserInfo from '@/components/bak-userInfo'
import bakMusicList from '@/components/bak-musicList'
import bakAddMusic from '@/components/bak-addMusic'
import bakMusicInfo from '@/components/bak-musicInfo'
import bakSingerList from '@/components/bak-singerList'
import bakAddSinget from '@/components/bak-addSinger'
import bakSingerInfo from '@/components/bak-singerInfo'
import bakSongListInfo from '@/components/bak-songListInfo'
import bakSongList from '@/components/bak-allSongList'
import bakAddSongList from '@/components/bak-addSongList'
import bakSongType from '@/components/bak-addSongType'

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
        },
        {
          path: '/bakSongType',
          name: '类型管理',
          component: bakSongType,
          hidden: false
        }
      ]
    },
    {
      path: '/bak-home',
      name: '歌手管理',
      component: bakHome,
      hidden: false,
      children: [{
          path: '/bak-singerList',
          name: '所有歌手',
          component: bakSingerList,
          hidden: false
        },
        {
          path: '/bakAddSinger',
          name: '添加歌手',
          component: bakAddSinget,
          hidden: false
        },
        {
          path: '/bakSingerInfo',
          name: '歌手信息',
          component: bakSingerInfo,
          hidden: true
        }
      ]
    },
    {
      path: '/bak-home',
      name: '歌单管理',
      component: bakHome,
      hidden: false,
      children: [{
          path: '/bakSongList',
          name: '所有歌单',
          component: bakSongList,
          hidden: false
        },
        {
          path: '/songListInfo',
          name: '歌单详情',
          component: bakSongListInfo,
          hidden: true,
        }, {
          path: '/addSongList',
          name: '添加歌单',
          component: bakAddSongList,
          hidden: false
        }
      ]
    }

  ]
})
