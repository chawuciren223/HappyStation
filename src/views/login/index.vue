<script setup>
import { userRegisterService, userLoginService } from '@/api/user'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores'
const userStore = useUserStore()
const router = useRouter()
// 切换登录注册表单
const activeIndex = ref(0)
const handleClick = (index) => {
  activeIndex.value = index
}
// 注册
const regUser = ref({
  username: '',
  password: '',
  repassword: '',
  nickname: ''
})
const reg = async () => {
  if (regUser.value.password !== regUser.value.repassword) {
    ElMessage.warning('两次密码不一致,请重新输入^_^!')
    return false
  }
  await userRegisterService(regUser.value)
  ElMessage.success('注册成功^_^!')
  activeIndex.value = 0
}
// 登录
const loginUser = ref({
  username: '',
  password: ''
})
const login = async () => {
  const res = await userLoginService(loginUser.value)
  userStore.setToken(res.data.token)
  ElMessage.success(res.data.message)
  router.push('/')
}
</script>

<template>
  <div class="app">
    <div class="container">
      <div class="tab-nav">
        <ul>
          <li>
            <a
              href="javascript:;"
              :class="{ active: activeIndex === 0 }"
              @click="handleClick(0)"
              >登录</a
            >
          </li>
          <li>
            <a
              href="javascript:;"
              :class="{ active: activeIndex === 1 }"
              @click="handleClick(1)"
              >注册</a
            >
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <div class="tb-item" v-show="activeIndex === 0">
          <div class="head-sculpture">
            <img src="@/assets/th.png" alt="" />
          </div>
          <form action="#" id="LoginForm">
            <div class="inputBox">
              <input
                type="text"
                name="username"
                v-model="loginUser.username"
                required
              />
              <span>用户名</span><i></i>
            </div>
            <div class="inputBox">
              <input
                type="password"
                name="password"
                v-model="loginUser.password"
                required
              />
              <span>密码</span><i></i>
            </div>
            <div class="links">
              <a href="#">忘记?</a>
            </div>
            <input type="button" value="登录" id="btnLogin" @click="login()" />
          </form>
        </div>
        <div class="tb-item" v-show="activeIndex === 1">
          <form action="#" id="RegisterForm">
            <div class="inputBox">
              <input
                type="text"
                name="username"
                v-model="regUser.username"
                required
              />
              <span>用户名</span><i></i>
            </div>
            <div class="inputBox">
              <input
                type="password"
                name="password"
                v-model="regUser.password"
                required
              />
              <span>密码</span><i></i>
            </div>
            <div class="inputBox">
              <input
                type="password"
                name="repassword"
                v-model="regUser.repassword"
                required
              />
              <span>确认密码</span><i></i>
            </div>
            <div class="inputBox">
              <input
                type="text"
                name="nickname"
                v-model="regUser.nickname"
                required
              />
              <span>昵称</span><i></i>
            </div>
            <input type="button" value="注册" id="btnRegister" @click="reg" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100vh;
  background: url('@/assets/hh落日背景.jpeg') no-repeat;
  background-size: cover;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 600px;
  border: 1px solid #fff;
  border-radius: 18px;
  padding: 30px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 10px #fff;
}

.tab-nav ul {
  display: flex;
  justify-content: center;
  /* background-color: pink; */
}

.tab-nav ul li a {
  display: block;
  font-size: 25px;
  color: #fff;
  padding: 15px 20px;
}

.tab-nav ul li a.active {
  border-bottom: 2px solid #fff;
}

/* .tab-content {
    background-color: skyblue;
} */

.tab-content .head-sculpture {
  width: 55px;
  height: 55px;
  /* background-color: slateblue; */
  margin: 80px auto 0;
}

.tab-content .head-sculpture img {
  width: 100%;
  height: 100%;
}

form {
  /* position: absolute; */
  /* inset: 4px; */
  /* background: #222; */
  padding: 50px;
  border-radius: 8px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#RegisterForm {
  margin-top: 70px;
  padding: 0;
}

#RegisterForm #btnRegister {
  margin-top: 50px;
}

form .inputBox {
  position: relative;
  width: 300px;
  margin: 0 auto;
  margin-top: 35px;
}

form .inputBox:first-child {
  margin-top: 0;
}

form .inputBox input {
  position: relative;
  width: 100%;
  padding: 20px 10px 10px;
  background: transparent;
  outline: none;
  border: none;
  box-shadow: none;
  color: #23242a;
  font-size: 1em;
  letter-spacing: 0.05em;
  z-index: 10;
  transition: 0.5s;
  cursor: pointer;
}

form .inputBox span {
  position: absolute;
  left: 0;
  padding: 20px 0px 10px;
  pointer-events: none;
  color: #e1e1e1;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
}

form .inputBox input:valid ~ span,
form .inputBox input:focus ~ span {
  color: #fff;
  font-size: 0.75em;
  transform: translateY(-34px);
}

form .inputBox i {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  transition: 0.5s;
  pointer-events: none;
}

form .inputBox input:valid ~ i,
form .inputBox input:focus ~ i {
  height: 44px;
}

form .links {
  display: flex;
  justify-content: space-between;
}

form .links a {
  margin: 10px 0;
  font-size: 0.75em;
  color: #b0b0b0;
  text-decoration: none;
}

form .links a:hover,
form .links a:nth-child(2) {
  color: #fff;
}

form input[type='button'] {
  border: none;
  outline: none;
  padding: 13px 35px;
  background: #fff;
  cursor: pointer;
  font-size: 18px;
  border-radius: 8px;
  font-weight: 600;
  /* width: 100px; */
  margin: 0 auto;
  margin-top: 30px;
}

form input[type='button']:active {
  opacity: 0.8;
}
</style>
@/utils/request.js
