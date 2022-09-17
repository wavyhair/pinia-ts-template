/*
 * @Author: CHENJIE
 * @Date: 2022-09-03 10:50:24
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-17 10:25:00
 * @FilePath: \vue-pinia-ts-template\src\main.ts
 * @Description: main
 */
import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
