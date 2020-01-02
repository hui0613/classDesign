<template>
  <div>
    <div class="bak-header">
      <div class="bak-img">
        <img :src="'http://192.168.0.174:8080/emptyspirit' + songlistInfo.imageUrl" alt />
      </div>
      <div class="bak-music-info">
        <p class="bak-title">{{songlistInfo.songlistName}}</p>
        <div class="bak-author">
          <i class="el-icon-user bak-author-icon"></i>
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
    <el-button type="primary" style="float:left" @click="showDrawer">添加歌曲</el-button>
    <el-table :data="songListSongs" style="width: 100%">
      <el-table-column label="歌曲" prop="songName"></el-table-column>
      <el-table-column label="歌手" prop="singerName"></el-table-column>
      <!-- <el-table-column label="Role" prop="role"></el-table-column> -->
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="musicInfo(scope.$index, scope.row)">查看</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="deleteMusicInSongList(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-drawer title="我是标题" :visible.sync="drawer" direction="rtl">
        <el-table :data="musidList" style="width: 100%">
          <el-table-column label="歌曲" prop="songName"></el-table-column>
          <el-table-column align="right">
            <template slot="header" slot-scope="scope">
              <el-input placeholder="请输入内容" v-model="searchKey" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </template>
            <template slot-scope="scope">
              <el-button size="mini" @click="addToSongList(scope.$index, scope.row)">添加</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import API from "../API";
export default {
  data() {
    return {
      drawer: false, //抽屉控制
      musidList: [], //抽屉中歌曲列表
      searchKey: "", //抽屉中搜索关键字
      songlistInfo: {},
      songListInfoDisable: true,
      songListSongs: [
        //歌单中的歌曲
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
    musicInfo(index, row) {
      console.log(index, row);
      this.$router.push({
        path: "/bak-musicInfo",
        query: {
          id: row.id
        }
      });
    },
    //从该歌单中删除该歌曲
    deleteMusicInSongList(index, row) {
      console.log(index, row);
      API.bakDeleteSongListMusic({
        id: row.id
      }).then(Response => {
        console.log(Response);
        if (Response.data.message == "删除歌单中的歌成功！") {
          this.$message({
            type: "success",
            message: "删除歌单中的歌成功！"
          });
        }
      });
    },
    //打开抽屉
    showDrawer() {
      this.drawer = true;
      API.bakGetMusicList().then(Response => {
        console.log(Response);
        this.musidList = Response.data.data.list;
      });
    },
    //往歌单中添加歌曲
    addToSongList(index, row) {
      console.log(row);
      API.bakAddSongToSongList({
        songId: row.id,
        songlistId: this.$route.query.id
      }).then(Response => {
        console.log(Response);
        if (Response.data.message == "添加到歌单成功") {
          this.$message({
            type: "success",
            message: "添加到歌单成功"
          });
          API.bakGetSongListSongs(this.$route.query.id).then(Response => {
            console.log(Response);
            this.songListSongs = Response.data.data[0].songList;
          });
        }
      });
    }
  },
  created() {
    API.bakGEtSongListInfo(this.$route.query.id).then(Response => {
      console.log(Response);
      this.songlistInfo = Response.data.data;
    });
    API.bakGetSongListSongs(this.$route.query.id).then(Response => {
      console.log(Response);
      this.songListSongs = Response.data.data[0].songList;
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