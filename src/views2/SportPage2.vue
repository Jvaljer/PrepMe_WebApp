<template>
    <!-- YET MOST OF THIS IS HARDCODED BECAUSE OF TIME CONSTRAINTS -->
    <div id="sport-container-2" class="v-t-container"
        @touchstart="startSwipe" 
        @touchend="endSwipe"
    >

        <!-- SKATE SECTION -->
        <div id="skate-cover" class="sport2-cover"
            v-if="currentSport === 'Skate'"
        >
            <span class="sport2-title appear-slide-from-bottom" style="opacity:0;">Skateboard</span>
        </div>
        <div id="skate-info" class="sport2-info"
            v-if="currentSport === 'Skate'"
        >
            <span class="sport2-swipe-info">swip to change the sport >></span>
            <div class="sport2-stats">
                <div class="sport2-stat appear-slide-from-left" style="opacity:0;">
                    <img src="@/assets2/icons/calories.png" alt="" class="sport2-icon">
                    <span class="sport2-txt">147 kcal</span>
                </div>
                <div class="sport2-stat appear-slide-from-left slide-1" style="opacity:0;">
                    <img src="@/assets2/icons/hourglass.png" alt="" class="sport2-icon">
                    <span class="sport2-txt">8 min</span>
                </div>
                <div class="sport2-stat appear-slide-from-left slide-2" style="opacity:0;">
                    <img src="@/assets2/icons/steps.png" alt="" class="sport2-icon">
                    <span class="sport2-txt">12 steps</span>
                </div>
            </div>
            <button class="yellow-btn-mid appear-scale-up" @click="selectSport('Skate')">Let's Go !</button>
        </div>
        
        <!-- GYM SECTION -->
        <div id="gym-cover" class="sport2-cover"
            v-if="currentSport === 'Gym'"
        >
            <span class="sport2-title appear-slide-from-bottom" style="opacity:0;">Gym</span>
        </div>
        <div id="gym-info" class="sport2-info"
            v-if="currentSport === 'Gym'"
        >
            <span class="sport2-swipe-info"><< swip to change the sport</span>
            <div class="sport2-stats">
                <div class="sport2-stat appear-slide-from-left" style="opacity:0;">
                    <img src="@/assets2/icons/calories.png" alt="" class="sport2-icon">
                    <span class="sport2-txt">104-156 kcal</span>
                </div>
                <div class="sport2-stat appear-slide-from-left slide-1" style="opacity:0;">
                    <img src="@/assets2/icons/hourglass.png" alt="" class="sport2-icon">
                    <span class="sport2-txt">5-7min</span>
                </div>
                <div class="sport2-stat appear-slide-from-left slide-2" style="opacity:0;">
                    <img src="@/assets2/icons/steps.png" alt="" class="sport2-icon">
                    <span class="sport2-txt">5-6 steps</span>
                </div>
            </div>
            <button class="yellow-btn-mid appear-scale-up" @click="selectSport('Gym')">Let's Go !</button>
        </div>

    </div>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const currentSport = ref('Skate'); // this vows to change when swiping left or right.

// handling swipe
let startX = 0;
let endX = 0;

function startSwipe(event)
{
    startX = event.touches[0].clientX;
}
function endSwipe(event)
{
    endX = event.changedTouches[0].clientX;

    handleSwipe();
}
function handleSwipe()
{
    const threshold = 50; // Minimum swipe distance to trigger
    const deltaX = endX - startX;

    if (deltaX > threshold && currentSport.value === 'Gym') {
        currentSport.value = 'Skate';  // Swipe right to switch to Skate
    } else if (deltaX < -threshold && currentSport.value === 'Skate') {
        currentSport.value = 'Gym';   // Swipe left to switch to Gym
    }
}

// Routing
function selectSport(sport)
{
    if (sport === 'Gym')
    {
        router.push(
            { path: '/gymload', query: {sport} }
        );
    }
    else
    {
        let session = 'none';
        router.push(
            { path: '/loading2', query: {sport, session} }
        );
    }
}
</script>


<style lang="less" scoped>
#sport-container-2 {
    background-image: url('@/assets2/images/bg-20.png');
    background-size: cover; /* Optional: Ensures the image covers the entire background */
    background-position: center; /* Optional: Centers the image */
    background-repeat: no-repeat; /* Optional: Prevents tiling */

    #skate-cover {
        background-image: url('@/assets2/images/skate-cover.png');
    }
    #gym-cover {
        background-image: url('@/assets2/images/gym-cover.png');
    }

    .sport2-cover {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        width: 100%;
        height: 50%;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        padding-bottom: 1rem;

        .sport2-title {
            font-size: @h2;
            font-weight: @medium;
            padding: 0.5rem 1rem;
            border-radius: @radius-mid;
            border: solid 0.35rem @white;
            color: @white;
        }
    }

    .sport2-info {
        display: flex;
        flex-direction: column;

        width: 100%;
        height: 50%;
        box-sizing: border-box;

        justify-content: space-between;
        align-items: center;

        padding-top: 0.25rem;
        padding-bottom: 3rem;
        .sport2-swipe-info {
            font-size: @detail;
            color: @lightblue;
        }
        .sport2-stats {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;

            .sport2-stat {
                display: flex;
                gap: 0.5rem;
                align-items: center;
                .sport2-icon {
                    width: 2.5rem;
                    height: 2.5rem;
                }
                .sport2-txt {
                    font-size: @h3;
                    font-weight: @regular;
                    color: @text-blue;
                }
            }
        }
    }
}

/* Animations */
.appear-slide-from-bottom {
    animation: slide-from-bottom 0.5s ease-in;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
}
@keyframes slide-from-bottom {
    from {
        transform: translateY(75%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.appear-slide-from-left {
    animation: slide-from-left 0.33s ease-in;
    animation-fill-mode: forwards;
}
.slide-1 {
    animation-delay: 0.25s;
}
.slide-2 {
    animation-delay: 0.5s;
}
@keyframes slide-from-left {
    0% {
        transform: translateX(-50%);
        opacity: 0;
    }
    50% {
        transform: translateX(0);
        opacity: 1;
    }
    75% {
        transform: translateX(25%);
        opacity: 1;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

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
</style>