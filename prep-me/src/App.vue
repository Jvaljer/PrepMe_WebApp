<template>
  <div id="app-container"
    @touchstart="logTouchStart"
    @touchend="logTouchEnd"
  >
    <router-view />
  </div>
</template>


<script setup>
import { addLog } from './logger';

function logTouchStart(event)
{
  const touch = event.touches[0]; // getting first touch point

  let x = parseInt(touch.clientX); // turning into integers for readable logs
  let y = parseInt(touch.clientY);

  addLog(`start: (${x}, ${y})`);
}
function logTouchEnd(event)
{
  var touch = event.changedTouches[0]; // getting first changed touch point

  let x = parseInt(touch.clientX); // turning into integers for readable logs
  let y = parseInt(touch.clientY);

  addLog(`end: (${x}, ${y})`);
}
</script>


<style lang="less" scoped>
#app-container {
  width: 100%;
  height: 100%;
}
</style>
