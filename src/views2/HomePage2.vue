<template>
    <div id="home-container-2" class="v-container">
        <h1>HOME</h1>
        <button @click="goToSPorts()">click</button>
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToSPorts()
{
    router.push('/sports2');
}
</script>


<style lang="less" scoped>
#home-container-2 {
    background-image: url('@/assets2/images/bg-100.png');
    background-size: cover; /* Optional: Ensures the image covers the entire background */
    background-position: center; /* Optional: Centers the image */
    background-repeat: no-repeat; /* Optional: Prevents tiling */
}
</style>