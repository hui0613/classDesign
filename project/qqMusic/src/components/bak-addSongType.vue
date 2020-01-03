<template>
  <div
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0)"
  >
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="类型名称" prop="name"></el-table-column>

      <el-table-column align="right">
        <template slot="header">
          <el-button type="primary" @click="addSongType">添加类型</el-button>
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input placeholder="请输入" v-model="seachName" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="searchSongType"></el-button>
          </el-input>
        </template>
        <template slot-scope="scope">
          <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button> -->
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
      seachName: "",
      loading: false
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    //添加歌曲leixing
    addSongType() {
      this.$prompt("请输入歌曲类型", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          this.loading = true;
          API.bakAddSongType({
            name: value
          }).then(Response => {
            this.loading = false;
            console.log(Response);
            if (Response.data.message == "增加类型成功！") {
              this.tableData.push({
                name: value
              });
              this.$message({
                type: "success",
                message: "添加成功"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    //查找歌曲类型
    searchSongType() {
      API.bakGetSongType({
        name: this.seachName
      }).then(Response => {
        console.log(Response);
        this.tableData = Response.data.data;
      });
    },
    //删除歌曲类型
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该类型, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          API.bakDealteSongType({
            id: row.id
          }).then(Response => {
            console.log(Response);
            if (Response.data.message == "删除操作成功") {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.tableData.splice(index, 1);
            } else {
              this.$message({
                type: "error",
                message: "删除失败!"
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
    }
  },
  created() {
    API.bakGetSongType().then(Response => {
      console.log(Response);
      this.tableData = Response.data.data;
    });
  }
};
</script>