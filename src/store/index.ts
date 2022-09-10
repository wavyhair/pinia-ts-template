/*
 * @Author: CHENJIE
 * @Date: 2022-09-10 19:42:09
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-10 19:50:53
 * @FilePath: \vite-pinia-ts-template\src\store\index.ts
 * @Description: store
 */
import useCount from './modules/count'
import { defineStore } from 'pinia'
export default function useStore() {
    return {
        count: useCount()
    }
} 