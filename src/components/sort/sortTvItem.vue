<script setup>
import { ref } from 'vue'
// 综合
const comprehensive = ref([
  { id: 1, tag: '最热' },
  { id: 2, tag: '最新' },
  { id: 3, tag: '即将上线' }
])
// 类型
const style = ref([
  { id: 1, tag: '全部' },
  { id: 2, tag: '古装' },
  { id: 3, tag: '爱情' },
  { id: 4, tag: '战争' },
  { id: 5, tag: '犯罪' },
  { id: 6, tag: '动作' },
  { id: 7, tag: '恐怖' },
  { id: 8, tag: '科幻' },
  { id: 9, tag: '玄幻' },
  { id: 10, tag: '仙侠' },
  { id: 11, tag: '剧情' },
  { id: 12, tag: '悬疑' },
  { id: 13, tag: '都市' },
  { id: 14, tag: '音乐' },
  { id: 15, tag: '竞技' },
  { id: 16, tag: '其他' }
])
// 年份
const time = ref([
  { id: 1, tag: '全部' },
  { id: 2, tag: '2024' },
  { id: 3, tag: '2023' },
  { id: 4, tag: '2022' },
  { id: 5, tag: '2021' },
  { id: 6, tag: '2020' },
  { id: 7, tag: '其他' }
])
// 地区
const area = ref([
  { id: 1, tag: '全部' },
  { id: 2, tag: '内地' },
  { id: 3, tag: '港台' },
  { id: 4, tag: '美国' },
  { id: 5, tag: '日韩' },
  { id: 6, tag: '泰国' },
  { id: 7, tag: '其他' }
])
// 资源
const resource = ref([
  { id: 1, tag: '全部' },
  { id: 2, tag: '免费' },
  { id: 3, tag: 'VIP' }
])
// 状态
const states = ref([
  { id: 1, tag: '全部' },
  { id: 2, tag: '已完结' },
  { id: 3, tag: '更新' }
])
</script>
<template>
  <sortLi :data="comprehensive">综合</sortLi>
  <sortLi :data="style">类型</sortLi>
  <sortLi :data="time">年份</sortLi>
  <sortLi :data="area">地区</sortLi>
  <sortLi :data="resource">资源</sortLi>
  <sortLi :data="states">状态</sortLi>
</template>

<style scoped></style>
