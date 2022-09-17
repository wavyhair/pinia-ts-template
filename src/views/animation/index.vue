<!--
 * @Author: CHENJIE
 * @Date: 2022-09-17 09:52:46
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-17 10:38:48
 * @FilePath: \vue-pinia-ts-template\src\views\animation\index.vue
 * @Description: animation
-->
<script setup lang='ts'>
import { ref } from 'vue';

const boxShow = ref(false)
</script>
<template>
    <button @click="boxShow = !boxShow">toogle</button>
    <Transition name="box">
        <div v-if="boxShow" class="box">
            animation
        </div>
    </Transition>

</template>


<style scoped>
.box {
    width: 10vw;
    height: 10vh;
    background-color: aquamarine;
}

.box-enter-from {
    opacity: 0;
}

.box-enter-active {
    position: absolute;
    transform: translateX(-150px);
    transition: opacity 0.5s 0.2s;
    z-index: 1;
}

.box-enter-to {
    opacity: 1;

}
</style>