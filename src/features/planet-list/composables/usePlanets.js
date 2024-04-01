import { useQuery } from '@tanstack/vue-query';
import { fetchPlanets } from '../api/planets';
import { computed } from 'vue';

export const usePlanets = (page) => {
  const {
    isFetching,
    data,
    error: isError
  } = useQuery({
    queryKey: ['planets', page],
    queryFn: () => fetchPlanets({ page: page.value }),
    placeholderData: () => ({ results: [], count: 0 }),
    refetchOnWindowFocus: false,
    staleTime: 20_0000,
    retry: 0
  });

  const planets = computed(() => {
    return data.value?.results || [];
  });

  const totalCount = computed(() => {
    return data.value?.count;
  });

  const hasNextPage = computed(() => {
    return Boolean(data.value?.next);
  });

  return {
    isFetching,
    isError,
    planets,
    totalCount,
    hasNextPage
  };
};
