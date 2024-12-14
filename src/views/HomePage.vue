<template>
    <div id="home-container" class="v-container">
        <div class="home-text">
            <span class="home-pre-title snd-txt appear-slide-from-left">Welcome to</span>
            <span class="home-title fst-txt appear-slide-from-right">PrepMe!</span>
        </div>
        <button class="design-btn appear-scale-up" @click="goToSPorts" style="opacity:0">Select a Sport !</button>
    </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function goToSPorts()
{
    router.push('/sports');
}
</script>


<style lang="less" scoped>
#home-container {

    .home-text {
        display: flex;
        flex-direction: column;
        align-items: center;

        .home-pre-title {
            font-size: 2rem;
            font-weight: @semibold;
            letter-spacing: 0.125rem;
        }
        .home-title {
            font-size: 4rem;
            font-weight: @bold;
        }
    }
}

/* Animations */
.appear-slide-from-left {
    animation: slide-from-left 1.5s ease-in;
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
    animation: slide-from-right 1.5s ease-out;
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

.appear-scale-up {
    animation-delay: 1.5s !important;
    animation: scale-up 1s ease-out;
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