<script setup>
import { ref } from 'vue'
import { getTelevisionVideo } from '@/api/video'
import { onMounted } from 'vue'
onMounted(() => {
  getTelevisionList()
})
const hotList = ref([])
const getTelevisionList = async () => {
  const {
    data: { data }
  } = await getTelevisionVideo()
  hotList.value = data.slice(0, 6)
  hotList.value = hotList.value.map((obj) => ({
    ...obj,
    tags: obj.tags.split(',')
  }))
  console.log('电视剧:', hotList.value)
}
</script>

<template>
  <!-- 热门推荐 start-->
  <div class="video_hot">
    <h3>热门推荐</h3>
    <div class="more">更多 &gt;&gt;</div>
    <ul class="hot-list">
      <hotItem :hotList="hotList"></hotItem>
    </ul>
  </div>
  <!-- 热门推荐 end-->
</template>

<style scoped>
/* 热门推荐 */
.video_hot {
  position: relative;
  width: 100%;
  height: 320px;
  /* background-color: #232a32; */
}

.video_hot h3 {
  position: absolute;
  top: 8%;
  left: 6%;
  font-size: 25px;
  color: #fff;
}

.video_hot .more {
  position: absolute;
  top: 15%;
  right: 6%;
  color: #fff;
  cursor: pointer;
}

.video_hot .hot-list,
.dynamics-item .dy-list {
  position: absolute;
  top: 25%;
  left: 6%;
  display: flex;
  justify-self: flex-start;
}
</style>
