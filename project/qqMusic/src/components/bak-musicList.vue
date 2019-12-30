<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
  >
    <el-table-column label="歌名" prop="song_name"></el-table-column>
    <el-table-column label="歌手" prop="singer_name"></el-table-column>
    <el-table-column label="播放量" prop="play_number"></el-table-column>
    <el-table-column label="收藏量" prop="like_number"></el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
      tableData: [
        {
          song_name: "一直在等",
          singer_name: "本兮",
          play_number: 123,
          like_number: 2121
        }
      ],
      search: ""
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
      API.bakGetMusicList({}, data => {
        console.log(data);
      });
    }
  },
  created() {
    API.bakGetAllUser({}, data => {
      console.log(data);
    });
  }
};
</script>