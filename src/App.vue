<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import { useSettings } from './stores/settings.ts'
  import Nav from './components/Nav.vue'

  const store = useSettings()

  const toggleToggler = () => {
    store.toggleToggler()
  }
</script>

<template>
  <!-- store example use -->
  <!-- <p>Is Toggled: {{ store.isToggled }}</p>
  <button @click="toggleToggler">Toggle</button> -->
  <Nav />
  <RouterView />
</template>

<style scoped></style>
