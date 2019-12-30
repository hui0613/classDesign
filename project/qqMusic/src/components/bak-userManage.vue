<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
  >
    <el-table-column label="Name" prop="name"></el-table-column>
    <el-table-column label="Status" prop="status"></el-table-column>
    <el-table-column label="Role" prop="role"></el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看信息</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">封禁</el-button>
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
          id: "1",
          name: "hui",
          status: "正常",
          role: "普通用户"
        }
      ],
      search: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({
        path: "/userInfo",
        query: {
          id: row.id
        }
      });
    },
    handleDelete(index, row) {
      console.log(index, row);
      API.bakProhibitUser(
        {
          id: row.id
        },
        data => {
          console.log(data);
        }
      );
    }
  },
  created() {
    API.bakGetAllUser({}, data => {
      console.log(data);
    });
  }
};
</script>