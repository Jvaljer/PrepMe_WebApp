<template>

    <div id="stretch-container" class="v-container">
        <div class="header-container">
            <span class="title snd-txt">{{ sport }} Stretching</span>
            <span class="subtitle fst-txt">Move n°{{ stretchId }}</span>
        </div>
        <div class="stretch-content">
            <span class="stretch-description">{{ stretchDescription }}</span>
            <div class="stretch-navigation">
                <button class="previous-btn action-btn" @click="previousStretch">
                    <img src="" alt="" class="previous-img">
                </button>
                <button class="close-btn" @click="closeSession">
                    <img src="" alt="" class="close-img">
                </button>
                <button class="next-btn action-btn"@click="nextStretch">
                    <img src="" alt="" class="next-img">
                </button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const sport = route.query.sport || 'ERR_NOSPORT_BIS';

// Handling Stretches Navigation
function previousStretch()
{
    // TODO
}
function nextStretch()
{
    // TODO
}
function closeSession()
{
    router.push('/sports');
}
</script>


<style lang="less" scoped>
#stretch-container {

    .stretch-content {

        .stretch-description {

        }
        .stretch-navigation {
            
        }
    }
}
</style>