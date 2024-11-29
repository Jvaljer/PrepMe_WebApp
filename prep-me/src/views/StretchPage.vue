<template>

    <div id="stretch-container" class="v-container">
        <button class="close-btn" @click="closeSession">
            <img src="@/assets/images/close-btn.png" alt="" class="close-img">
        </button>

        <div class="header-container">
            <span class="title snd-txt">{{ sport }} Stretching</span>
            <span class="subtitle fst-txt">{{ stretchId+1 }} - {{ stretchName }}</span>
            <!-- <StretchImage :sportName="sportName" :stretchNumber="stretchId" /> -->
             <img :src=getIllustrationPath() style="width: 16rem; height: 16rem;"/>
        </div>
        <div class="stretch-content">
            <span class="stretch-description core-txt">{{ stretchDescription }}</span>
            <div class="stretch-infos core-txt">
                <span class="stretch-duration"><b>Duration:</b> {{ stretchDuration }}</span>
                <span class="stretch-advice"><b>Advice:</b> {{ stretchAdvice }}</span>
            </div>
            <div class="stretch-navigation">
                <button v-if="stretchId > 0"
                    class="nav-btn" @click="previousStretch"
                >
                    Go Back
                </button>
                <button v-if="stretchId != (stretchAmount-1)"
                    class="nav-btn "@click="nextStretch"
                >
                    Next Move
                </button>
                <button v-if="stretchId == (stretchAmount-1)"
                    class="nav-btn" @click="finishStretches"
                >
                    Finish Session !
                </button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import testStretchImg from '@/assets/illustrations/stretching-example.png';

import skateStretchesData from '@/resources/skate-stretches.json';
import calisthenicsStretchesData from '@/resources/skate-stretches.json';
import skiingStretchesData from '@/resources/skate-stretches.json';

import StretchImage from '@/components/StretchImage.vue';

const router = useRouter();
const route = useRoute();

const sport = route.query.sport || 'ERR_NOSPORT_BIS';
const sportName = sport.charAt(0).toLowerCase() + sport.slice(1) || 'ERR_NONAME';

const stretchId = ref('ERR_NOID');
const stretchName = ref('');
const stretchDescription = ref('ERR_NODESCRIPTION');
const stretchDuration = ref('ERR_NODURATION');
const stretchAdvice = ref('ERR_NOADVICE');

const stretchAmount = ref(0);

const stretches = ref(null);

// Fetching stretches content
onMounted(() => {
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
        case 'Calisthenics':
            return calisthenicsStretchesData;
        case 'Skiing':
            return skiingStretchesData;
        default:
            return 'ERR_SPORTNOTFOUND';
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
    stretchName.value = getStretchName(stretchId.value);
    stretchDescription.value = getStretchDescription(stretchId.value);
    stretchDuration.value = getStretchDuration(stretchId.value);
    stretchAdvice.value = getStretchAdvice(stretchId.value);
}

function getIllustrationPath()
{
    const filePath = "/illustrations/"+sportName+"/stretch-"+stretchId.value+".png";
    console.log("Illustration is located at -> "+filePath);
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
    // TODO
}
</script>


<style lang="less" scoped>
.close-btn {
    position: absolute;

    top: 0.3rem;
    right: 0;

    background: transparent;
    border: none;

    .close-img {
        width: 2.5rem;
        height: 2.5rem;
    }
}

#stretch-container {
    background-image: url('@/assets/images/background-image-32.png');
    gap: 1rem !important;

    .header-container {
        margin-top: 2rem !important;
        align-items: center;

        .stretch-illustration {
            background-color: green;
            align-self: center;
            margin-top: 0.5rem;

            width: 18rem;
            height: 18rem;
        }
    }
    .stretch-content {
        background: fade(@secondary-color, 48%);

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        height: 100%;

        .stretch-description {
            font-size: 1.5rem;
            line-height: 1;
            width: 80%;
            padding-top: 2rem;
            text-align: left;
        }

        .stretch-infos {
            width: 80%;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            line-height: 1;
            font-style: italic;
            font-size: 1rem;
        }

        .stretch-navigation {
            width: 80%;
            display: flex;
            justify-content: center;
            align-items: center;

            gap: 2rem;
            padding-bottom: 2rem;

            .nav-btn {
                background: fade(@navigation-color, 32%);
                border: solid 0.25rem @navigation-color;
                border-radius: 1rem;

                padding: 0.25rem 0.5rem;

                color: @navigation-color;
                font-size: 1.5rem;
                font-weight: bold;
            }
        }
    }
}
</style>