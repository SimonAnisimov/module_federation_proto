import type { QNotifyCreateOptions, QNotifyUpdateOptions } from '../index';
import { notify } from '../index';

export const getOptionsToCreateNotify = (
  options: Pick<QNotifyCreateOptions, 'type' | 'message' | 'timeout'>
): QNotifyCreateOptions => ({
  type: options.type,
  message: options.message,
  timeout: options.timeout || 2000,
  position: 'bottom-right',
});

export interface Notification {
  error(msg: string, timeout?: number): void;

  success(msg: string): void;

  warning(msg: string): void;

  ongoing(): void;

  create: (opts: QNotifyCreateOptions | string) => (props?: QNotifyUpdateOptions) => void;
}

export const notification: Notification = {
  create(opts) {
    return notify.create(opts);
  },

  error(msg: string, timeout?: number) {
    notify.create(
      getOptionsToCreateNotify({
        type: 'negative',
        message: msg,
        timeout: timeout,
      })
    );
  },

  success(msg: string) {
    notify.create(
      getOptionsToCreateNotify({
        type: 'positive',
        message: msg,
      })
    );
  },

  warning(msg: string) {
    notify.create(
      getOptionsToCreateNotify({
        type: 'warning',
        message: msg,
      })
    );
  },

  ongoing() {
    notify.create(
      getOptionsToCreateNotify({
        type: 'ongoing',
        message: 'Ожидайте, запрос выполняется',
      })
    );
  },
};
