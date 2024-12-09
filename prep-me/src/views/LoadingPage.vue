<template>
    <!-- If the sport is Gym, then offer to choose the body part -->
    <div v-if="displayGym()"
        id="loading-container" class="v-container"
    >
        <div class="header-container">
            <span class="title snd-txt">Before Starting,<br> </span>
            <span class="subtitle fst-txt">Please select the body part you will train ! Adapting your stretches to your session will ensure better performances.</span>
        </div>
        <div class="action-list">
            <button class="action-item" @click="selectBodyPart('push')">
                <img src="@/assets/icons/pec-icon.png" alt="" class="action-icon">
                Push
            </button>
            <button class="action-item" @click="selectBodyPart('pull')">
                <img src="@/assets/icons/back-icon.png" alt="" class="action-icon">
                Pull
            </button>
            <button class="action-item" @click="selectBodyPart('legs')">
                <img src="@/assets/icons/legs-icon.png" alt="" class="action-icon">
                Legs
            </button>
        </div>
    </div>

    <!-- If the sport is different from GYM or that 'gymBodyPart' is already selected -->
    <div v-if="!displayGym()"
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

const bodyPart = ref("ERR_NOBODYPART");
const gymBodyPartIsSelected = ref(false);

const router = useRouter();
const route = useRoute();

const sport = route.query.sport || 'ERR_NOSPORT';

function displayGym()
{
    if (gymBodyPartIsSelected.value)
        return false;

    return (sport == "Gym");
}

function selectBodyPart(part)
{
    console.log(`selectBodyPart(${part})`);
    gymBodyPartIsSelected.value = true;
    bodyPart.value = part;
}

function goToStretch()
{
    console.log(`LOADING PAGE -> sport=${sport}, bodyPart=${bodyPart.value}`);
    const bodyP = bodyPart.value;
    router.push(
        { path: '/stretch', query: {sport, bodyP} }
    );
}
</script>


<style lang="less" scoped>
#loading-container {
    justify-content: start;
    padding-top: 4rem;
    gap: 4rem;

    .header-container {
        .title {
            animation: slideInFromLeft 0.5s ease-in;
        }
        .subtitle {
            animation: slideInFromRight 0.5s ease-in;
        }
    }

    .design-btn {
        animation-delay: 1s;
        animation: scaleUp 0.5s ease-in;
    }
}

@keyframes scaleUp {
    from {
        transform: scale(0);
        opacity: 0;
    }
    to {
        transform: scale(A);
        opacity: 1;
    }
}
@keyframes slideInFromLeft {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
@keyframes slideInFromRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>