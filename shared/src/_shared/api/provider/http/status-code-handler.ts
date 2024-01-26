import { AxiosError } from 'axios';
import { router } from '@app/providers';
import { notify } from '@shared/lib';

enum STATUS {
  BAD_REQUEST = 400,
  FORBIDDEN = 403,
  NOT_FOUND = 404,

  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIME_OUT = 504,
}

const CLIENT_STATUS_MESSAGE = {
  [STATUS.BAD_REQUEST]: 'Ошибка в запросе к серверу',
  [STATUS.FORBIDDEN]: 'Доступ к ресурсу запрещен. Вы не имеете достаточных прав',
  [STATUS.NOT_FOUND]: 'Ресурс не найден',
};

const SERVER_STATUS_MESSAGE = {
  [STATUS.INTERNAL_SERVER_ERROR]:
    'На сервере произошла непредвиденная ошибка, попробуйте позднее или обратитесь к системному администратору',
  [STATUS.BAD_GATEWAY]: 'Сервер временно недоступен, попробуйте позднее или обратитесь к системному администратору',
  [STATUS.NOT_IMPLEMENTED]: 'Обработка данного запроса не реализована',
  [STATUS.SERVICE_UNAVAILABLE]:
    'Сервер временно недоступен, попробуйте позднее или обратитесь к системному администратору',
  [STATUS.GATEWAY_TIME_OUT]: 'Сервер не отвечает, попробуйте позднее или обратитесь к системному администратору',
};

const DEFAULT_MESSAGE = 'Произошла ошибка. Обратитесь к системному администратору';
export const statusCodeHandler = async (error: AxiosError) => {
  if (error.response?.status) {
    const { status } = error.response;

    if (status >= 400 && status < 500) {
      if (status === STATUS.BAD_REQUEST) {
        notify.notification.error(CLIENT_STATUS_MESSAGE[status]);
      }

      if (status === STATUS.FORBIDDEN) {
        notify.notification.error(CLIENT_STATUS_MESSAGE[status]);
        await router.push({ name: 'forbidden' });
      }

      if (status === STATUS.NOT_FOUND) {
        notify.notification.error(CLIENT_STATUS_MESSAGE[status]);
      }
    } else if (status >= 500 && status < 600) {
      if (status === STATUS.INTERNAL_SERVER_ERROR) {
        notify.notification.warning(SERVER_STATUS_MESSAGE[status]);
      }
      if (status === STATUS.BAD_GATEWAY) {
        notify.notification.warning(SERVER_STATUS_MESSAGE[status]);
      }
      if (status === STATUS.SERVICE_UNAVAILABLE) {
        notify.notification.warning(SERVER_STATUS_MESSAGE[status]);
      }
    } else {
      notify.notification.error(DEFAULT_MESSAGE);
    }
  }

  return Promise.reject(error);
};
