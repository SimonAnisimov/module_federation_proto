import { createApp } from 'vue';
import App from './App.vue';
import { router, quasar } from './providers';

const { Quasar, quasarOptions } = quasar;

const app = createApp(App);

app
  .use(router)
  .use(Quasar, quasarOptions());

export default app;

