import request from '@/utils/request'

// 注册接口
export const userRegisterService = ({
  username,
  password,
  repassword,
  nickname
}) => {
  return request.post('/api/register', {
    username,
    password,
    repassword,
    nickname
  })
}
// 登录接口
export const userLoginService = ({ username, password }) => {
  return request.post('/api/login', { username, password })
}

// 获取用户信息
export const userInfoService = () => {
  return request.get('my/userinfo')
}
