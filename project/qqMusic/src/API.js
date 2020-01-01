import Axios from 'axios'

const host = 'http://192.168.43.216:8080/emptyspirit'

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
  bakGetMusicInfo(data) {
    return Axios({
      method: 'post',
      url: host + '/song/' + data
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
  bakAddMusic(data, callback) {
    return postRequest('', data, callback)
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
    return Axios({
      method: 'post',
      params,
      url: host + '/singer'
    })
  },

  //修改歌手信息
  bakModifySinger(params) {
    return Axios({
      method: 'put',
      params,
      url: host + '/singer'
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

  //创建歌单
  bakAddSongList(params) {
    return Axios({
      method: 'get',
      params,
      url: host + url
    })
  },

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
      url: host + '/songtype'
    })
  },

  //删除歌曲类型
  bakDealteSongType(params) {
    return Axios({
      method: 'delete',
      params,
      url: host + 'songtype'
    })
  },

  //增加歌曲类型
  bakAddSongType(params) {
    return Axios({
      method: 'get',
      params,
      url: host + 'songtype'
    })
  }
}
