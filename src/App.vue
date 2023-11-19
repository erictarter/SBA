<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { useStore } from './stores/app.ts'
  import Loading from './components/Loading.vue'
  import Nav from './components/Nav.vue'
  import SportNavMobile from './components/SportNavMobile.vue'
  import Footer from './components/Footer.vue'

  const store = useStore()

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

  // const toggleToggler = () => {
  //   store.toggleToggler()
  // }
</script>

<template>
  <!-- store example use -->
  <!-- <p>Is Toggled: {{ store.isToggled }}</p>
  <button @click="toggleToggler">Toggle</button> -->
  <div data-theme="dracula" class="bg-base-200 text-base-content">
    <transition name="fade" appear>
      <Loading v-if="store.busy" />
    </transition>
    <div class="sticky top-0">
      <Nav :sports="sports" />
      <SportNavMobile class="md:hidden" :sports="sports" />
    </div>
    <div class="app-container min-h-screen">
      <RouterView class="mt-8 py-5 px-0 sm:px-5" />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>

<!-- next steps..
- create some sort of banner
- create events list
- create event page
- create betslip
- create login experience
- creating event ids
- generate list of events and categorize
- create footer
- create mobile controls for app experience
- work on colors
- use store for busy, logged in, preferences.. bets(?)
-->
