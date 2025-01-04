<template>

    <div id="stretch-container" class="v-container">
        <h1>Stretching for {{ sport }}</h1>
    </div>
</template>


<script setup>
import { useRouter, useRoute } from 'vue-router';

import skateStretchesData from '@/resources/skate-stretches.json';
import calisthenicsStretchesData from '@/resources/skate-stretches.json';
import skiingStretchesData from '@/resources/skate-stretches.json';

import gymPullData from '@/resources/gym-pull-stretches.json';
import gymPushData from '@/resources/gym-push-stretches.json';
import gymLegsData from '@/resources/gym-legs-stretches.json';

const router = useRouter();
const route = useRoute();

const sport = route.query.sport || 'ERR';

const stretchId = ref('ERR_STRETCH_NO-ID');
const stretchName = ref('');
const stretchDescription = ref('ERR_STRETCH_NO-DESCRIPTION');
const stretchDuration = ref('ERR_STRETCH_NO-DURATION');
const stretchAdvice = ref('ERR_STRETCH_NO-ADVICE');

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
    switch (bodyPart)
    {
        case 'pull':
            return gymPullData;
        case 'push':
            return gymPushData;
        case 'legs':
            return gymLegsData;
        default:
            return 'ERR_BODYPARTNOTFOUND';
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
    const filePath = (sport==='Gym') ? `/illustrations/${sportName}/${bodyPart}/stretch-${stretchId.value}.png` : `/illustrations/${sportName}/stretch-${stretchId.value}.png`;
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
    router.push('/sports');
}

function finishStretches()
{
    router.push(
        { path: '/finished2' }
    );
}
</script>


<style lang="less" scoped>
</style>