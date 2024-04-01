<template>
  <v-col :cols="12" :md="4">
    <h1>Planet List</h1>
  </v-col>
  <v-col :cols="12" :md="4" :offset-md="4">
    <v-text-field v-model="searchValue" placeholder="Search" append-inner-icon="mdi-magnify" />
  </v-col>
  <v-col :cols="12">
    <v-data-table
      :items="planets"
      :headers="headers"
      :loading="isFetching"
      :items-length="totalCount"
      :search="searchValue"
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
  </v-col>
</template>

<script setup>
import { ref } from 'vue';
import { usePlanets } from './composables/usePlanets';
import { formatDate } from '@/helpers/date';
import { formatNumber } from '@/helpers/numbers';
import { dateCompare, numberCompare } from './helpers/sort';
import PlanetListPagination from './components/planet-list-pagination/PlanetListPagination.vue';

const page = ref(1);
const searchValue = ref('');

const { planets, isFetching, totalCount, hasNextPage } = usePlanets(page);

const UNKNOWN_VAL = 'unknown';

const formatPopulation = (value) => {
  if (value === UNKNOWN_VAL) return value;
  return formatNumber(Number(value), { notation: 'compact' });
};

const headers = ref([
  {
    title: 'Name',
    key: 'name',
    width: 200
  },
  {
    title: 'Population',
    key: 'population',
    sort: numberCompare,
    width: 100
  },
  {
    title: 'Rotation Period',
    key: 'rotationPeriod',
    sort: numberCompare,
    width: 100
  },
  {
    title: 'Climate',
    key: 'climate'
  },
  {
    title: 'Gravity',
    key: 'gravity',
    sortable: false,
    width: 300
  },
  {
    title: 'URL',
    key: 'url',
    sortable: false
  },
  {
    title: 'Created',
    key: 'created',
    sort: dateCompare,
    width: 200
  }
]);
</script>
