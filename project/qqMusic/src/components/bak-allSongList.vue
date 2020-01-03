<template>
  <div
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0)"
  >
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="歌单名" prop="songlistName"></el-table-column>
      <el-table-column label="收藏量" prop="likeNumbers"></el-table-column>
      <!-- <el-table-column label="Role" prop="role"></el-table-column> -->
      <el-table-column align="right">
        <!-- <template slot="header" slot-scope="scope">
          <el-input placeholder="输入关键子搜索" v-model="search" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="searchSong"></el-button>
          </el-input>
        </template>-->
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看信息</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import API from "../API";
export default {
  data() {
    return {
      tableData: [],
      search: "",
      loading: false
    };
  },
  watch: {},
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
    //删除歌单
    handleDelete(index, row) {
      this.loading = true;
      console.log(index, row);
      API.bakDeleteSongList({
        id: row.id
      }).then(Response => {
        // code: 1
        // message: "更新成功"
        this.loading = false;
        console.log(Response);
        if (this.Response.data.code == 1) {
          thiss.$message({
            type: "success",
            message: "删除歌单成功"
          });
        } else {
          thiss.$message({
            type: "error",
            message: "删除歌单失败"
          });
        }
      });
    },
    searchSong() {
      API.bakGetSongList({
        songlistName: this.search
      }).then(Response => {
        console.log(Response);
      });
    }
  },
  created() {
    this.loading = true;
    API.bakGetSongList({
      page: 1,
      size: 10,
      songlistName: this.search
    }).then(Response => {
      this.loading = false;
      console.log(Response);
      this.tableData = Response.data.data.list;
    });
  }
};
</script>