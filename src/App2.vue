<template>
  <div id="app-container-2"
    @touchstart="logTouchStart"
    @touchend="logTouchEnd"
  >
    <router-view />
  </div>
</template>


<script setup>
import { addLog } from './logger';

function logTouchStart(e)
{
  const touch = e.touches[0];
  let x = parseInt(touch.clientX), y = parseInt(touch.clientY);

  addLog(`touch-start: (${x}, ${y})`);
}
function logTouchEnd(e)
{
  const touch = e.changedTouches[0];
  let x = parseInt(touch.clientX), y = parseInt(touch.clientY);

  addLog(`touch-end: (${x}, ${y})`);
}
</script>


<style lang="less" scoped>
#app-container-2 {
  width: 100%;
  height: 100%;
}
</style>
