<script setup lang="ts">
  import BannerItem from './BannerItem.vue'
  const props = defineProps<{
    banners: Array<{
      sport: string
      backgroundImage: string
      title: string
      url: string
    }>
  }>()
</script>
<template>
  <li class="mx-1.5" v-for="(item, index) in banners" :key="index">
    <BannerItem :item="item" />
  </li>
</template>
<style scoped lang="scss"></style>
