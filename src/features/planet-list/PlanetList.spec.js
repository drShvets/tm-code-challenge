import PlanetList from './PlanetList.vue';
import { mount, flushPromises } from '@vue/test-utils';
import { VDataTable, VTextField } from 'vuetify/components';
import { vuetify } from '@/vuetify/vuetity.config';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { apiClient } from '@/services/apiClient';
import MockAdapter from 'axios-mock-adapter';
import { planetsEndpoints } from './constants/endpoints';
import * as planets from '@/fixtures/planet-list.fixture.json';
import { expect } from 'vitest';

const mock = new MockAdapter(apiClient);
mock.onGet(planetsEndpoints.PLANET_LIST, { params: { page: 1 } }).reply(200, planets);

describe('PlanetList', () => {
  let wrapper;

  const createComponent = (props = {}) => {
    wrapper = mount(PlanetList, {
      props: {
        ...props
      },
      global: {
        plugins: [vuetify, VueQueryPlugin]
      }
    });
  };

  const findDataTable = () => wrapper.findComponent(VDataTable);
  const findTextField = () => wrapper.findComponent(VTextField);

  it('properly passes planet list to "v-data-table"', async () => {
    createComponent();

    const items = [
      {
        climate: 'arid',
        created: '2014-12-09T13:50:49.641000Z',
        gravity: '1 standard',
        name: 'Tatooine',
        population: '200000',
        rotationPeriod: '23',
        url: 'https://swapi.dev/api/planets/1/'
      },
      {
        climate: 'temperate',
        created: '2014-12-10T11:35:48.479000Z',
        gravity: '1 standard',
        name: 'Alderaan',
        population: '2000000000',
        rotationPeriod: '24',
        url: 'https://swapi.dev/api/planets/2/'
      },
      {
        climate: 'temperate, tropical',
        created: '2014-12-10T11:37:19.144000Z',
        gravity: '1 standard',
        name: 'Yavin IV',
        population: '1000',
        rotationPeriod: '24',
        url: 'https://swapi.dev/api/planets/3/'
      }
    ];

    await flushPromises();

    expect(findDataTable().props('items')).toEqual(items);
  });

  it('properly passes "loading" prop to "v-data-table"', async () => {
    createComponent();
    expect(findDataTable().props('loading')).toBe(true);

    await flushPromises();

    expect(findDataTable().props('loading')).toBe(false);
  });

  it('properly passes "search" prop to "v-data-table"', async () => {
    createComponent();

    findTextField().setValue('Tatooine');

    await wrapper.vm.$nextTick();

    expect(findDataTable().props('search')).toBe('Tatooine');
  });
});
