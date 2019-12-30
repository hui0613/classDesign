import Axios from 'axios'

const host = 'http://localhost:9813'

const getRequest = function (url, data, callback) {
  Axios.get(host + url, data).then((Response) => {
    console.log(Response)
    callback(Response.data)
  })
}

const postRequest = function (url, data, callback) {
  Axios.post(host + url, data).then((Response) => {
    console.log(Response)
    callback(Response.data)
  })
}



export default {
  //登录后台管理
  bakLogin(data, callback) {
    return getRequest('/login', data, callback)
  },

  //获取所有用户列表
  bakGetAllUser(data, callback) {
    return postRequest('/getAllUser', data, callback)
  },

  //封禁用户
  bakProhibitUser(data, callback) {
    return getRequest('/rohibit', data, callback)
  },

  //获取用户的具体信息
  bakGetUserInfo(data, callback) {
    return postRequest('/getUserInfo', data, callback)
  },

  //修改用户信息
  bakModifyUserInfo(data, callback) {
    return postRequest('', data, callback)
  },

  //获取歌曲列表
  bakGetMusicList(data, callback) {
    return postRequest('', data, callback)
  },

  //获取歌曲详细信息
  bakGetMusicInfo(data, callback) {
    return postRequest('', data, callback)
  },

  //保存修改的歌词
  bakSaveModifyLrc(data, callback) {
    return postRequest('', data, callback)
  },

  //添加歌曲
  bakAddMusic(data, callback) {
    return postRequest('', data, callback)
  }
}
