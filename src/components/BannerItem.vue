<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  const props = defineProps<{
    item: {
      icon: string
      backgroundImage: string
      title: string
      url: string
    }
  }>()
</script>
<template>
  <RouterLink
    class="flex items-center justify-center banner-item"
    :to="'/events/' + ''">
    <!-- <font-awesome-icon :icon="['fas', sport.icon]" />
      {{ sport.league }} -->
    <div>{{ item.icon }}</div>
    <div>{{ item.title }}</div>
  </RouterLink>
</template>
<style scoped lang="scss">
  .banner-item {
    width: 15.5em;
    height: 8.75em;
    background-color: rgb(178, 205, 205);
    border-radius: 4px;
    scroll-snap-align: center;
  }

  @media (min-width: 768px) {
    .banner-item {
      width: 18.5em;
      height: 11.75em;
      background-color: rgb(178, 205, 205);
      border-radius: 4px;
      scroll-snap-align: none;
    }
  }
</style>
