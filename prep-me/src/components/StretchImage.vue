<template>
    <img :src="getImagePath(sportName, stretchNumber)" alt="" class="stretch-image"/>
</template>

<script setup>
const props = defineProps({
    sportName: {
        type: String,
        required: true
    },
    stretchNumber: {
        type: Int16Array,
        required: true
    }
})

function getImagePath(sportName, stretchNumber)
{
    const filePath = "@/assets/illustrations/"+sportName+"/stretch-"+stretchNumber+".png";
    console.log("image path: "+filePath);
    return filePath;
}
</script>

<style scoped>
.stretch-image {
    width: 16rem;
    height: 16rem;
}
</style>