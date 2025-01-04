<template>
    <div id="home-container-2" class="v-container">
        <div class="home2-header">
            <span class="home2-pretitle">Welcome to</span>
            <span class="home2-title">PrepMe!</span>
        </div>
        <button class="yellow-btn-big" @click="goToSPorts()">Select my Sport !</button>
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

    .home2-header {
        display: flex;
        flex-direction: column;

        .home2-pretitle {
            color: @yellow;
            font-size: @h2;
            font-weight: @medium;
        }
        .home2-title {
            color: @black;
            font-size: @h0;
            font-weight: @semibold;
            text-shadow: -3px -3px @yellow;
        }
    }
}
</style>