/*
 * @Author: CHENJIE
 * @Date: 2022-09-03 10:50:24
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-03 21:04:48
 * @FilePath: \vite-pinia-ts-template\vite.config.ts
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    // 如果提供的默认值需要在模板中渲染，需要额外添加配置
    reactivityTransform: true
  })]
})
