<template>
  <div class="bak-music-box">
    <div class="bak-header">
      <div class="bak-img">
        <img :src="'http://192.168.43.105:8080/emptyspirit'+singerInfo.avatar" alt />
      </div>
      <div class="bak-music-info">
        <p class="bak-title">{{singerInfo.singerName}}</p>
        <div class="singerInfo">
          <el-input
            type="textarea"
            autosize
            placeholder="暂无简介"
            :disabled="singerInfoDisable"
            v-model="singerInfo.introduction"
            class="textarea"
          ></el-input>
        </div>
      </div>
    </div>
    <div class="options">
      <el-button type="primary" @click="modifySingerInfo">修改歌手信息</el-button>
      <el-button type="danger" @click="deleteSinger">删除歌手</el-button>
    </div>
    <!-- <div class="bak-hotSong">
      <h2 class="bak-hotSong-title">热门歌曲</h2>
      <el-table :data="hotSongs" style="width: 100%">
        <el-table-column prop="songName" label="歌名" width="180"></el-table-column>
        <el-table-column prop="playTime" label="时长" width="180"></el-table-column>
        <el-table-column align="right">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>-->
  </div>
</template>

<script>
import API from "../API";
export default {
  data() {
    return {
      textareaDisable: true,
      singerInfoDisable: true,
      singerInfo: [],
      hotSongs: []
    };
  },
  created() {
    console.log(this.$route.query.id);
    API.bakGetSingerInfo(this.$route.query.id).then(Response => {
      console.log(Response);
      this.singerInfo = Response.data.data;
    });
  },
  methods: {
    modifySingerInfo() {
      this.$router.push({
        path: "/modifySingerInfo",
        query: {
          id: this.$route.query.id
        }
      });
    },
    saveModify() {
      this.$router.push({
        path: "/bakSingerInfo",
        query: {
          id: his.$route.query.id
        }
      });
    },
    //删除歌手
    deleteSinger() {
      API.bakDeleteSinger({
        id: this.$route.query.id
      }).then(Response => {
        // code: 1
        // message: "删除成功！"
        console.log(Response);
      });
    },
    handleEdit(index, row) {
      console.log(row);
      this.$router.push({
        path: "/bak-musicInfo"
      });
    },
    //删除歌曲
    handleDelete(index, row) {
      ApI.bakDeleteMusic({
        id: row.id
      }).then(Response => {
        console.log(Response);
      });
    }
  }
};
</script>

<style scoped>
.bak-hotSong .bak-hotSong-title {
  text-align: left;
  color: #eb4a4a;
}
.bak-hotSong {
  margin: 30px;
  border-top: 1px solid #999;
}

.singerInfo::-webkit-scrollbar {
  display: none;
}
.singerInfo {
  width: 100%;
  height: 200px;
  overflow: scroll;
  text-overflow: ellipsis;
  word-wrap: normal;
}
.bak-music-comment-list:hover .bak-comment-option {
  display: block;
}
.bak-comment-option {
  float: right;
  display: none;
}
.bak-comment-publish-time {
  font-size: 14px;
  color: #999;
}
.bak-comment-username {
  width: 100%;
  font-size: 14px;
  color: #999;
  text-align: left;
  padding: 5px 0;
  /* border: 1px solid red; */
}

.bak-comment-info {
  text-align: left;
  width: 80%;
  float: left;
  margin-left: 20px;
  /* border: 1px solid red; */
}
.bak-user-avatar {
  float: left;
  border: 1px solid #d6d6d6;
}
.bak-user-avatar,
.bak-user-avatar img {
  width: 38px;
  height: 38px;
  border-radius: 50%;
}
.bak-music-comment-list {
  width: 100%;
  padding: 5px 10px;
  display: flex;
  border-top: 1px solid #999;
}
.bak-music-comment {
  width: 100%;
  /* border: 1px solid red; */
}
.bak-lrc-text::-webkit-scrollbar {
  display: none;
}
.bak-lrc-text {
  width: 100%;
  height: 300px;
  overflow: scroll;
  text-overflow: ellipsis;
  word-wrap: normal;
}
.textarea :disabled {
  color: #000000;
  background-color: #ffffff !important;
}
.bak-lrc-title {
  font-size: 20px;
  font-weight: 400;
  float: left;
  margin-bottom: 20px;
}
.bak-musicInfoMain {
  margin-top: 30px;
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
.bak-music-box {
  width: 90%;
  /* border: 1px solid red; */
}
</style>