<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import { useSettings } from './stores/settings.ts'
  import Nav from './components/Nav.vue'
  import SportNav from './components/SportNav.vue'

  const store = useSettings()

  const sports = [
    {
      icon: 'football',
      route: 'football'
    },
    {
      icon: 'football',
      route: 'football'
    },
    {
      icon: 'football',
      route: 'football'
    },
    {
      icon: 'football',
      route: 'football'
    },
    {
      icon: 'football',
      route: 'football'
    },
    {
      icon: 'football',
      route: 'football'
    },
    {
      icon: 'football',
      route: 'football'
    },
    {
      icon: 'football',
      route: 'football'
    },
    {
      icon: 'football',
      route: 'football'
    },
    {
      icon: 'football',
      route: 'football'
    }
  ]

  const toggleToggler = () => {
    store.toggleToggler()
  }
</script>

<template>
  <!-- store example use -->
  <!-- <p>Is Toggled: {{ store.isToggled }}</p>
  <button @click="toggleToggler">Toggle</button> -->
  <div>
    <div class="sticky top-0">
      <Nav />
      <SportNav :sports="sports" />
    </div>
    <div class="app-container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
