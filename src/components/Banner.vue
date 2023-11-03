<script setup lang="ts">
  import BannerItems from './BannerItems.vue'
  const banners = [
    {
      backgroundImage: '',
      icon: 'icon',
      title: 'Super Boost',
      url: ''
    },
    {
      backgroundImage: '',
      icon: 'icon',
      title: 'Free Bonus',
      url: ''
    },
    {
      backgroundImage: '',
      icon: 'icon',
      title: '25% Boost',
      url: ''
    },
    {
      backgroundImage: '',
      icon: 'icon',
      title: 'Free Bonus',
      url: ''
    },
    {
      backgroundImage: '',
      icon: 'icon',
      title: 'Free Bonus',
      url: ''
    },
    {
      backgroundImage: '',
      icon: 'icon',
      title: '25% Boost',
      url: ''
    }
  ]
</script>
<template>
  <div class="flex justify-center">
    <ul class="scroll-snap flex-nowrap menu-horizontal overflow-x-auto">
      <BannerItems :banners="banners" />
    </ul>
  </div>
</template>
<style scoped lang="scss">
  .scroll-snap {
    scroll-snap-type: x mandatory;
    overflow-x: auto;
    white-space: nowrap;
    padding: 0.5em;
  }
</style>
