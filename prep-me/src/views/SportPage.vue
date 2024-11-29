<template>
    <div id="sport-container" class="v-container">
        <div class="header-container">
            <span class="title snd-txt ">Choose your Sport<br></span>
            <span class="subtitle fst-txt">Studies showed that stretching reduced sports injury by 68% !</span>
        </div>
        <div class="sport-list">
            <button class="sport-item" @click="selectSport('Skate')">Skateboard</button>
            <button class="sport-item unavailable" @click="selectSport('Calisthenics')">Calisthenics</button>
            <button class="sport-item unavailable" @click="selectSport('Skiing')">Skiing</button>
        </div>
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();


function selectSport(sport)
{
    if (sport != 'Skate') {
        return;
    }

    router.push(
        { path: '/loading', query: {sport} }
    );
}
</script>


<style lang="less" scoped>
#sport-container {

    .sport-header {
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .sport-list {
        display: flex;
        flex-direction: column;
        width: 80%;
        gap: 3rem;

        .sport-item {
            background: @secondary-color;
            color: @core-text-color;

            border: none;
            border-radius: 1.5rem;

            font-size: 2rem;
            font-weight: @semibold;

            width: 100%;
            padding: 1.5rem 0;
        }
    }
}
</style>