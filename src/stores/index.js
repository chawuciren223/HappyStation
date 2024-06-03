import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia

// import { useUserStore } from './modules/user'
// export { useUserStore }
// 按需导出简写:
export * from './modules/user'
export * from './modules/video'
export * from './modules/play'
export * from './modules/sort'
export * from './modules/search'
