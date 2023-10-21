<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import { useSettings } from './stores/settings.ts'
  import Nav from './components/Nav.vue'
  import SportNavMobile from './components/SportNavMobile.vue'

  const store = useSettings()

  const sports = [
    {
      icon: 'football',
      route: 'football',
      league: 'NFL'
    },
    {
      icon: 'basketball',
      route: 'basketball',
      league: 'NBA'
    },
    {
      icon: 'futbol',
      route: 'soccer-premier',
      league: 'Premier League'
    },
    {
      icon: 'futbol',
      route: 'soccer-mls',
      league: 'MLS'
    },
    {
      icon: 'football',
      route: 'college-football',
      league: 'NCAA Football'
    },
    {
      icon: 'baseball',
      route: 'baseball',
      league: 'MLB'
    },
    {
      icon: 'hockey-puck',
      route: 'hockey',
      league: 'NHL'
    },
    {
      icon: 'basketball',
      route: 'college-basketball',
      league: 'NCAA Basketball'
    },
    {
      icon: 'flag-checkered',
      route: 'racing',
      league: 'F1'
    },
    {
      icon: 'mitten',
      route: 'ufc',
      league: 'UFC'
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
      <Nav :sports="sports" />
      <SportNavMobile class="md:hidden" :sports="sports" />
    </div>
    <div class="app-container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
