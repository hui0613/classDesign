import Axios from 'axios'
import config from './bak-config'

const host = config.host

// const getRequest = function (url, data, callback) {
//   Axios({
//     method: 'GET',
//     data,
//     url: host + url
//   })
// }

// const postRequest = function (url, data) {
//   return Axios({
//     method: 'POST',
//     data,
//     url: host + url
//   })
// }

// const http = Axios({

// })




export default {
  //登录后台管理
  bakLogin(params) {
    return Axios({
      method: 'POST',
      params,
      url: host + '/login'
    })
  },

  //获取所有用户列表
  bakGetAllUser(data) {
    return Axios({
      method: "get",
      data,
      url: host + '/user'
    })
  },

  //根据关键子查询用户
  bakGetUserByKeyWords(data, callback) {
    return Axios({
      method
    })
  },

  //封禁用户
  bakProhibitUser(params) {
    return Axios({
      method: 'put',
      params,
      url: host + '/user'
    })
  },

  //获取用户的具体信息
  bakGetUserInfo(data) {
    return Axios({
      method: 'get',
      url: host + '/user/' + data
    })
  },

  //修改用户信息
  bakModifyUserInfo(data) {
    return Axios({
      method: 'put',
      params: data,
      url: host + '/user'
    })
  },

  //获取歌曲列表
  bakGetMusicList(params) {
    return Axios({
      method: 'get',
      params,
      url: host + '/song'
    })
  },

  //获取歌曲详细信息
  bakGetMusicInfo(params) {
    return Axios({
      method: 'get',
      url: host + '/song/' + params
    })
  },

  //获取歌曲评论
  bakGetComment(params) {
    return Axios({
      method: 'get',
      params,
      url: host + '/comment'
    })
  },

  //删除歌曲评论
  bakDeleteComment(params) {
    return Axios({
      method: 'delete',
      params,
      url: host + '/comment'
    })
  },

  //保存修改的歌词
  bakSaveModifyLrc(params) {
    return Axios({
      method: 'put',
      params,
      url: host + '/song'
    })
  },

  //添加歌曲
  bakAddMusic(params) {
    return Axios.post(host + '/song', params, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
  },

  //删除歌曲
  bakDeleteMusic(params) {
    return Axios({
      method: 'delete',
      params,
      url: host + '/song'
    })
  },

  //查询歌手
  bakGetSinger(params) {
    return Axios({
      method: 'get',
      params,
      url: host + '/singer'
    })
  },

  //获取歌手的信息
  bakGetSingerInfo(params) {
    return Axios({
      method: 'get',
      url: host + '/singer/' + params
    })
  },

  //删除歌手
  bakDeleteSinger(params) {
    return Axios({
      method: 'delete',
      params,
      url: host + '/singer'
    })
  },

  //添加歌手
  bakAddSinger(params) {
    return Axios.post(host + '/singer', params, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
  },

  //修改歌手信息
  bakModifySinger(params) {
    return Axios.put(host + '/singer', params, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
  },

  //查询歌单
  bakGetSongList(params) {
    return Axios({
      method: 'get',
      params,
      url: host + '/songlist'
    })
  },

  //获取歌单信息
  bakGEtSongListInfo(params) {
    return Axios({
      method: 'get',
      url: host + '/songlist/' + params
    })
  },

  //删除歌单中的歌曲
  bakDeleteSongListMusic(params) {
    return Axios({
      method: 'delete',
      params,
      url: host + '/songlist_song'
    })
  },

  //往歌单中添加歌曲
  bakAddSongToSongList(params) {
    return Axios({
      method: 'post',
      params,
      url: host + '/songlist_song'
    })
  },

  //获取歌单中的歌曲
  bakGetSongListSongs(params) {
    return Axios({
      method: 'get',
      url: host + '/songlist_song/' + params
    })
  },

  //创建歌单
  bakAddSongList(params) {
    return Axios({
      method: 'post',
      params,
      url: host + '/songlist'
    })
  },

  //删除歌单
  bakDeleteSongList(params) {
    return Axios({
      method: 'delete',
      params,
      url: host + '/songlist'
    })
  },

  //退出
  bakLogout() {
    return Axios({
      method: 'get',
      url: host + '/logout'
    })
  },

  //获取歌曲类型
  bakGetSongType(params) {
    return Axios({
      method: 'get',
      params,
      url: host + '/type'
    })
  },

  //删除歌曲类型
  bakDealteSongType(params) {
    return Axios({
      method: 'delete',
      params,
      url: host + '/type'
    })
  },

  //增加歌曲类型
  bakAddSongType(params) {
    return Axios({
      method: 'post',
      params,
      url: host + '/type'
    })
  }
}
