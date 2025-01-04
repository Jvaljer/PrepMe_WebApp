<template>
    <!-- If the sport is Gym, then offer to choose the body part -->
    <div id="loading-container2" class="v-container">
        <h1>Loading for {{ sport }}</h1>
        <h2>Session : {{ session }}</h2>
        <button @click="goToStretch()">Start STretching !</button>
    </div>
</template>


<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const sport = route.query.sport;
const session = route.query.session;

function goToStretch()
{
    router.push(
        { path: '/stretch2', query: {sport, session} }
    );
}
</script>


<style lang="less" scoped>
</style>