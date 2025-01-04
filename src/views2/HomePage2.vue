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
</style>