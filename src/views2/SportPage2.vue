<template>
    <div id="sport-container-2" class="v-container">
        <h1>HOME</h1>
        <button @click="selectSport('Gym')">click</button>
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();


function selectSport(sport)
{
    router.push(
        { path: '/loading2', query: {sport} }
    );
}
</script>


<style lang="less" scoped>
</style>