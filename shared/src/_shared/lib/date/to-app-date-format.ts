import { APP_DATE_FORMAT } from './config';
import { format } from './index';

const ERROR_MESSAGE = 'формат даты, не соответствует ISO 8601 формату';

export const toAppDateFormat = (dateString: string) => {
  try {
    return format(new Date(dateString), APP_DATE_FORMAT);
  } catch {
    console.error(`${dateString} ${ERROR_MESSAGE}`);
    return;
  }
};
