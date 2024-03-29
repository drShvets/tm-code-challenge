import { enableAutoUnmount, config } from '@vue/test-utils';
import { beforeEach, beforeAll, afterEach, afterAll } from 'vitest';
import { server } from '@/mocks/server.js';
import { vuetify } from '@/vuetify/vuetity.config';

enableAutoUnmount(beforeEach);

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => server.close());

config.global.plugins = [vuetify];
