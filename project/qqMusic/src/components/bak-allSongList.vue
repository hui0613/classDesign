<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
  >
    <el-table-column label="歌单名" prop="songlistName"></el-table-column>
    <el-table-column label="收藏量" prop="likeNumbers"></el-table-column>
    <!-- <el-table-column label="Role" prop="role"></el-table-column> -->
    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看信息</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
      search: ""
    };
  },
  watch: {
    search: function() {
      API.bakGetUserByKeyWords(
        {
          keyWord: this.search
        },
        data => {
          console.log(data);
        }
      );
    }
  },
  methods: {
    //查看用户具体信息
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({
        path: "/songListInfo",
        query: {
          id: row.id
        }
      });
    },
    //封禁用户
    handleDelete(index, row) {
      console.log(index, row);
      API.bakProhibitUser({
        id: row.id,
        avatar: "",
        password: "",
        userName: "",
        userType: "",
        userStatus: 1
      }).then(Response => {
        // code: 1
        // message: "更新成功"
        console.log(Response);
      });
    }
  },
  created() {
    API.bakGetSongList({
      page: 1,
      size: 5,
      songlistName: this.search
    }).then(Response => {
      console.log(Response);
      this.tableData = Response.data.data.list;
    });
  }
};
</script>