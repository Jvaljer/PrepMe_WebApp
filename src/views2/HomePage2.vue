<template>
    <div id="home-container-2" class="v-container">
        <div class="home2-header">
            <span class="home2-pretitle appear-slide-from-left" style="opacity:0;">Welcome to</span>
            <span class="home2-title appear-slide-from-up" style="opacity:0;">PrepMe!</span>
        </div>
        <button class="yellow-btn-big appear-scale-up" @click="goToSPorts()" style="opacity:0;">Select my Sport !</button>
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

/* Animations & Flows */
.appear-slide-from-left {
    animation: slide-from-left 0.75s ease-in;
    animation-fill-mode: forwards;
}
@keyframes slide-from-left {
    from {
        transform: translateX(-150%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.appear-slide-from-up {
    animation: slide-from-up 0.5s ease-in;
    animation-delay: 0.8s;
    animation-fill-mode: forwards;
}
@keyframes slide-from-up {
    0% {
        transform: translateY(-25%) scale(0.5);
        opacity: 0;
    }
    50% {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
    75% {
        transform: translateY(12.5%)  scale(1.125);
        opacity: 1;
    }
    100% {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
}

.appear-scale-up {
    animation: scale-up 0.5s ease-out;
    animation-delay: 1.4s;
    animation-fill-mode: forwards;
}
@keyframes scale-up {
    from {
        transform: scale(0);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}
</style>