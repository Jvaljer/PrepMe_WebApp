<template>
    <div id="finished-container" class="v-container">
        <div class="header-container">
            <span class="header-title snd-txt">Well Done !</span>
            <span class="header-subtitle fst-txt">You're now ready to perform with a minimal risk of injury</span>
        </div>
        <img src="@/assets/images/done-icon.png" alt="" class="finished-img">
    </div>
</template>
  
  
<script setup>
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