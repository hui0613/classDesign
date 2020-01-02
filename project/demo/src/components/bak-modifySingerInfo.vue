<template>
  <div>
    <div class="box">
      <el-form ref="form" :model="singerInfo" label-width="80px">
        <el-form-item label="歌手名字">
          <el-input v-model="singerInfo.singerName" placeholder="请输入歌手名字"></el-input>
        </el-form-item>
        <el-form-item label="歌手性别">
          <el-select v-model="singerInfo.gender" placeholder="请选择性别" style="float:left">
            <el-option label="男" value="0"></el-option>
            <el-option label="女" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="歌手年龄">
          <el-input v-model="singerInfo.age" placeholder="请输入歌手年龄"></el-input>
        </el-form-item>
        <el-form-item label="歌手头像">
          <el-upload
            action=" "
            list-type="picture-card"
            :auto-upload="false"
            :multiple="false"
            :limit="1"
            ref="uploadSinger"
            :data="singerInfo"
            :on-change="getAvatar"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
        <el-form-item label="歌手简介">
          <el-input
            v-model="singerInfo.introduction"
            type="textarea"
            rows="6"
            resize="none"
            placeholder="请输入歌手简介"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveModify">保存修改</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import API from "../API";
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      singerInfo: {
        id: "",
        singerName: "",
        gender: "",
        introduction: "",
        age: "",
        avatar: "",
        avatarFile: ""
      }
    };
  },
  methods: {
    saveModify() {
      var formData = new FormData();
      formData.append("id", this.singerInfo.id);
      formData.append("singerName", this.singerInfo.singerName);
      formData.append("gender", this.singerInfo.gender);
      formData.append("introduction", this.singerInfo.introduction);
      formData.append("age", this.singerInfo.age);
      if (this.singerInfo.avatarFile != "") {
        formData.append("file", this.singerInfo.avatarFile);
      }
      API.bakModifySinger(formData).then(Response => {
        console.log(Response);
      });
    },
    getAvatar(file, fileList) {
      this.singerInfo.avatarFile = file.raw;
    }
  },
  created() {
    API.bakGetSingerInfo(this.$route.query.id).then(Response => {
      console.log(Response);
      this.singerInfo = Response.data.data;
      this.dialogImageUrl =
        "http://192.168.0.174:8080/emptyspirit" + this.singerInfo.avatar;
    });
  }
};
</script>


<style scoped>
.box {
  width: 600px;
  margin: 0 auto;
  /* border: 1px solid red; */
}
</style>