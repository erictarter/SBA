<script setup lang="ts">
  import BannerItems from './BannerItems.vue'
  const banners = [
    {
      backgroundImage:
        'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: 'boost',
      title: 'Super Boost',
      url: '/events'
    },
    {
      backgroundImage:
        'https://plus.unsplash.com/premium_photo-1682309553075-c84ea8d9d49a?auto=format&fit=crop&q=80&w=2712&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: 'boost',
      title: 'Boost',
      url: '/events'
    },
    {
      backgroundImage:
        'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: 'discount',
      title: '25% ',
      url: '/events'
    },
    {
      backgroundImage:
        'https://plus.unsplash.com/premium_photo-1682309699199-4bf1e94b6e52?auto=format&fit=crop&q=80&w=2712&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: 'free',
      title: 'Free Bonus',
      url: '/events'
    },
    {
      backgroundImage:
        'https://plus.unsplash.com/premium_photo-1683141081466-29239d3b4838?auto=format&fit=crop&q=80&w=2677&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: 'free',
      title: 'Free Play',
      url: '/events'
    },
    {
      backgroundImage:
        'https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?auto=format&fit=crop&q=80&w=2674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: 'boost',
      title: 'Seasonal Boost',
      url: '/events'
    }
  ]
</script>
<template>
  <div class="flex justify-center banner">
    <ul
      class="scroll-snap scrollbar-container flex-nowrap menu-horizontal overflow-x-auto">
      <BannerItems :banners="banners" />
    </ul>
  </div>
</template>
<style scoped lang="scss">
  .banner {
    width: 100vw;
    background-color: #333;
  }
  .scroll-snap {
    scroll-snap-type: x mandatory;
    overflow-x: auto;
    white-space: nowrap;
    padding: 0.5em;
  }

  ul {
    background-color: rgba(44, 44, 44);
  }

  .scrollbar-container::-webkit-scrollbar {
    width: 100%; /* Adjust the width as needed */
    height: 7px;
  }
  .scrollbar-container::-webkit-scrollbar-thumb {
    background: rgb(197, 197, 197); /* Hide the track */
    border: 2px solid rgb(87, 83, 83);
  }
  .scrollbar-container::-webkit-scrollbar-track {
    background: rgb(87, 83, 83);
  }
</style>
