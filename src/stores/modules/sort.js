import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  getTelevisionVideo,
  getFilmVideo,
  getAnimationVideo
} from '@/api/video'

export const useSortStore = defineStore('video-sort-list', () => {
  // 电视剧
  const videoList = ref([])

  const getTvList = async () => {
    const {
      data: { data }
    } = await getTelevisionVideo()
    videoList.value = data
    videoList.value = videoList.value.map((obj) => ({
      ...obj,
      tags: obj.tags.split(',')
    }))
    console.log('电视剧分类:', videoList.value)
  }
  // 电影
  const getFilmList = async () => {
    const {
      data: { data }
    } = await getFilmVideo()
    videoList.value = data
    videoList.value = videoList.value.map((obj) => ({
      ...obj,
      tags: obj.tags.split(',')
    }))
    console.log('电影分类:', videoList.value)
  }
  // 动漫
  const getAnimateList = async () => {
    const {
      data: { data }
    } = await getAnimationVideo()
    videoList.value = data
    videoList.value = videoList.value.map((obj) => ({
      ...obj,
      tags: obj.tags.split(',')
    }))
    console.log('动漫分类:', videoList.value)
  }

  // 分类筛选
  const tags = ref('')
  const setTags = (tag) => {
    tags.value = tag
  }
  const sortList = ref([])
  // watch(
  //   tags,
  //   (newTag) => {
  //     console.log('watch', newTag)
  //     if (newTag === '全部') {
  //       sortList.value = videoList.value
  //       console.log('watch筛选后的', sortList.value)
  //       return false
  //     }
  //     sortList.value = videoList.value.filter(
  //       (obj) => obj.tags.indexOf(newTag) !== -1
  //     )
  //     console.log('watch筛选后的', sortList.value)
  //   },
  //   { immediate: true }
  // )
  const getTagFilter = (newTag) => {
    if (newTag === '全部') {
      sortList.value = videoList.value
      console.log('筛选后的', sortList.value)
      return false
    }
    console.log('传进来的', newTag)
    console.log('原数据', videoList.value)
    // videoList.value = videoList.value.filter((obj) => obj.tags.includes(newTag))
    // sortList.value = videoList.value.filter((obj) => obj.tags.includes(newTag))
    sortList.value = videoList.value.filter(
      (obj) => obj.tags.indexOf(newTag) !== -1
    )
    console.log('筛选后的', sortList.value)
  }
  // const getTagFilter = computed({
  //   get() {
  //     return videoList.value
  //   },
  //   set(tag) {
  //     console.log('传进来的', tag)
  //     videoList.value = videoList.value.filter(
  //       (obj) => obj.tag && obj.tag.split(',').includes(tag)
  //     )
  //     console.log('筛选后的', videoList)
  //   }
  // })

  return {
    videoList,
    getTvList,
    getFilmList,
    getAnimateList,
    tags,
    setTags,
    getTagFilter,
    sortList
  }
})
