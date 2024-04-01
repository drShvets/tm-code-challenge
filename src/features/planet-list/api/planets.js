import { apiClient } from '@/services/apiClient';
import { planetsEndpoints } from '../constants/endpoints';

const fetchPlanets = (query) => {
  let res, rej;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  apiClient
    .get(planetsEndpoints.PLANET_LIST, { params: query })
    .then(({ data }) => {
      const { results: planets, ...props } = data;
      res({
        ...props,
        results: mapPlanets(planets)
      });
    })
    .catch((error) => {
      rej(error);
    });

  return promise;
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
