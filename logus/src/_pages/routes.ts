import Routing from './index.vue';

export const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@widgets/header/index.vue'),
    children: [
      {
        path: 'accounting',
        name: 'accounting',
        meta: { moduleName: 'Касса' },
        component: () => import('./accounting/index.vue'),
      },
      {
        path: 'reserve',
        name: 'reserve',
        meta: { moduleName: 'Размещение' },
        component: () => import('./reserve/index.vue'),
      },
    ]
  },
];

export { Routing };
