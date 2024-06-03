<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({ hotList: Array })
console.log(props)
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
  <li v-for="item in hotList" :key="item.id" class="video-item">
    <a href="javascript:;">
      <img :src="item.imgUrl" alt="" />
      <h4>{{ item.title }}</h4>
      <p>{{ item.info }}</p>
      <div class="hot-show">
        <div class="video">
          <video :src="item.videoUrl" autoplay loop muted></video>
          <div class="star">〇</div>
          <div class="update">更新至第4集</div>
        </div>
        <div class="intro">
          <h4>{{ item.title }}</h4>
          <div class="type">
            <span v-for="(i, ix) in item.tags" :key="ix">{{ i }}</span>
          </div>
          <div class="story">{{ item.info }}</div>
        </div>
        <div class="play">
          <div class="triangle"></div>
          <button @click="playVideo(item.id, item.type)" type="button">
            播放正片
          </button>
        </div>
      </div>
    </a>
  </li>
</template>

<style scoped>
.video_hot .hot-list li {
  margin-left: 15px;
}

.video_hot .hot-list li:first-child {
  margin-left: 0px;
}

.video_hot .hot-list li a {
  position: relative;
  display: block;
  width: 270px;
  height: 210px;
  /* background-color: skyblue; */
}

.video_hot .hot-list li a img {
  width: 100%;
  height: 150px;
  border-radius: 10px;
}

.video_hot .hot-list li a h4,
.dynamics-item .dy-list li a h4 {
  font-size: 18px;
  margin: 5px 0;
  color: #fff;
}

.dynamics-item .dy-list li a h4 {
  font-size: 15px;
  font-weight: 400;
  margin-top: 10px;
}

.video_hot .hot-list li a p {
  color: #fff;
  font-size: 14px;
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.video_hot .hot-list li .hot-show {
  position: absolute;
  top: 0;
  width: 280px;
  height: 385px;
  background-color: #2f3138;
  border-radius: 5px;
  /* opacity: 0; */
  display: none;
  z-index: 3;
}

.dynamics-item .dy-list li a .show {
  position: absolute;
  top: 0;
  width: 280px;
  /* height: 385px; */
  /* background-color: #2f3138; */
  border-radius: 5px;
  /* opacity: 0; */
  display: none;
}

.video_hot .hot-list li a:hover .hot-show,
.dynamics-item .dy-list li a:hover .show {
  /* opacity: 1; */
  top: -5px;
  left: -5px;
  display: block;
  z-index: 10;
}

.hot-show .video,
.dy-list li .show .video {
  position: relative;
}

.hot-show video,
.dy-list li .show video {
  width: 100%;
  /* height: 100%; */
  border-radius: 5px;
}

.hot-show .star {
  position: absolute;
  top: 2%;
  right: 5%;
  color: #fff;
}

.hot-show .update {
  position: absolute;
  bottom: 5%;
  right: 5%;
  color: #fff;
  /* background-color: pink; */
}

.hot-show .intro {
  width: 250px;
  height: 140px;
  margin: 10px 15px;
  /* background-color: skyblue; */
  overflow: hidden;
  -webkit-line-clamp: 5;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.hot-show .intro .type span {
  display: inline-block;
  width: 40px;
  height: 25px;
  background-color: rgba(91, 90, 90, 0.6);
  color: #fff;
  font-size: 13px;
  text-align: center;
  line-height: 25px;
  border-radius: 5px;
  margin-top: 5px;
  margin-left: 15px;
}

.hot-show .intro .type span:first-child {
  margin-left: 0;
}

.hot-show .intro .story {
  margin-top: 10px;
  font-size: 15px;
  color: #fff;
}

.hot-show .play {
  position: relative;
  width: 120px;
  height: 40px;
  margin: 15px;
}

.hot-show .play button {
  width: 100%;
  height: 100%;
  color: #ffffff;
  border: none;
  padding-left: 15px;
  font-size: 16px;
  border-radius: 10px;
  background: linear-gradient(to right, #1ea3b7, #1dd14a);
}

.hot-show .play .triangle {
  position: absolute;
  top: 50%;
  left: 16%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid #ffffff;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}
</style>
