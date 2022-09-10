/*
 * @Author: CHENJIE
 * @Date: 2022-09-03 10:50:24
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-10 19:41:29
 * @FilePath: \vite-pinia-ts-template\src\main.ts
 * @Description: main
 */
import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
const app = createApp(App)
app.use(createPinia())
app.mount('#app')
