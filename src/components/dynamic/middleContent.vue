<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineProps({
  dynamicList: Array
})
const videoPlayerRefs = ref([])

const hoverPlay = (play, index) => {
  const videoPlayer = videoPlayerRefs.value[index]
  if (videoPlayer) {
    if (play) {
      videoPlayer.play()
    } else {
      videoPlayer.pause()
    }
  }
}

// 跳转
const router = useRouter()
const playVideo = (id, type) => {
  router.push({
    path: '/video/play',
    query: {
      id,
      type
    }
  })
}
</script>
<template>
  <!-- =================MIDDLE=====publishPost============-->
  <div class="middle">
    <!-- =================FEEDS=================-->
    <div class="feeds">
      <!-- =================FEED 1=================-->
      <div class="feed" v-for="(item, index) in dynamicList" :key="item.id">
        <div class="head">
          <div class="user">
            <div class="profile-photo">
              <img :src="item.avatar" @click="toUpInfo(item.username)" />
            </div>
            <div class="ingo">
              <h3 @click="toUpInfo(item.username)" style="cursor: pointer">
                {{ item.author }}
              </h3>
              <small>{{ item.release_time }}</small>
            </div>
          </div>
          <span class="edit">
            <i class="uil uil-ellipsis-h"></i>
          </span>
        </div>
        <div class="content">
          <p style="color: #2e91ef">#{{ item.title }}</p>
          <p>{{ item.info }}</p>
        </div>
        <div class="photo">
          <img :src="item.horizontal_cover" v-if="item.videoUrl === ''" />
          <video
            :ref="(ref) => (videoPlayerRefs[index] = ref)"
            @mouseenter="hoverPlay(true, index)"
            @mouseleave="hoverPlay(false, index)"
            @click="playVideo(item.id, item.type)"
            v-else
          >
            <source :src="item.videoUrl" type="video/mp4" />
          </video>
        </div>

        <div class="action-buttons">
          <div class="interaction-buttons">
            <span><i class="iconfont icon-dianzan"></i></span>
            <span><i class="iconfont icon-pinglun"></i></span>
            <span><i class="iconfont icon--xingxingtuijian"></i></span>
          </div>
          <div class="bookmark">
            <span><i class="iconfont icon-zhuanfa"></i></span>
          </div>
        </div>

        <div class="liked-by">
          <span><img src="@/assets/lx1.jpg" /></span>
          <span><img src="@/assets/lx2.jpg" /></span>
          <span><img src="@/assets/lx1.jpg" /></span>
          <p>被 <b>Ernest Achiever</b> 和 <b>2233等个人喜欢</b></p>
        </div>
        <div class="comments text-muted">查看所有277条评论</div>
      </div>
      <!-- =================END OF FEED=================-->
    </div>
    <!-- =================END OF FEEDS=================-->
  </div>
  <!-- =================END OF MIDDLE=================-->
</template>
<style scoped>
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
/* ======================= MIDDLE ======================= */

/* ======================= FEEDS ======================= */
.middle .feeds .feed {
  background: hsl(252, 30%, 10%);
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem 0;
  font-size: 0.85rem;
  line-height: 1.5;
}

.middle .feed .head {
  display: flex;
  justify-content: space-between;
}

.middle .feed .user {
  display: flex;
  gap: 1rem;
}

.middle .feed .content {
  margin: 15px 0;
  font-size: 16px;
  /* background: pink; */
  line-height: 30px;
}

.middle .feed .photo {
  border-radius: 1rem;
  overflow: hidden;
  margin: 0.7rem 0;
  /* position: relative; */
}

/*
.middle .feed .photo img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 405px;
    object-fit: cover;
    opacity: 1;
    border-radius: var(--card-border-radius);
} */

.middle .feed video {
  width: 700px;
  height: 100%;
  border-radius: 1rem;
  border-radius: 1rem;
  overflow: hidden;
  margin: 0.7rem 0;
}

.middle .feed .action-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  margin: 0.6rem;
  /* background-color: springgreen; */
}

.middle .feed .action-buttons i {
  font-size: 23px;
  margin-right: 10px;
}

.middle .liked-by {
  display: flex;
}

.middle .liked-by span {
  border-radius: 50%;
  width: 1.4rem;
  height: 1.4rem;
  display: block;
  overflow: hidden;
  border: 2px solid hsl(252, 30%, 100%);
  margin-left: -0.6rem;
}

.middle .liked-by span:first-child {
  margin: 0;
}

.middle .liked-by p {
  margin-left: 0.5rem;
}
</style>
