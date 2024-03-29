import { useQuery } from '@tanstack/vue-query';
import { fetchPlanets } from '../api/planets';
import { computed } from 'vue';

export const usePlanets = (page) => {
  const { isFetching, data, isError } = useQuery({
    queryKey: ['planets', page],
    queryFn: () => fetchPlanets({ page: page.value }),
    placeholderData: () => ({ results: [], count: 0 })
  });

  const planets = computed(() => {
    return data.value.results || [];
  });

  const totalCount = computed(() => {
    return data.value.count;
  });

  const hasNextPage = computed(() => {
    return Boolean(data.value.next);
  });
  const hasPreviousPage = computed(() => {
    return Boolean(data.value.previous);
  });

  return {
    isFetching,
    isError,
    planets,
    totalCount,
    hasNextPage,
    hasPreviousPage
  };
};
