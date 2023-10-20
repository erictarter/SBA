<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  const props = defineProps({
    sports: Array
  })
</script>
<template>
  <div class="flex justify-center">
    <ul
      class="menu flex-nowrap menu-horizontal rounded-box bg-base-200 overflow-x-auto">
      <li
        class="text-xl md:text-3xl"
        v-for="sport in sports"
        :key="sport.route">
        <RouterLink :to="'/events/' + sport.route">
          <font-awesome-icon :icon="['fas', sport.icon]" />
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
