<script setup>
defineProps({
  videoList: Array
})
</script>
<template>
  <li v-for="(item, index) in videoList" :key="item.id">
    <a href="javascript:;">
      <img :src="item.imgUrl" alt="" />
      <h4>{{ item.title }}</h4>
      <div class="up-intro" @click="toUpInfo(item.username)">
        <div class="up-logo">
          <i class="iconfont icon-shipintiaodu"></i>
        </div>
        <div class="author">{{ item.author }}</div>
        <div class="time">{{ item.release_time }}</div>
      </div>
      <div class="show" @click="playVideo(index)">
        <div class="video">
          <video :src="item.videoUrl" autoplay loop muted></video>
        </div>
      </div>
    </a>
  </li>
</template>
<style scoped>
.dynamics-item .dy-list li {
  margin-left: 15px;
}

.dynamics-item .dy-list li:first-child,
.dynamics-item .dy-list li:nth-child(7) {
  margin-left: 0px;
}

.dynamics-item .dy-list li a {
  position: relative;
  display: block;
  width: 270px;
  height: 210px;
  /* background-color: skyblue; */
}

.dynamics-item .dy-list li a img {
  width: 100%;
  height: 150px;
  border-radius: 10px;
}

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

.dynamics-item .dy-list li a p {
  color: #fff;
  font-size: 13px;
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.dynamics-item .dy-list li a p {
  font-size: 13px;
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

.dynamics-item .dy-list li a:hover .show {
  /* opacity: 1; */
  top: -5px;
  left: -5px;
  display: block;
  z-index: 10;
}

.dy-list li .show .video {
  position: relative;
}

.dy-list li .show video {
  width: 100%;
  /* height: 100%; */
  border-radius: 5px;
}

.dynamics .dynamics-content .dynamics-item .dy-list {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: self-start;
}

.dy-list li .show .intro .type span {
  margin-left: 10px;
}

.dy-list li .show .intro .type span:first-child {
  margin-left: 0;
}

.dy-list li a h4 {
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.dy-list li a .up-intro {
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

.dy-list li a .up-intro .up-logo {
  width: 25px;
  height: 18px;
  /* background-color: pink; */
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dy-list li a .up-intro .author {
  margin-right: 10px;
  font-size: 13px;
  color: #ddd;
  /* background-color: pink; */
}

.dy-list li a .up-intro .time {
  font-size: 10px;
  color: #ddd;
}

.dy-list li a .up-intro:hover .author {
  color: #2f92f4;
}
</style>
