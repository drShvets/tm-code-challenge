<template>
  <v-data-table
    :items="planets"
    :headers="headers"
    :loading="isFetching"
    :items-length="totalCount"
    class="w-100"
  >
    <template #item.created="{ value }">
      {{ formatDate(value) }}
    </template>
    <template #item.population="{ value }">
      {{ formatPopulation(value) }}
    </template>
    <template #bottom>
      <planet-list-pagination v-model="page" :has-next-page="hasNextPage" />
    </template>
  </v-data-table>
</template>

<script setup>
import { ref } from 'vue';
import { usePlanets } from './composables/usePlanets';
import { formatDate } from '@/helpers/date';
import { formatNumber } from '@/helpers/numbers';
import { dateCompare, numberCompare } from './helpers/sort';
import PlanetListPagination from './components/planet-list-pagination/PlanetListPagination.vue';

const page = ref(1);

const { planets, isFetching, totalCount, hasNextPage } = usePlanets(page);

const UNKNOWN_VAL = 'unknown';

const formatPopulation = (value) => {
  if (value === UNKNOWN_VAL) return value;
  return formatNumber(Number(value), { notation: 'compact' });
};

const headers = ref([
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Population',
    key: 'population',
    sort: numberCompare
  },
  {
    title: 'Rotation Period',
    key: 'rotationPeriod',
    sort: numberCompare
  },
  {
    title: 'Climate',
    key: 'climate'
  },
  {
    title: 'Gravity',
    key: 'gravity',
    sortable: false
  },
  {
    title: 'Created',
    key: 'created',
    sort: dateCompare
  },
  {
    title: 'URL',
    key: 'url',
    sortable: false
  }
]);
</script>
