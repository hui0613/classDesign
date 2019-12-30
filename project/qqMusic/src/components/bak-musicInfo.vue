<template>
  <div class="bak-music-box">
    <div class="bak-header">
      <div class="bak-img">
        <img
          src="https://y.gtimg.cn/music/photo_new/T002R300x300M000002zy82h3ntNjS.jpg?max_age=2592000"
          alt
        />
      </div>
      <div class="bak-music-info">
        <p class="bak-title">一直在等 (《反恐行动之浪漫满屋》微电影</p>
        <div class="bak-author">
          <i class="el-icon-user bak-author-icon">本兮</i>
        </div>
        <br />
        <div class="bak-typeAndTime">
          <span>流派：Pop</span>
          <span class="bak-time">发布时间：20158-20</span>
        </div>
      </div>
    </div>
    <div class="bak-musicInfoMain">
      <h2 class="bak-lrc-title">歌词</h2>

      <div class="bak-lrc-text">
        <el-input
          type="textarea"
          autosize
          placeholder="请输入内容"
          :disabled="textareaDisable"
          v-model="lrc"
          class="textarea"
        ></el-input>
      </div>
      <div class="bak-lrc-options">
        <el-button size="mini" type="primary" v-if="textareaDisable" @click="modifyLrc">修改歌词</el-button>
        <el-button size="mini" type="primary" v-if="!textareaDisable" @click="saveModifyLrc">保存歌词</el-button>
      </div>
      <h2 class="bak-lrc-title" style="margin-top:20px;">精彩评论</h2>
      <div class="bak-music-comment">
        <div class="bak-music-comment-list" v-for="(item,index) in commentArray" :key="index">
          <div class="bak-user-avatar">
            <img :src="item.avatar" alt />
          </div>
          <div class="bak-comment-info">
            <p class="bak-comment-username">{{item.username}}</p>
            <p class="bak-comment-content">{{item.content}}</p>
            <div class="bak-comment-other-info">
              <span class="bak-comment-publish-time">{{item.time}}</span>
            </div>
          </div>
          <div class="bak-comment-option">
            <el-button type="danger" size="mini">删除</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../API";
export default {
  data() {
    return {
      textareaDisable: true,
      lrc: `一直在等 (《反恐行动之浪漫满屋》微电影片尾曲) - 本兮

词：本兮

曲：本兮

就像是太阳围绕你

像月亮陪伴你作星星守护你我

想要一伸手就能拥抱到你

一天看不见会着急

寄出心里的信目的地是你的心

想想你的微笑会有多欣喜

一直都在等你

一直都在等你并肩前行

一直都在等你

一直都在等你 wo oh

一直都在等你

一直都在等你不是秘密

一直都在等你

一直都在等你

难道看不出吗

还是和我一样都在装傻

说不出的心里话 oh

如果这只是我一个人的秘密

我会吞下你会让他发生吗

就像是太阳围绕你

像月亮陪伴你

作星星守护你我

想要一伸手就能拥抱到你

一天看不见会着急

寄出心里的信目的地是你的心

想想你的微笑会有多欣喜

一直都在等你一直都在等你

并肩前行

一直都在等你一直都在等你

Wo oh

一直都在等你一直都在等你

不是秘密

一直都在等你一直都在等你

难道看不出吗

还是和我一样都在装傻

说不出的心里话 oh

如果这只是我一个人的秘密

我会吞下你会让他发生吗

一直都在等一直都在等你 wo oh

一直都在等一直都在等你 oh

一直都在等一直都在等你

一直都在等一直都在等你

难道看不出吗

还是和我一样都在装傻

说不出的心里话 oh

如果这只是我一个人的秘密

我会吞下你会让他发生吗`,
      commentArray: [
        {
          id: "",
          avatar:
            "https://thirdqq.qlogo.cn/g?b=sdk&k=cOoa1IkmicxUA5h9uklC6FQ&s=140&t=1557388477",
          username: "hui",
          content:
            "这首歌，是我心中无法用言语来形容的一首歌，这首歌好像写得如此的优秀这首歌，是我心中无法用言语来形容的一首歌，这首歌好像写得如此的优秀这首歌，是我心中无法用言语来形容的一首歌，这首歌好像写得如此的优秀这首歌，是我心中无法用言语来形容的一首歌，这首歌好像写得如此的优秀这首歌，是我心中无法用言语来形容的一首歌，这首歌好像写得如此的优秀这首歌，是我心中无法用言语来形容的一首歌，这首歌好像写得如此的优秀这首歌，是我心中无法用言语来形容的一首歌，这首歌好像写得如此的优秀这首歌，是我心中无法用言语来形容的一首歌，这首歌好像写得如此的优秀这首歌，是我心中无法用言语来形容的一首歌，这首歌好像写得如此的优秀这首歌，是我心中无法用言语来形容的一首歌，这首歌好像写得如此的优秀这首歌，是我心中无法用言语来形容的一首歌，这首歌好像写得如此的优秀这首歌，是我心中无法用言语来形容的一首歌，这首歌好像写得如此的优秀",
          time: "2016年4月15日 19:38"
        },
        {
          id: "",
          avatar:
            "https://thirdqq.qlogo.cn/g?b=sdk&k=cOoa1IkmicxUA5h9uklC6FQ&s=140&t=1557388477",
          username: "hui",
          content:
            "这首歌，是我心中无法用言语来形容的一首歌，这首歌好像写得如此的优秀",
          time: "2016年4月15日 19:38"
        },
        {
          id: "",
          avatar:
            "https://thirdqq.qlogo.cn/g?b=sdk&k=cOoa1IkmicxUA5h9uklC6FQ&s=140&t=1557388477",
          username: "hui",
          content:
            "这首歌，是我心中无法用言语来形容的一首歌，这首歌好像写得如此的优秀",
          time: "2016年4月15日 19:38"
        }
      ]
    };
  },
  created() {
    API.bakGetMusicInfo(
      {
        id: this.$route.query.id
      },
      data => {
        console.log(data);
      }
    );
  },
  methods: {
    modifyLrc() {
      this.textareaDisable = !this.textareaDisable;
    },
    saveModifyLrc() {
      API.bakSaveModifyLrc(
        {
          lrc: this.lrc
        },
        data => {
          console.log(data);
        }
      );
      this.textareaDisable = !this.textareaDisable;
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