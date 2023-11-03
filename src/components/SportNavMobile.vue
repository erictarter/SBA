<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  const props = defineProps<{
    sports: Array<{ icon: string; route: string }>
  }>()
</script>
<template>
  <div class="flex justify-center">
    <ul class="menu flex-nowrap menu-horizontal overflow-x-auto">
      <li class="text-md mx-1.5" v-for="(sport, index) in sports" :key="index">
        <RouterLink :to="'/events/' + sport.route">
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

  .menu {
    background-color: rgb(38, 37, 40);
    color: white;
    border-bottom: 2px solid rgb(175, 187, 183);
  }
</style>
