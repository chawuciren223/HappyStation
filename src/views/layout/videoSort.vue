<script setup>
import { useSortStore } from '@/stores'
import { onMounted, provide } from 'vue'
const sortStore = useSortStore()
onMounted(() => {
  sortStore.getTvList()
})

const handleChange = (e) => {
  console.log('改变视频类型', e)
  if (e === 'movies') {
    sortStore.getFilmList()
  } else if (e === 'television') {
    sortStore.getTvList()
  } else {
    sortStore.getAnimateList()
  }
}
provide('filterList', (newTag) => {
  console.log(newTag)
  sortStore.setTags(newTag)
  sortStore.getTagFilter(newTag)
})
</script>
<template>
  <div class="app">
    <!-- 内容 start -->
    <div class="container w">
      <sortTab @changeStyle="handleChange"></sortTab>
      <sortContent
        :data="sortStore.videoList"
        :sort="sortStore.sortList"
      ></sortContent>
    </div>
    <!-- 内容 end -->
  </div>
</template>

<style scoped>
.app {
  background: #242131;
}

.w {
  width: 1450px;
  margin: 0 auto;
}

header {
  background-color: #151221;
}

.container {
  /* height: 600px; */
  /* background-color: pink; */
  overflow: hidden;
}
</style>
