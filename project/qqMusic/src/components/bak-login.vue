<template>
  <div class="bak-login-box">
    <h2 class="loginTitle">XXX后台登录</h2>
    <p class="loginResult">{{loginResult}}</p>
    <el-input placeholder="请输入账号" v-model="username" class="input-list">
      <template slot="prepend">账号</template>
    </el-input>
    <el-input placeholder="请输入密码" v-model="password" class="input-list">
      <template slot="prepend">密码</template>
    </el-input>
    <el-button type="primary" class="bak-submit" @click="bakLogin">登录</el-button>
  </div>
</template>

<script>
import API from '../API'
export default {
  data(){
    return{
      username:'',
      password:'',
      loginResult:''
    }
  },
  methods:{
    bakLogin(){
      API.bakLogin({
        usernmae: this.username,
        password: this.password
      },data=>{
        console.log(data)
      })
    }
  }
}
</script>

<style scoped>
.loginResult{
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #F56C6C;
  /* border: 1px solid rsed; */
}

.bak-submit{
  width: 100%;
  margin-top: 20px;
}

.input-list{
  padding: 10px 0;
}

.loginTitle{
  height: 40px;
  padding: 10px 0 0 0;
}

.bak-login-box {
  width: 330px;
  height: 300px;
  padding: 0 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -175px;
  margin-left: -150px;
  box-shadow: 5px 5px 5px #adadad;
  border-radius: 5px;
  border: 1px solid #cccccc;
}
</style>