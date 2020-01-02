<template>
  <div
    class="bak-user-info"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0)"
  >
    <div v-if="!loading">
      <h2 class="bak-userInfoTitle">XXX用户的信息</h2>
      <div class="user-info">
        <div class="block">
          <el-avatar
            :size="80"
            src="http://img1.imgtn.bdimg.com/it/u=178224941,13016582&fm=26&gp=0.jpg"
          ></el-avatar>
        </div>
        <div class="user-info-list">
          <el-input placeholder="请输入账号" v-model="user.userName" class="input-list" :disabled="true">
            <template slot="prepend">用户名</template>
          </el-input>
        </div>
        <div class="user-info-list">
          <el-input
            placeholder="请输入账号"
            v-model="user.password"
            class="input-list"
            :disabled="disable"
          >
            <template slot="prepend">密码</template>
          </el-input>
        </div>
        <div class="user-info-list" v-if="!disable">
          <el-input
            placeholder="请输入确认密码"
            v-model="rePassword"
            class="input-list"
            :disabled="disable"
          >
            <template slot="prepend">确认密码</template>
          </el-input>
        </div>
        <div class="user-info-list" v-if="disable">
          <el-input
            placeholder="请输入账号"
            v-model="user.userStatus==0?'正常':'被封禁'"
            class="input-list"
            :disabled="disable"
          >
            <template slot="prepend">账号状态</template>
          </el-input>
        </div>
        <div class="user-info-list">
          <el-input
            placeholder="请输入账号"
            v-model="user.userType==0?'普通用户':'管理员'"
            class="input-list"
            :disabled="true"
          >
            <template slot="prepend">账号权限</template>
          </el-input>
        </div>
        <el-button type="primary" @click="modify" v-if="disable">修改</el-button>
        <el-button type="primary" @click="saveModify" v-if="!disable">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../API";
export default {
  data() {
    return {
      id: "1",
      username: "hui",
      password: "123",
      status: "0",
      role: "0",
      disable: true,
      rePassword: "123",
      user: [],
      loading: true
    };
  },
  methods: {
    modify() {
      //启用输入框，允许修改用户信息
      this.disable = !this.disable;
    },
    saveModify() {
      API.bakModifyUserInfo({
        id: this.user.id,
        password: this.rePassword
      }).then(Response => {
        console.log(Response);
        if (Response.data.message == "更新成功") {
          this.$message({
            type: "success",
            message: "已更新" + this.user.userName + "用户的信息"
          });
          this.disable = !this.disable;
        }
      });
    }
  },
  created() {
    console.log(this.$route.query.id);
    API.bakGetUserInfo(this.$route.query.id).then(Response => {
      console.log(Response);
      this.user = Response.data.data;
      this.loading = false;
    });
  }
};
</script>

<style scoped>
.input-list {
  width: 60%;
}

.user-info-list {
  padding: 10px 0;
}
.user-info {
  margin-top: 30px;
  padding: 10px 10px;
  /* border: 1px solid red; */
}
.bak-user-info {
  width: 600px;
  margin: 0 auto;
  padding: 30px 0 0 0;
  /* border: 1px solid red; */
}
</style>