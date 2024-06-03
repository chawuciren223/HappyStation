import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import 'element-plus/es/components/message/style/css'
import '@/assets/common.less'
import pinia from '@/stores/index'
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
