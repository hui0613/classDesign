<template>
  <div class="bak-addMusic">
    <div class="bak-song-info">
      <el-button type="primary" class="bak-add-button" @click="addMusic">添加歌曲</el-button>
      <el-input placeholder="请输入歌名" v-model="songName" class="bak-input-list">
        <template slot="prepend">歌名</template>
      </el-input>
      <el-input placeholder="请输入歌手" v-model="singerName" class="bak-input-list">
        <template slot="prepend">歌手</template>
      </el-input>
      <el-input placeholder="请输入类型" v-model="songType" class="bak-input-list">
        <template slot="prepend">类型</template>
      </el-input>
      <el-input type="file" v-model="songImg" class="bak-input-list">
        <template slot="prepend">封面</template>
      </el-input>
      <el-input type="file" v-model="songSource" class="bak-input-list">
        <template slot="prepend">音频</template>
      </el-input>
      <h2 class="bak-add-lrc">歌词</h2>
      <el-input
        type="textarea"
        minRows="20"
        autosize
        placeholder="请输入歌词"
        v-model="lrc"
        class="textarea"
      ></el-input>
    </div>
  </div>
</template>

<script>
import API from "../API";
export default {
  data() {
    return {
      songName: "",
      singerName: "",
      songType: "",
      songImg: "",
      songSource: "",
      lrc: ``
    };
  },
  methods: {
    addMusic() {
      API.bakAddMusic(
        {
          songName: this.songName,
          singerName: this.singerName,
          songType: this.songType,
          songImg: this.songImg,
          songSource: this.songSource,
          lrc: this.lrc
        },
        data => {
          console.log(data);
        }
      );
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