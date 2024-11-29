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
                <button v-if="stretchAmount > 0"
                    class="nav-btn" @click="previousStretch"
                >Go Back</button>
                <button class="nav-btn"@click="nextStretch">Next Move</button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import testStretchImg from '@/assets/illustrations/test-stretching.png';

const router = useRouter();
const route = useRoute();

const sport = route.query.sport || 'ERR_NOSPORT_BIS';
const sportName = sport.charAt(0).toLowerCase() + sport.slice(1) || 'ERR_NONAME';

const stretchId = ref('ERR_NOID');
const stretchName = ref(sportName);
const stretchDescription = ref('ERR_NODESCRIPTION');
const stretchIllustrationPath = ref(testStretchImg);

const stretchAmount = ref(0);

// Fetching stretches content
onMounted(() => {
    stretchId.value = 0;  // Setting the stretchId to 0
    stretchAmount.value = fetchStretchesAmount();
    updateStretch();
});

function fetchStretchName(id)
{
    // TODO
}

function fetchStretchDescription(id)
{
    // TODO
}

function getStretchIllustrationPath(id)
{
    // TODO
}

function fetchStretchesAmount()
{
    // TODO
}

function updateStretch()
{
    stretchName.value = fetchStretchName(stretchId.value);
    stretchDescription.value = fetchStretchDescription(stretchId.value);
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

    .header-container {
        margin-top: 2rem !important;

        .stretch-illustration {
            align-self: center;
            padding-top: 2rem;
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