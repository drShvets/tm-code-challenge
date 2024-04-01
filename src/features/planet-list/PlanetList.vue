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
      {{ formatNumber(value) }}
    </template>
    <template #bottom>
      <div class="d-flex pa-3">
        <v-spacer />
        <v-btn
          class="mx-2"
          icon="mdi-chevron-left"
          color="primary"
          :disabled="!hasPreviousPage"
          @click="previousPage"
        />
        <v-btn
          class="mx-2"
          icon="mdi-chevron-right"
          color="primary"
          :disabled="!hasNextPage"
          @click="nextPage"
        />
      </div>
    </template>
  </v-data-table>
</template>

<script setup>
import { ref } from 'vue';
import { usePlanets } from './composables/usePlanets';
import { formatDate } from '@/helpers/date';
import { dateCompare, numberCompare } from './helpers/sort';

const page = ref(1);

const nextPage = () => {
  page.value += 1;
};
const previousPage = () => {
  page.value -= 1;
};

const { planets, isFetching, totalCount, hasNextPage, hasPreviousPage } = usePlanets(page);

const UNKNOWN_VAL = 'unknown';

const formatNumber = (value) => {
  if (value === 'unknown') return value;
  const formatter = new Intl.NumberFormat('en', { notation: 'compact' });
  return formatter.format(Number(value));
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
