<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
  >
    <el-table-column label="Date" prop="date"></el-table-column>

    <el-table-column align="right">
      <template slot="header">
        <el-button type="primary" @click="addSongType">添加类型</el-button>
      </template>
    </el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-input placeholder="请输入" v-model="input3" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </template>
      <template slot-scope="scope">
        <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button> -->
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import API from "../API";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      search: ""
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
          API.bakAddSongType({
            songtype: value
          }).then(Response => {
            console.log(Response);
            if (Response.data.message == "添加成功") {
              this.tableData.push({
                songtype: value
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
        search: this.search
      }).then(Response => {
        console.log(Response);
      });
    },
    //删除歌曲类型
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          API.bakDealteSongType({
            songtypeId: row.id
          }).then(Response => {
            console.log(Response);
            if (Response.data.message == "删除成功") {
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
    }
  },
  created() {
    API.bakGetSongType().then(Response => {
      console.log(Response);
    });
  }
};
</script>