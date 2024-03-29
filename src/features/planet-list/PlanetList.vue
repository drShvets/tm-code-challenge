<template>
  <v-data-table
    :items="planets"
    :headers="headers"
    :loading="isFetching"
    :items-length="totalCount"
    class="w-100"
  />
</template>

<script setup>
import { ref } from 'vue';
import { usePlanets } from './composables/usePlanets';

const { planets, isFetching, totalCount } = usePlanets(page);

const headers = ref([
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Population',
    key: 'population'
  },
  {
    title: 'Rotation Period',
    key: 'rotationPeriod'
  },
  {
    title: 'Climate',
    key: 'climate'
  },
  {
    title: 'Gravity',
    key: 'gravity'
  },
  {
    title: 'Created',
    key: 'created'
  },
  {
    title: 'URL',
    key: 'url'
  }
]);
</script>
