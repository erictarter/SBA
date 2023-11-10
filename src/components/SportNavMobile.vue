<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  const props = defineProps<{
    sports: Array<{ icon: string; route: string }>
  }>()
</script>
<template>
  <div class="flex justify-center">
    <ul
      class="menu flex-nowrap border-b-2 border-secondary menu-horizontal overflow-x-auto bg-neutral-focus">
      <li class="text-md mx-1.5" v-for="(sport, index) in sports" :key="index">
        <RouterLink
          class="border-2 text-secondary border-secondary bg-base-200"
          :to="'/events/' + sport.route">
          <font-awesome-icon :icon="['fas', sport.icon]" />
          {{ sport.league }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
  .sport-nav {
    max-width: 1280px;
    margin: 0 auto;
  }
</style>
