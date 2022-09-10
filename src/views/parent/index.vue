<!--
 * @Author: CHENJIE
 * @Date: 2022-09-03 18:20:12
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-03 21:42:12
 * @FilePath: \vite-pinia-ts-template\src\views\parent\index.vue
 * @Description: parent
-->
<script setup lang='ts'>
import Son from './components/son.vue';
import { ref } from 'vue';
const num = ref(1)
const handleNum = (value: number) => {
    num.value += value
}
const handlePay = (value: number) => {
    num.value -= value

}
</script>
<template>
    <div>
        <Son :num="num" @handle-num="handleNum" @handle-pay="handlePay" />
    </div>
</template>


<style scoped>
</style>