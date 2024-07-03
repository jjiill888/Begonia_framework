<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { delay } from './tools/delay'
import { RouterView } from 'vue-router'
import { useRouter } from 'vue-router'

const router = useRouter()

const gameBgMusic = new Audio()
const gameBgMusicIsPlaying = ref(true)

onMounted(async () => {
    gameBgMusic.src = 'http://music.163.com/song/media/outer/url?id=443794.mp3'
    gameBgMusic.loop = true
    gameBgMusic.play()
    gameBgMusicIsPlaying.value = true
    await delay(5000)
    router.push('warning')
    await delay(5000)
    router.push('home')
})

onBeforeUnmount(() => {
    if (gameBgMusicIsPlaying.value) {
        gameBgMusic.pause()
    }
})
</script>

<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<style scoped></style>
