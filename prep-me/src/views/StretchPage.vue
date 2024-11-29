<template>
    <h1>___ Stretching</h1>
    <button @click="previousStretch">Previous Stretch</button>
    <button @click="closeSession">Close Session</button>
    <button @click="nextStretch">Next Stretch</button>
</template>


<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

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
</style>