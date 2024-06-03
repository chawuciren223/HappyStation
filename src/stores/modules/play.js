import { defineStore } from 'pinia'
import { ref } from 'vue'
import request from '@/utils/request'
import { allCommentService } from '@/api/play.js'

export const usePlayStore = defineStore('video-play-render', () => {
  // 当前播放
  const playRender = ref([])
  const nowPlay = ref({})
  const getPlayRender = async (type, id) => {
    const {
      data: { data }
    } = await request.get(`api/${type}Info`)
    playRender.value = data
    playRender.value = playRender.value.map((obj) => ({
      ...obj,
      tags: obj.tags.split(',')
    }))
    console.log('视频:', playRender.value)
    console.log(id.value, typeof id.value)
    nowPlay.value = playRender.value.find((obj) => obj.id === id.value)
    console.log('当前视频:', nowPlay.value)
  }
  // 同类型视频
  const playList = ref([])
  const getPlayList = async (type) => {
    const {
      data: { data }
    } = await request.get(`api/${type}Info`)
    playList.value = data
    playList.value = playList.value.map((obj) => ({
      ...obj,
      tags: obj.tags.split(',')
    }))
    console.log('同类视频:', playList.value)
  }

  // 评论列表
  const remarkList = ref([])
  const getAllComment = async () => {
    const {
      data: { data }
    } = await allCommentService()
    remarkList.value = data
    console.log('评论列表', remarkList.value)
  }

  return {
    playRender,
    nowPlay,
    getPlayRender,
    playList,
    getPlayList,
    remarkList,
    getAllComment
  }
})
