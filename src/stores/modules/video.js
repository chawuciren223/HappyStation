import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  getTelevisionVideo,
  getFilmVideo,
  getAnimationVideo,
  getDynamicVideo
} from '@/api/video'

export const useVideoStore = defineStore('video-info-list', () => {
  // 电视剧
  const televisionList = ref([])
  const getTelevisionList = async () => {
    const {
      data: { data }
    } = await getTelevisionVideo()
    televisionList.value = data
    televisionList.value = televisionList.value.map((obj) => ({
      ...obj,
      tags: obj.tags.split(',')
    }))
    console.log('电视剧:', televisionList.value)
  }
  // 电影
  const filmList = ref([])
  const getFilmList = async () => {
    const {
      data: { data }
    } = await getFilmVideo()
    filmList.value = data
    filmList.value = filmList.value.map((obj) => ({
      ...obj,
      tags: obj.tags.split(',')
    }))
    console.log('电影:', filmList.value)
  }
  // 动漫
  const animationList = ref([])
  const getAnimationList = async () => {
    const {
      data: { data }
    } = await getAnimationVideo()
    animationList.value = data
    animationList.value = animationList.value.map((obj) => ({
      ...obj,
      tags: obj.tags.split(',')
    }))
    console.log('动漫:', animationList.value)
  }
  // 动态
  const dynamicList = ref([])
  const getDynamicList = async () => {
    const {
      data: { data }
    } = await getDynamicVideo()
    dynamicList.value = data
    dynamicList.value = dynamicList.value.map((obj) => ({
      ...obj,
      tags: obj.tags.split(','),
      release_time: obj.release_time ? obj.release_time.substr(5, 5) : ''
    }))
    console.log('动态:', dynamicList.value)
  }

  return {
    televisionList,
    getTelevisionList,
    filmList,
    getFilmList,
    animationList,
    getAnimationList,
    dynamicList,
    getDynamicList
  }
})
