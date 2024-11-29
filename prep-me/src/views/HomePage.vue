<template>
    <div id="home-container" class="v-container">
        <div class="home-text">
            <span class="home-pre-title snd-txt">Welcome to</span>
            <span class="home-title fst-txt">PrepMe!</span>
        </div>
        <button class="design-btn" @click="goToSPorts">Select a Sport !</button>
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToSPorts()
{
    router.push('/sports');
}
</script>


<style lang="less" scoped>
#home-container {
    gap: 8rem;
}
.home-text {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.home-pre-title {
    font-size: 2rem;
    font-weight: @semibold;
    letter-spacing: 0.125rem;
}
.home-title {
    font-size: 4rem;
    font-weight: @bold;
}
</style>