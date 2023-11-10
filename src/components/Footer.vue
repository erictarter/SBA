<template>
  <footer class="mt-8 border-t-2 text-center border-secondary p-4">
    ©etarter {{ date.getFullYear() }}
  </footer>
</template>

<script setup lang="ts">
  const date = new Date()
</script>
<style scoped lang="scss"></style>
