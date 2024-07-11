<script setup lang="ts">import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { invoke } from '@tauri-apps/api/core' 

const router = useRouter()

const _animate = ref({
    center: true,
    bg2: true,
    animate__animated: true,
    animate__fadeIn: true,
})

const _animateMenu = ref({
    center: true,
    animate__animated: true,
    animate__fadeIn: true,
    animate__fadeOut: false,
})

const text = '';

// 添加一个文本数组
const messages = ['hh'] // 添加更多文本，按顺序排列

let currentMessageIndex = 0

const name = ref('Name')
const message = ref('')
const isMessaged = ref(true)
var interval: any

const menu = ref(false)

const boxClass = ref({
    box: true,
    animate__animated: true,
    animate__fadeIn: true,
})

document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
        menu.value = !menu.value
    }
    if (event.key === 'Enter') {
        if (!menu.value) {
            nextMessage()
        }
    }
})

const nextMessage = () => {
    boxClass.value = {
        box: true,
        animate__animated: true,
        animate__fadeIn: true,
    }
    if (isMessaged.value) {
        typeMessage(messages[currentMessageIndex]) // 使用当前索引的文本
    } else {
        isMessaged.value = true
        clearInterval(interval)
        message.value = messages[currentMessageIndex] // 设置当前索引的文本
        boxClass.value = {
            box: true,
            animate__animated: true,
            animate__fadeIn: false,
        }
        // 更新当前文本索引，如果到达数组末尾，则重置为0
        currentMessageIndex = (currentMessageIndex + 1) % messages.length
    }
}


const typeMessage = (input: string) => {
    if (isMessaged.value) {
        isMessaged.value = false
        message.value = ''
        let currentIndex = 0
        interval = setInterval(() => {
            message.value += input[currentIndex]
            currentIndex++
            if (currentIndex === input.length) {
                clearInterval(interval)
                isMessaged.value = true
                boxClass.value = {
                    box: true,
                    animate__animated: true,
                    animate__fadeIn: false,
                }
            }
        }, 150)
    }
}
</script>

<template>
    <div :class="_animate" @click="nextMessage">
        <el-text class="mx-1  no-select" style="color: white">Game ing...</el-text>
        <div :class="boxClass">
            <div
                style="
                    margin-left: 20px;
                    margin-right: 20px;
                    margin-bottom: 10px;
                ">
                <el-row>
                    <el-col :span="12"><div></div></el-col>
                    <el-col :span="12"><div style="float: right"></div></el-col>
                </el-row>
            </div>
            <el-text class="mx-1 no-select  name">- {{ name }} -</el-text>
            <div class="message">
                <el-text class="mx-1 no-select " style="color: white">{{
                    message == '' ? text : message
                }}</el-text>
                <div class="next blinking">
                    <el-icon :size="17" color="white"><CaretBottom /></el-icon>
                </div>
            </div>
        </div>
    </div>
    <div
        v-if="menu"
        :class="_animateMenu"
        style="
            position: absolute;
            top: 0;
            background-color: rgba(0, 0, 0, 0.7);
        ">
        <div style="text-align: center; width: 100%">
            <el-text
                class="mx-1"
                size="large"
                style="color: white; font-size: 32px"
                >菜单</el-text
            >
            <br />
            <el-text class="mx-1" size="small" style="color: white"
                >（按下ESC键返回游戏）</el-text
            >
            <br /><br /><br />
            <el-button
                icon="HomeFilled"
                round
                style="width: 50%"
                @click="router.push('home')"
                >返回主页面</el-button
            >
            <br /><br />
            <el-button icon="Tools" round style="width: 50%">设置</el-button>
            <br /><br />
            <el-button
                type="danger"
                icon="CircleCloseFilled"
                round
                style="width: 50%"
                @click="invoke('exit')"
                >退出</el-button
            >
        </div>
    </div>
</template>

<style scoped>
.bg2 {
    background-image: url('/images/background/summer2.avif');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.back {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 10px;
    margin-left: 10px;
}
.name {
    color: white;
    margin-left: 20px;
    background-color: #dc7cdd;
}
.box {
    width: 100%;
    height: auto;
    padding: 20px;
    position: absolute;
    bottom: 0;
}
.message {
    padding: 20px 10px;
    margin: 0 20px 20px;
    background: linear-gradient(#dc7cdd, #e5cfe9);
}
.next {
    float: right;
    margin-top: 15px;
}

.no-select {
    user-select: none;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE/Edge */
  }

@keyframes blink {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.blinking {
    animation: blink 1s infinite;
}
</style>
