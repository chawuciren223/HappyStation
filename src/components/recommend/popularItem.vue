<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({ popularList: Array })
console.log('父传子数据:', props)
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
  <li v-for="item in popularList" :key="item.id">
    <a href="javascript:;">
      <video :src="item.videoUrl" muted autoplay loop></video>
      <img
        :src="item.horizontal_cover"
        alt=""
        @click="playVideo(item.id, item.type)"
      />
      <div class="info">
        <p>{{ item.title }}</p>
        <div class="up-intro">
          <div class="up-logo">
            <i class="iconfont icon-shipintiaodu"></i>
          </div>
          <div class="author">{{ item.author }}</div>
          <div class="time">{{ item.release_time }}</div>
        </div>
      </div>
    </a>
  </li>
</template>

<style scoped>
.recommend .recommend-list li {
  margin-left: 20px;
  /* margin-top: 20px; */
}

.recommend .recommend-list .one,
.recommend .recommend-list .two,
.recommend .recommend-list .three {
  margin-bottom: 30px;
}

.recommend .recommend-list li a {
  display: block;
  width: 300px;
  height: 230px;
  /* background-color: skyblue; */
  position: relative;
}

/* 
.recommend .recommend-list li a img {
    width: 100%;
    height: 160px;
} */

.recommend .recommend-list li a img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 170px;
  transition: all 0.5 ease;
  border-radius: 10px;
}

.recommend .recommend-list li a img:hover {
  opacity: 0;
}

.recommend .recommend-list li a video {
  width: 100%;
  height: 170px;
  object-fit: cover;
  border-radius: 10px;
}

.recommend-list .info p {
  color: #fff;
  font-size: 15px;
  margin-top: 5px;
  /* background: pink; */
  /* font-weight: 500; */
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.recommend-list .info .up-intro {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* background-color: sandybrown; */
  color: white;
  font-size: 13px;
  font-family: Arial;
}

.up-intro .up-logo {
  width: 25px;
  height: 18px;
  /* background-color: pink; */
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.up-intro .author {
  margin-right: 10px;
  font-size: 13px;
  color: #ddd;
  /* background-color: pink; */
}

.up-intro .time {
  font-size: 10px;
  color: #ddd;
}
</style>
