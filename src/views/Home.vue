<script setup lang="ts">
import { ref } from 'vue'
import { invoke } from '@tauri-apps/api/core'
import { useRouter } from 'vue-router'
const router = useRouter()
const _animate = ref({
    container: true,
    animate__animated: true,
    animate__fadeIn: true,
})
</script>

<template>
    <div :class="_animate">
        <div class="center bg">
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Re_Zero_kara_Hajimeru_Isekai_Seikatsu_logo.svg"
                    style="width: auto; height: 150px" />
                <br /><br />
                <div style="text-align: center">
                    <a href="javascript:void(0)" @click="router.push('game')"
                        ><span class="hover-effect">开始游戏</span></a
                    >
                </div>
                <br />
                <div style="text-align: center">
                    <a href="javascript:void(0)"
                        ><span class="hover-effect">继续游戏</span></a
                    >
                </div>
                <br />
                <div style="text-align: center">
                    <a href="javascript:void(0)"
                        ><span class="hover-effect">读取存档</span></a
                    >
                </div>
                <br />
                <div style="text-align: center">
                    <a href="javascript:void(0)"
                        ><span class="hover-effect">设置</span></a
                    >
                </div>
                <br />
                <div style="text-align: center">
                    <a href="javascript:void(0)" @click="invoke('exit')"
                        ><span class="hover-effect">退出</span></a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg {
    background-image: url('/images/background/summer1.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
span {
    color: #000;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
        1px 1px 0 #fff;
}
span.hover-effect {
    color: #000;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
        1px 1px 0 #fff;
    transition: font-size 0.3s ease, text-shadow 0.3s ease;
    position: relative;
    display: inline-block;
}

span.hover-effect:hover {
    font-size: 18px;
    text-shadow: none;
}

span.hover-effect::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: -1;
    transition: opacity 0.3s ease;
    opacity: 0;
}

span.hover-effect:hover::before {
    opacity: 1;
}
</style>