<template>
    <h1>Sports</h1>
    <h3>Studies showed that stretching reduced sports injury by 68% !</h3>
    <button @click="selectSport('skate')">Skate</button>
    <button @click="selectSport('calisthenics')">Calisthenics</button>
    <button @click="selectSport('skiing')">Skiing</button>
</template>


<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function selectSport(sport)
{
    router.push(
        { path: '/countdown', query: {sport} }
    );
}
</script>


<style lang="less" scoped>
</style>