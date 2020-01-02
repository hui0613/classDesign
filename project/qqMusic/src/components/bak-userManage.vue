<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0)"
  >
    <el-table-column label="Name" prop="userName"></el-table-column>
    <el-table-column label="Status" prop="status"></el-table-column>
    <el-table-column label="Role" prop="role"></el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="searchUser"></el-button>
        </el-input>
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看信息</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">封禁/解禁</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import API from "../API";
export default {
  data() {
    return {
      tableData: [],
      search: "",
      loading: true,
      forbidden: ""
    };
  },
  methods: {
    //查询用户
    searchUser() {
      API.bakGetAllUser({
        userName: this.search
      }).then(Response => {
        console.log(Response);
        if (Response.data.data.message == "查询成功") {
          this.tableData = Response.data.data;
          this.$message({
            message: "查询成功",
            type: "success"
          });
        }
      });
    },
    //查看用户具体信息
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({
        path: "/userInfo",
        query: {
          id: row.id
        }
      });
    },
    //封禁用户
    handleDelete(index, row) {
      console.log(index, row);
      var tipsString;
      var resultTip;
      if (row.userStatus == 0) {
        tipsString = "封禁后该账号将无法登录，确定要封禁该账号";
        resultTip = "封禁成功";
      } else {
        tipsString = "确定要解禁该账号吗？";
        resultTip = "解禁成功";
      }
      this.$confirm(tipsString, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          API.bakProhibitUser({
            id: row.id,
            userStatus: row.userStatus == 0 ? 1 : 0
          }).then(Response => {
            // code: 1
            // message: "更新成功"
            console.log(Response);
            if (Response.data.message == "更新成功") {
              if (row.userStatus == 0) {
                row.status = "被封禁";
                row.userStatus = 1;
              } else {
                row.status = "正常";
                row.userStatus = 0;
              }
              this.$message({
                type: "success",
                message: resultTip
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    }
  },
  created() {
    API.bakGetAllUser({
      userName: this.search
    }).then(Response => {
      // avatar: "123"
      // id: 1
      // password: "123"
      // userName: "root"
      // userStatus: 0
      // userType: 1
      console.log(Response.data.data);
      Response.data.data.forEach(element => {
        if (element.userStatus == 0) {
          element.status = "正常";
          element.forbidden = "封禁";
        } else {
          element.status = "被封禁";
          element.forbidden = "解禁";
        }
        if (element.userType == 0) {
          element.role = "普通用户";
        } else {
          element.role = "管理员";
        }
      });
      this.loading = false;
      this.tableData = Response.data.data;
    });
  }
};
</script>