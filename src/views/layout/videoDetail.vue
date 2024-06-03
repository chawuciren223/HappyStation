<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { usePlayStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
const playStore = usePlayStore()
const route = useRoute()
const vId = ref(+route.query.id)
const vType = ref(route.query.type)
console.log(vId.value, vType.value)
const { nowPlay, playList } = storeToRefs(playStore)
console.log('shuju', nowPlay)
onMounted(() => {
  playStore.getPlayRender(vType.value, vId)
  playStore.getPlayList(vType.value)
})
</script>

<template>
  <div class="app">
    <videoInfo :nowPlay="nowPlay"></videoInfo>
    <videoRecommend :sameTypeList="playList"></videoRecommend>
  </div>
</template>

<style scoped>
.app {
  position: relative;
  background: #242131;
}

.dot {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 440px;
  right: 0;
  z-index: -1;
  opacity: 0.05;
  /* background-color: pink; */
}

.dot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.w {
  width: 1200px;
  margin: 0 auto;
}

header {
  background: rgba(21, 18, 33, 0.9);
}

/* 评论 */
.comment {
  /* height: 300px; */
  /* background-color: blueviolet; */
  margin-top: 20px;
  padding: 20px 0;
  position: relative;
}

.comment h3 {
  font-size: 23px;
  color: #fff;
}

.comment .input-large-show {
  width: 850px;
  height: 160px;
  /* background-color: #fff; */
  border: 1px solid #ddd;
  margin-top: 20px;
  border-radius: 8px;
  color: #fff;
  padding: 20px;
}

.comment .publish {
  position: absolute;
  bottom: 55px;
  width: 850px;
  /* height: 80px; */
  /* background-color: #00d4ff; */
  display: flex;
  align-items: center;
  position: relative;
  padding: 5px 10px;
}

.comment .publish img {
  width: 35px;
  height: 35px;
  background: pink;
  border-radius: 50%;
  margin: 0 15px;
}

.comment .publish input {
  display: block;
  width: 250px;
  height: 35px;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 20px;
  color: #fff;
  background: #2a323a;
  background: none;
  line-height: 35px;
  padding-left: 15px;
  white-space: pre-line;
  overflow: hidden;
}

.comment .publish i {
  width: 25px;
  height: 25px;
  /* background-color: #ddd; */
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #ddd;
}

.comment .publish .number-words {
  position: absolute;
  right: 13%;
  color: #ddd;
}

.comment .publish .btn-publish {
  position: absolute;
  right: 2%;
  width: 80px;
  height: 35px;
  background: #ff5f00;
  border: none;
  border-radius: 30px 30px 30px 0;
  color: #fff;
}

/* .comment .remark-list {
    height: 600px;
    background-color: #00d4ff;
} */

.comment .remark-list ul li {
  display: flex;
  padding: 10px 0;
  /* margin-top: 20px; */
  /* background: pink; */
  /* margin-top: 50px; */
}

.comment .remark-list .head-sculpture {
  width: 50px;
  height: 50px;
  background-color: #f96306;
  border-radius: 50%;
  cursor: pointer;
}

.comment .remark-list .head-sculpture img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.comment .remark-list .remark {
  width: 770px;
  /* height: 300px; */
  /* background: springgreen; */
  margin-left: 15px;
  /* padding: 5px 0; */
}

.comment .remark-list .remark .rk-username {
  font-size: 20px;
  font-weight: 600;
}

.comment .remark-list .remark .rk-username a {
  color: #fff;
}

.comment .remark-list .remark .rk-username span {
  color: #ddd;
  font-size: 12px;
  margin-left: 20px;
}

.comment .remark-list .remark .rk-content {
  margin-top: 15px;
  font-size: 16px;
  color: #fff;
  /* background: pink; */
  /* line-height: 30px; */
}

.comment .remark-list .remark .rk-content .title {
  display: flex;
}

.comment .remark-list .remark .rk-content p {
  padding-left: 40px;
}

.comment .remark-list .remark .rk-content i {
  display: inline-block;
  width: 33px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 13px;
  border-radius: 10px;
  background: #f96306;
  cursor: pointer;
  margin-right: 10px;
}

.comment .remark-list ul li:first-child .rk-content i,
.comment .remark-list ul li:nth-child(2) .rk-content i,
.comment .remark-list ul li:nth-child(3) .rk-content i {
  background: #f61c54;
}

.comment .remark-list .remark .rk-content .title h4 {
  /* background-color: slateblue; */
  margin-bottom: 5px;
}

.comment .remark-list .remark .rk-content p {
  padding-left: 45px;
}

.comment .remark-list .remark .reply {
  /* width: 700px; */
  /* height: 100px; */
  background: #151221;
  border-radius: 8px;
  padding: 20px;
  margin-top: 25px;
}

.reply .rl-list {
  position: relative;
}

.reply .rl-list li {
  display: flex;
  flex-direction: column;
  /* background: pink; */
  margin-top: 20px;
}

.reply .rl-list li:first-child {
  margin-top: 0;
}

.reply .rl-list li .rl-u {
  color: #fff;
}

.reply .rl-list li .rl-u a {
  color: #fff;
  font-weight: 600;
  margin-right: 5px;
}

.reply .rl-list li .rl-u span {
  margin-left: 5px;
}

.reply .rl-list li .rl-i {
  display: flex;
  margin-top: 20px;
  color: #fff;
}

.reply .rl-list li .rl-i p {
  margin-left: 20px;
  cursor: pointer;
}

.reply .rl-list li .rl-i p:hover {
  color: red;
}

.reply .rl-list li .rl-i p:first-child {
  margin-left: 0;
}

.reply .rl-list li .rl-i p span {
  margin-right: 5px;
}

.comment .remark-list .remark .interact {
  margin-top: 25px;
  display: flex;
}

.comment .remark-list .remark .interact p {
  margin-left: 20px;
  color: #fff;
  cursor: pointer;
}

.comment .remark-list .remark .interact p:hover {
  color: red;
}

.comment .remark-list .remark .interact p:first-child {
  margin-left: 0;
}

.comment .remark-list .remark .interact p span {
  margin-right: 5px;
}
</style>
