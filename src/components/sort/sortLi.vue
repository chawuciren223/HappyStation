<script setup>
import { ref, inject } from 'vue'
defineProps({
  data: Array
})
const actives = ref(0)
const filterList = inject('filterList')
const activesChange = (item, index) => {
  console.log('类型标签改变', item.tag)
  actives.value = index
  filterList(item.tag)
}
</script>
<template>
  <li>
    <span
      ><a href="#"> <slot></slot> </a
    ></span>
    <ul class="sl-in-detail">
      <li
        @click="activesChange(item, index)"
        v-for="(item, index) in data"
        :key="item.id"
      >
        <a href="#" :class="{ actives: index === actives }">{{ item.tag }}</a>
      </li>
    </ul>
  </li>
</template>
<style scoped>
.container .sort-nav-list > li {
  display: flex;
  align-items: center;
  /* flex-wrap: wrap;- */
  /* background-color: pink; */
  margin-top: 20px;
}

.container .sort-nav-list > li:first-child {
  margin-top: 0;
}

.container .sort-nav-list li a {
  color: #fff;
  font-size: 15px;
}

.sort-nav-list li .sl-in-detail {
  display: flex;
  margin-left: 25px;
  /* border: 1px solid #fff; */
}

.sort-nav-list li .sl-in-detail li {
  margin-left: 20px;
}

.sort-nav-list li .sl-in-detail li:first-child {
  margin-left: 0;
}

.sort-nav-list li .sl-in-detail a {
  display: block;
  padding: 5px 15px;
  border-radius: 13px;
  font-size: 15px;
}

.sort-nav-list li .sl-in-detail a.actives {
  background: #32323c;
  color: #0baded;
}
</style>
