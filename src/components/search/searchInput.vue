<script setup>
import { ref } from 'vue'
import { useSearchStore } from '@/stores'
import { ElMessage } from 'element-plus'
const searchStore = useSearchStore()
const searchIpt = ref('')
const clear = () => {
  searchIpt.value = ''
}
const getVideoInfoByTitleOrAuthor = () => {
  if (searchIpt.value !== '') {
    searchStore.getKeysList(searchIpt.value)
  } else {
    ElMessage.warning('请输入关键字')
  }
}
</script>
<template>
  <!-- 搜索框 start -->
  <div class="search">
    <div class="ipt">
      <i class="iconfont icon-31sousuo"></i>
      <input type="text" name="" id="" v-model="searchIpt" />
      <i class="iconfont icon-quxiao" @click="clear()"></i>
    </div>

    <button type="button" @click="getVideoInfoByTitleOrAuthor()">搜索</button>
  </div>
  <!-- 搜索框 end -->
</template>

<style scoped>
.search {
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  /* width: 610px; */
  /* margin-top: 100px; */
  /* height: 100px; */
  /* background-color: pink; */
  /* border: 1px solid #fff; */
  display: flex;
}

.search .ipt {
  position: relative;
  /* background-color: slateblue; */
}

.search .ipt .icon-31sousuo {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 20px;
  color: #fff;
  cursor: pointer;
}

.search .ipt .icon-quxiao {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 20px;
  color: #fff;
  cursor: pointer;
}

.search .ipt input {
  width: 500px;
  height: 55px;
  font-size: 18px;
  border-radius: 10px;
  background: none;
  border: 1px solid #fff;
  color: #fff;
  padding-left: 40px;
}

.search button {
  /* margin-top: 20px; */
  margin-left: 5px;
  background: none;
  color: #fff;
  font-size: 18px;
  padding: 15px 30px;
  border-radius: 10px;
  /* border: 2px solid #fff; */
  border: none;
  transition: 0.4s;
  position: relative;
  background: linear-gradient(to right, #009efa, #ff56a4, #ffe624, #009cf6);
  background-size: 500%;
  cursor: pointer;
  z-index: 1;
}

.search button::before {
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  width: 100%;
  height: 100%;
  border-radius: 25px;
  background: linear-gradient(to right, #009efa, #ff56a4, #ffe624, #009cf6);
  background-size: 500%;
  filter: blur(10px);
  z-index: -1;
  transition: 0.8s;
  opacity: 0.5;
}

.search button:hover {
  animation: sun 10s infinite;
}

.search button:hover::before {
  animation: sun 10s infinite;
}

@keyframes sun {
  100% {
    background-position: -500% 0;
  }
}
</style>
