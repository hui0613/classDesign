<template>
  <div>
    <div class="options">
      <el-button type="primary" @click="toAddSinger">添加歌手</el-button>
    </div>
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
            src="https://qpic.y.qq.com/music_cover/T0qpeJj1MpLkoxkZMuVVx52m7ObJa7Jfqsq5n3QMQpsqsT8TiazUOqw/600?n=1"
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
</template>




<style>
.image {
  width: 100%;
  display: block;
  border-radius: 50%;
}
</style>

<script>
import API from "../API";
export default {
  data() {
    return {
      singerList: []
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
    API.bakGetSinger({
      page: 1,
      size: 5,
      singerName: ""
    }).then(Response => {
      console.log(Response);
      this.singerList = Response.data.data.list;
    });
  }
};
</script>