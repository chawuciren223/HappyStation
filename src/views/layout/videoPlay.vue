<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { usePlayStore } from '@/stores'
import { storeToRefs } from 'pinia'
const playStore = usePlayStore()
const route = useRoute()

const vId = ref(+route.query.id)
const vType = ref(route.query.type)
const { nowPlay, playList } = storeToRefs(playStore)
console.log('shuju', nowPlay)
onMounted(() => {
  playStore.getPlayRender(vType.value, vId)
  playStore.getPlayList(vType.value)
})
const handleId = (id) => {
  vId.value = id
  console.log(vId.value)
  playStore.getPlayRender(vType.value, vId)
  // playStore.getPlayList(vType.value)
}
// watch(() => {
//   playStore.getPlayRender(vType.value, vId)
//   playStore.getPlayList(vType.value)
// })
</script>
<template>
  <!-- 视频内容 start-->
  <div class="main w">
    <leftContent :play="nowPlay"></leftContent>
    <rightContent
      :play="nowPlay"
      :playList="playList"
      @changeId="handleId"
    ></rightContent>
  </div>
  <!-- 视频内容 end-->
</template>

<style scoped>
body {
  background: #242131;
  position: relative;
}

.dot {
  position: absolute;
  top: 55.6%;
  /* left: 0; */
  z-index: -1;
  width: 100%;
  opacity: 0.03;
}

.dot img {
  width: 100%;
  object-fit: cover;
}

.w {
  width: 1570px;
  margin: 0 auto;
  /* background: #3e99fa; */
}

header {
  background: #151221;
}

.main {
  /* height: 4500px; */
  /* background: pink; */
  /* overflow: hidden; */
  display: flex;
}
</style>
