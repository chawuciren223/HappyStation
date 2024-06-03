import { defineStore } from 'pinia'
import { ref } from 'vue'
import request from '@/utils/request.js'
import { ElMessage } from 'element-plus'

export const useSearchStore = defineStore('video-search-list', () => {
  const videoList = ref([])
  const getKeysList = async (keywords) => {
    const res = await request.get(
      `/api/moviesByTitleOrAuthor?keyword=${keywords}`
    )
    console.log(res.data.data)
    videoList.value = res.data.data
    if (videoList.value.length === 0) {
      ElMessage.warning('无相关视频')
    }
    videoList.value = videoList.value.map((obj) => ({
      ...obj,
      tags: obj.tags.split(','),
      release_time: obj.release_time ? obj.release_time.substr(5, 5) : ''
    }))
  }
  return {
    videoList,
    getKeysList
  }
})
