<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
defineProps({
  play: Object,
  playList: Array
})
const emits = defineEmits(['changeId'])
const changeRender = (id, type) => {
  emits('changeId', id)
  router.push({
    path: '/video/play/',
    query: {
      id,
      type
    }
  })
}
</script>

<template>
  <!-- right-author start-->
  <div class="right-content">
    <!-- 简介 -->
    <a class="profile" v-if="play.type === 'dynamics'">
      <div class="profile-photo">
        <img :src="play.avatar" />
      </div>
      <div class="handle">
        <h4>{{ play.author }}</h4>
        <p class="text-muted">
          谢谢你的关注 热爱生活，努力向上，永远积极向上
          健身、知识、日常、吃、读书。 记录生活！
        </p>
        <button id="follow">+关注1235</button>
      </div>
    </a>
    <!-- 集数 -->
    <div class="episodes" v-if="play.type !== 'dynamics'">
      <div class="e-head">
        <h3>
          正片<span>(22/{{ play.episodes }})</span>
        </h3>
        <div class="auto-play">
          自动连播<i class="iconfont icon-shipintiaodu"></i>
        </div>
      </div>
      <ul class="e-content">
        <li v-for="(item, index) in play.episodes" :key="item">
          <a href="#">{{ index + 1 }}</a>
        </li>
      </ul>
    </div>
    <!-- up列表 -->
    <div class="up-list" v-show="false">
      <div class="ul-head">
        <h3>优质复仇爽剧<span>(22/26)</span></h3>
        <div class="auto-play">
          自动连播<i class="iconfont icon-shipintiaodu"></i>
        </div>
      </div>
      <ul class="ul-content">
        <li v-for="item in 6" :key="item">
          <a href="#">
            <p>
              表面上是工作人员，没有接到“复仇委托”时，都是朝九晚五的打工人，实际上，他们却在公司地下藏着一个巨大的车辆改装间，一旦接到任务，他们便去地下改装间集合。
            </p>
            <span>04:25</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- next列表 -->
    <div class="next-play" v-if="true">
      <h3>接下来播放</h3>
      <div class="auto-play">
        自动连播<i class="iconfont icon-shipintiaodu"></i>
      </div>
      <ul class="nl-list">
        <li v-for="item in playList" :key="item.id">
          <router-link to="" @click="changeRender(item.id, item.type)">
            <div class="video">
              <img :src="item.imgUrl" alt="" />
              <p class="time">05:25</p>
              <video :src="item.videoUrl" muted autoplay loop></video>
            </div>
            <div class="intro">
              <h4>{{ item.title }}</h4>
              <div class="author">
                <span><i class="iconfont icon-shipintiaodu"></i></span
                >{{ item.author }}
              </div>
              <div class="pl-num">
                <span><i class="iconfont icon-dianzan"></i>100</span>
                <span><i class="iconfont icon-pinglun"></i>1000</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  <!-- right-author end-->
</template>

<style scoped>
/* =============右边作者模块 start=========== */
.right-content {
  width: 415px;
  /* width: 370px; */
  /* height: 600px; */
  /* background-color: slateblue; */
  margin-top: 6%;
  margin-left: 25px;
}

.right-content .profile {
  padding: 15px;
  background: #151221;
  border-radius: 16px;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  width: 100%;
}

.profile-photo {
  width: 55px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
}

.profile-photo img {
  display: block;
  width: 100%;
}

.right-content .profile .handle h4 {
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.right-content .profile .handle p {
  width: 260px;
  color: #ddd;
  /* background-color: pink; */
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.right-content .profile .handle button {
  margin-top: 8px;
  padding: 8px 20px;
  border: none;
  background: #00aeec;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
}

/* 集数 */
.episodes {
  margin-top: 1rem;
  background: #151221;
  padding: 20px;
  border-radius: 16px;
}

.episodes .e-head {
  display: flex;
  justify-content: space-between;
  /* height: 60px; */
  /* background-color: pink; */
  padding: 0 0 15px 0;
  border-bottom: 1px solid #ddd;
}

.episodes .e-head h3 {
  color: #fff;
  font-size: 15px;
}

.episodes .e-head h3 span {
  color: #ddd;
}

.episodes .e-head .auto-play {
  color: #ddd;
}

.episodes .e-head .auto-play i {
  display: inline-flex;
  width: 45px;
  /* background: skyblue; */
  justify-content: center;
  font-size: 18px;
}

.episodes .e-head h3 span {
  margin-left: 8px;
}

.episodes .e-content {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(55px, 1fr));
  grid-gap: 5px 15px;
}

.episodes .e-content li {
  margin-top: 20px;
}

.episodes .e-content li a {
  display: block;
  color: #fff;
  background: #32323c;
  line-height: 40px;
  /* padding: 0 10px; */
  text-align: center;
  border-radius: 8px;
}

.episodes .e-content li a:hover {
  color: #009dec;
  background: #1c1c20;
}

.episodes .e-content li:first-child a {
  color: #009dec;
  background: #1c1c20;
}

/* up列表 */
.up-list {
  margin-top: 1rem;
  background: #151221;
  padding: 20px;
  border-radius: 16px;
}

.up-list .ul-head {
  display: flex;
  justify-content: space-between;
  /* height: 60px; */
  /* background-color: pink; */
  padding: 0 0 15px 0;
  border-bottom: 1px solid #ddd;
}

.up-list .ul-head h3 {
  color: #fff;
  font-size: 15px;
}

.up-list .ul-head h3 span {
  color: #ddd;
}

.up-list .ul-head .auto-play {
  color: #ddd;
}

.up-list .ul-head .auto-play i {
  display: inline-flex;
  width: 45px;
  /* background: skyblue; */
  justify-content: center;
}

.up-list .ul-head h3 span {
  margin-left: 8px;
}

.up-list .ul-content li {
  margin-top: 20px;
}

.up-list .ul-content li a {
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  /* background: pink; */
}

.up-list .ul-content li a:hover p,
.up-list .ul-content li a:hover span {
  color: red;
}

.up-list .ul-content li a p {
  /* background-color: pink; */
  width: 200px;
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  transition: 0.3s;
}

.up-list .ul-content li a span {
  position: absolute;
  right: 0;
  transition: 0.3s;
  font-size: 15px;
  color: #ddd;
}

.next-play {
  position: relative;
  margin-top: 1rem;
  background: #151221;
  padding: 20px;
  border-radius: 16px;
}

.next-play h3 {
  color: #fff;
  font-size: 15px;
}

.next-play .auto-play {
  position: absolute;
  top: 20px;
  right: 20px;
  color: #ddd;
}

.next-play .auto-play i {
  display: inline-flex;
  width: 45px;
  /* background: skyblue; */
  justify-content: center;
}

.next-play .nl-list li {
  /* background-color: slateblue; */
  margin-top: 20px;
}

.next-play .nl-list li a {
  display: flex;
  height: 100px;
  color: #fff;
}

.next-play .nl-list li a .video {
  width: 170px;
  height: 100%;
  background: springgreen;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
}

.next-play .nl-list li a .video img {
  width: 100%;
  height: 100%;
}

.next-play .nl-list li a .video .time {
  position: absolute;
  bottom: 2%;
  right: 2%;
  padding: 0 3px;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.4);
}

.next-play .nl-list li a .video video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* display: none; */
  opacity: 0;
}

.next-play .nl-list li a .video video:hover {
  opacity: 1;
}

.next-play .nl-list li a .intro {
  /* background: #00aeec; */
  width: 195px;
  margin-left: 10px;
}

.next-play .nl-list li a .intro h4 {
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.next-play .nl-list li a .intro h4:hover {
  color: #00aeec;
}

.next-play .nl-list li a .intro .author {
  margin-top: 10px;
}

.next-play .nl-list li a .intro .author span {
  display: inline-flex;
  width: 20px;
  /* background: #fff; */
  justify-content: center;
  margin-right: 5px;
}

.next-play .nl-list li a .intro .pl-num {
  margin-top: 10px;
}

.next-play .nl-list li a .intro .pl-num span {
  margin-right: 10px;
}

/* =============右边作者模块 end=========== */
</style>
