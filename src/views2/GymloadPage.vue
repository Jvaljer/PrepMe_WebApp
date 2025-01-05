<template>
    <button class="logo-btn" @click="cancel()">PrepMe!</button>
    <!-- LOT OF HARDCODE YET -->
    <div id="gymload-container" class="v-container">
        <div class="gymload-header appear-scale-up" style="opacity:0;">
            <span class="gymload-pretitle">Select your</span>
            <span class="gymload-title">stretches !</span>
        </div>
        <div class="gymload-list">
            <button id="gym-pull-btn" class="gymload-btn appear-slide-from-left" @click="goToStretch('Pull')" style="opacity:0;">
                <span class="gymload-title">Pull</span>
                <div class="gymload-stats">
                    <div class="gymload-stat appear-fade-in fade-0" style="opacity:0;">
                        <img src="@/assets2/icons/calories-white.png" alt="" class="gymload-icon">
                        <span class="gymload-txt">104 kcal</span>
                    </div>
                    <div class="gymload-stat appear-fade-in fade-1" style="opacity:0;">
                        <img src="@/assets2/icons/hourglass-white.png" alt="" class="gymload-icon">
                        <span class="gymload-txt">6 min</span>
                    </div>
                    <div class="gymload-stat appear-fade-in fade-2" style="opacity:0;">
                        <img src="@/assets2/icons/steps-white.png" alt="" class="gymload-icon">
                        <span class="gymload-txt">5 steps</span>
                    </div>
                </div>
            </button>
            <button id="gym-push-btn" class="gymload-btn appear-slide-from-left slide-1" @click="goToStretch('Push')" style="opacity:0;">
                <span class="gymload-title">Push</span>
                <div class="gymload-stats">
                    <div class="gymload-stat appear-fade-in fade-3" style="opacity:0;">
                        <img src="@/assets2/icons/calories-white.png" alt="" class="gymload-icon">
                        <span class="gymload-txt">127 kcal</span>
                    </div>
                    <div class="gymload-stat appear-fade-in fade-4" style="opacity:0;">
                        <img src="@/assets2/icons/hourglass-white.png" alt="" class="gymload-icon">
                        <span class="gymload-txt">5 min</span>
                    </div>
                    <div class="gymload-stat appear-fade-in fade-5" style="opacity:0;">
                        <img src="@/assets2/icons/steps-white.png" alt="" class="gymload-icon">
                        <span class="gymload-txt">5 steps</span>
                    </div>
                </div>
            </button>
            <button id="gym-legs-btn" class="gymload-btn appear-slide-from-left slide-2" @click="goToStretch('Legs')" style="opacity:0;">
                <span class="gymload-title">Legs</span>
                <div class="gymload-stats">
                    <div class="gymload-stat appear-fade-in fade-6" style="opacity:0;">
                        <img src="@/assets2/icons/calories-white.png" alt="" class="gymload-icon">
                        <span class="gymload-txt">156 kcal</span>
                    </div>
                    <div class="gymload-stat appear-fade-in fade-7" style="opacity:0;">
                        <img src="@/assets2/icons/hourglass-white.png" alt="" class="gymload-icon">
                        <span class="gymload-txt">7 min</span>
                    </div>
                    <div class="gymload-stat appear-fade-in fade-8" style="opacity:0;">
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
                    gap: 4px;

                    .gymload-icon {
                        width: 2rem;
                        height: 2rem;
                    }
                    .gymload-txt {
                        font-size: @h4;
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

/* Animations */
.appear-scale-up {
    animation: scale-up 0.5s ease-out;
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

.appear-slide-from-left {
    animation: slide-from-left 0.5s ease-in;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
}
.slide-1 {
    animation-delay: 0.75s;
}
.slide-2 {
    animation-delay: 1s;
}
@keyframes slide-from-left {
    0% {
        transform: translateX(-25%);
        opacity: 0;
    }
    50% {
        transform: translateX(0);
        opacity: 1;
    }
    75% {
        transform: translateX(12.5%);
        opacity: 1;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.appear-fade-in {
    animation: fade-in 0.33s ease-in;
    animation-fill-mode: forwards;
}
.fade-0 {
    animation-delay: 0.85s;
}
.fade-1 {
    animation-delay: 1s;
}
.fade-2 {
    animation-delay: 1.15s;
}
.fade-3 {
    animation-delay: 1.1s;
}
.fade-4 {
    animation-delay: 1.35s;
}
.fade-5 {
    animation-delay: 1.6s;
}
.fade-6 {
    animation-delay: 1.35s;
}
.fade-7 {
    animation-delay: 1.6s;
}
.fade-8 {
    animation-delay: 1.85s;
}
@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>