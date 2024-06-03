<script setup>
import { useVideoStore } from '@/stores'
import { onMounted } from 'vue'
const videoStore = useVideoStore()
onMounted(() => {
  videoStore.getTelevisionList()
  videoStore.getFilmList()
  videoStore.getAnimationList()
})
</script>

<template>
  <div>
    <!-- 视频展示柜  -->
    <videoShow></videoShow>
    <!-- 流行视频 -->
    <videoPopular></videoPopular>
    <!-- 热门视频 -->
    <videoHot></videoHot>
    <!-- 电视剧 -->
    <videoStyle :videoList="videoStore.televisionList.slice(0, 7)"
      >电视剧</videoStyle
    >
    <!-- 电影 -->
    <videoStyle :videoList="videoStore.filmList.slice(0, 7)">电影</videoStyle>
    <!-- 动漫 -->
    <videoStyle :videoList="videoStore.animationList.slice(0, 7)"
      >动漫</videoStyle
    >
    <!-- 动态 -->
    <videoDynamics></videoDynamics>
    <!-- 版权 -->
    <videoCopyright></videoCopyright>
  </div>
</template>

<style scoped></style>
