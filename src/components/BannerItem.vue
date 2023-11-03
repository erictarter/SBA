<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { computed } from 'vue'
  const props = defineProps<{
    item: {
      sport: string
      backgroundImage: string
      title: string
      url: string
    }
  }>()

  const sportIcon = computed(() => {
    // Define a mapping of sports to FontAwesome icons
    const sportIconMap: { [key: string]: string[] } = {
      soccer: ['fas', 'futbol'],
      basketball: ['fas', 'basketball-ball'],
      mma: ['fas', 'mitten'],
      football: ['fas', 'football']
    }
    return sportIconMap[props.item.sport] || ['fas', 'question-circle']
  })
</script>
<template>
  <RouterLink
    class="flex items-center justify-center banner-item"
    style="background: url({{ backgroundImage }});"
    :to="'/events/' + ''">
    <div class="mx-3">
      <font-awesome-icon :icon="sportIcon" />
    </div>
    <div>{{ item.title }}</div>
  </RouterLink>
</template>
<style scoped lang="scss">
  .banner-item {
    width: 15.5em;
    height: 8.75em;
    background-color: rgb(178, 205, 205);
    border-radius: 4px;
    scroll-snap-align: center;
  }

  @media (min-width: 768px) {
    .banner-item {
      width: 18.5em;
      height: 11.75em;
      background-color: rgb(178, 205, 205);
      border-radius: 4px;
      scroll-snap-align: none;
    }
  }
</style>
