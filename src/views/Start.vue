<script setup lang="ts">
import { ref } from 'vue'
import { delay } from '../tools/delay'
const _animate = ref({
    center: true,
    animate__animated: true,
    animate__fadeIn: true,
    animate__fadeOut: false,
})
const animate = async () => {
    await delay(3700)
    _animate.value = {
        center: true,
        animate__animated: true,
        animate__fadeIn: false,
        animate__fadeOut: true,
    }
}
animate()
</script>

<template>
    <div :class="_animate">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/Genshin_Chinese_logo.svg"
            style="width: auto; height: 30%" />
    </div>
</template>

<style scoped></style>
