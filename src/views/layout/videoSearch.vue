<script setup>
// import { ref } from 'vue'
</script>
<template>
  <div id="app">
    <div class="container">
      <!-- 背景 start -->
      <div class="bj">
        <img src="@/assets/cp森林背景.jpg" alt="" />
      </div>
      <!-- 背景 end -->
      <searchInput></searchInput>
      <searchList></searchList>
    </div>
  </div>
</template>

<style scoped>
#app {
  background: #242131;
  position: relative;
  height: 100vh;
  overflow: auto;
}
.bj {
  opacity: 0.03;
}
</style>
