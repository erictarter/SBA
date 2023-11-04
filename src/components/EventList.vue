<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  const props = defineProps<{
    title: string
    data: Array<any>
  }>()
</script>
<template>
  <div class="event-list">
    <h1 class="text-3xl">{{ title }}</h1>
    <table class="list-container mt-3 p-4">
      <tr class="event-header flex justify-between">
        <th class=""></th>
        <th>Spread</th>
        <th>Total</th>
        <th>MoneyLine</th>
      </tr>
      <RouterLink v-for="event in data" :to="'/event/' + event.eventId">
        <tr class="event flex justify-between py-3 px-1 text-lg">
          <td class="teams">
            <div>{{ event.away.city }}</div>
            <div>{{ event.home.city }}</div>
          </td>
          <td>
            <div>
              {{ event.spread.away
              }}<!-- action -->
            </div>
            <div>
              {{ event.spread.home
              }}<!-- action -->
            </div>
          </td>
          <td>
            <div>
              {{ event.total.over
              }}<!-- action -->
            </div>
            <div>
              {{ event.total.under
              }}<!-- action -->
            </div>
          </td>
          <td>
            <div>
              {{ event.moneyLine.away
              }}<!-- action -->
            </div>
            <div>
              {{ event.moneyLine.home
              }}<!-- action -->
            </div>
          </td>
        </tr>
      </RouterLink>
    </table>
  </div>
</template>
<style scoped lang="scss">
  table {
    width: 100%;
  }

  td {
    padding: 0.5rem;
  }

  th {
    padding: 0.5rem;
  }
  .list-container {
    border: 3px solid #ddd;
    border-radius: 4px;
  }
  .event {
    border-bottom: 1px solid rgb(176, 152, 205);
  }
</style>
