<script setup>
import { ref } from 'vue'
import { getShowVideo } from '@/api/video'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
onMounted(() => {
  getShowVideoList()
})
const videoShow = ref([])
const getShowVideoList = async () => {
  const {
    data: { data }
  } = await getShowVideo()
  videoShow.value = data.slice(0, 6)
  videoShow.value = videoShow.value.map((obj) => ({
    ...obj,
    tags: obj.tags.split(',')
  }))
  console.log('展示视频信息:', videoShow.value)
}
// const videoShow = [
//   {
//     showId: 0,
//     cover: '/src/assets/长风渡.jpg',
//     logo: '/src/assets/长风渡logo.png',
//     video: '/src/assets/长风渡.mp4',
//     name: '长风渡',
//     tags: '家国 情怀 爱情',
//     intro:
//       '愿以此身血肉,遮风挡雨护她绡无尘,鬓角无霜 愿君永如天上月，皎皎千古不染尘 愿我如长风，渡君行万里'
//   },
//   {
//     showId: 1,
//     cover: '/src/assets/xjn.jpg',
//     logo: '/src/assets/想见你logo.png',
//     video: '/src/assets/想见你.mp4',
//     name: '想见你',
//     tags: '奇幻 悬疑 爱情',
//     intro:
//       '2019年的现在，因为走不出王诠胜离开的思念，黄雨萱试图用一款可以找到世界上另一个自己的APP软件，找到另一个与王诠胜相似的男人，不料在照片中，却看到了另一个长得与自己非常相似的陈韵如。1998年的过去，陈韵如从昏迷中醒来，在她昏迷的这几天，她做了一个好长好长的梦，梦里的她，名字叫做黄雨萱。'
//   },
//   {
//     showId: 2,
//     cover: '/src/assets/qu.jpg',
//     logo: '/src/assets/去有风的地方logo.png',
//     video: '/src/assets/去有风的地方.mp4',
//     name: '去有风的地方',
//     tags: '田园 爱情 治愈',
//     intro:
//       '就觉得你这人刚刚好,刚刚好是我喜欢的类型,和你在一起的时候,每天都觉得非常开心，干什么都开心,不干什么也开心，开心到有点难过,因为我认识你的时间和地点,不是那么的刚刚好,我甚至有的时候有点后悔,因为我当时在北京的时候,明明很多次经过你工作的酒店,却从来没走进去过，如果我进去的话,我就能早点认识你, 或许我们之间就有另一种可能, 这些话，我本来想慢慢的烂在心里,但我想了很久，最后的最后,我想再送你一段记忆, 在海边，一个有风吹过的地方, 在晚霞和落日的见证下,有一个人，认真的喜欢过你。'
//   },
//   {
//     showId: 3,
//     cover: '/src/assets/The Flash.jpg',
//     logo: '/src/assets/flash-logo.png',
//     video: '/src/assets/flash.mp4',
//     name: '闪电侠',
//     tags: '科幻 异能 剧情',
//     intro:
//       '巴里·艾伦在11岁的时候，他的母亲死于一次离奇的恐怖事故，而他父亲更被错误指认为凶手，而他父亲的挚友，警探乔·韦斯特领养了他。巴里·艾伦成为一个聪明﹑上进﹑讨喜的CSI鉴证分析员，与此同时他为了调查母亲死亡的真相，于是追踪起各种都市传说，也同时见识了先进的科技。在一次事故中，巴里·艾伦被神秘的闪电击中，从此也发现自己的身体发生了惊人的变化。'
//   },
//   {
//     showId: 4,
//     cover: 'https://img5.mtime.cn/pi/2018/07/23/150736.34621317_1000X1000.jpg',
//     logo: '/src/assets/thor.png',
//     video: '/src/assets/雷神.mp4',
//     name: '雷神',
//     tags: '科幻 异能 热血',
//     intro:
//       '拥有强大神力的雷神托尔（Thor），但是他自大鲁莽的行为掀起了一场古老的战争，因此被贬入凡间作为惩罚，被迫与人类一同生活。托尔必须学会如何成为一个真正的英雄，才能对抗来自神界的强大黑暗势力。'
//   }
// ]
const videoPreIntro = ref([])
const changebg = async (vid) => {
  console.log(vid)
  setTimeout(() => {
    videoPreIntro.value = videoShow.value.find((item) => vid === item.id)
  }, 1000)
  console.log(videoPreIntro.value)
}
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
  <div>
    <!-- 视频展示柜 start -->
    <div class="video_show">
      <div class="tab-nav">
        <ul>
          <li
            v-for="item in videoShow"
            :key="item.showId"
            @mouseover="changebg(item.id)"
          >
            <a href="javascript:;" class="active">
              <img :src="item.cover" alt="" data-id="0" />
              <h3 data-id="0">{{ item.title }}</h3>
            </a>
            <div class="mask"></div>
          </li>
        </ul>
      </div>
      <div class="tab-container">
        <div class="item active">
          <video
            :src="videoPreIntro.videoUrl || '/src/assets/长风渡.mp4'"
            autoplay
            loop
            muted
          ></video>
          <div class="info">
            <div class="name">
              <img
                :src="videoPreIntro.logo || '/src/assets/长风渡logo.png'"
                alt=""
              />
            </div>
            <div class="intro">
              <p>{{ videoPreIntro.tags || '家国 情怀 爱情' }}</p>
              <p>
                {{
                  videoPreIntro.intro ||
                  '愿以此身血肉,遮风挡雨护她绡无尘,鬓角无霜 愿君永如天上月，皎皎千古不染尘 愿我如长风，渡君行万里'
                }}
              </p>
            </div>
            <div class="play">
              <div class="triangle"></div>
              <button
                type="button"
                class="btnPlay1"
                @click="playVideo(videoPreIntro.id, videoPreIntro.type)"
              >
                播放正片
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 视频展示柜 end -->
  </div>
</template>

<style scoped>
/* 视频展示 */
.video_show {
  /* background: url('../images/bz.jpg') 0 no-repeat; */
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  /* background-attachment: fixed; */
  position: relative;
  overflow: hidden;
}

.video_show .tab-nav {
  position: absolute;
  bottom: 5%;
  right: 5%;
  /* width: 500px; */
  /* height: 300px; */
  /* background-color: pink; */
  overflow: hidden;
  z-index: 5;
}

.tab-nav ul {
  display: flex;
  justify-content: flex-end;
}

.tab-nav ul li {
  position: relative;
  list-style: none;
  margin-left: 10px;
}

.tab-nav ul li a {
  display: block;
  width: 130px;
  height: 220px;
  text-decoration: none;
  /* background-color: skyblue; */
  /* border-radius: 5px; */
}

/* .tab-nav ul li a.active {
    border: 1px solid #3653fa;
} */

.tab-nav ul li a img {
  width: 100%;
  height: 180px;
  border-radius: 10px;
}

.tab-nav ul li a img:hover {
  border: 2px solid #fff;
}

.tab-nav ul li a h3 {
  height: 30px;
  color: #fff;
  text-align: center;
  line-height: 30px;
  margin-top: 5px;
  /* background-color: greenyellow; */
}

.tab-nav ul li a h3:hover {
  color: #3e99fa;
}

/* .tab-nav ul li .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
    display: block;
}

.tab-nav ul li .mask:hover {
    display: none;
} */

.tab-container {
  position: absolute;
  top: 0;
  left: 0;
  /* background-color: pink; */
  display: flex;
  width: 100%;
  height: 100%;
}

.tab-container .item {
  position: relative;
  width: 100%;
  height: 100%;
  /* display: none; */
  transition: opacity 0.5s;
}

/* .tab-container .item.active {
  display: block;
} */

.tab-container .item video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tab-container .item .info {
  position: absolute;
  bottom: 8%;
  left: 5%;
  width: 500px;
  height: 350px;
  /* background-color: blueviolet; */
  z-index: 3;
}

.info .name {
  width: 350px;
  height: 150px;
  /* background-color: #000; */
  line-height: 150px;
}

.info .intro {
  width: 380px;
  height: 120px;
  /* background-color: #000; */
  margin-top: 10px;
  padding-top: 5px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  /* 根据业务需求设置第几行显示省略号 */
  -webkit-line-clamp: 3;
}

.info .intro p {
  font-size: 22px;
  color: #ffffff;
  margin-top: 10px;
}

.info .play {
  position: relative;
  width: 180px;
  height: 60px;
  margin-top: 20px;
}

.info .play button,
.hot-show .play button,
.show .play button {
  width: 100%;
  height: 100%;
  color: #ffffff;
  font-size: 20px;
  border: none;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.3);
  padding-left: 10px;
}

.info .play button:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

.info .play .triangle,
.hot-show .play .triangle,
.show .play .triangle {
  position: absolute;
  top: 50%;
  left: 16%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 12px solid #ffffff;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
}
</style>
