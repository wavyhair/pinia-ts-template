<!--
 * @Author: CHENJIE
 * @Date: 2022-09-03 10:50:24
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-10 20:20:09
 * @FilePath: \vite-pinia-ts-template\src\App.vue
 * @Description: 
-->
<script setup lang="ts">
import useCount from './store/modules/count'
import useStore from './store';
import Parent from './views/parent/index.vue';
import { storeToRefs } from 'pinia';
const { count } = useStore()
// const { num } = useCount() // 注意： 这样结构会失去响应式
const { num } = storeToRefs(useCount())  // 使用 storeToRefs 结构出来的数据是具有响应式的

</script>

<template>
  <Parent />
  <h2>Pinia</h2>
  count:{{count.count}}
  <br>
  <button @click="count.increment()">increment</button>
  <br>
  <button @click="count.decrement(5)">decrement</button>
  <br>
  <button @click="count.asyncIncrement()">asyncIncrement</button>
  getter:{{count.double}}
  <br>
  <button @click="count.$reset()">reset</button>

</template>

<style scoped>

</style>
