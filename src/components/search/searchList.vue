<script setup>
import { useSearchStore } from '@/stores'
const searchStore = useSearchStore()
</script>

<template>
  <!-- 搜索列表 start -->
  <div class="search-list">
    <ul class="videoList" v-if="searchStore.videoList.length > 0">
      <li v-for="(item, index) in searchStore.videoList" :key="item.id">
        <a href="javascript:;" @click="playVideo(index)">
          <img :src="item.imgUrl" alt="" />
          <video :src="item.videoUrl" autoplay loop muted></video>

          <h4>{{ item.title }}</h4>
          <div class="up-intro" @click="toUpInfo(item.username)">
            <div class="up-logo">
              <i class="iconfont icon-shipintiaodu"></i>
            </div>
            <div class="author">{{ item.author }}</div>
            <div class="time">{{ item.release_time }}</div>
          </div>
        </a>
      </li>
    </ul>
    <div class="empty" v-else>
      <img src="@/assets/notFind.gif" alt="" />
      <p>视频空空如也~~</p>
    </div>
  </div>
  <!-- 搜索列表 end -->
</template>

<style scoped>
/* 搜索列表 */
.search-list {
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
  width: 72%;
  /* height: 600px;
  background-color: slateblue; */
}

.search-list .empty {
  font-size: 20px;
  color: #fff;
  /* background-color: slateblue; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-list .empty img {
  transform: scaleX(-1);
}

.search-list .videoList {
  width: 100%;
  /* height: 200px; */
  /* background: palegoldenrod; */
  /* margin-top: 15px; */
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 35px 29px;
}

/* .search-list .videoList li {
    margin-right: 10px;
} */

.search-list .videoList li a {
  display: block;
  width: 320px;
  /* height: 200px; */
  /* background-color: springgreen; */
  position: relative;
}

.search-list .videoList li a img {
  width: 100%;
  height: 178px;
  /* object-fit: cover; */
  border-radius: 6px;
}

.search-list .videoList li a video:hover {
  opacity: 1;
}

.search-list .videoList li a video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 178px;
  /* height: 150px; */
  object-fit: cover;
  opacity: 0;
  border-radius: 6px;
}

.search-list .videoList li a h4 {
  color: #fff;
  margin-top: 10px;
  font-size: 15px;
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.search-list .videoList li a .up-intro {
  color: #fff;
  margin-top: 10px;
  display: flex;
}

.search-list .videoList li a .up-intro div {
  margin-right: 10px;
}

.search-list .videoList li a .videoIntro {
  color: #fff;
}
</style>
