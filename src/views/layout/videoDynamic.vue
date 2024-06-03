<script setup>
import { useUserStore, useVideoStore } from '@/stores'
import { onMounted, ref } from 'vue'
const userStore = useUserStore()
const videoStore = useVideoStore()
onMounted(() => {
  userStore.getUserInfo()
  videoStore.getDynamicList()
})
const showFlag = ref(false)
const showForm = () => {
  showFlag.value = true
}
const cancel = () => {
  showFlag.value = false
}
</script>

<template>
  <div id="app">
    <!-- main主体 start -->
    <main id="main">
      <div class="container">
        <!-- =================LEFT=================-->
        <div class="left">
          <a class="profile" @click="toPerson()">
            <div class="profile-photo">
              <img
                :src="userStore.userInfo.user_pic || './images/lx2.jpg'"
                alt=""
              />
            </div>
            <div class="handle">
              <h4>{{ userStore.userInfo.nickname }}</h4>
              <p class="text-muted">{{ userStore.userInfo.user_intro }}~</p>
            </div>
          </a>
          <!---------------SIDERBAR--------------->
          <div class="sidebar">
            <a class="menu-item active">
              <span><i class="uil uil-home"></i></span>
              <h3>最新内容</h3>
            </a>
            <a class="menu-item" id="messages-notification">
              <span
                ><i class="uil uil-envelope-alt"
                  ><small class="notification-count">6</small></i
                ></span
              >
              <h3>我的消息</h3>
            </a>
            <a class="menu-item">
              <span><i class="uil uil-bookmark"></i></span>
              <h3>我的收藏</h3>
            </a>
            <!-- <a class="menu-item">
                        <span><i class="uil uil-chart-line"></i></span>
                        <h3>Analytics</h3>
                    </a> -->
            <a class="menu-item" id="theme">
              <span><i class="uil uil-palette"></i></span>
              <h3>我的关注</h3>
            </a>
            <!-- <a class="menu-item">
                        <span><i class="uil uil-compass"></i></span>
                        <h3>探索</h3>
                    </a> -->
            <a class="menu-item" id="notifications">
              <span
                ><i class="uil uil-bell"
                  ><small class="notification-count">3+</small></i
                ></span
              >
              <h3>通知</h3>
              <!----------------------------NOTIFICATIONS------------------------------>

              <div class="notifications-popup">
                <!--1-->
                <div>
                  <div class="profile-photo">
                    <img src="./images/lx2.jpg" />
                  </div>
                  <div class="notification-body">
                    <b>Keke Benjamin</b>接受你的好友请求
                    <small class="text-muted">2天前</small>
                  </div>
                </div>
                <!--2-->
                <div>
                  <div class="profile-photo">
                    <img src="./images/lx2.jpg" />
                  </div>
                  <div class="notification-body">
                    <b>John Doe</b>对你的帖子发表了评论
                    <small class="text-muted">1小时前</small>
                  </div>
                </div>
                <!--3-->
                <div>
                  <div class="profile-photo">
                    <img src="./images/lx2.jpg" />
                  </div>
                  <div class="notification-body">
                    <b>Mary Oppong</b> 和 <b> 其他283人 </b> 喜欢你的帖子
                    <small class="text-muted">4分钟前</small>
                  </div>
                </div>
              </div>
              <!---------------------------- END NOTIFICATION POPUP------------------------------>
            </a>
            <a class="menu-item">
              <span><i class="uil uil-setting"></i></span>
              <h3>设置</h3>
            </a>
          </div>
          <!-- =================END OF SIDEBAR=================-->
          <label
            for="create-post"
            class="btn btn-primary"
            id="publishPost"
            @click="showForm"
            >发布动态</label
          >
        </div>

        <middleContent :dynamicList="videoStore.dynamicList"></middleContent>

        <!-- =================RIGHT=================-->
        <div class="right">
          <!-- =================END OF MESSAGES=================-->

          <!-- ================= 热搜 ================= -->
          <div class="hot-search">
            <h4>热门搜索</h4>
            <ul class="hs-list">
              <li
                v-for="(item, index) in videoStore.dynamicList.slice(0, 10)"
                :key="item.id"
              >
                <a href="#">
                  <em>{{ index + 1 }}</em>
                  <p>{{ item.title }}</p>
                  <span>111.2万</span>
                  <i>热</i>
                </a>
              </li>
            </ul>
            <a href="#" class="more">更多<span>&gt;&gt;</span></a>
          </div>
          <!--================= end of 热搜 ================= -->

          <!-- =================FRIEND REQUESTS=================-->
          <div class="friend-requests">
            <h4>好友请求</h4>
            <!-- Request 1 -->
            <div class="request" v-for="item in 3" :key="item">
              <div class="info">
                <div class="profile-photo">
                  <img src="@/assets/lx1.jpg" />
                </div>
                <div>
                  <h5>小飞棍来喽</h5>
                  <p class="text-muted">3个共同好友</p>
                </div>
              </div>
              <div class="action">
                <button class="btn btn-primary">接受</button>
                <button class="btn">拒绝</button>
              </div>
            </div>
          </div>
        </div>
        <!-- ================= END OF RIGHT ================= -->
      </div>
    </main>
    <!-- main主体 end -->

    <publishForm v-if="showFlag" @cancel="cancel"></publishForm>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  /* color: var(--color-dark); */
  color: hsl(252, 30%, 100%);
  background: hsl(251, 20%, 16%);
  /* overflow-x: hidden; */
  position: relative;
}

/* GENERAL STYLES */
.container {
  width: 80%;
  margin: 0 auto;
}

.profile-photo {
  width: 2.7rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
}

img {
  display: block;
  width: 100%;
}

.btn {
  display: inline-block;
  padding: 0.6rem 2rem;
  font-weight: 500;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 300ms ease;
  font-size: 0.9rem;
}

.btn:hover {
  opacity: 0.8;
}

.btn-primary {
  background: hsl(252, 75%, 60%);
  color: white;
}

.text-bold {
  font-weight: 500;
}

.text-muted {
  color: hsl(252, 30%, 95%);
  font-size: 15px;
  margin-top: 5px;
  cursor: pointer;
}

.left .profile .handle h4 {
  cursor: pointer;
  color: hsl(252, 30%, 95%);
}

/* =============NAV BAR============= */
header {
  background: #151221;
}

/* ======================= MAIN ======================= */
main {
  position: relative;
  top: 5.4rem;
  background: #242131;
}

main .container {
  display: grid;
  grid-template-columns: 18vw auto 20vw;
  column-gap: 2rem;
  position: relative;
}

/* ======================= Left ======================= */
main .container .left {
  height: max-content;
  position: sticky;
  top: 6.4rem;
}

main .container .left .profile {
  padding: 1rem;
  background: hsl(252, 30%, 10%);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  width: 100%;
}

/* ======================= SIDEBAR ======================= */
.left .sidebar {
  margin-top: 1rem;
  background: hsl(252, 30%, 10%);
  border-radius: 1rem;
}

.left .sidebar .menu-item {
  display: flex;
  align-items: center;
  height: 4rem;
  cursor: pointer;
  transition: all 300ms ease;
  position: relative;
  /* background: pink; */
}

.left .sidebar .menu-item:hover {
  background: hsl(252, 30%, 95%);
}

.left .sidebar i {
  font-size: 1.4rem;
  color: hsl(252, 155, 65%);
  margin-left: 2rem;
  position: relative;
}

.left .sidebar i .notification-count {
  background: hsl(0, 95%, 65%);
  color: white;
  font-size: 0.7rem;
  width: fit-content;
  border-radius: 0.8rem;
  padding: 0.1rem 0.4rem;
  position: absolute;
  top: -0.2rem;
  right: -0.3rem;
}

.left .sidebar h3 {
  margin-left: 1.5rem;
  font-size: 1rem;
  color: hsl(252, 30%, 95%);
}

.left .sidebar .active {
  background: hsl(252, 30%, 95%);
}

.left .sidebar .active i,
.left .sidebar .active h3 {
  color: hsl(252, 75%, 60%);
}

.left .sidebar .active::before {
  content: '';
  display: block;
  width: 0.5rem;
  height: 100%;
  position: absolute;
  background: hsl(252, 75%, 60%);
}

.left .sidebar .menu-item:first-child.active {
  border-top-left-radius: 1rem;
  overflow: hidden;
}

.left .sidebar .menu-item:last-child.active {
  border-bottom-left-radius: 1rem;
  overflow: hidden;
}

.left .btn {
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  padding: 1rem 0;
}

/* ======================= NOTIFICATION POPUP ======================= */

.left .notifications-popup {
  position: absolute;
  top: 0;
  left: 110%;
  width: 30rem;
  background: hsl(252, 30%, 10%);
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0 2rem hsl(hsl(252, 75%, 60%), 75%, 60% 25%);
  z-index: 8;
  display: none;
}

.left .notifications-popup::before {
  content: '';
  width: 1.2rem;
  height: 1.2rem;
  display: block;
  background: hsl(252, 30%, 95%);
  position: absolute;
  left: -0.6rem;
  transform: rotate(45deg);
}

.left .notifications-popup > div {
  display: flex;
  align-items: start;
  gap: 1rem;
  margin-bottom: 1rem;
}

.left .notifications-popup small {
  display: block;
}

/* <!-- ================= RIGHT =================--> */
main .container .right {
  height: max-content;
  position: sticky;
  top: -18rem;
  bottom: 0;
}

/* <!-- ================= RIGHT =================--> */
.right .friend-requests {
  margin-top: 1rem;
}

.right .friend-requests h4 {
  color: hsl(252, 155, 65%);
  margin: 1rem 0;
}

.right .request {
  background: hsl(252, 30%, 10%);
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 0.7rem;
}

.right .request .info {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.right .request .info .profile-photo {
  width: 50px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
}

/* 热门搜索 */
.right .hot-search {
  margin-top: 1rem;
  background: hsl(252, 30%, 10%);
  border-radius: 1rem;
  padding: 1rem;
}

.right .hot-search h4 {
  color: hsl(252, 155, 65%);
  margin: 1rem 0;
  font-size: 18px;
}

.right .hot-search .hs-list li {
  margin-top: 25px;
}

.right .hot-search .hs-list li a {
  position: relative;
  display: flex;
  align-items: center;
  color: hsl(252, 30%, 95%);
  /* background: pink; */
}

.right .hot-search .hs-list li a:hover p,
.right .hot-search .hs-list li a:hover span {
  color: red;
}

.right .hot-search .hs-list li a em {
  color: #ff8200;
  font-weight: 700;
  width: 20px;
  /* background: pink; */
  margin-right: 5px;
  text-align: center;
}

.right .hot-search .hs-list li:first-child a em,
.right .hot-search .hs-list li:nth-child(2) a em,
.right .hot-search .hs-list li:nth-child(3) a em {
  color: red;
}

.right .hot-search .hs-list li a p {
  /* background-color: pink; */
  width: 200px;
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  transition: 0.3s;
}

.right .hot-search .hs-list li a span {
  position: absolute;
  right: 10%;
  transition: 0.3s;
  font-size: 15px;
  color: #ddd;
}

.right .hot-search .hs-list li a i {
  display: inline-block;
  position: absolute;
  right: 2%;
  background: #ff8200;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 0.75rem;
  border-radius: 6px;
  font-style: normal;
}

.right .hot-search .hs-list li:nth-child(1) a i,
.right .hot-search .hs-list li:nth-child(4) a i,
.right .hot-search .hs-list li:nth-child(5) a i {
  background: red;
}

.right .hot-search .more {
  display: block;
  padding: 10px;
  color: hsl(252, 30%, 95%);
  margin: 1rem 0;
  background-color: #32323c;
  border-radius: 10px;
  text-align: center;
  margin-top: 30px;
}

.right .hot-search .more span {
  margin-left: 5px;
}

/* <!-- ================= THEME CUSTOMIZATION =================--> */
.customize-theme {
  background: rgba(63, 63, 63, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  text-align: center;
  display: grid;
  place-items: center;
  font-size: 0.9rem;
}

.customize-theme .card {
  background: hsl(251, 20%, 16%);
  padding: 3rem;
  border-radius: 1rem;
  width: 50%;
  box-shadow: 0 0 1rem hsl(252, 75%, 60%);
}

/* <!-- ================= FONT SIZE =================--> */
.customize-theme .font-size {
  margin-top: 5rem;
}

.customize-theme .font-size > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: hsl(252, 30%, 95);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
}

.customize-theme .choose-size {
  background: hsl(252, 100%, 90%);
  height: 0.3rem;
  width: 100%;
  margin: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.customize-theme .choose-size span {
  width: 1rem;
  height: 1rem;
  background: hsl(252, 100%, 90%);
  border-radius: 50%;
  cursor: pointer;
}

.customize-theme .choose-size span.active {
  background: hsl(252, 75%, 60%);
}

/* <!-- ================= COLOR =================--> */
.customize-theme .color {
  margin-top: 2rem;
}

.customize-theme .choose-color {
  background: hsl(252, 30%, 95);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.customize-theme .choose-color span {
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
}

.customize-theme .choose-color span:nth-child(1) {
  background: hsl(252, 75%, 60%);
}

.customize-theme .choose-color span:nth-child(2) {
  background: hsl(52, 75%, 60%);
}

.customize-theme .choose-color span:nth-child(3) {
  background: hsl(352, 75%, 60%);
}

.customize-theme .choose-color span:nth-child(4) {
  background: hsl(152, 75%, 60%);
}

.customize-theme .choose-color span:nth-child(5) {
  background: hsl(202, 75%, 60%);
}

.customize-theme .choose-color span.active {
  border: 5px solid white;
}

/* <!-- ================= BACKGROUND =================--> */
.customize-theme .background {
  margin-top: 2rem;
}

.customize-theme .choose-bg {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.customize-theme .choose-bg > div {
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.4rem;
  cursor: pointer;
}

.customize-theme .choose-bg > div.active {
  border: 2px solid hsl(252, 75%, 60%);
}

.customize-theme .choose-bg .bg-1 {
  background: white;
  color: black;
}

.customize-theme .choose-bg .bg-2 {
  background: hsl(254, 45%, 11%);
  color: white;
}

.customize-theme .choose-bg .bg-3 {
  background: hsl(252, 30%, 10%);
  color: white;
}

.customize-theme .choose-bg > div span {
  width: 2rem;
  height: 2rem;
  border: 2px solid hsl(252, 155, 65%);
  border-radius: 50%;
  margin-right: 1rem;
}

/*
MEDIA QUERIES FOR SMALL LAPTIOPS 
*/

@media screen and (max-width: 1200px) {
  .container {
    width: 96%;
  }

  main .container {
    grid-template-columns: 5rem auto 30vw;
    gap: 1rem;
  }

  .left {
    width: 5rem;
    z-index: 5;
  }

  main .container .left .profile {
    display: none;
  }

  .sidebar h3 {
    display: none;
  }

  .left .btn {
    display: none;
  }

  .customize-theme .card {
    width: 80vw;
  }
}

/*
MOBILE PHONES
*/

@media screen and (max-width: 992px) {
  nav .search-bar {
    display: none;
  }

  main .container {
    grid-template-columns: 0 auto 5rem;
    gap: 0;
  }

  main .container .left {
    grid-column: 3/4;
    position: fixed;
    bottom: 0;
    right: 0;
  }

  /* ------------NOTIFICATION POPUP------------*/
  .left .notifications-popup {
    position: absolute;
    left: -20rem;
    width: 20rem;
  }

  .left .notifications-popup::before {
    display: absolute;
    top: 1.3rem;
    left: calc(20rem - 0.6rem);
    display: block;
  }

  main .container .middle {
    grid-column: 1/3;
  }

  main .container .right {
    display: none;
  }

  .customize-theme .card {
    width: 92vw;
  }
}
</style>
