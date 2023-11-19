<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import EventList from '../components/EventList.vue'
  import Banner from '../components/Banner.vue'

  const dataHome = ref([])

  onMounted(async () => {
    try {
      const response = await fetch('/home.json')
      dataHome.value = await response.json()
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  })
</script>

<template>
  <div>
    <Banner />
    <EventList title="Todays Events" :data="dataHome[0]" />
  </div>
</template>

<script setup lang="ts"></script>
