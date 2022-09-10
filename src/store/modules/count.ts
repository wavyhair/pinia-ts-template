/*
 * @Author: CHENJIE
 * @Date: 2022-09-10 19:44:14
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-10 20:18:49
 * @FilePath: \vite-pinia-ts-template\src\store\modules\count.ts
 * @Description: count
 */
import { defineStore } from 'pinia'
export default defineStore('count', {
    state: () => ({
        count: 0,
        num: 0
    }),
    actions: {
        increment() {
            this.count += 1
        },
        asyncIncrement() {
            setTimeout(() => {
                this.count += 1
            }, 1000);
        },
        decrement(value: number) {
            this.count -= value
        }
    },
    getters: {
        double(state) {
            return state.count * 2
        }
    }
})