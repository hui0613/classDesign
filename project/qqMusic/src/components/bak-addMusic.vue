<template>
  <div class="bak-addMusic">
    <div class="bak-song-info">
      <!-- <el-button type="primary" class="bak-add-button" @click="addSinger">添加歌手</el-button> -->
      <!-- <div class="avatar-img">

      </div>-->

      <!-- <el-input placeholder="请输入歌曲名" v-model="singerInfo.songName" class="bak-input-list">
        <template slot="prepend">歌曲名</template>
      </el-input>
      <el-input placeholder="请输入歌手" v-model="singerInfo.singerName" class="bak-input-list">
        <template slot="prepend">歌曲名</template>
      </el-input>-->
      <el-upload
        class="upload-demo"
        ref="upload"
        action="http://192.168.43.216:8080/emptyspirit/song"
        :data="songInfo"
        :auto-upload="false"
        :on-success="successUpload"
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button
          style="margin-left: 10px;"
          size="small"
          type="success"
          @click="submitUpload"
        >上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
  </div>
</template>

<script>
import API from "../API";
export default {
  data() {
    return {
      songInfo: {
        songName: "123",
        singerId: "2",
        songType: "2",
        songWord: "12"
      }
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    successUpload(Response, file, filelist) {
      // code: 1
      // message: "添加歌手操作成功！"
      console.log(Response);
      console.log(file);
      console.log(FileList);
    }
  }
};
</script>

<style scoped>
.bak-add-button {
  float: right;
}
.bak-add-lrc {
  font-size: 14px;
  text-align: left;
}
.bak-input-list {
  padding: 10px 0;
}
.bak-addMusic {
  width: 50%;
  margin: 0 auto;
  border: 1px solid red;
}
</style>