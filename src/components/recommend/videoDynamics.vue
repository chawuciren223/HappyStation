<script setup>
import { ref } from 'vue'
import { getDynamicVideo } from '@/api/video'
import { onMounted } from 'vue'
const activeIndex = ref(0)
const handleClick = (activeIndex) => {
  activeIndex.value = activeIndex
}

onMounted(() => {
  getDynamicList()
})
const videoList = ref([])
const getDynamicList = async () => {
  const {
    data: { data }
  } = await getDynamicVideo()
  videoList.value = data.slice(0, 12)
  videoList.value = videoList.value.map((obj) => ({
    ...obj,
    tags: obj.tags.split(','),
    release_time: obj.release_time ? obj.release_time.substr(5, 5) : ''
  }))
  console.log('动态:', videoList.value)
}
</script>
<template>
  <!-- 动态 start-->
  <div class="dynamics">
    <div class="dynamics-nav">
      <h3>动态</h3>
      <ul>
        <li>
          <a
            href="javascript:;"
            @click="handleClick(0)"
            :class="{ btm: activeIndex === 0 }"
            >推荐</a
          >
        </li>
        <li>
          <a
            href="javascript:;"
            @click="handleClick(1)"
            :class="{ btm: activeIndex === 1 }"
            >生活</a
          >
        </li>
        <li>
          <a
            href="javascript:;"
            @click="handleClick(2)"
            :class="{ btm: activeIndex === 2 }"
            >游戏</a
          >
        </li>
        <li>
          <a
            href="javascript:;"
            @click="handleClick(3)"
            :class="{ btm: activeIndex === 3 }"
            >美食</a
          >
        </li>
        <li>
          <a
            href="javascript:;"
            @click="handleClick(4)"
            :class="{ btm: activeIndex === 4 }"
            >健身</a
          >
        </li>
        <li>
          <a
            href="javascript:;"
            @click="handleClick(5)"
            :class="{ btm: activeIndex === 5 }"
            >娱乐</a
          >
        </li>
      </ul>
    </div>
    <div class="dynamics-content">
      <div class="dynamics-item" v-show="activeIndex === 0">
        <ul class="dy-list">
          <dynamicItem :videoList="videoList"></dynamicItem>
        </ul>
      </div>
      <div class="dynamics-item" v-show="activeIndex === 1"></div>
      <div class="dynamics-item" v-show="activeIndex === 2"></div>
      <div class="dynamics-item" v-show="activeIndex === 3"></div>
      <div class="dynamics-item" v-show="activeIndex === 4"></div>
      <div class="dynamics-item" v-show="activeIndex === 5"></div>
    </div>
  </div>
  <!-- 动态 end-->
</template>
<style>
.dynamics {
  position: relative;
  width: 100%;
  height: 620px;
  /* background-color: #2a323a; */
}

.dynamics .dynamics-nav {
  display: flex;
  align-items: center;
}

.dynamics .dynamics-nav h3 {
  position: absolute;
  top: 5%;
  left: 6%;
  font-size: 25px;
  color: #fff;
}

.dynamics .dynamics-nav ul {
  position: absolute;
  top: 5%;
  left: 10%;
  display: flex;
  justify-content: flex-start;
}

.dynamics .dynamics-nav ul li a {
  display: block;
  /* width: 180px;
    height: 220px; */
  /* background-color: blue; */
  color: #fff;
  font-size: 15px;
  padding: 10px 20px;
  transition: all 0.5s ease;
}

.dynamics .dynamics-nav ul li a.active {
  /* background-color: blueviolet; */
  border-bottom: 2px solid #fff;
}

.btm {
  border-bottom: 2px solid #fff;
}

.dynamics .dynamics-content {
  position: absolute;
  top: 15%;
  left: 6%;
}

.dynamics .dynamics-content .dynamics-item {
  position: relative;
  width: 1700px;
  height: 500px;
  /* background-color: pink; */
  /* display: none; */
}

.dynamics .dynamics-content .dynamics-item.active {
  display: block;
}
.dynamics-item .dy-list {
  position: absolute;
  top: 25%;
  left: 6%;
  display: flex;
  justify-self: flex-start;
  width: 100%;
  /* width: 89.1%; */
  /* background-color: pink; */
  /* overflow: hidden; */
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
</style>
