<template>
    <button class="logo-btn" @click="cancel()">PrepMe!</button>
    <div id="finished-container-2" class="v-container">
        <div class="finished2-header">
            <span class="finished2-pretitle appear-slide-from-left" style="opacity: 0;">Thanks for using</span>
            <span class="finished2-title appear-slide-from-up" style="opacity: 0;">PrepMe!</span>
        </div>
        <span class="finished2-text appear-blur-in" style="opacity: 0;">You're ready to go! Minimal injury risk, enjoy your session!</span>
    </div>
</template>
  
  
<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();

function cancel()
{
    router.push(
        { path: '/' }
    );
}
</script>
  
  
<style lang="less" scoped>
#finished-container-2 {
    background-image: url('@/assets2/images/bg-100.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .finished2-header {
        display: flex;
        flex-direction: column;
        text-align: center;
        
        .finished2-pretitle {
            font-size: @h2;
            font-weight: @medium;
            color: @yellow;
        }
        .finished2-title {
            font-size: @h1;
            font-weight: @bold;
            color: @black;
            text-shadow: -4px -4px @yellow;
        }
    }

    .finished2-text {
        font-size: @h3;
        color: @black;
        opacity: 0.8;
        width: 80%;
        text-align: center;
    }
}

/* Animations */
.appear-slide-from-left {
    animation: slide-from-left 1s ease-in;
    animation-fill-mode: forwards;
}
@keyframes slide-from-left {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    50% {
        transform: translateX(0);
        opacity: 1;
    }
    62.5% {
        transform: translateX(25%);
        opacity: 1;
    }
    75% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.appear-slide-from-up {
    animation: slide-from-up 1s ease-in;
    animation-delay: 0.75s;
    animation-fill-mode: forwards;
}
@keyframes slide-from-up {
    0% {
        transform: translateY(-50%) scale(0.5);
        opacity: 0;
    }
    50% {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
    75% {
        transform: translateY(1.25);
        opacity: 1;
    }
    100% {
        transform: translateY(1);
        opacity: 1;
    }
}

.appear-blur-in {
    animation: blurr-in 1s ease-in;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
}
@keyframes blurr-in {
    0% {
        filter: blur(10px);
        opacity: 0;
    }
    100% {
        filter: blur(0);
        opacity: 1;
    }
}
</style>