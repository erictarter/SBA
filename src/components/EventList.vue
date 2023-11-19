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
    <div
      class="overflow-x-auto mt-3 table-container border-2 border-secondary rounded-sm p-3">
      <table class="text-lg w-full">
        <tr>
          <th></th>
          <th class="text-purple p-1">Spread</th>
          <th class="p-1">Total</th>
          <th class="p-1">Moneyline</th>
        </tr>
        <tbody>
          <tr class="border-b border-secondary" v-for="event in data">
            <div
              class="cursor-pointer rounded-md transition duration-150 ease-out text-left my-2 p-3 bg-neutral-focus hover:bg-secondary ease-in">
              <RouterLink
                :to="{ name: 'event', params: { eventId: event.eventId } }">
                <div>{{ event.away.city }}</div>
                <div class="my-1 text-left">{{ event.home.city }}</div>
                <div class="mt-2 text-left">{{ event.time }}</div>
              </RouterLink>
            </div>
            <td class="p-1 ps-3 text-center">
              <div
                class="bg-neutral px-3 m-1 p-1 transitions duration-150 ease-out rounded-md cursor-pointer hover:bg-secondary ease-in">
                {{ event.spread.away }}
              </div>
              <div
                class="bg-neutral m-1 px-3 p-1 transitions duration-150 ease-out rounded-md cursor-pointer hover:bg-secondary ease-in">
                {{ event.spread.home }}
              </div>
            </td>
            <td class="p-1 text-center">
              <div
                class="bg-neutral m-1 px-3 p-1 transitions duration-150 ease-out rounded-md cursor-pointer hover:bg-secondary ease-in">
                {{ event.total.over }}
              </div>
              <div
                class="bg-neutral m-1 px-3 p-1 transitions duration-150 ease-out rounded-md cursor-pointer hover:bg-secondary ease-in">
                {{ event.total.under }}
              </div>
            </td>
            <td class="p-1 text-center">
              <div
                class="bg-neutral m-1 p-1 px-3 transitions duration-150 ease-out rounded-md cursor-pointer hover:bg-secondary ease-in">
                {{ event.moneyLine.away }}
              </div>
              <div
                class="bg-neutral m-1 p-1 px-3 transitions duration-150 ease-out rounded-md cursor-pointer hover:bg-secondary ease-in">
                {{ event.moneyLine.home }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
