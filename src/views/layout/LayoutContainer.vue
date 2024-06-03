<script setup>
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'
const router = useRouter()
const userStore = useUserStore()

// 导航栏跳转
const routerChange = (routerIndex) => {
  router.push(routerIndex)
}
console.log(userStore.token)
if (userStore.token) {
  userStore.getUserInfo()
  console.log(userStore.userInfo)
}
// console.log(userStore.getUserInfo())
</script>

<template>
  <div class="mainBj">
    <!-- 头部导航栏 start -->
    <header class="header">
      <div class="menu">
        <div class="logo">
          <router-link to="/video/recommend">
            <img
              src="@/assets/logo.png"
              alt="欢迎来到欢愉的国度"
              title="欢迎来到欢愉的国度"
            />
          </router-link>
        </div>

        <!-- 搜索 -->
        <div class="search">
          <div class="icon"></div>
          <div class="input">
            <input type="text" placeholder="关键字" id="mysearch" />
            <span
              class="clear"
              onclick="document.querySelector('#mysearch').value=''"
              ><i class="iconfont icon-quxiao"></i
            ></span>
          </div>
          <button type="button" @click="routerChange('/video/search')">
            搜索
          </button>
        </div>

        <ul>
          <li>
            <router-link to="/video/recommend">推荐</router-link>
          </li>
          <li>
            <router-link to="/video/sort">分类</router-link>
          </li>
          <!-- <li><a href="#">VIP</a></li> -->
          <li>
            <router-link to="/video/dynamic">动态</router-link>
          </li>
          <li v-if="!userStore.token">
            <router-link to="/login" class="notLogin">登录</router-link>
          </li>
          <li v-else>
            <router-link to="/video/person" class="Login">
              <img
                :src="userStore.userInfo.user_pic || '@/assets/lx2.jpg'"
                alt=""
              />
              <div>{{ userStore.userInfo.nickname }}</div>
            </router-link>
          </li>
        </ul>
      </div>
    </header>
    <!-- 头部导航栏 end -->

    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
.mainBj {
  background: #242131;
}
/* 头部导航栏 */
header {
  position: fixed;
  width: 100%;
  padding: 10px 0;
  transition: 0.6s;
  z-index: 100;
  background: rgba(21, 18, 33, 0.9);
}

header.sticky {
  padding: 10px 0;
  /* padding: 1rem 0; */
  background: rgba(0, 0, 0, 0.8);
  z-index: 100000;
}

header .menu {
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  /* background-color: #3e99fa; */
}

.menu .logo a {
  display: block;
  text-decoration: none;
  color: white;
  font-size: 24px;
  font-weight: 600;
  /* margin-left: -100px; */
  /* background-color: pink; */
  width: 100px;
  height: 40px;
}

.menu .logo a img {
  width: 100%;
  height: 100%;
}

.menu .search {
  position: relative;
  width: 400px;
  height: 35px;
  border-radius: 60px;
  transition: 0.5s;
  box-shadow: 0 0 0 1px #fff;
  overflow: hidden;
  margin-left: 100px;
}

.menu .search.active {
  width: 35px;
}

.menu .search .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  /* background: #000; */
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
}

.menu .search .icon::before {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  /* border: 3px solid #287dfc; */
  border: 2px solid #fff;
  border-radius: 50%;
  transform: translate(-14px, -14px);
}

.menu .search .icon::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 10px;
  background: #fff;
  transform: translate(-5px, -5px) rotate(315deg);
}

.menu .search .input {
  position: relative;
  width: 300px;
  height: 35px;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: palegoldenrod; */
}

.menu .search .input input {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  padding: 10px 0;
  background: none;
  /* background-color: pink; */
  color: #fff;
}

.menu .search .input input::-webkit-input-placeholder {
  color: #ddd;
}

.menu .search .clear {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  right: 15px;
  color: #ddd;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
}

.menu .search .input input:focus + .clear {
  opacity: 1;
}

/* .menu .search .clear::before {
    position: absolute;
    content: '';
    width: 1px;
    height: 12px;
    background: #cccbcb;
    transform: rotate(45deg);
}

.menu .search .clear::after {
    position: absolute;
    content: '';
    width: 1px;
    height: 12px;
    background: #cccbcb;
    transform: rotate(315deg);
} */
.menu .search button {
  position: absolute;
  top: 0;
  right: 0;
  /* background: #3e99fa;
    color: #fff; */
  background: #fff;
  color: #000;
  font-weight: 700;
  border: 0;
  padding: 10px 20px;
  cursor: pointer;
  /* z-index: 5; */
}

.menu .search button:hover {
  background: #3e99fa;
  color: #fff;
}

.menu ul {
  display: inline-flex;
  align-items: center;
  /* margin-right: 8%; */
}

.marginRight {
  margin-right: 8%;
}

.menu ul li {
  list-style: none;
  margin-left: 7px;
}

.menu ul li:first-child {
  margin-left: 0px;
}

.menu ul li a {
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
  /* background-color: slateblue; */
}

.menu ul li a:hover {
  color: #3e99fa;
}

.menu ul li:last-child a {
  display: flex;
  align-items: center;
}

.menu ul li:last-child a img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
  /* border: 2px solid #ddd; */
}
</style>
