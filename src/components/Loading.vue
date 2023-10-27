<template>
  <div class="loading-view flex justify-center">
    <span class="loading loading-ring loading-lg"></span>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
  .loading-view {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.3);
  }
</style>
