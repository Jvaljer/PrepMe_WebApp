<template>
    <button class="logo-btn" @click="cancel()">PrepMe!</button>
    <div id="finished-container-2" class="v-container">
        <div class="finished2-header">
            <span class="finished2-pretitle">Thanks for using</span>
            <span class="finished2-title">PrepMe!</span>
        </div>
        <span class="finished2-text">You're ready to go! Minimal injury risk, enjoy your session!</span>
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
</style>