<template>
  <div>
    <div class="addSongList-box">
      <el-form ref="form" :model="songListInfo" label-width="80px">
        <el-form-item label="歌单名称">
          <el-input v-model="songListInfo.songlistName" placeholder="请输入歌单名称"></el-input>
        </el-form-item>
        <el-form-item label="歌单封面">
          <el-upload
            :action="host + '/songlist'"
            list-type="picture-card"
            :auto-upload="false"
            :multiple="false"
            :limit="1"
            ref="uploadSongListPicture"
            :data="songListInfo"
            :on-success="createSuccess"
            name="photo"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
        <el-form-item label="歌单简介">
          <el-input
            v-model="songListInfo.introduction"
            type="textarea"
            rows="6"
            resize="none"
            placeholder="请输入歌单简介"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="添加曲目">
          <el-button type="primary" style="float:left" @click="addSongs" v-if="!addSongName">添加曲目</el-button>
          <el-input v-model="addSongName" v-else></el-input>
        </el-form-item>-->
        <el-form-item>
          <el-button type="primary" @click="addSongList">立即创建</el-button>
          <el-button @click="cacelAddSongList">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-drawer title="选择歌曲s" :visible.sync="drawer" direction="rtl">
      <el-table :data="musicDataList" style="width: 100%">
        <el-table-column prop="name" label="歌曲" width="180"></el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="addToSongList(scope.$index, scope.row)" type="primary">添加</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-drawer>
  </div>
</template>

<style scoped>
.addSongList-box {
  width: 600px;
  margin: 0 auto;
  /* border: 1px solid red; */
}
</style>

<script>
import config from "../bak-config";
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      songListInfo: {
        songlistName: "",
        introduction: "",
        songId: "",
        songName: ""
      },
      drawer: false,
      musicDataList: [
        {
          id: "1",
          name: "123"
        }
      ],
      host: config.host
    };
  },
  methods: {
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    //打开抽屉查找歌曲
    addSongs() {
      this.drawer = true;
    },
    addToSongList(index, row) {
      this.songListInfo.songId = row.id;
      this.songListInfo.songName = row.songName;
      this.drawer = false;
    },
    cacelAddSongList() {
      this.$router.go(-1);
    },
    //创建歌单
    addSongList() {
      this.$refs.uploadSongListPicture.submit();
    },
    //歌单创建成功回调函数
    createSuccess(response, file, filelist) {
      console.log(response);
      if (response.message == "创建歌单成功") {
        this.$message({
          type: "success",
          message: "创建歌单成功"
        });
      }
    }
  }
};
</script>