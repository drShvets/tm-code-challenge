<template>
  <v-data-table
    :items="planets"
    :headers="headers"
    :loading="isFetching"
    :items-length="totalCount"
    class="w-100"
  >
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

const page = ref(1);

const nextPage = () => {
  page.value += 1;
};
const previousPage = () => {
  page.value -= 1;
};

const { planets, isFetching, totalCount, hasNextPage, hasPreviousPage } = usePlanets(page);

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
