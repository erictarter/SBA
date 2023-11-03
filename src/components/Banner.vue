<script setup lang="ts">
  import BannerItems from './BannerItems.vue'
  const banners = [
    {
      backgroundImage: '',
      sport: 'football',
      title: 'Super Boost',
      url: ''
    },
    {
      backgroundImage: '',
      sport: 'basketball',
      title: 'Free Bonus',
      url: ''
    },
    {
      backgroundImage: '',
      sport: 'football',
      title: '25% Boost',
      url: ''
    },
    {
      backgroundImage: '',
      sport: 'football',
      title: 'Free Bonus',
      url: ''
    },
    {
      backgroundImage: '',
      sport: 'mma',
      title: 'Free Bonus',
      url: ''
    },
    {
      backgroundImage: '',
      sport: 'soccer',
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
