<template>
  <el-container class="box">
    <el-header class="header">XXXX管理后台</el-header>
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
              <el-submenu :index="index+''" v-if="item.children.length>0" :key="index">
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
        <el-page-header v-if="$route.path != '/'" @back="back" :content="$route.name"></el-page-header>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.box {
  height: 100vh;
}
.header {
  border: 1px solid red;
  color: #ffffff;
  height: 60px;
  line-height: 60px;
  background-color: #409eff;
}
.aside {
  border: 1px solid red;
}
.main {
  border: 1px solid red;
}
.page-header {
  height: 30px;
  border: 1px solid red;
}
</style>
