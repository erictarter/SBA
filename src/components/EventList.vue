<script setup lang="ts">
  const props = defineProps<{
    title: string
    data: any
  }>()
</script>
<template>
  <div class="event-list">
    <h1>{{ title }}</h1>
  </div>
</template>
<style scoped lang="scss">
  .loading-view {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(119, 119, 119, 0.45);
    color: white;
  }
</style>
