<template>
  <div
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0)"
  >
    <!-- <div class="options">
      <el-button type="primary" @click="toAddSinger">添加歌手</el-button>
    </div>-->
    <div v-if="singerList.length==0" style="font-size:20px;color:#999">暂无歌手数据</div>
    <div v-else>
      <el-row style="margin:30px">
        <el-col
          :span="4"
          v-for="(item, index) in singerList"
          :key="index"
          :offset="1"
          style="background:transparent;cursor: pointer;margin-top:10px"
        >
          <el-card :body-style="{ padding: '0px' }" style="background:transparent">
            <img
              :src="'http://192.168.43.105:8080/emptyspirit' + item.avatar"
              class="image"
              @click="toSingerInfo(item)"
            />
            <div style="padding: 14px;" @click="toSingerInfo">
              <span>{{item.singerName}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>




<style>
.image {
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
  border-radius: 50%;
}
</style>

<script>
import API from "../API";
export default {
  data() {
    return {
      singerList: [],
      loading: false
    };
  },
  methods: {
    toAddSinger() {
      this.$router.push("/bakAddSinger");
    },
    toSingerInfo(item) {
      console.log(item);
      this.$router.push({
        path: "/bakSingerInfo",
        query: {
          id: item.id
        }
      });
    }
  },
  created() {
    this.loading = true;
    console.log("getsinger");
    API.bakGetSinger({
      page: 1,
      size: 10
    }).then(Response => {
      this.loading = false;
      console.log(Response);
      this.singerList = Response.data.data.list;
    });
  }
};
</script>