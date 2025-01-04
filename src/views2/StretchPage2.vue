<template>
    <div id="stretch-container-2" class="v-t-container">
        <div class="stretch2-content" :style="backgroundImage">
            <div class="stretch2-header">
                <span class="stretch2-title">{{ sport }} stretching</span>
                <span class="stretch2-indication">{{ stretchId+1 }} - {{ stretchName }}</span>
            </div>
            <img :src=getIllustrationPath() class="stretch2-img"/>
            <div class="stretch2-toolbar">
                <img src="@/assets2/icons/cross.png" alt="" class="stretch2-icon" @click="closeSession()"/>
                <img src="@/assets2/icons/question-mark.png" alt="" class="stretch2-icon" @click="toggleAdvice()"/>
            </div>
        </div>
        <div class="stretch2-infos">
            <span class="stretch2-description">{{ stretchDescription }}</span>
            <div class="stretch2-hint">
                <img src="@/assets2/icons/clock.png" alt="" class="stretch2-icon"/>
                <span class="stretch2-text">{{ stretchDuration }}</span>
            </div>
        </div>
        <div class="stretch2-navbar">
            <button v-if="stretchId > 0" class="blue-btn-small" @click="previousStretch()">Previous</button>
            <button v-if="stretchId != (stretchAmount-1)" class="yellow-btn-small" @click="nextStretch()">Next Stretch</button>
            <button v-if="stretchId == (stretchAmount-1)" class="yellow-btn-small" @click="finishStretches()">Done !</button>
        </div>
    </div>
</template>


<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import skateStretchesData from '@/resources/skate-stretches.json';
import calisthenicsStretchesData from '@/resources/skate-stretches.json';
import skiingStretchesData from '@/resources/skate-stretches.json';

import gymPullData from '@/resources/gym-pull-stretches.json';
import gymPushData from '@/resources/gym-push-stretches.json';
import gymLegsData from '@/resources/gym-legs-stretches.json';

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

onMounted(() => {
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

function getStretchesData()
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
        padding: 1.5rem 1rem;

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
                opacity: 0.75;
            }
        }

        .stretch2-img {
            width: 100%;
            height: 100%;
            z-index: 2;
        }
        .stretch2-toolbar {
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
</style>