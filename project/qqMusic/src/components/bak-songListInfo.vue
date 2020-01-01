<template>
  <div>
    <div class="bak-header">
      <div class="bak-img">
        <img
          src="https://y.gtimg.cn/music/photo_new/T002R300x300M000002zy82h3ntNjS.jpg?max_age=2592000"
          alt
        />
      </div>
      <div class="bak-music-info">
        <p class="bak-title">{{songlistInfo.songlistName}}</p>
        <div class="bak-author">
          <i class="el-icon-user bak-author-icon">123</i>
        </div>
        <br />
        <div class="bak-typeAndTime">
          <span>收藏量：{{songlistInfo.likeNumbers}}</span>
          <!-- <span class="bak-time">发布时间：20158-20</span> -->
        </div>
        <div class="songListInfo">
          <el-input
            type="textarea"
            autosize
            placeholder="请输入内容"
            :disabled="songListInfoDisable"
            v-model="songlistInfo.introduction"
            class="textarea"
          ></el-input>
        </div>
      </div>
    </div>
    <el-button type="primary" style="float:left">添加歌曲</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="歌曲" prop="songName"></el-table-column>
      <el-table-column label="歌手" prop="singerName"></el-table-column>
      <!-- <el-table-column label="Role" prop="role"></el-table-column> -->
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
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
      songlistInfo: {},
      tableData: [
        {
          id: "1",
          songName: "123",
          singerName: "321"
        }
      ]
    };
  },
  methods: {
    //查看歌曲具体信息
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({
        path: "/bak-musicInfo",
        query: {
          id: row.id
        }
      });
    },
    //从该歌单中删除该歌曲
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  created() {
    API.bakGEtSongListInfo(this.$route.query.id).then(Response => {
      console.log(Response);
      this.songlistInfo = Response.data.data;
    });
  }
};
</script>

<style scoped>
.textarea :disabled {
  color: #000000;
  background-color: #ffffff !important;
}
.songListInfo::-webkit-scrollbar {
  display: none;
}
.songListInfo {
  width: 100%;
  height: 200px;
  overflow: scroll;
  text-overflow: ellipsis;
  word-wrap: normal;
}
.bak-time {
  margin-left: 200px;
}
.bak-typeAndTime {
  margin-top: 10px;
  float: left;
}
.bak-author-text {
  float: left;
  /* border: 1px solid red; */
}
.bak-author-icon {
  float: left;
}
.bak-header .bak-title {
  width: 600px;
  font-size: 30px;
  height: 50px;
  line-height: 50px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bak-music-info {
  float: left;
}
.bak-img,
.bak-img img {
  width: 250px;
  height: 250px;
  float: left;
  margin-right: 30px;
}

.bak-header {
  width: 100%;
  padding: 20px 10px;
  /* border: 1px solid red; */
  display: inline-flex;
  background-image: linear-gradient(#dad6d6c4, #ffffff);
}
</style>