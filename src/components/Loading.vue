<template>
  <div class="loading-view flex justify-center">
    <span class="loading loading-ring loading-lg"></span>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
  .loading-view {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(29, 29, 29, 0.75);
    color: white;
  }
</style>
