<template>

    <div id="stretch-container" class="v-container">
        <button class="close-btn" @click="closeSession">
            <img src="@/assets/images/close-btn.png" alt="" class="close-img">
        </button>

        <div class="header-container">
            <span class="title snd-txt">{{ sport }} Stretching</span>
            <span class="subtitle fst-txt">Move n°{{ stretchId }} - {{ stretchName }}</span>
            <img :src="stretchIllustrationPath" class="stretch-illustration"/>
        </div>
        <div class="stretch-content">
            <span class="stretch-description">{{ stretchDescription }}</span>
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

const router = useRouter();
const route = useRoute();

const sport = route.query.sport || 'ERR_NOSPORT_BIS';
const sportName = sport.charAt(0).toLowerCase() + sport.slice(1) || 'ERR_NONAME';

const stretchId = ref('ERR_NOID');
const stretchName = ref('');
const stretchDescription = ref('ERR_NODESCRIPTION');
const stretchIllustrationPath = ref(testStretchImg);

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

function getStretchDescription(id)
{
    return stretches.value.stretches[id].description;
}

function getStretchIllustrationPath(id)
{
    const fileName = "skate-"+id;
    return `@/assets/illustrations/${sportName}/${fileName}`;
}

function getStretchesAmount()
{
    return stretches.value.stretches.length;
}

function updateStretch()
{
    stretchName.value = getStretchName(stretchId.value);
    stretchDescription.value = getStretchDescription(stretchId.value);
    stretchIllustrationPath.value = getStretchIllustrationPath(stretchId.value);
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

        .stretch-illustration {
            background-color: green;
            align-self: center;
            margin-top: 0.5rem;

            width: 20rem;
            height: 20rem;
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