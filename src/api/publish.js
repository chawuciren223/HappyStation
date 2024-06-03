import request from '@/utils/request'

// 获取所有评论
export const allCommentService = () => {
  return request.get('/api/allRemark')
}

// 发布评论
export const remarkPublishService = ({
  username,
  nickname,
  user_pic,
  remark,
  publish_time
}) => {
  return request.post('/my/publishRemark', {
    username,
    nickname,
    user_pic,
    remark,
    publish_time
  })
}
