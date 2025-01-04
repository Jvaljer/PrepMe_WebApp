<template>
    <!-- If the sport is Gym, then offer to choose the body part -->
    <div id="gymload-container" class="v-container">
        <h1>Gym Loading</h1>
        <button @click="goToStretch('Pull')">Pull</button>
        <button @click="goToStretch('Push')">Push</button>
        <button @click="goToStretch('Legs')">Legs</button>
    </div>
</template>


<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const sport = route.query.sport;

function goToStretch(session)
{
    router.push(
        { path: '/loading2', query: {sport, session} }
    );
}
</script>


<style lang="less" scoped>
</style>