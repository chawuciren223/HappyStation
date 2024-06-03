<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({
  videoList: Array
})
console.log('父传子包含类型:', props)

// 跳转
const router = useRouter()
const goDetail = (id, type) => {
  router.push({
    path: '/video/detail',
    query: {
      id,
      type
    }
  })
}
</script>

<template>
  <li v-for="item in videoList" :key="item.id">
    <a href="javascript:;">
      <div class="image">
        <img :src="item.cover" alt="" />
        <p>{{ item.state }}</p>
        <div class="score" v-show="false">5.0分</div>
      </div>
      <h4>{{ item.title }}</h4>
      <p>{{ item.info }}</p>
      <div class="show">
        <div class="video">
          <video :src="item.videoUrl" autoplay loop muted></video>
          <div class="star">〇</div>
          <div class="update">更新至第{{ item.episodes }}集</div>
        </div>
        <div class="intro">
          <h4>{{ item.title }}</h4>
          <div class="type">
            <span v-for="(i, ix) in item.tags" :key="ix">{{ i }}</span>
            <!-- <span>战争</span>
                                <span>热血</span> -->
          </div>
          <div class="story">{{ item.info }}</div>
        </div>
        <div class="play">
          <div class="triangle"></div>
          <button
            id="btnPlay"
            @click="goDetail(item.id, item.type)"
            type="button"
          >
            播放正片
          </button>
        </div>
      </div>
    </a>
  </li>
</template>

<style scoped>
.v-content-list li {
  margin-left: 25px;
}

.v-content-list li:first-child {
  margin-left: 0;
}

.v-content-list li a {
  position: relative;
  display: block;
  width: 218px;
  height: 345px;
  color: #fff;
  /* background-color: #23a3d7; */
  border-radius: 8px;
}

.v-content-list li a .image {
  height: 290px;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
}

.v-content-list li a .image img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}

.v-content-list li a .image p {
  position: absolute;
  width: 100%;
  height: 25px;
  font-size: 13px;
  line-height: 25px;
  text-align: right;
  bottom: 0;
  right: 0;
  /* background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)); */
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0%, rgba(0, 0, 0, 1)),
    color-stop(100%, rgba(0, 0, 0, 0))
  );
  z-index: 5;
}

.v-content-list li a .image .score {
  position: absolute;
  top: 8px;
  left: 0;
  width: 40px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 0 8px 8px 0;
  background-color: #2f92f4;
  font-size: 13px;
  z-index: 5;
}

.v-content-list li a .image .mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  display: none;
}

.v-content-list li a .image:hover .mask {
  display: block;
}

.v-content-list li a h4 {
  font-size: 18px;
  margin: 5px 0;
}

.v-content-list li a p {
  font-size: 14px;
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.v-content-list li a .show {
  position: absolute;
  top: 0;
  /* left: -20px; */
  width: 240px;
  height: 360px;
  background-color: #2f3138;
  border-radius: 5px;
  transition: 0.3s;
  opacity: 0;
  /* display: none; */
}

.v-content-list li a:hover .show {
  opacity: 1;
  top: -5px;
  left: -10px;
  /* display: block; */
  z-index: 10;
}

.show .video {
  position: relative;
}

.show video {
  width: 100%;
  /* height: 100%; */
  border-radius: 5px 5px 0 0;
}

.show .star {
  position: absolute;
  top: 2%;
  right: 5%;
  color: #fff;
}

.show .update {
  position: absolute;
  bottom: 5%;
  right: 5%;
  color: #fff;
  /* background-color: pink; */
}

.show .intro {
  width: 210px;
  height: 135px;
  margin: 10px 15px;
  /* background-color: skyblue; */
  overflow: hidden;
  -webkit-line-clamp: 5;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.show .intro .type span {
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
  margin-left: 10px;
}

.show .intro .type span:first-child {
  margin-left: 0;
}

.show .intro .story {
  margin-top: 15px;
  font-size: 14px;
  color: #fff;
  /* background-color: pink; */
}

.show .play {
  position: relative;
  width: 100px;
  height: 38px;
  margin: 20px 15px;
}

.show .play button {
  width: 100%;
  height: 100%;
  color: #ffffff;
  border: none;
  padding-left: 15px;
  font-size: 14px;
  border-radius: 12px;
  background: linear-gradient(to right, #2f92f4, #1e89b7);
}

.show .play .triangle {
  position: absolute;
  top: 50%;
  left: 16%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 7px solid #ffffff;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
}
</style>
