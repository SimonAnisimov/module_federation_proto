import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import '@quasar/extras/mdi-v6/mdi-v6.css';

import { Dialog } from 'quasar';
import { QuasarPluginOptions } from 'quasar/dist/types/plugin';
export { Quasar } from 'quasar';

export const quasarOptions = (): Partial<QuasarPluginOptions> => ({
  plugins: { Dialog },
});
