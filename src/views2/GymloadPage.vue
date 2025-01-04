<template>
    <button class="logo-btn" @click="cancel()">PrepMe!</button>
    <!-- LOT OF HARDCODE YET -->
    <div id="gymload-container" class="v-container">
        <div class="gymload-header">
            <span class="gymload-pretitle">Select your</span>
            <span class="gymload-title">stretches !</span>
        </div>
        <div class="gymload-list">
            <button id="gym-pull-btn" class="gymload-btn" @click="goToStretch('Pull')">
                <span class="gymload-title">Pull</span>
                <div class="gymload-stats">
                    <div class="gymload-stat">
                        <img src="@/assets2/icons/calories-white.png" alt="" class="gymload-icon">
                        <span class="gymload-txt">104 kcal</span>
                    </div>
                    <div class="gymload-stat">
                        <img src="@/assets2/icons/hourglass-white.png" alt="" class="gymload-icon">
                        <span class="gymload-txt">6 min</span>
                    </div>
                    <div class="gymload-stat">
                        <img src="@/assets2/icons/steps-white.png" alt="" class="gymload-icon">
                        <span class="gymload-txt">5 steps</span>
                    </div>
                </div>
            </button>
            <button id="gym-push-btn" class="gymload-btn" @click="goToStretch('Push')">
                <span class="gymload-title">Push</span>
                <div class="gymload-stats">
                    <div class="gymload-stat">
                        <img src="@/assets2/icons/calories-white.png" alt="" class="gymload-icon">
                        <span class="gymload-txt">127 kcal</span>
                    </div>
                    <div class="gymload-stat">
                        <img src="@/assets2/icons/hourglass-white.png" alt="" class="gymload-icon">
                        <span class="gymload-txt">5 min</span>
                    </div>
                    <div class="gymload-stat">
                        <img src="@/assets2/icons/steps-white.png" alt="" class="gymload-icon">
                        <span class="gymload-txt">5 steps</span>
                    </div>
                </div>
            </button>
            <button id="gym-legs-btn" class="gymload-btn" @click="goToStretch('Legs')">
                <span class="gymload-title">Legs</span>
                <div class="gymload-stats">
                    <div class="gymload-stat">
                        <img src="@/assets2/icons/calories-white.png" alt="" class="gymload-icon">
                        <span class="gymload-txt">156 kcal</span>
                    </div>
                    <div class="gymload-stat">
                        <img src="@/assets2/icons/hourglass-white.png" alt="" class="gymload-icon">
                        <span class="gymload-txt">7 min</span>
                    </div>
                    <div class="gymload-stat">
                        <img src="@/assets2/icons/steps-white.png" alt="" class="gymload-icon">
                        <span class="gymload-txt">6 steps</span>
                    </div>
                </div>
            </button>
        </div>
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

function cancel()
{
    router.push(
        { path: '/sports2' }
    );
}
</script>


<style lang="less" scoped>
#gymload-container {
    background-image: url('@/assets2/images/bg-20.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .gymload-header {
        display: flex;
        flex-direction: column;
        text-align: center;
        
        .gymload-pretitle {
            font-size: @h3;
            font-weight: @medium;
            color: @black;
        }
        .gymload-title {
            font-size: @h3;
            font-weight: @semibold;
            color: @black;
            text-shadow: -2px -2px @yellow;
        }
    }

    .gymload-list {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        gap: 3rem;
        margin-top: -0.5rem;
        width: 100%;

        .gymload-btn {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            border: none;
            width: 80%;
            color: @white;
            padding: 0.5rem 0.5rem;
            border-radius: @radius;
            transition: transform 0.25s ease;

            .gymload-title {
                font-size: @h2;
                font-weight: @semibold;
            }
            .gymload-stats {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                width: 100%;

                .gymload-stat {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: fit-content;

                    .gymload-icon {
                        width: 2.5rem;
                        height: 2.5rem;
                    }
                    .gymload-txt {
                        font-size: @txt;
                        font-weight: @medium;
                    }
                }
            }

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 0;
                background-color: rgba(@lightyellow, 0.25);
                transition: width 0.1s ease;
            }
            &:active {
                transform: scale(1.05);

                &::before {
                    width: 100%;
                }
            }
        }
    }
}

#gym-pull-btn {
    background-image: url('@/assets2/images/pull-cover.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
#gym-push-btn {
    background-image: url('@/assets2/images/push-cover.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
#gym-legs-btn {
    background-image: url('@/assets2/images/legs-cover.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>