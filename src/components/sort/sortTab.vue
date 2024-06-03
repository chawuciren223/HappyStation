<script setup>
import { ref } from 'vue'
// 三个类型切换
const emits = defineEmits(['changeStyle'])
const activeIndex = ref('television')
const handleClick = (actives) => {
  activeIndex.value = actives
  emits('changeStyle', actives)
}
</script>
<template>
  <!-- 分类栏 start -->
  <div class="sort-tab">
    <div class="dot">
      <img src="@/assets/bjt.png" alt="" />
    </div>
    <div class="sort-tab-nav">
      <ul>
        <li>
          <a
            href="javascript:;"
            @click="handleClick('television')"
            :class="{ borderBtm: activeIndex === 'television' }"
            >电视剧</a
          >
        </li>
        <li>
          <a
            href=" javascript:;"
            @click="handleClick('movies')"
            :class="{ borderBtm: activeIndex === 'movies' }"
            >电影</a
          >
        </li>
        <li>
          <a
            href="javascript:;"
            @click="handleClick('animation')"
            :class="{ borderBtm: activeIndex === 'animation' }"
            >动漫</a
          >
        </li>
      </ul>
    </div>
    <div class="sort-tab-content">
      <div class="sort-tab-item" v-show="activeIndex === 'television'">
        <ul class="sort-nav-list">
          <sortTvItem></sortTvItem>
        </ul>
      </div>
      <div class="sort-tab-item" v-show="activeIndex === 'movies'">
        <ul class="sort-nav-list">
          <sortFilmItem></sortFilmItem>
        </ul>
      </div>
      <div class="sort-tab-item" v-show="activeIndex === 'animation'">
        <ul class="sort-nav-list">
          <sortAnimateItem></sortAnimateItem>
        </ul>
      </div>
    </div>
    <div class="dot">
      <img src="@/assets/bjt.png" alt="" />
    </div>
  </div>
  <!-- 分类栏 end -->
</template>

<style scoped>
.sort-tab {
  background: #151221;
  border-radius: 10px 10px 0 0;
  margin-top: 8%;
  padding: 20px 0;
  position: relative;
}

.dot {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  z-index: 0;
  pointer-events: none;
}

.dot img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.02;
}

.sort-tab .sort-tab-nav {
  display: flex;
  align-items: center;
  z-index: 10;
}

.sort-tab .sort-tab-nav ul {
  display: flex;
  justify-content: flex-start;
  margin-left: 25px;
}

.sort-tab .sort-tab-nav ul li a {
  display: block;
  color: #fff;
  font-size: 15px;
  padding: 10px 25px;
  transition: all 0.5s ease;
}

.sort-tab .sort-tab-nav ul li a:hover {
  color: #0baded;
}

.borderBtm {
  border-bottom: 2px solid #fff;
}

/* .sort-tab .sort-tab-content .sort-tab-item {
    background-color: pink;
    display: none;
} */

.sort-tab .sort-tab-content .sort-tab-item.active {
  display: block;
}

.container .sort-nav-list {
  /* margin-top: 8%; */
  padding: 25px;
  border-radius: 10px 10px 0 0;
}
</style>
