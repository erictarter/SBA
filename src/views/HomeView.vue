<script setup lang="ts">
  import EventList from '../components/EventList.vue'

  const homeData = [
    {
      eventType: 'team',
      eventId: '12344321',
      away: { city: 'Boston', name: 'Celtics' },
      home: { city: 'LA', name: 'Lakers' },
      moneyLine: { away: '135', home: '-115' },
      spread: { away: '4', home: '-4' },
      total: { over: '213', under: '213' }
    },
    {
      eventType: 'team',
      eventId: '12344321',
      away: { city: 'Boston', name: 'Celtics' },
      home: { city: 'LA', name: 'Lakers' },
      moneyLine: { away: '135', home: '-115' },
      spread: { away: '4', home: '-4' },
      total: { over: '213', under: '213' }
    },
    {
      eventType: 'team',
      eventId: '12344321',
      away: { city: 'Boston', name: 'Celtics' },
      home: { city: 'LA', name: 'Lakers' },
      moneyLine: { away: '135', home: '-115' },
      spread: { away: '4', home: '-4' },
      total: { over: '213', under: '213' }
    },
    {
      eventType: 'team',
      eventId: '12344321',
      away: { city: 'Boston', name: 'Celtics' },
      home: { city: 'LA', name: 'Lakers' },
      moneyLine: { away: '135', home: '-115' },
      spread: { away: '4', home: '-4' },
      total: { over: '213', under: '213' }
    },
    {
      eventType: 'team',
      eventId: '12344321',
      away: { city: 'Boston', name: 'Celtics' },
      home: { city: 'LA', name: 'Lakers' },
      moneyLine: { away: '135', home: '-115' },
      spread: { away: '4', home: '-4' },
      total: { over: '213', under: '213' }
    },
    {
      eventType: 'team',
      eventId: '12344321',
      away: { city: 'Boston', name: 'Celtics' },
      home: { city: 'LA', name: 'Lakers' },
      moneyLine: { away: '135', home: '-115' },
      spread: { away: '4', home: '-4' },
      total: { over: '213', under: '213' }
    },
    {
      eventType: 'team',
      eventId: '12344321',
      away: { city: 'Boston', name: 'Celtics' },
      home: { city: 'LA', name: 'Lakers' },
      moneyLine: { away: '135', home: '-115' },
      spread: { away: '4', home: '-4' },
      total: { over: '213', under: '213' }
    },
    {
      eventType: 'team',
      eventId: '12344321',
      away: { city: 'Boston', name: 'Celtics' },
      home: { city: 'LA', name: 'Lakers' },
      moneyLine: { away: '135', home: '-115' },
      spread: { away: '4', home: '-4' },
      total: { over: '213', under: '213' }
    },
    {
      eventType: 'team',
      eventId: '12344321',
      away: { city: 'Boston', name: 'Celtics' },
      home: { city: 'LA', name: 'Lakers' },
      moneyLine: { away: '135', home: '-115' },
      spread: { away: '4', home: '-4' },
      total: { over: '213', under: '213' }
    }
  ]
</script>

<template>
  <div>
    <EventList title="Todays Events" :data="homeData" />
  </div>
</template>

<script setup lang="ts"></script>
