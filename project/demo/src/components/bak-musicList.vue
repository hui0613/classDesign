<template>
  <div
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0)"
  >
    <div v-if="!loading">
      <el-table
        :data="tableData"
        style="width: 100%"
        v-loading="searchLoading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0)"
      >
        <el-table-column label="歌名" prop="songName"></el-table-column>
        <!-- <el-table-column label="歌手" prop="singer_name"></el-table-column> -->
        <el-table-column label="播放量" prop="playNumber"></el-table-column>
        <el-table-column label="收藏量" prop="likeNumber"></el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" @click="searchSong"></el-button>
            </el-input>
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="5"
        :total="10"
        @current-change="getMore"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import API from "../API";
export default {
  data() {
    return {
      tableData: [],
      search: "",
      loading: true,
      searchLoading: false
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({
        path: "/bak-musicInfo",
        query: {
          id: row.id
        }
      });
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          API.bakDeleteMusic({
            id: row.id
          }).then(Response => {
            // code: 1
            // message: "删除操作成功"
            console.log(Response);
            if (Response.data.message == "删除操作成功") {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    searchSong() {
      this.searchLoading = true;
      API.bakGetMusicList({
        songName: this.search
      }).then(Response => {
        this.tableData = Response.data.data.list;
        console.log(this.tableData);
        this.searchLoading = false;
      });
    },
    getMore(current) {
      console.log(current);
      API.bakGetMusicList({
        page: current,
        size: 5,
        songName: ""
      }).then(Response => {
        console.log(Response);
        this.loading = false;
        this.tableData = Response.data.data.list;
      });
    }
  },
  created() {
    API.bakGetMusicList({
      page: 1,
      size: 5,
      songName: ""
    }).then(Response => {
      console.log(Response);
      this.loading = false;
      this.tableData = Response.data.data.list;
    });
  }
};
</script>