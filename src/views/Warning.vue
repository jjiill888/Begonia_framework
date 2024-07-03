<script setup lang="ts">
import { ref } from 'vue'
import { delay } from '../tools/delay'

const _animate = ref({
    center: true,
    animate__animated: true,
    animate__fadeInDown: true,
    animate__fadeIn: true,
    animate__fadeOut: false,
})
const animate = async () => {
    await delay(3700)
    _animate.value = {
        center: true,
        animate__animated: true,
        animate__fadeInDown: false,
        animate__fadeIn: false,
        animate__fadeOut: true,
    }
}
animate()
</script>

<template>
    <div :class="_animate">
        <div style="text-align: center">
            <el-text
                class="mx-1 text-style"
                size="large"
                style="font-size: 27px"
                >- 注意 -</el-text
            >
            <br /><br />
            <el-text class="mx-1" size="large">Warning</el-text>
            <br /><br /><br />
            <el-text class="mx-1 text-style">本作品纯属虚构</el-text>
            <br /><br /><br />
            <el-text class="mx-1 text-style"
                >登场的人物、团体、地名、事件等均架空</el-text
            >
            <br /><br /><br />
            <el-text class="mx-1 text-style"
                >与现实中存在的实物并无关联</el-text
            >
        </div>
    </div>
</template>

<style scoped>
.text-style {
    color: black;
}
</style>
