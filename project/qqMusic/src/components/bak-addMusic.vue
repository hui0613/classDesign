<template>
  <div
    class="box"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0)"
  >
    <div>
      <el-form :model="form" label-width="80px">
        <el-form-item label="歌曲名字" class="form-item">
          <el-input v-model="form.songName" placeholder="请输入歌曲名字"></el-input>
        </el-form-item>
        <el-form-item label="歌手" class="form-item">
          <el-select v-model="form.singerId" placeholder="请选择歌手" style="float:left">
            <el-option
              v-for="(item,index) in singerList"
              :key="index"
              :label="item.singerName"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="歌曲类型" class="form-item">
          <el-select v-model="form.songType" placeholder="请选择歌曲类型" style="float:left">
            <el-option
              v-for="(item,index) in songTypeList"
              :key="index"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="歌曲封面" class="form-item">
          <el-upload
            action=" "
            list-type="picture-card"
            :auto-upload="false"
            :multiple="false"
            :limit="1"
            ref="uploadSinger"
            accept="image/jpg, image/jpeg, image/png"
            :on-change="getFilePhoto"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
        <el-form-item label="歌曲音频" class="form-item">
          <el-upload
            class="upload-demo"
            action=" "
            multiple
            :limit="1"
            :auto-upload="false"
            accept="audio/mpeg"
            :on-change="getFileMusic"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传音频文件</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="歌曲歌词" class="form-item">
          <el-input
            v-model="form.songWord"
            placeholder="请输入歌词"
            type="textarea"
            rows="10"
            resize="none"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addSong">立即添加</el-button>
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
      form: {
        songName: "",
        singerId: "",
        songType: "",
        songWord: "",
        file_photo: "",
        file_music: ""
      },
      singerList: [],
      songTypeList: [],
      loading: false
    };
  },
  methods: {
    addSong() {
      this.loading = true;
      var formData = new FormData();
      formData.append("file_photo", this.form.file_photo);
      formData.append("file_music", this.form.file_music);
      formData.append("songName", this.form.songName);
      formData.append("singerId", this.form.singerId);
      formData.append("songWord", this.form.songWord);
      formData.append("songType", this.form.songType);
      API.bakAddMusic(formData).then(data => {
        this.loading = false;
        console.log(data);
        if (data.data.code == 1) {
          this.$message({
            type: "success",
            message: "添加成功"
          });
        } else {
          this.$message({
            type: "error",
            message: "添加失败"
          });
        }
      });
    },
    getFilePhoto(file, fileList) {
      this.form.file_photo = file.raw;
    },
    getFileMusic(file, fileList) {
      this.form.file_music = file.raw;
    }
  },
  created() {
    API.bakGetSinger().then(Response => {
      console.log(Response);
      this.singerList = Response.data.data.list;
    });
    API.bakGetSongType().then(Response => {
      console.log(Response);
      this.songTypeList = Response.data.data;
    });
  }
};
</script>


<style scoped>
.form-item {
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(221, 220, 220);
}
.box {
  width: 600px;
  margin: 0 auto;
  border: 1px solid rgb(221, 220, 220);
}
</style>