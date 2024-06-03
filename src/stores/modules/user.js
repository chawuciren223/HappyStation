import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userInfoService } from '@/api/user'

export const useUserStore = defineStore(
  'happy-station-user',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }
    const userInfo = ref({})
    const getUserInfo = async () => {
      const {
        data: { data }
      } = await userInfoService()
      console.log(data[0])
      userInfo.value = data[0]
      console.log('用户信息', userInfo.value)
    }
    return {
      token,
      setToken,
      removeToken,
      userInfo,
      getUserInfo
    }
  },
  {
    persist: true
  }
)
