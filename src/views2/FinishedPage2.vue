<template>
    <div id="finished-container" class="v-container">
        <div class="header-container">
            <span class="header-title snd-txt">Well Done !</span>
            <span class="header-subtitle fst-txt">You're now ready to perform with a minimal risk of injury</span>
        </div>
        <img src="@/assets/icons/done-icon.png" alt="" class="finished-img" @click="downLoadLogs">
        <p style="opacity: 0.32; font-size: 0.5rem">Click the icon to download logs !</p>
    </div>
</template>
  
  
<script setup>
import { logs } from '../logger';
import { onMounted } from 'vue';

function downLoadLogs()
{
    const blob = new Blob([logs.value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "logs.txt";
    a.click();

    URL.revokeObjectURL(url);
}
</script>
  
  
<style lang="less" scoped>
#finished-container {
    .header-title {
        font-size: 3rem;
        font-weight: bold;
        text-align: center;
    }
    .header-subtitle {
        font-size: 2rem;
        line-height: 1;
    }
}
</style>