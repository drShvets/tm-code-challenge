import { apiClient } from '@/services/apiClient';
import { planetsEndpoints } from '../constants/endpoints';

const fetchPlanets = async (query) => {
  try {
    const { data } = await apiClient.get(planetsEndpoints.PLANET_LIST, { params: query });

    const { results: planets, ...props } = data;

    return {
      ...props,
      results: mapPlanets(planets)
    };
  } catch (error) {
    console.log('error', error);
    return error;
  }
};

const mapPlanets = (planets) => {
  return planets.map((planet) => {
    const {
      name,
      rotation_period: rotationPeriod,
      climate,
      gravity,
      population,
      created,
      url
    } = planet;

    return {
      name,
      rotationPeriod,
      climate,
      gravity,
      population,
      created,
      url
    };
  });
};

export { fetchPlanets };
