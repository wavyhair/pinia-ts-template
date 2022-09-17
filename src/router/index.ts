/*
 * @Author: CHENJIE
 * @Date: 2022-09-17 09:48:37
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-17 10:27:23
 * @FilePath: \vue-pinia-ts-template\src\router\index.ts
 * @Description: router
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Pinia from '../views/pinia/index.vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Pinia
        },
        {
            path: '/playground',
            component: () => import('../views/animation/index.vue'),
        }
    ]
})
export default router