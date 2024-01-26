import axios, {
  AxiosError,
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { ref } from 'vue';
import { router } from '@app/providers';
import { REDIRECT_KEY, TOKEN } from '@shared/config';

import { notification } from '@shared/lib/notify';
import { getDateConversion, postDateConversion } from './conversion-date';
import { serviceOptions } from './generatedServiceOptions';
import { paramsSerializer } from './params-serializer';
import { serverValidationErrorHandler } from './server-validation-error-handler';
import { statusCodeHandler } from './status-code-handler';

type ReturnResponse<T> = Promise<{ data: T; status: AxiosResponse['status'] }>;

export type RequestContext = {
  context?: {
    useInterceptor?: boolean;
  };
};
export type AppRequestConfig = AxiosRequestConfig & RequestContext;

interface AppAxiosConfig extends AppRequestConfig {
  context: {
    useInterceptor: boolean;
  };
}
interface AppAxiosInstance extends AxiosInstance {
  (config: AppRequestConfig): AxiosPromise;
  (url: string, config?: AppRequestConfig): AxiosPromise;
}
const isRefreshRequest = (url: string) => new RegExp('/api/users', 'gi').test(url);
const isTimeout = (error: AxiosError) => error.code === 'ECONNABORTED' && error.message.includes('timeout');

export const token = ref(localStorage.getItem(TOKEN.ACCESS));
export const updateToken = () => {
  token.value = localStorage.getItem(TOKEN.ACCESS);
};
export const removeToken = () => {
  token.value = null;
};

const config: AppAxiosConfig = {
  timeout: 15000,
  context: {
    useInterceptor: true,
  },
};

export const useHttp = () => {
  const http = axios.create(config);

  let errorInterceptor: number = null;

  const isLoading = ref(false);

  setupInterceptor(http);

  http.defaults.paramsSerializer = paramsSerializer;

  serviceOptions.axios = http;

  const get = async <ResponseType>(url: string, config?: AppRequestConfig): ReturnResponse<ResponseType> => {
    const { data, status } = await http.get<ResponseType>(url, config);

    return {
      data,
      status,
    };
  };

  const post = async <ResponseType, T = unknown>(
    url: string,
    body?: T,
    config?: AppRequestConfig
  ): ReturnResponse<ResponseType> => {
    const { data, status } = await http.post<ResponseType>(url, body, config);

    return {
      data,
      status,
    };
  };

  const put = async <ResponseType, T = unknown>(
    url: string,
    body?: T,
    config?: AppRequestConfig
  ): ReturnResponse<ResponseType> => {
    const { data, status } = await http.put<ResponseType>(url, body, config);

    return {
      data,
      status,
    };
  };

  const del = async <Response>(url: string, config?: AppRequestConfig): ReturnResponse<Response> => {
    const { data, status } = await http.delete<Response>(url, config);

    return {
      data,
      status,
    };
  };

  function setupInterceptor(instance: AppAxiosInstance): void {
    errorInterceptor = instance.interceptors.request.use(
      (config): InternalAxiosRequestConfig => {
        const useInterceptor = Boolean((config as AppRequestConfig)?.context?.useInterceptor);

        if (useInterceptor && typeof errorInterceptor !== 'number') {
          setupInterceptor(http);
          return config;
        }

        if (!useInterceptor && typeof errorInterceptor === 'number') {
          removeInterceptor();
          return config;
        }

        isLoading.value = true;

        return {
          ...config,
          headers: { ...config.headers, Authorization: `Bearer ${token.value}` },
          data: postDateConversion(config.data),
        } as InternalAxiosRequestConfig;
      },
      (err) => {
        isLoading.value = false;

        return Promise.reject(err);
      }
    );

    instance.interceptors.response.use(
      async (response) => {
        isLoading.value = false;
        return getDateConversion(response) as AxiosResponse;
      },
      async (error) => {
        isLoading.value = false;

        if (isTimeout(error)) notification.error('Превышено время ожидания ответа от сервера');

        if (!error?.config?.context?.useInterceptor) return;

        if (error.response?.status === 401 && !isRefreshRequest(error.config.url)) {
          if (router.currentRoute.value.name === 'authorization') return;

          if (!token.value) {
            localStorage.setItem(REDIRECT_KEY, router.options.history.location);
            await router.push('/authorization');
            return;
          }

          try {
            const { data } = await http.post('/api/users/refresh', {
              token: localStorage.getItem(TOKEN.REFRESH),
            });

            token.value = data.access;

            localStorage.setItem(TOKEN.ACCESS, data.access);
            localStorage.setItem(TOKEN.REFRESH, data.refresh);

            return http({
              ...error.config,
              headers: { Authorization: `Bearer ${token.value}` },
            });
          } catch {
            localStorage.setItem(REDIRECT_KEY, router.options.history.location);
            await router.push('/authorization');
          }
        } else if (error?.response?.data) {
          await Promise.reject(serverValidationErrorHandler(error));
        } else {
          await statusCodeHandler(error);
        }
      }
    );
  }

  function removeInterceptor() {
    http.interceptors.response.eject(errorInterceptor);
    errorInterceptor = null;
  }

  return {
    get,
    post,
    put,
    del,
    request: http.request,
    isLoading,
    removeInterceptor,
  };
};

export const http = useHttp();
