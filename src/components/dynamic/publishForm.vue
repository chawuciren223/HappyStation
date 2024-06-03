<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores'
import { storeToRefs } from 'pinia'
// import request from '@/utils/request'
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
const emits = defineEmits(['cancel'])
const cancel = () => {
  emits('cancel')
}
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
console.log(getPublishTime())
const publishInfo = ref({
  title: '',
  tags: '',
  content: ''
})
const videoFile = ref(null)
const imgFile = ref(null)
const publishTime = getPublishTime()
const handleFileUpload = (type) => {
  if (type === 0) {
    videoFile.value = videoFile.value.files[0]
    return false
  }
  if (type === 1) {
    imgFile.value = imgFile.value.files[0]
    return false
  }
}

const publish = async () => {
  const { username, nickname, user_pic } = userInfo.value
  const fd = new FormData()
  fd.append('videoUrl', videoFile.value.value)
  fd.append('imgUrl', imgFile.value.value)
  fd.append('title', publishInfo.value.title)
  fd.append('tags', publishInfo.value.tags)
  fd.append('info', publishInfo.value.content)
  fd.append('username', username)
  fd.append('author', nickname)
  fd.append('avatar', user_pic)
  fd.append('release_time', publishTime)
  console.log(fd)
  //   const res = await request.post('/my/upload/dynamics', { date: fd })
  //   console.log(res)
}
</script>

<template>
  <div class="publish">
    <div class="publishForm">
      <div class="bj">
        <img src="@/assets/hh落日背景.jpeg" alt="" id="" />
      </div>
      <div class="title">
        <h3>发布动态</h3>
        <i class="iconfont icon-quxiao" id="i-cancel"></i>
      </div>
      <div class="content">
        <div class="left">
          <div class="ipt">
            <span>标题</span>
            <input type="text" name="title" v-model="publishInfo.title" />
          </div>
          <div class="ipt">
            <span>标签</span>
            <input type="text" name="tags" v-model="publishInfo.tags" />
          </div>
          <div class="ipt">
            <span>内容</span>
            <textarea
              name="info"
              id=""
              cols="30"
              rows="10"
              v-model="publishInfo.content"
            ></textarea>
          </div>
        </div>
        <div class="right">
          <span>视频</span>
          <div class="video">
            <video src=""></video>
            <input
              type="file"
              id="videoFile"
              v-show="videoFile"
              ref="videoFile"
              @change="handleFileUpload(0)"
            />
          </div>
          <span>封面</span>
          <div class="img">
            <img src="@/assets/hh落日背景.jpeg" />
            <input
              type="file"
              id="imgFile"
              v-show="imgFile"
              ref="imgFile"
              @change="handleFileUpload(1)"
            />
          </div>
        </div>
      </div>
      <div class="actionBtn">
        <button type="button" id="publishBtn" @click="publish">发布</button>
        <button type="button" id="cancelBtn" @click="cancel">取消</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* -------------发布动态模块-------------- */
.publish {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  /* display: none; */
}

.publish .publishForm {
  width: 1000px;
  height: 560px;
  background: #151221;
  margin: 10% auto;
  border-radius: 15px;
  box-shadow: 0px 0px 15px #fff;
  position: relative;
  padding: 30px;
}

.publish .publishForm .bj {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  pointer-events: none;
}

.publish .publishForm .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: slateblue; */
  font-size: 18px;
}

.publish .publishForm i {
  cursor: pointer;
}

.publish .publishForm .content {
  display: flex;
  margin-top: 20px;
}

.publish .publishForm .left {
  width: 600px;
  height: 320px;
  /* background: slateblue; */
}

.publish .publishForm .right {
  width: 400px;
  height: 320px;
  /* background: springgreen; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.publish .publishForm .video {
  display: flex;
  align-items: end;
}

.publish .publishForm .video video {
  width: 200px;
  height: 100%;
  border-radius: 8px;
}

.publish .publishForm .img {
  display: flex;
  align-items: end;
}

.publish .publishForm .img img {
  width: 200px;
  height: 100%;
  border-radius: 8px;
}

.publishForm .ipt {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.publishForm .ipt span {
  font-size: 16px;
  margin-bottom: 5px;
}

.publishForm .ipt input {
  background: #f8f7f6;
  border: none;
  width: 300px;
  height: 40px;
  line-height: 30px;
  padding-left: 5px;
  border-radius: 5px;
  font-size: 15px;
}

.publishForm .ipt textarea {
  width: 400px;
  height: 110px;
  border-radius: 5px;
  resize: none;
  outline: none;
  padding: 5px;
  font-size: 15px;
}

.publishForm .actionBtn {
  /* width: 200px; */
  /* height: 200px; */
  /* background-color: slateblue; */
  margin-top: 60px;
}

.publishForm .actionBtn button {
  padding: 10px 30px;
  background: #654ce4;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  border-radius: 10px;
  margin-right: 30px;
  cursor: pointer;
}

.publishForm .actionBtn button:hover {
  background: #4c5be4;
}
</style>
