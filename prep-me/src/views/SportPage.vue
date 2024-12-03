<template>
    <div id="sport-container" class="v-container">
        <div class="header-container">
            <span class="title snd-txt appear-slide-from-left">Choose your Sport<br></span>
            <span class="subtitle fst-txt appear-slide-from-right">Studies showed that stretching reduced sports injury by 68% !</span>
        </div>
        <div class="action-list scale-up">
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

/* Animations */
.appear-slide-from-left {
    animation: slide-from-left 0.5s ease-in;
}
@keyframes slide-from-left {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.appear-slide-from-right {
    animation-delay: 0.33s;
    animation: slide-from-right 0.5s ease-out;
    animation-fill-mode: forwards;
}
@keyframes slide-from-right {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.scale-up {
    opacity: 0;

    animation-delay: 0.5s !important;
    animation: scale-up 1s ease-in;
    animation-fill-mode: forwards;
}
@keyframes scale-up {
    from {
        transform: scale(0);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}
</style>