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
  }
}
