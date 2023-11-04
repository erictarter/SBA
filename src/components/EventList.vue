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
    <div class="overflow-x-auto mt-3 table-container p-3">
      <table class="text-lg">
        <tr>
          <th></th>
          <th>Spread</th>
          <th>Total</th>
          <th>Moneyline</th>
        </tr>
        <tbody>
          <tr v-for="event in data">
            <div class="teams text-left my-2">
              <RouterLink to="/event">
                <th class="">
                  <div>{{ event.away.city }}</div>
                  <div class="my-1 text-left">{{ event.home.city }}</div>
                  <div class="mt-2 text-left">{{ event.time }}</div>
                </th>
              </RouterLink>
            </div>
            <td>
              <div>
                {{ event.spread.away }}
              </div>
              <div>
                {{ event.spread.home }}
              </div>
            </td>
            <td>
              <div>
                {{ event.total.over }}
              </div>
              <div>
                {{ event.total.under }}
              </div>
            </td>
            <td>
              <div>
                {{ event.moneyLine.away }}
              </div>
              <div>
                {{ event.moneyLine.home }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped lang="scss">
  table {
    width: 100%;
  }

  td {
    padding: 0.5rem;
    text-align: center;
    div {
      background-color: rgba(176, 152, 205, 0.3);
      margin: 0.25rem;
      border-radius: 4px;
      padding: 0.5rem;
      cursor: pointer;
      transition: 0.2s ease all;
    }
    div:hover {
      background-color: rgb(176, 152, 205);
      transition: 0.2s ease all;
    }
  }

  tbody {
    .teams {
      background-color: rgb(62, 59, 65);
      border-radius: 4px;
    }
    .teams:hover {
      background-color: rgb(176, 152, 205);
    }
    tr {
      border-bottom: 1px solid rgb(176, 152, 205);
    }
  }

  th {
    padding: 0.5rem;
    text-align: center;
  }
  .table-container {
    border: 3px solid #ddd;
    border-radius: 4px;
  }
</style>
