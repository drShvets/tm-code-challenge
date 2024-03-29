import { setupServer } from 'msw/node';
import { serverHandlers } from './server-handlers.js';

const server = setupServer(...serverHandlers);

export { server };
