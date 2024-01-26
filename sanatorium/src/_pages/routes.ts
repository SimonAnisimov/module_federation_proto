import Routing from './index.vue';
import { defineAsyncComponent } from 'vue';
// import { AccountingModule, ReserveModule } from 'logus/modules';

const AccountingModule = defineAsyncComponent(() => import('logus/modules/AccountingModule'));
const ReserveModule = defineAsyncComponent(() => import('logus/modules/ReserveModule'));

export const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@widgets/header/index.vue'),
    children: [
      {
        path: 'registration',
        name: 'registration',
        meta: { moduleName: 'Регистратура' },
        component: () => import('./registration/index.vue'),
      },
      {
        path: 'treatment-cases',
        name: 'treatment-cases',
        meta: { moduleName: 'Пациенты' },
        component: () => import('./treatment-cases/index.vue'),
      },
      {
        path: 'dispatching',
        name: 'dispatching',
        meta: { moduleName: 'Диспетчеризация' },
        component: () => import('./dispatching/index.vue'),
      },
      {
        path: 'accounting',
        name: 'accounting',
        meta: { moduleName: 'Касса' },
        component: AccountingModule,
      },
      {
        path: 'reserve',
        name: 'reserve',
        meta: { moduleName: 'Размещение' },
        component: ReserveModule,
      },
    ]
  },
];

export { Routing };
