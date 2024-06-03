<script setup>
import { ref } from 'vue'
import { usePlayStore, useUserStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { remarkPublishService } from '@/api/play'
import { ElMessage } from 'element-plus'
const playStore = usePlayStore()
const userStore = useUserStore()
const { remarkList } = storeToRefs(playStore)
const { userInfo } = storeToRefs(userStore)
onMounted(() => {
  playStore.getAllComment()
})
defineProps({
  play: Object
})
const getPublishTime = () => {
  const date = new Date()
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  h = h < 10 ? '0' + h : h
  m = m < 10 ? '0' + m : m
  s = s < 10 ? '0' + s : s
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${h}:${m}:${s}`
}
const remarkInt = ref('')
const remarkPublish = async () => {
  console.log('用户信息', userInfo.value)
  const { username, nickname, user_pic } = userInfo.value
  console.log(getPublishTime())
  const res = await remarkPublishService({
    username,
    nickname,
    user_pic,
    remark: remarkInt.value,
    publish_time: getPublishTime()
  })
  console.log('发布信息:', res)
  ElMessage.success(res.data.message)
  remarkInt.value = ''
}
</script>
<template>
  <!-- left-video start -->
  <div class="left-content">
    <div v-if="play.type === 'dynamics'">
      <h3>{{ play.title }}</h3>
      <div class="play-num">
        <div class="playback-volume">
          <i class="iconfont icon-icon-shipinbofang"></i>{{ play.playnum }}
        </div>
        <div class="time">{{ play.release_time }}</div>
      </div>
    </div>
    <div class="video">
      <video
        :src="play.videoUrl"
        :muted="false"
        autoplay
        controls
        id="mainVideo"
      ></video>
      <!-- <div class="marquee">
                <marquee loop="5">小飞棍来喽~</marquee>
            </div> -->
      <canvas id="canvas"></canvas>
    </div>
    <div class="barrage">
      <div class="view-number">110人正在看,已装填100条弹幕</div>
      <div class="barrage-operate">
        <span id="color">
          <img src="@/assets/绘画-copy.png" alt="" />
          <input type="color" name="" id="colorIpt" />
        </span>
        <span id="font"><input type="range" id="fontIpt" /></span>
      </div>
      <div class="input-barrage">
        <input id="ipt" type="text" placeholder="发个友善的弹幕见证当下" />
        <button id="submit">发布</button>
      </div>
    </div>
    <ul class="interact">
      <li>
        <span><i class="iconfont icon-dianzan"></i></span>{{ play.zank }}
      </li>
      <li>
        <span><i class="iconfont icon-pinglun"></i></span>{{ play.commentnum }}
      </li>
      <li>
        <span><i class="iconfont icon--xingxingtuijian"></i></span>1000
      </li>
      <li>
        <span><i class="iconfont icon-zhuanfa"></i></span>1000
      </li>
    </ul>
    <div class="text-description">
      <p id="tx-des">{{ play.info }}</p>
      <a href="javascript:;" id="expand">展开更多</a>
    </div>
    <ul class="tags">
      <li v-for="item in play.tags" :key="item.tags">
        <a href="#">{{ item }}</a>
      </li>
    </ul>
    <div class="comment" v-if="true">
      <h3>
        评论 <span>{{ remarkList.length }}</span>
      </h3>
      <div class="publish">
        <div class="photo">
          <img :src="userInfo.user_pic" />
        </div>
        <input
          v-model="remarkInt"
          type="text"
          name="publish"
          id="inputPublish"
          placeholder="有爱评论,说点什么~~"
        />
        <button id="btnPublish" @click="remarkPublish()">发布</button>
      </div>
      <ul class="remark-list">
        <li v-for="item in remarkList" :key="item.id">
          <div class="photo">
            <img :src="item.user_pic" />
          </div>
          <div class="remark">
            <h4>{{ item.nickname }}</h4>
            <p>{{ item.remark }}</p>
            <div class="inter">
              <span>{{ item.publish_time }}</span>
              <span class="like"
                ><i class="uil uil-heart"></i>{{ item.like }}</span
              >
              <span @click="replyEx()"
                ><i class="uil uil-comment-dots"></i>回复</span
              >
            </div>
            <div class="reply" v-show="item.reply > 0">
              <div class="rl-list">
                <div class="photo">
                  <img src="@/assets/lx2.jpg" />
                </div>
                <div class="rl-remark">
                  <h4>老许</h4>
                  <p>
                    其实减肥很容易的，熬夜熬到两三点，早上不吃饭，中午起来吃饭（汤无所谓，米饭面条等等不要超过一碗），然后下午（如果困的话要坚持，等四五点睡，然后晚饭也不用吃了）（如果不困晚饭可以少吃点）（多吃水果，杜绝饼干面包蛋糕）[吃瓜]
                  </p>
                  <div class="inter">
                    <span>2022-07-25 05:25:44</span>
                    <span><i class="uil uil-heart"></i>100</span>
                    <span><i class="uil uil-comment-dots"></i>回复</span>
                  </div>
                </div>
              </div>
              <div class="rl-list">
                <div class="photo">
                  <img src="@/assets/lx1.jpg" />
                </div>
                <div class="rl-remark">
                  <h4>marc223</h4>
                  <p>
                    其实减肥很容易的，熬夜熬到两三点，早上不吃饭，中午起来吃饭（汤无所谓，米饭面条等等不要超过一碗），然后下午（如果困的话要坚持，等四五点睡，然后晚饭也不用吃了）（如果不困晚饭可以少吃点）（多吃水果，杜绝饼干面包蛋糕）[吃瓜]
                  </p>
                  <div class="inter">
                    <span>2022-07-25 05:25:44</span>
                    <span><i class="uil uil-heart"></i>100</span>
                    <span><i class="uil uil-comment-dots"></i>回复</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="show-more" v-show="item.reply > 0">
              共{{ item.reply }}条回复,<span @click="replyEx()" id="djck"
                >点击查看</span
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- left-video end -->
</template>
<style scoped>
/* =============左边视频模块 start=========== */
.left-content {
  width: 1130px;
  /* height: 1600px; */
  /* background: skyblue; */
  margin-top: 6%;
  /* padding: 5px 0; */
}

.left-content h3 {
  font-size: 20px;
  color: #fff;
  /* background: springgreen; */
}

.left-content .play-num {
  display: flex;
  color: #fff;
  margin: 10px 0;
}

.left-content .play-num .playback-volume {
  margin-right: 20px;
  /* background-color: pink; */
}

.left-content .play-num .playback-volume i {
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  margin-right: 5px;
  /* background-color: bisque; */
}

.left-content .play-num .time {
  /* background-color: slateblue; */
  display: flex;
  align-items: center;
}

.left-content .video {
  display: flex;
  margin-top: 20px;
  /* background: blueviolet; */
  position: relative;
}

.left-content .video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* .left-content .video .marquee {
    position: absolute;
    top: 10px;
    width: 100%;
    color: #fff;
    font-size: 15px;
} */
.left-content .video #canvas {
  position: absolute;
  top: 10px;
  left: 0;
  /* background-color: #009dec; */
  opacity: 0.8;
}

.left-content .barrage {
  /* height: 50px; */
  /* background: #151221; */
  display: flex;
  align-items: center;
  color: #fff;
  position: relative;
  padding: 10px 0;
  border-bottom: 1px solid #666464;
}

.left-content .barrage .view-number {
  margin-left: 15px;
}

.left-content .barrage .barrage-operate {
  margin-left: 90px;
  display: flex;
}

.left-content .barrage .barrage-operate span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  /* background-color: #3e99fa; */
  margin-right: 20px;
}

.left-content .barrage .barrage-operate #color {
  position: relative;
}

.left-content .barrage .barrage-operate #color img {
  position: absolute;
  pointer-events: none;
  width: 100%;
  height: 100%;
}

.left-content .barrage .barrage-operate #font {
  width: 50px;
}

#fontIpt {
  width: 100%;
}

#colorIpt {
  opacity: 0;
  border: none;
  outline: none;
  /* border-radius: 50%; */
}

/* ::-webkit-color-swatch-wrapper {
    background: #242131;
} */

.left-content .barrage .input-barrage {
  width: 700px;
  height: 35px;
  /* background: palevioletred; */
  position: absolute;
  right: 15px;
  display: flex;
  align-items: center;
}

.left-content .barrage .input-barrage input {
  padding: 8px;
  width: 640px;
  border-radius: 8px 0 0 8px;
  padding-left: 15px;
}

.left-content .barrage .input-barrage button {
  background: #00aeec;
  border: none;
  color: #fff;
  padding: 8px 15px;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
}

.left-content .interact {
  display: flex;
  /* background: #151221; */
  padding: 10px 0;
  border-bottom: 1px solid #666464;
  margin-top: -1px;
}

.left-content .interact li {
  margin-left: 40px;
  display: flex;
  /* background-color: red; */
  align-items: center;
  color: #fff;
}

.left-content .interact li:first-child {
  margin-left: 0;
}

.left-content .interact li span {
  display: flex;
  width: 40px;
  height: 40px;
  /* font-size: 26px; */
  /* background-color: aqua; */
  align-items: center;
  justify-content: center;
}

.left-content .interact li span i {
  font-size: 26px;
}

.left-content .text-description {
  /* background: #151221; */
  /* background: pink; */
  padding: 20px 0;
  color: #fff;
  border-bottom: 1px solid #666464;
}

.left-content .text-description p {
  display: flex;

  /* background: 151221; */
  overflow: hidden;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.left-content .text-description p.expand {
  -webkit-line-clamp: 6;
}

.left-content .text-description a {
  display: block;
  color: #ddd;
  width: 60px;
  /* background-color: skyblue; */
  margin-top: 15px;
}

.left-content .tags {
  /* height: 60px; */
  /* background: #151221; */
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #666464;
}

.left-content .tags li {
  margin-left: 25px;
}

.left-content .tags li:first-child {
  margin-left: 0;
}

.left-content .tags li a {
  display: block;
  padding: 5px 20px;
  background: #32323c;
  color: #fff;
  border-radius: 12px;
}

.left-content .comment {
  padding: 10px 0;
  /* background: pink; */
  margin-top: 20px;
}

.left-content .comment h3 span {
  font-size: 13px;
  color: #ddd;
}

/* --------发布评论 start--------- */
.left-content .comment .publish {
  /* background: skyblue; */
  padding: 20px 0 10px 0;
  display: flex;
  /* border-bottom: 1px solid #ddd; */
}

.left-content .comment .publish .photo {
  width: 40px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
}

.left-content .comment .publish .photo img {
  display: block;
  width: 100%;
}

.left-content .comment .publish input {
  margin-left: 20px;
  width: 980px;
  border-radius: 8px;
  padding-left: 10px;
}

.left-content .comment .publish button {
  margin-left: 20px;
  border: none;
  background-color: #00aeec;
  color: #fff;
  padding: 0 20px;
  border-radius: 10px;
  cursor: pointer;
}

/* --------发布评论 end--------- */

/* --------评论列表 start--------- */
.left-content .comment .remark-list {
  height: 700px;
  /* background: springgreen; */
  margin-top: 10px;
}

.left-content .comment .remark-list li {
  display: flex;
  /* margin-top: 20px; */
  padding: 20px 0;
  /* background-color: sandybrown; */
  /* border-bottom: 1px solid #ddd; */
}

.left-content .comment .remark-list li .photo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.left-content .comment .remark-list li .photo img {
  display: block;
  width: 100%;
}

.left-content .comment .remark-list li .remark {
  width: 1070px;
  /* background-color: #00aeec; */
  margin-left: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}

.left-content .comment .remark-list li .remark h4 {
  color: #fff;
}

.left-content .comment .remark-list li .remark p {
  display: flex;
  /* background-color: pink; */
  padding: 10px 0;
}

.left-content .comment .remark-list li .remark .inter span {
  margin-right: 20px;
  cursor: pointer;
}

.left-content .comment .remark-list li .remark .inter span:hover {
  color: #009dec;
}

.likeColor {
  color: #009dec;
}

/* --------评论列表 start--------- */
.left-content .comment .remark-list li .remark .reply {
  /* height: 320px; */
  /* background-color: slateblue; */
  padding: 20px 0;
  /* display: flex; */
  color: #fff;
}

.left-content .comment .remark-list li .remark .reply .rl-list {
  display: flex;
  /* background-color: #00aeec; */
  margin-bottom: 20px;
}

.left-content .comment .remark-list li .remark .reply .rl-list:last-child {
  margin-bottom: 0;
}

.left-content .comment .remark-list li .remark .reply .photo {
  width: 30px;
  height: 30px;
}

.left-content .comment .remark-list li .remark .reply .rl-remark {
  width: 1030px;
  margin-left: 10px;
  /* height: 120px; */
  /* background-color: #00aeec; */
}

/* --------评论列表 end--------- */

/* -----------更多 start------------ */
.left-content .comment .remark-list li .remark .show-more {
  color: #ddd;
  /* background: salmon; */
  /* margin-top: 10px; */
  cursor: pointer;
  margin-bottom: 10px;
}

.left-content .comment .remark-list li .remark .show-more span:hover {
  color: #009dec;
}

/* -----------更多 end------------ */
/* --------评论列表 end--------- */
/* =============左边视频模块 end=========== */
</style>
