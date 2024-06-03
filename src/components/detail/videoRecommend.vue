<script setup>
defineProps({
  sameTypeList: Array
})
</script>
<template>
  <!-- 推荐列表 start -->
  <div class="recommend w">
    <!-- 左边-猜你喜欢 -->
    <div class="guess-like">
      <h3>猜你喜欢</h3>
      <ul>
        <li v-for="(item, index) in sameTypeList.slice(0, 10)" :key="item.id">
          <a href="javascript:;" @click="playVideo(index)">
            <div class="image">
              <img :src="item.cover" alt="" />
              <p v-if="item.type === 'movies'">全1集</p>
              <p v-else>更新至{{ item.episodes }}集</p>
              <div class="score">{{ item.score }}分</div>
              <div class="mask"></div>
            </div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.info }}</p>
          </a>
        </li>
      </ul>
    </div>
    <!-- 右边-排行榜 -->
    <div class="ranking-list">
      <h3>热播排行</h3>
      <div class="more">更多&gt;</div>
      <div class="split-line"></div>
      <div class="show">
        <!-- <img :src="sameTypeList[0].cover" alt="" /> -->
        <div class="show-intro">
          <!-- <h4>{{ sameTypeList[0].title }}</h4> -->
          <ul class="si">
            <li>
              <ul class="row">
                <li>
                  <!-- <span>分类:</span><a href="#">{{ sameTypeList[0].type }}</a> -->
                </li>
                <li>
                  <!-- <span>地区:</span><a href="#">{{ sameTypeList[0].pos }}</a> -->
                </li>
              </ul>
            </li>
            <li><span>主演:</span><a href="#">未知</a></li>
          </ul>
        </div>
      </div>
      <ul class="rl">
        <li v-for="(item, index) in sameTypeList.slice(0, 10)" :key="item.id">
          <a href="javascript:;" @click="rankVideo(index)">
            <i>{{ index + 1 }}</i
            >{{ item.title }}
            <span>更新至{{ item.episodes }}集</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <!-- 推荐列表 end -->
</template>
<style scoped>
.recommend {
  margin-top: 40px;
  height: 650px;
  /* background-color: #00d4ff; */
  display: flex;
}

.recommend .guess-like {
  width: 850px;
  padding: 10px 10px 10px 0;
}

.recommend .guess-like h3 {
  font-size: 23px;
  color: #fff;
}

.recommend .guess-like ul {
  margin-top: 20px;
  /* background: greenyellow; */
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 15px;
}

.recommend .guess-like ul li a {
  display: block;
  height: 280px;
  color: #fff;
  /* background-color: #23a3d7; */
  border-radius: 8px;
}

.recommend .guess-like ul li a .image {
  height: 220px;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
}

.recommend .guess-like ul li a .image img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}

.recommend .guess-like ul li a .image p {
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

.recommend .guess-like ul li a .image .score {
  position: absolute;
  top: 8px;
  left: 0;
  width: 50px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 0 8px 8px 0;
  /* background-color: #f96306; */
  background-color: #2f92f4;
  z-index: 5;
}

.recommend .guess-like ul li a .image .mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  opacity: 0;
}

.recommend .guess-like ul li a .image:hover .mask {
  opacity: 1;
}

.recommend .guess-like ul li a h4 {
  font-size: 15px;
  margin: 5px 0;
}

.recommend .guess-like ul li a p {
  font-size: 12px;
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.recommend .ranking-list {
  position: relative;
  width: 350px;
  height: 650px;
  /* background-color: blueviolet; */
  padding: 10px 20px;
  overflow: hidden;
}

.recommend .ranking-list h3 {
  font-size: 23px;
  color: #fff;
}

.recommend .ranking-list .more {
  position: absolute;
  top: 3%;
  right: 5%;
  color: #ddd;
}

.recommend .ranking-list .split-line {
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
  margin: 16px 0;
}

.recommend .ranking-list .show {
  width: 100%;
  height: 120px;
  /* background: skyblue; */
  display: flex;
}

.recommend .ranking-list .show img {
  border-radius: 4px;
}

.recommend .ranking-list .show .show-intro {
  margin-left: 10px;
}

.recommend .ranking-list .show .show-intro span {
  color: #ddd;
  margin-right: 0.3125rem;
}

.recommend .ranking-list .show .show-intro .si li {
  margin-top: 15px;
}

.recommend .ranking-list .show .show-intro .si li a {
  color: #fff;
}

.recommend .ranking-list .show .show-intro .si li:first-child {
  margin-top: 0;
}

.recommend .ranking-list .show h4 {
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  margin: 15px 0;
}

.recommend .ranking-list .show .row {
  display: flex;
}

.recommend .ranking-list .show .row li:nth-child(2) {
  margin-left: 20px;
  margin-top: 0;
}

.recommend .ranking-list .rl {
  margin-top: 20px;
}

.recommend .ranking-list .rl li {
  margin-top: 12px;
}

.recommend .ranking-list .rl li a {
  position: relative;
  display: block;
  height: 30px;
  /* background: yellowgreen; */
  line-height: 30px;
  font-size: 16px;
  color: #fff;
}

.recommend .ranking-list .rl li a:hover {
  color: #0896f4;
}

.recommend .ranking-list .rl li a i {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #848383;
  color: #fff;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  border-radius: 3px;
  margin-right: 10px;
}

.recommend .ranking-list .rl li:first-child a i {
  background: red;
}

.recommend .ranking-list .rl li:nth-child(2) a i {
  background: #ff7701;
}

.recommend .ranking-list .rl li:nth-child(3) a i {
  background: #ffb400;
}

.recommend .ranking-list .rl li a span {
  position: absolute;
  right: 0;
  font-size: 14px;
  color: #ddd;
}
</style>
