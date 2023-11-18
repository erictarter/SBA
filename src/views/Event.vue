<template>
  <div>
    <h2>Dummy Data</h2>
    <!-- add more quick bet type.. -->
    {{ fetchData }}
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  const props = defineProps<{
    data: Array<{ id: number; name: string; description: string }>
  }>()

  // If you want to fetch data asynchronously (e.g., from an API), you can use ref and onMounted
  const fetchData = ref([])

  onMounted(async () => {
    try {
      const response = await fetch('/events.json')
      fetchData.value = await response.json()
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  })
</script>

<style scoped lang="scss">
  /* Your component styles go here */
</style>
