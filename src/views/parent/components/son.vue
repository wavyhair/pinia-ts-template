<!--
 * @Author: CHENJIE
 * @Date: 2022-09-03 18:20:21
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-04 21:55:17
 * @FilePath: \vite-pinia-ts-template\src\views\parent\components\son.vue
 * @Description: son
-->
<script setup lang='ts'>
    import axios from 'axios'
import { computed, ref } from 'vue';

type Props = {
    num: number,
    hobby?: string
}
const { num, hobby = "打游戏" } = defineProps<Props>()
// 普通写法 不带参数类型
// const emits = defineEmits(['handleNum'])
// ts写法 带参数类型
const emits = defineEmits<{
    (e: 'handleNum', value: number): void
    (e: 'handlePay', value: number): void
}>()
const handleNum = () => {
    emits('handleNum', 5)
}
const handlePay = () => {
    emits('handlePay', 1)
}
// 计算属性
const count = ref(1)
// computed<number> 设置返回值类型
const double = computed<number>(() => {
    return count.value * 2
})

// axios 配合 ts
type ListResponse = {
    data:{
        channels:{id:number,name:string}[]
    },
    message:string
}
const getList =async ()=>{
  const res=  await axios.get<ListResponse>('http://geek.itheima.net/v1_0/channels')
      console.log(' res',res.data.data.channels )
}
getList()
</script>
<template>
    <div>Son 组件</div>
    数量:{{ num }}
    爱好:{{ hobby }}
    <button @click="handleNum">加加</button>
    <button @click="handlePay">Pay</button>
    count :{{ count }}
    doubleCount :{{ double }}
</template>


<style scoped>
</style>