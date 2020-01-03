<template>
  <el-container class="box">
    <el-header class="header">
      空灵音乐管理后台
      <span class="logout" @click="logout">退出</span>
    </el-header>
    <el-container>
      <el-aside width="200px" class="aside">
        <el-col :span="24">
          <el-menu
            default-active="0"
            class="el-menu-vertical-demo"
            style="background-color: #f1f1f1"
            router
          >
            <template v-for="(item,index) in this.$router.options.routes" v-if="!item.hidden">
              <el-submenu :index="index+''" v-if="item.children.length>1" :key="index">
                <template slot="title">
                  <i :class="item.iconCls"></i>
                  <span>{{item.name}}</span>
                </template>
                <el-menu-item
                  v-for="child in item.children"
                  :index="child.path"
                  :key="child.path"
                  v-if="!child.hidden"
                >{{child.name}}</el-menu-item>
              </el-submenu>
              <template v-else>
                <el-menu-item :index="item.children[0].path" :key="item.children[0].path">
                  <i :class="item.children[0].iconCls"></i>
                  <span slot="title">{{item.children[0].name}}</span>
                </el-menu-item>
              </template>
            </template>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main class="main">
        <div v-if="$route.path == '/bak/home'" class="welcome">欢迎使用空灵音乐管理后台</div>
        <el-page-header v-if="$route.path != '/bak/home'" @back="back" :content="$route.name"></el-page-header>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import API from "../API";
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
    logout() {
      API.bakLogout().then(Response => {
        console.log(Response);
        if (Response.data.message == "请求成功！") {
          this.$router.push("/bak/login");
        }
      });
    }
  }
};
</script>

<style scoped>
.welcome {
  height: 100px;
  font-size: 30px;
  line-height: 100px;
  /* border: 1px solid red; */
}
.logout {
  float: right;
  cursor: pointer;
}
.box {
  height: 100vh;
}
.header {
  /* border: 1px solid red; */
  color: #ffffff;
  height: 60px;
  line-height: 60px;
  background-color: #409eff;
}
.aside {
  /* border: 1px solid #999; */
}
.main {
  /* border: 1px solid red; */
}
.page-header {
  height: 30px;
  /* border: 1px solid red; */
}
</style>
