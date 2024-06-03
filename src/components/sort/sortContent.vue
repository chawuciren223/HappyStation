<script setup>
defineProps({
  data: Array,
  sort: Array
})
</script>
<template>
  <!-- 分类内容 start -->
  <ul class="sort-content-list">
    <contentLi :data="data" v-if="sort.length <= 0"></contentLi>
    <contentLi :data="sort" v-else></contentLi>
  </ul>

  <!-- 分类内容 end -->
</template>

<style scoped>
/* ===================== 分类内容 start ===================== */
.sort-content-list {
  /* height: 600px; */
  /* background: pink; */
  background: #151221;
  padding: 30px 20px;
  /* margin-top: 20px; */
  /* background: greenyellow; */
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 25px 20px;
}

/* ===================== 分类内容 end ===================== */
</style>
