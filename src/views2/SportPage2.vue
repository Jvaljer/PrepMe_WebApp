<template>
    <div id="sport-container-2" class="v-container">
        <h1>SPORTS</h1>
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
#sport-container-2 {
    background-image: url('@/assets2/images/bg-20.png');
    background-size: cover; /* Optional: Ensures the image covers the entire background */
    background-position: center; /* Optional: Centers the image */
    background-repeat: no-repeat; /* Optional: Prevents tiling */
}
</style>