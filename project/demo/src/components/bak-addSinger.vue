<template>
  <div>
    <div class="box">
      <el-form ref="form" :model="singerInfo" label-width="80px">
        <el-form-item label="歌手名字">
          <el-input v-model="singerInfo.singerName" placeholder="请输入歌手名字"></el-input>
        </el-form-item>
        <el-form-item label="歌手性别">
          <el-select v-model="singerInfo.singerGender" placeholder="请选择性别" style="float:left">
            <el-option label="男" value="0"></el-option>
            <el-option label="女" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="歌手年龄">
          <el-input v-model="singerInfo.singerAge" placeholder="请输入歌手年龄"></el-input>
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
            v-model="singerInfo.singerIntr"
            type="textarea"
            rows="6"
            resize="none"
            placeholder="请输入歌手简介"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button v-if="$route.query.source=='singerInfo'" type="primary">保存修改</el-button>
          <el-button type="primary" @click="addSinger">立即添加</el-button>
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
        singerName: "",
        singerGender: "",
        singerIntr: "",
        singerAge: "",
        singerAvatar: ""
      }
    };
  },
  methods: {
    addSinger() {
      var formData = new FormData();
      formData.append("singerName", this.singerInfo.singerName);
      formData.append("gender", this.singerInfo.singerGender);
      formData.append("introduction", this.singerInfo.singerIntr);
      formData.append("age", this.singerInfo.singerAge);
      formData.append("file", this.singerInfo.singerAvatar);
      API.bakAddSinger(formData).then(Response => {
        console.log(Response);
        if (Response.data.code == 1) {
          this.$message({
            type: "success",
            message: "添加歌手成功"
          });
        } else {
          this.$message({
            type: "error",
            message: "添加歌手失败"
          });
        }
      });
    },
    getAvatar(file, fileList) {
      this.singerInfo.singerAvatar = file.raw;
    }
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