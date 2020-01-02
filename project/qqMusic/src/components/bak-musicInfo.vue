<template>
  <div class="bak-music-box">
    <div
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0)"
    >
      <div v-if="!loading">
        <div class="bak-header">
          <div class="bak-img">
            <img :src="host + songInfo.songPhoto" alt />
          </div>
          <div class="bak-music-info">
            <p class="bak-title">{{songInfo.songName}}</p>
            <div class="bak-author">
              <i class="el-icon-user bak-author-icon">{{songInfo.singerId}}</i>
            </div>
            <br />
            <div class="bak-typeAndTime">
              <span>流派：{{songInfo.songType}}</span>
              <span class="bak-time">发布时间：2015-8-20</span>
            </div>
          </div>
        </div>
        <div class="bak-musicInfoMain">
          <h2 class="bak-lrc-title">歌词</h2>

          <div class="bak-lrc-text">
            <el-input
              type="textarea"
              autosize
              resize="none"
              placeholder="暂无歌词"
              :disabled="textareaDisable"
              v-model="songInfo.songWord"
              class="textarea"
            ></el-input>
          </div>
          <div class="bak-lrc-options">
            <el-button size="mini" type="primary" v-if="textareaDisable" @click="modifyLrc">修改歌词</el-button>
            <el-button
              size="mini"
              type="primary"
              v-if="!textareaDisable"
              @click="saveModifyLrc"
            >保存歌词</el-button>
          </div>
          <h2 class="bak-lrc-title" style="margin-top:20px;">精彩评论</h2>
          <div class="bak-music-comment">
            <div class="bak-music-comment-list" v-for="(item,index) in commentArray" :key="index">
              <div class="bak-user-avatar">
                <img :src="item.avatar" alt />
              </div>
              <div class="bak-comment-info">
                <p class="bak-comment-username">{{item.userId}}</p>
                <p class="bak-comment-content">{{item.content}}</p>
                <div class="bak-comment-other-info">
                  <span class="bak-comment-publish-time">{{item.createTime}}</span>
                </div>
              </div>
              <div class="bak-comment-option">
                <el-button type="danger" size="mini" @click="deleteThisComment(item)">删除</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../API";
import config from "../bak-config";
export default {
  data() {
    return {
      textareaDisable: true,
      songInfo: [],
      loading: false,
      commentArray: [],
      host: config.host
    };
  },
  created() {
    API.bakGetMusicInfo(this.$route.query.id).then(Response => {
      console.log(Response);
      this.songInfo = Response.data.data;
    });
    API.bakGetComment({
      songId: this.$route.query.id
    }).then(Response => {
      this.commentArray = Response.data.data;
      console.log(Response);
    });
  },
  methods: {
    modifyLrc() {
      this.textareaDisable = !this.textareaDisable;
    },
    saveModifyLrc() {
      API.bakSaveModifyLrc({
        id: this.songInfo.id,
        songWord: this.songInfo.songWord
      }).then(Response => {
        // code: 1
        // message: "评论删除成功!"
        console.log(Response);
      });
      this.textareaDisable = !this.textareaDisable;
    },
    deleteThisComment(item) {
      console.log(item);
      API.bakDeleteComment({
        id: item.id
      }).then(Response => {
        console.log(Response);
      });
    }
  }
};
</script>

<style scoped>
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