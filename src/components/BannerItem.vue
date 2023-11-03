<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { computed } from 'vue'
  const props = defineProps<{
    item: {
      icon: string
      backgroundImage: string
      title: string
      url: string
    }
  }>()

  const sportIcon = computed(() => {
    const sportIconMap: { [key: string]: string[] } = {
      boost: ['fas', 'bolt'],
      discount: ['fas', 'tag'],
      free: ['fas', 'money-bill-1']
    }
    return sportIconMap[props.item.icon] || ['fas', 'question-circle']
  })
</script>
<template>
  <RouterLink
    class="flex items-center justify-center banner-item"
    :style="{
      backgroundImage: `url('${item.backgroundImage}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }"
    :to="'/events' + item.url">
    <div class="overlay flex items-center justify-center p-2">
      <div class="text-2xl white">
        <font-awesome-icon :icon="sportIcon" />
      </div>
      <div class="text-lg white px-2">{{ item.title }}</div>
    </div>
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

  .overlay {
    background-color: rgba(27, 27, 27, 0.4);
    width: 100%;
    height: 100%;
    transition: 0.2s ease all;
  }

  .overlay:hover {
    background-color: rgba(27, 27, 27, 0.3);
    transition: 0.2s ease all;
  }
  .content {
    position: absolute;
  }

  .white {
    color: white;
  }
</style>
