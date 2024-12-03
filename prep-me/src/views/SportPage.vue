<template>
    <div id="sport-container" class="v-container">
        <div class="header-container">
            <span class="title snd-txt ">Choose your Sport<br></span>
            <span class="subtitle fst-txt">Studies showed that stretching reduced sports injury by 68% !</span>
        </div>
        <div class="action-list">
            <button class="action-item" @click="selectSport('Skate')">
                <img src="@/assets/images/skate-icon.png" alt="" class="action-icon">
                Skateboard
            </button>
            <button class="action-item" @click="selectSport('Gym')">
                <img src="@/assets/images/gym-icon.png" alt="" class="action-icon">
                Gym
            </button>
            <button class="action-item unavailable" @click="selectSport('Calisthenics')">
                <img src="@/assets/images/muscle-icon.png" alt="" class="action-icon">
                Calisthenics
            </button>
        </div>
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();


function selectSport(sport)
{
    if (sport != 'Skate' && sport != 'Gym') {
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
    
    .sport-header {
        margin-top: 4rem;
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
</style>