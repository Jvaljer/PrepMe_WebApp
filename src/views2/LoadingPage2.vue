<template>
    <button class="logo-btn" @click="cancel()">PrepMe!</button>
    <!-- If the sport is Gym, then offer to choose the body part -->
    <div id="loading-container2" class="v-container">
        <div class="loading2-header appear-scale-up" style="opacity:0;">
            <span class="loading2-pretitle">{{ sport }} session is</span>
            <span class="loading2-title">almost ready !</span>
        </div>
        <span class="loading2-text appear-fade-in" style="opacity:0;">
            Studies showed that adapted stretching reduced sports injuries by 68%.
        </span>
        <button class="yellow-btn-big appear-scale-up scale-1" @click="startSession()" style="opacity: 0;">Start Stretching !</button>
    </div>
</template>


<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const sport = route.query.sport;
const session = route.query.session;

function startSession()
{
    router.push(
        { path: '/stretch2', query: {sport, session} }
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
#loading-container2 {
    background-image: url('@/assets2/images/bg-50.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .loading2-header {
        display: flex;
        flex-direction: column;
        text-align: center;
        
        .loading2-pretitle {
            font-size: @h2;
            font-weight: @medium;
            color: @black;
        }
        .loading2-title {
            font-size: @h2;
            font-weight: @semibold;
            color: @black;
            text-shadow: -2px -2px @yellow;
        }
    }

    .loading2-text {
        margin-top: -2rem;
        font-size: @h2;
        font-weight: @regular;
        color: @black;
        text-align: left;
        width: 75%;
    }
}

/* Animations & Flows */
.appear-scale-up {
    animation: scale-up 0.5s ease-out;
    animation-fill-mode: forwards;
}
.scale-1 {
    animation-delay: 0.75s;
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

.appear-fade-in {
    animation: fade-in 0.5s ease-out;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
}
@keyframes fade-in {
    from {
        opacity: 0;
        // filter: blur(4px);
    }
    to {
        opacity: 1;
        // filter: blur(0);
    }
}
</style>