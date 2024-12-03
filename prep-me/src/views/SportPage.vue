<template>
    <div id="sport-container" class="v-container">
        <div class="header-container">
            <span class="title snd-txt ">Choose your Sport<br></span>
            <span class="subtitle fst-txt">Studies showed that stretching reduced sports injury by 68% !</span>
        </div>
        <div class="action-list">
            <button class="action-item" @click="selectSport('Skate')">
                <img src="@/assets/icons/sports/skate-icon.png" alt="" class="action-icon">
                Skateboard
            </button>
            <button class="action-item unavailable" @click="selectSport('Gym')">
                <img src="@/assets/icons/sports/gym-icon.png" alt="" class="action-icon">
                Gym
            </button>
            <button class="action-item unavailable" @click="selectSport('Calisthenics')">
                <img src="@/assets/icons/sports/muscle-icon.png" alt="" class="action-icon">
                Calisthenics
            </button>
            <button class="action-item unavailable" @click="selectSport('Ski')">
                <img src="@/assets/icons/sports/ski-icon.png" alt="" class="action-icon">
                Ski
            </button>
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
    justify-content: start;
    padding-top: 4rem;
    gap: 6rem;
    
    .sport-header {
        margin-top: 4rem;
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
</style>