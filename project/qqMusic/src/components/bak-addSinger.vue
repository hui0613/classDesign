<template>
  <div class="bak-addMusic">
    <div class="bak-song-info">
      <!-- <el-button type="primary" class="bak-add-button" @click="addSinger">添加歌手</el-button> -->
      <!-- <div class="avatar-img">

      </div>-->
      <el-upload
        class="upload-demo"
        ref="upload"
        action="http://192.168.43.105:8080/emptyspirit/singer"
        :data="singerInfo"
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

      <el-input placeholder="请输入歌手名" v-model="singerInfo.singerName" class="bak-input-list">
        <template slot="prepend">歌手名</template>
      </el-input>
      <el-input
        placeholder="请输入性别"
        type="hidden"
        class="bak-input-list"
        style="float:left;width:10%;height:38px;"
      >
        <template slot="prepend">性别</template>
      </el-input>
      <el-select v-model="singerInfo.gender" placeholder="请选择" style="float:left;margin-top:10px;">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input placeholder="请输入年龄" v-model="singerInfo.age" class="bak-input-list">
        <template slot="prepend">年龄</template>
      </el-input>
      <el-input
        placeholder="请输入简介"
        type="textarea"
        v-model="singerInfo.introduction"
        class="bak-input-list"
      >
        <template slot="prepend">简介</template>
      </el-input>
    </div>
  </div>
</template>

<script>
import API from "../API";
export default {
  data() {
    return {
      singerInfo: {
        singerName: "",
        age: "",
        gender: "",
        introduction: ""
      },
      options: [
        {
          value: "0",
          label: "男"
        },
        {
          value: "1",
          label: "女"
        }
      ],
      sexValue: ""
    };
  },
  methods: {
    submitUpload() {
      console.log(this.singerInfo.singerAge);
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