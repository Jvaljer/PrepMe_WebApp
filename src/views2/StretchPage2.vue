<template>
    <button class="logo-btn" @click="cancel()">PrepMe!</button>
    <div v-if="!showAdvice" class="stretch2-advice" @click="toggleAdvice()">
        <span class="stretch2-advice-text">{{ stretchAdvice }}</span>
        <img src="@/assets2/icons/question-mark-bis.png" alt="" class="stretch2-icon" />
    </div>
    <div id="stretch-container-2" class="v-t-container">
        <div class="stretch2-content" :style="backgroundImage">
            <div class="stretch2-header">
                <span class="stretch2-title appear-fade-in" style="opacity: 0;">{{ sport }} stretching</span>
                <span class="stretch2-indication appear-slide-from-up" style="opacity: 0;">{{ stretchId+1 }} - {{ stretchName }}</span>
            </div>
            <img :src=getIllustrationPath() class="stretch2-img appear-fade-in fade-1" style="opacity: 0;"/>
            <div class="stretch2-toolbar">
                <img src="@/assets2/icons/cross.png" alt="" class="stretch2-icon appear-scale-up" @click="closeSession()" style="opacity: 0;"/>
                <img src="@/assets2/icons/question-mark.png" alt="" class="stretch2-icon appear-scale-up" @click="toggleAdvice()" style="opacity: 0;"/>
            </div>
        </div>
        <div class="stretch2-infos">
            <span class="stretch2-description appear-slide-left" style="opacity: 0;">{{ stretchDescription }}</span>
            <div class="stretch2-hint appear-slide-left slide-1" style="opacity: 0;">
                <img src="@/assets2/icons/clock.png" alt="" class="stretch2-icon"/>
                <span class="stretch2-text">{{ stretchDuration }}</span>
            </div>
        </div>
        <div class="stretch2-navbar">
            <button v-if="stretchId > 0" class="blue-btn-small appear-scale-up scale-1" @click="previousStretch()" style="opacity: 0;">Previous</button>
            <button v-if="stretchId != (stretchAmount-1)" class="yellow-btn-small appear-scale-up scale-1" @click="nextStretch()" style="opacity: 0;">Next Stretch</button>
            <button v-if="stretchId == (stretchAmount-1)" class="yellow-btn-small appear-scale-up scale-1" @click="finishStretches()" style="opacity: 0;">Done !</button>
        </div>
    </div>
</template>


<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { addStretches, getStretches } from '../indexedDB';

import skateStretchesData from '@/resources/skate-stretches.json';
import calisthenicsStretchesData from '@/resources/skate-stretches.json';
import skiingStretchesData from '@/resources/skate-stretches.json';

import gymPullData from '@/resources/gym-pull-stretches.json';
import gymPushData from '@/resources/gym-push-stretches.json';
import gymLegsData from '@/resources/gym-legs-stretches.json';

async function preloadData()
{
    await addStretches('Skate', 'General', skateStretchesData);
    await addStretches('Calisthenics', 'General', calisthenicsStretchesData);
    await addStretches('Skiing', 'General', skiingStretchesData);

    await addStretches('Gym', 'Pull', gymPullData);
    await addStretches('Gym', 'Push', gymPushData);
    await addStretches('Gym', 'Legs', gymLegsData);
}

const router = useRouter();
const route = useRoute();

const sport = route.query.sport || 'ERR_NO-SPORT';
const sportName = sport.toLowerCase();
const session = route.query.session || 'ERR_NO-SESSION';

const stretchId = ref('ERR_STRETCH_NO-ID');
const stretchName = ref('');
const stretchDescription = ref('ERR_STRETCH_NO-DESCRIPTION');
const stretchDuration = ref('ERR_STRETCH_NO-DURATION');
const stretchAdvice = ref('ERR_STRETCH_NO-ADVICE');

const images = import.meta.glob('@/assets2/images/*.png', { eager: true });

const stretchAmount = ref(0);
const stretches = ref(null);

const showAdvice = ref(true);

onMounted(async () => {
    /*await preloadData();
    stretches.value = await fetchStretches();
    if (stretches.value.length > 0)
    {
        stretchId.value = 0;
        stretchAmount.value = stretches.value.stretches.length;
        updateStretch();
    } */

    //this snippet is only fetching & updating data
    
    stretches.value = getStretchesData();
    stretchId.value = 0;  // Setting the stretchId to 0
    stretchAmount.value = getStretchesAmount();
    updateStretch();
});

const backgroundImage = computed(() => {
    const imagePath = images[`/src/assets2/images/${sportName}-cover.png`];

    if (imagePath) {
        return { backgroundImage: `url(${imagePath.default})` };
    } else {
        console.error('Image not found:', sportName);
        return { backgroundImage: 'none' };
    }
});

async function fetchStretches()
{
    const result = await getStretches(sport, session);
    return result ? result.stretches : [];
}

function getStretchesData() // initially "fetchStretches"
{
    switch (sport)
    {
        case 'Skate':
            return skateStretchesData;
        case 'Gym':
            return getBodyPartStretches();
        case 'Calisthenics':
            return calisthenicsStretchesData;
        case 'Skiing':
            return skiingStretchesData;
        default:
            return 'ERR_SPORT-NOT-FOUND';
    }
}
function getBodyPartStretches()
{
    switch (session)
    {
        case 'Pull':
            return gymPullData;
        case 'Push':
            return gymPushData;
        case 'Legs':
            return gymLegsData;
        default:
            return 'ERR_BODY-PART-NOT-FOUND';
    }
}
function getStretchName(id)
{
    return stretches.value.stretches[id].name;
}
function getStretchDuration(id)
{
    return stretches.value.stretches[id].duration;
}
function getStretchAdvice(id)
{
    return stretches.value.stretches[id].advice;
}

function getStretchDescription(id)
{
    return stretches.value.stretches[id].description;
}

function getStretchesAmount()
{
    return stretches.value.stretches.length;
}

function updateStretch()
{
    showAdvice.value = true;

    stretchName.value = getStretchName(stretchId.value);
    stretchDescription.value = getStretchDescription(stretchId.value);
    stretchDuration.value = getStretchDuration(stretchId.value);
    stretchAdvice.value = getStretchAdvice(stretchId.value);
}

function getIllustrationPath()
{
    // const filePath = "/illustrations/"+sportName+"/stretch-"+stretchId.value+".png";
    const filePath = (sport==='Gym') ? `/illustrations2/${sportName}/${session.toLowerCase()}/stretch-${stretchId.value}.png` : `/illustrations2/${sportName}/stretch-${stretchId.value}.png`;
    return filePath;
}

// Handling Stretches Navigation
function previousStretch()
{
    stretchId.value--;
    updateStretch();
}

function nextStretch()
{
    stretchId.value++;
    updateStretch();
}

function closeSession()
{
    router.push('/sports2');
}

function toggleAdvice()
{
    showAdvice.value = !showAdvice.value;
}

function finishStretches()
{
    router.push(
        { path: '/finished2' }
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
#stretch-container-2 {
    background-image: url('@/assets2/images/bg-20.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .stretch2-content {
        background-image: url('@/assets2/images/skate-cover.png');
        &::before {
            content: '';
            z-index: 1;
            background-color: @black;
            opacity: 0.33;
            position: absolute;
            width: 100%;
            height: 60%;
            top: 0;
            left: 0;
        }

        background-size: cover;
        box-sizing: border-box;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 60%;
        width: 100%;
        z-index: 0;
        padding: 1rem;

        .stretch2-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 2;
            text-align: left;

            .stretch2-title {
                font-size: @h2;
                font-weight: @medium;
                color: @white;
            }
            .stretch2-indication {
                width: 100%;
                font-size: @h3;
                font-weight: @regular;
                color: @white;
                opacity: 0.5;
            }
        }

        .stretch2-img {
            padding-top: 1.5rem;
            height: 75%;
            z-index: 2;
        }
        .stretch2-toolbar {
            margin-top: -2rem;
            padding-bottom: 1rem;
            display: flex;
            justify-content: space-between;
            width: 100%;
            z-index: 2;

            .stretch2-icon {
                width: 2.5rem;
                height: 2.5rem;
            }
        }
    }

    .stretch2-infos {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        gap: 1rem;
        padding: 1.5rem 1rem;
        z-index: 2;
        height: 100%;

        .stretch2-description {
            font-size: @h3;
            font-weight: @light;
            color: @black;
            text-align: left;
            width: 100%;
        }

        .stretch2-hint {
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 16px;
            width: 100%;

            .stretch2-icon {
                width: 1.5rem;
                height: 1.5rem;
            }
            .stretch2-text {
                line-height: 0.8;
                font-size: @h3;
                font-weight: @thin;
                color: @black;
            }
        }
    }

    .stretch2-navbar {
        display: flex;
        flex-direction: row;
        width: 100%;
        box-sizing: border-box;
        justify-content: center;
        gap: 3rem;
        align-items: center;

        padding: 1.5rem 1rem;
    }
}

.stretch2-advice {
    z-index: 4;
    position: absolute;
    top: 50%;
    right: 1rem;
    left: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: end;
    padding: 0.5rem 1rem;
    background-color: @thinblue;
    border-radius: @radius-mid;

    .stretch2-advice-text {
        font-size: @txt;
        font-weight: @light;
        color: @black;
    }
    .stretch2-icon {
        width: 2.5rem;
        height: 2.5rem;
    }
}

/* Animations */
.appear-fade-in {
    animation: fade-in 0.5s ease-in;
    animation-fill-mode: forwards;
}
.fade-1 {
    animation-duration: 1s;
    animation-delay: 0.5s;
}
@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.appear-slide-from-up {
    animation: slide-up 0.33s ease-in;
    animation-delay: 0.33s;
    animation-fill-mode: forwards;
}
@keyframes slide-up {
    from {
        transform: translateY(-50%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.appear-scale-up {
    animation: scale-up 0.75s ease-in;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
}
.scale-1 {
    animation-delay: 1s;
}
@keyframes scale-up {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    50% {
        transform: scale(1);
        opacity: 1;
    }
    75% {
        transform: scale(1.125);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.appear-slide-left {
    animation: slide-left 0.5s ease-in;
    animation-delay: 1.25s;
    animation-fill-mode: forwards;
}
.slide-1 {
    animation-delay: 1.5s;
}
@keyframes slide-left {
    0% {
        transform: translateX(-25%);
        opacity: 0;
    }
    50% {
        transform: translateX(0);
        opacity: 1;
    }
    60% {
        transform: translateX(5%);
        opacity: 1;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>