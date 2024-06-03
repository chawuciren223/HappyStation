<script setup>
const props = defineProps({
  videoList: Array
})

console.log('slot', props.videoList)
</script>

<template>
  <!-- 视频类型 start-->
  <div class="video-style">
    <h3>
      <slot></slot>
    </h3>
    <ul class="v-content-list">
      <baseVideoItem :videoList="videoList"></baseVideoItem>
    </ul>
  </div>
  <!-- 视频类型 end-->
</template>

<style scoped>
.video-style {
  position: relative;
  /* height: 500px;
    width: 1000px; */
  /* background-color: pink; */
  padding: 0 5% 0 6%;
  overflow: hidden;
  margin-bottom: 50px;
}

.video-style h3 {
  color: #fff;
  font-size: 25px;
  margin-top: 2%;
}

.v-content-list {
  /* height: 600px; */
  /* background: pink; */
  /* background: #151221; */
  /* padding: 30px 20px; */
  margin-top: 20px;
  /* background: greenyellow; */
  display: flex;
}
</style>
