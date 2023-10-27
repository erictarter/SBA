<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import { onMounted } from 'vue';
  import { useStore } from './stores/app.ts'
  import Loading from './components/Loading.vue'
  import Nav from './components/Nav.vue'
  import SportNavMobile from './components/SportNavMobile.vue'

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
  <div>
    <transition name="fade" appear>
      <Loading v-if="store.busy" />
    </transition>
    <div class="sticky top-0">
      <Nav :sports="sports" />
      <SportNavMobile class="md:hidden" :sports="sports" />
    </div>
    <div class="app-container">
      <RouterView />
    </div>
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
- close nav menu when selecting
- create some sort of banner
- create events list
- create event page
- add busy experience
- create betslip
- create login experience
- creating event ids
- generate list of events and categorize
- create footer
- create mobile controls for app experience
- work on colors
- use store for busy, logged in, preferences.. bets(?)
-->
