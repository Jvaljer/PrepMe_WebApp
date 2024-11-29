<template>
    <h1>{{ sport }} stretching session is ready !</h1>
    <h3>Ensure to follow the instruction, do not hesitate to take your time before going to the next step</h3>
    <button @click="goToStretch">Start Stretching</button>
</template>


<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const sport = route.query.sport || 'ERR_NOSPORT';

function goToStretch()
{
    router.push('/stretch');
}
</script>


<style lang="less" scoped>
</style>