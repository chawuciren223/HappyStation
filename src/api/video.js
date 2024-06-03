import request from '@/utils/request'

// 获取动态视频
export const getDynamicVideo = () => {
  return request.get('api/dynamicsInfo')
}
// 获取电视剧
export const getTelevisionVideo = () => {
  return request.get('api/televisionInfo')
}
// 获取电影
export const getFilmVideo = () => {
  return request.get('api/moviesInfo')
}
// 获取动漫
export const getAnimationVideo = () => {
  return request.get('api/animationInfo')
}
// 获取动漫
export const getShowVideo = () => {
  return request.get('api/showInfo')
}
