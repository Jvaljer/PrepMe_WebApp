<template>
    <div id="loading-container" class="v-container">
        <div class="header-container">
            <span class="title snd-txt">{{ sport }} stretching session is ready !<br></span>
            <span class="subtitle fst-txt">Ensure to follow the instruction, do not hesitate to take your time before going to the next step</span>
        </div>
        <button class="design-btn" @click="goToStretch">Start Stretching !</button>
    </div>
</template>


<script setup>
import { useRouter, useRoute } from 'vue-router';

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