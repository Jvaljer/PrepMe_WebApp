<template>
    <div id="sport-container" class="v-container">
        <div class="sport-header">
            <span class="sport-title snd-txt ">Choose your Sport<br></span>
            <span class="sport-subtitle fst-txt">Studies showed that stretching reduced sports injury by 68% !</span>
        </div>
        <div class="sport-list">
            <button class="sport-item" @click="selectSport('skate')">Skateboard</button>
            <button class="sport-item" @click="selectSport('calisthenics')">Calisthenics</button>
            <button class="sport-item" @click="selectSport('skiing')">Skiing</button>
        </div>
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function selectSport(sport)
{
    router.push(
        { path: '/loading', query: {sport} }
    );
}
</script>


<style lang="less" scoped>
#sport-container {
    gap: 8rem;

    .sport-header {
        width: 80%;

        .sport-title {
            font-weight: @semibold;
            font-size: 2rem;
        }
        .sport-subtitle {
            font-size: 1.5rem;
            line-height: 1.25;
        }
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