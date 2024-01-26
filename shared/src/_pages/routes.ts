import Routing from './index.vue';

export const routes = [
  {
    path: '/',
    name: 'test',
    component: () => import('@pages/test/index.vue'),
  },
];

export { Routing };