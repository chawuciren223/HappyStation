<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const value = ref(4.6)
defineProps({
  nowPlay: Object
})
// 跳转至播放页
const router = useRouter()
const playVideo = (id, type) => {
  router.push({
    path: '/video/play',
    query: {
      id,
      type
    }
  })
}
</script>
<template>
  <div class="container">
    <!-- 视频介绍 start -->
    <div class="videoInfo">
      <div class="color">
        <!-- <img src="./images/cp森林背景.jpg" alt="" /> -->
      </div>
      <div class="video w">
        <!-- 左边-封面图片 -->
        <div class="image">
          <img :src="nowPlay.cover" alt="" />
        </div>
        <!-- 右边-介绍 -->
        <div class="intro">
          <h3>{{ nowPlay.title }}</h3>
          <p>
            评分:
            <span>
              <el-rate
                v-model="value"
                disabled
                show-score
                text-color="#2f92f4"
                score-template="{value} 超棒"
              />
              <!-- <i class="iconfont icon-shoucang" v-for="i in 5" :key="i" ></i> -->
            </span>
            <!-- <span>{{ nowPlay.score }}</span> -->
            <!-- <span>超棒</span> -->
            <span id="edit-score">
              <i class="iconfont icon-bianji" id="star"></i>
            </span>
          </p>
          <ul>
            <li>
              <ul class="row">
                <li>
                  <span>分类:</span><a href="#">{{ nowPlay.type }}</a>
                </li>
                <li>
                  <span>地区:</span><a href="#">{{ nowPlay.pos }}</a>
                </li>
                <li><span>年份:</span><a href="#">2022</a></li>
              </ul>
            </li>
            <li><span>主演:</span><a href="#">未知</a></li>
            <li><span>导演:</span><a href="#">未知</a></li>
            <li><span>更新:</span><a href="#">2022-09-26 04:09:11</a></li>
            <li>
              <span>简介:</span><a href="#">{{ nowPlay.info }}</a>
            </li>
          </ul>
          <div class="play">
            <div class="triangle"></div>
            <button @click="playVideo(nowPlay.id, nowPlay.type)">
              立即播放
            </button>
          </div>
          <!-- 观后感打分 -->
          <div class="user-score">
            <div class="header">
              <h4>观后感</h4>
              <i class="iconfont icon-quxiao" id="i-cancel"></i>
            </div>
            <div class="us">
              <div class="stars">
                <i class="iconfont icon-shoucang" id="star"></i>
                <i class="iconfont icon-shoucang" id="star"></i>
                <i class="iconfont icon-shoucang" id="star"></i>
                <i class="iconfont icon-shoucang" id="star"></i>
                <i class="iconfont icon-shoucang" id="star"></i>
              </div>
              <span id="score"></span>
            </div>
            <form id="feelForm" v-if="false">
              <div class="ipt">
                <span>标题</span>
                <input type="text" v-model="title" />
              </div>
              <div class="ipt">
                <span>内容</span>
                <textarea
                  v-model="content"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </form>
            <button id="submit" @click="feelPublish()">提交</button>
            <button id="cancel">取消</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 视频介绍 end -->

    <!-- 播放列表 start -->
    <div class="online-play w">
      <h3>在线观看</h3>
      <ul>
        <li v-for="(item, index) in nowPlay.episodes" :key="item">
          <a href="#">第{{ index + 1 }}集</a>
        </li>
      </ul>
    </div>
    <!-- 播放列表 end -->
  </div>
</template>
<style scoped>
.w {
  width: 1200px;
  margin: 0 auto;
}
.videoInfo {
  position: relative;
  border: 0px solid transparent;
}

.color {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 250px;
  background: #151221;
}

.color img {
  /* margin-top: 50px; */
  width: 100%;
  height: 100%;
  opacity: 0.05;
}

.video {
  position: absolute;
  top: 63%;
  left: 50%;
  transform: translateX(-50%);
  /* height: 500px; */
  /* background: skyblue; */
  display: flex;
}

.video .image {
  width: 230px;
  height: 330px;
  border-radius: 8px;
  overflow: hidden;
}

.video .image img {
  width: 100%;
  height: 100%;
}

.video .intro {
  width: 920px;
  height: 330px;
  /* background: rgb(102, 75, 75); */
  margin-left: 20px;
  position: relative;
}

.video .intro h3 {
  font-size: 23px;
  color: #fff;
  margin: 10px 0;
}

.video .intro p {
  color: #c0bdbd;
  font-size: 15px;
}

.video .intro p span {
  cursor: pointer;
}

.video .intro p span:first-child {
  font-size: 20px;
  margin: 0px 5px 0 10px;
}

.video .intro p span:first-child i {
  margin-right: 5px;
  color: #0896f4;
  font-size: 18px;
}

.video .intro p span:nth-child(2) {
  font-size: 18px;
  color: #0896f4;
  margin-right: 5px;
}

/* ===============打分区 ================*/
.video .intro p #edit-score {
  /* background-color: pink; */
  margin-left: 5px;
  cursor: pointer;
}

.video .intro p #edit-score:hover {
  color: #0896f4;
}

.video .intro .user-score {
  position: absolute;
  top: 0;
  left: 280px;
  width: 500px;
  /* height: 500px; */
  color: #fff;
  background-color: #151221;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 0px 5px #87c9f5;
  /* opacity: 0.5; */
  display: none;
}

.video .intro .user-score .header {
  position: relative;
  /* background-color: pink; */
}

.video .intro .user-score .header h4 {
  font-size: 16px;
  /* font-weight: 600; */
  cursor: pointer;
}

.video .intro .user-score .header i {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

.video .intro .user-score .us {
  /* background-color: pink; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
}

.video .intro .user-score .stars {
  position: relative;
  display: inline-flex;
}

.video .intro .user-score .stars i {
  font-size: 25px;
  --v: 0;
  background: linear-gradient(
    90deg,
    #0896f4 calc(var(--v) * 1%),
    transparent 0%
  );
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-stroke: 1px #1e90ff;
  cursor: pointer;
  margin-left: 10px;
}

.video .intro .user-score .stars i:first-child {
  margin-left: 0;
}

.video .intro .user-score #score {
  position: relative;
  margin-left: 15px;
  width: 100px;
  color: #1e90ff;
  font-size: 16px;
}

.video .intro .user-score #feelForm {
  /* background-color: pink; */
  margin-top: 20px;
}

#feelForm .ipt {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

#feelForm .ipt span {
  font-size: 15px;
  margin-bottom: 5px;
}

#feelForm .ipt input {
  background: #f8f7f6;
  border: none;
  height: 30px;
  line-height: 30px;
  padding-left: 5px;
  border-radius: 5px;
}

#feelForm .ipt textarea {
  height: 90px;
  border-radius: 5px;
  resize: none;
  outline: none;
  padding: 5px;
}

.user-score button {
  background: #0896f4;
  color: #fff;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px #0896f4;
  cursor: pointer;
  margin-top: 10px;
}

.user-score #cancel {
  background: #fff;
  color: #000;
  margin-left: 10px;
}

.user-score #cancel:hover {
  background: #d5d5d5;
}

.user-score button:hover {
  background: #0786db;
}

/* ===============打分区 ================*/
.scoreActive {
  display: block;
}

.video .intro ul {
  margin-top: 18px;
  font-size: 15px;
}

.video .intro ul li {
  margin-top: 10px;
  color: #c0bdbd;
}

.video .intro ul li:nth-child(5) {
  display: flex;
}

.video .intro ul li:nth-child(5) span {
  width: 120px;
}

.video .intro ul li:nth-child(5) a {
  /* width: 920px; */
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.video .intro ul li span {
  color: #a1a0a0;
}

.video .intro ul li a {
  margin-left: 10px;
  color: #fff;
  /* background: pink; */
}

.video .intro ul li .row {
  display: flex;
}

.video .intro ul li .row li {
  margin-left: 50px;
}

.video .intro ul li .row li:first-child {
  margin-left: 0;
}

.video .intro .play {
  position: relative;
  width: 120px;
  height: 40px;
  margin: 15px 45px;
}

.video .intro .play button {
  width: 100%;
  height: 100%;
  color: #ffffff;
  border: none;
  padding-left: 10px;
  font-size: 15px;
  border-radius: 10px;
  background: linear-gradient(to right, #23a3d7, #00d4ff);
}

.video .intro .play button:hover {
  background: linear-gradient(to right, #0896f4, #0dc8ed);
}

.video .intro .play .triangle {
  position: absolute;
  top: 50%;
  left: 16%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid #ffffff;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
}

/* 在线播放 */
.online-play {
  /* height: 300px; */
  /* background: pink; */
  margin-top: 280px;
  padding: 10px 0;
}

.online-play h3 {
  font-size: 23px;
  color: #fff;
}

.online-play ul {
  margin-top: 10px;
  background: #151221;
  border-radius: 10px;
  /* display: flex;
    flex-wrap: wrap; */
  padding: 18px;
  width: 1200px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 20px 20px;
}

.online-play ul li a {
  display: block;
  height: 40px;
  color: #fff;
  background: #32323c;
  padding: 0 25px;
  line-height: 40px;
  text-align: center;
  border-radius: 8px;
}

.online-play ul li a:hover {
  color: red;
  background: #1c1c20;
}
</style>
