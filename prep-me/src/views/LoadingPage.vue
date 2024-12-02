<template>
    <!-- If the sport is Gym, then offer to choose the body part -->
    <div v-if="sport == 'Gym' || !gymBodyPartIsSelected"
        id="loading-container" class="v-container"
    >
        <div class="header-container">
            <!-- If the sport is Gym, then offer to choose the body part -->
            <span class="title snd-txt">{{ sport }} stretching session is ready !<br> </span>
            <span class="subtitle fst-txt">Ensure to follow the instruction, do not hesitate to take your time before going to the next step.</span>
        </div>
        <div class="bodypart-list">
            <button class="bodypart-item" @click="selectBodyPart('Push')">
                <img src="@/assets/images/skate-icon.png" alt="" class="bodypart-icon">
                Push (Pec & Triceps)
            </button>
            <button class="bodypart-item" @click="selectBodyPart('Pull')">
                <img src="@/assets/images/gym-icon.png" alt="" class="bodypart-icon">
                Pull (Back & Biceps)
            </button>
            <button class="bodypart-item unavailable" @click="selectBodyPart('Legs')">
                <img src="@/assets/images/muscle-icon.png" alt="" class="bodypart-icon">
                Legs
            </button>
            <button class="bodypart-item unavailable" @click="selectBodyPart('Shoulders')">
                <img src="@/assets/images/ski-icon.png" alt="" class="bodypart-icon">
                Shoulders
            </button>
        </div>
    </div>

    <!-- If the sport is different from GYM or that 'gymBodyPart' is already selected -->
    <div v-if="sport != 'Gym' || gymBodyPartIsSelected"
        id="loading-container" class="v-container"
    >
        <div class="header-container">
            <span class="title snd-txt">{{ sport }} stretching session is ready !<br> </span>
            <span class="subtitle fst-txt">Ensure to follow the instruction, do not hesitate to take your time before going to the next step.</span>
        </div>
        <button class="design-btn" @click="goToStretch">
            Start Stretching !
        </button>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const gymBodyPartIsSelected = ref(false);

const router = useRouter();
const route = useRoute();

const sport = route.query.sport || 'ERR_NOSPORT';

function goToStretch()
{
    router.push(
        { path: '/stretch', query: {sport} }
    );
}
</script>


<style lang="less" scoped>
</style>