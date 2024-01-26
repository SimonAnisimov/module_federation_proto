import * as consts from './consts';
import * as provider from './provider';
import * as generatedServiceOptions from './provider/http/generatedServiceOptions';

const api = {
  ...consts,
  ...provider,
  ...generatedServiceOptions,
}

export default api;
