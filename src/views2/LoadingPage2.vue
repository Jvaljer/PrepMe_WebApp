<template>
    <!-- If the sport is Gym, then offer to choose the body part -->
    <div id="loading-container2" class="v-container">
        <h1>Loading for {{ sport }}</h1>
        <button @click="goToStretch()"></button>
    </div>
</template>


<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const sport = route.query.sport;

function goToStretch()
{
    router.push(
        { path: '/stretch2', query: {sport} }
    );
}
</script>


<style lang="less" scoped>
</style>