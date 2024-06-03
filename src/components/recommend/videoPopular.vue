<script setup>
import { ref } from 'vue'
import { getDynamicVideo } from '@/api/video'
import { onMounted } from 'vue'

onMounted(() => {
  getPopularList()
})
const popularList = ref([])
const getPopularList = async () => {
  const {
    data: { data }
  } = await getDynamicVideo()
  popularList.value = data.slice(0, 6)
  popularList.value = popularList.value.map((obj) => ({
    ...obj,
    tags: obj.tags.split(','),
    release_time: obj.release_time ? obj.release_time.substr(5, 5) : ''
  }))
  console.log(popularList.value)
}

// 轮播图
// 初始数据
const swiperList = [
  {
    url: 'https://puui.qpic.cn/vpic_cover/c3505cjp5at/c3505cjp5at_hz.jpg/1280',
    title: '爽剧回归，普通人复仇成功了吗？',
    color: 'rgb(143, 84, 21)'
  },
  {
    url: 'https://p9.itc.cn/q_70/images03/20221204/63b4ee02b4d44c18bb00c909ea98c9ea.png',
    title: '从《长风渡》中感悟“仁义礼智信孝”',
    color: 'rgb(111, 104, 68)'
  },
  {
    url: 'https://p1.itc.cn/images01/20230204/5f81c4f6d3d64ea8b75e56172c41a9a5.jpeg',
    title: '乡村之美丨去有风的地方 给生活加点甜',
    color: 'rgb(36, 31, 33)'
  },
  {
    url: 'https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/baike/pic/item/6c63514ae611197c08f7ef32.jpg',
    title: '注定会相爱，却也注定会分开。',
    color: 'rgb(82, 98, 99)'
  },
  {
    url: 'https://pic.rmb.bdstatic.com/bjh/f98ff341abb4ccbd645bd1f0424fee697675.jpeg@h_1280',
    title: '只有你想见我的时候,我们的见面才有意义!',
    color: 'rgb(24, 61, 82)'
  },
  {
    url: 'https://img2.baidu.com/it/u=2120574858,884555531&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
    title: '在最好的年华，为最热爱的事业献身，抛头颅洒热血，很燃。',
    color: 'rgb(166, 131, 143)'
  },
  {
    url: 'https://img1.baidu.com/it/u=4013600335,220156644&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
    title: 'My name is Barry Allen and i am the fastest man alive.',
    color: 'rgb(63, 35, 33)'
  },
  {
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F1f030e72-dbc2-4542-9d21-5bba3e92bea0%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1697032349&t=833fb74b0ade5e33142811c923a82be8',
    title: '猜想：谁能打败灭霸拯救世界？',
    color: 'rgb(50, 35, 54)'
  }
]

console.log('sL', swiperList.value)
</script>

<template>
  <div>
    <!-- 猜你喜欢 start -->
    <div class="video_popular">
      <!-- 左侧轮播图 -->
      <div class="slider">
        <div class="slider-wrapper">
          <!-- <img src="@/assets/bj2.jpg" alt="" /> -->
          <img :src="swiperList[1].url" alt="" />
        </div>
        <div class="slider-footer">
          <!-- <p>对人类来说会不会太超前了？</p> -->
          <p>{{ swiperList[1].title }}</p>
          <ul class="slider-indicator">
            <li></li>
            <li class="active"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div class="toggle">
            <button class="prev">&lt;</button>
            <button class="next">&gt;</button>
          </div>
        </div>
      </div>
      <!-- 右侧视频推荐 -->
      <div class="recommend">
        <ul class="recommend-list">
          <popularItem :popularList="popularList"></popularItem>
        </ul>
      </div>
    </div>
    <!-- 猜你喜欢 end -->
  </div>
</template>

<style scoped>
/* 视频推荐 */
.video_popular {
  /* background: url('../images/marc3.jpg') 0 no-repeat; */
  width: 100%;
  /* height: 100vh; */
  background-size: cover;
  background-position: center;
  /* background-attachment: fixed; */
  /* background: #242131; */
  position: relative;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
}

/* .video_popular .dot {
    position: absolute;
    top: -100px;
    left: 0;
    width: 300px;
    height: 300px;
    opacity: 0.6;
    z-index: -1;
} */

.slider {
  /* position: absolute;
    top: 10%;
    left: 5%; */
  width: 680px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 5%;
  background-color: #fff;
}

.slider-wrapper {
  width: 100%;
  height: 410px;
}

.slider-wrapper img {
  width: 100%;
  height: 100%;
  display: block;
}

.slider-footer {
  height: 90px;
  background-color: rgb(100, 67, 68);
  padding: 12px 12px 0 12px;
  position: relative;
}

.slider-footer .toggle {
  position: absolute;
  right: 0;
  top: 20px;
  display: flex;
}

.slider-footer .toggle button {
  margin-right: 12px;
  width: 28px;
  height: 28px;
  appearance: none;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}

.slider-footer .toggle button:hover {
  background: rgba(255, 255, 255, 0.2);
}

.slider-footer p {
  margin: 5px 0;
  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;
}

.slider-indicator {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
}

.slider-indicator li {
  width: 8px;
  height: 8px;
  margin: 4px;
  border-radius: 50%;
  background: #fff;
  opacity: 0.4;
  cursor: pointer;
}

.slider-indicator li.active {
  width: 12px;
  height: 12px;
  opacity: 1;
}

.recommend {
  width: 980px;
  height: 500px;
  /* background-color: pink; */
  margin-top: 5%;
  margin-bottom: 3%;
  margin-left: 10px;
}

.recommend .recommend-list {
  width: 100%;
  height: 100%;
  /* background-color: aquamarine; */
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 25px 10px;
}
</style>
