import { dateLib } from '@shared/lib';

interface IParams {
  [key: string]: unknown;
}

export const paramsSerializer = (params: IParams): string => {
  if (!params) return '';

  const queryParams = new URLSearchParams();

  for (const key in params) {
    const value = params[key as keyof typeof params];

    if (
      value === null ||
      value === undefined ||
      (typeof value === 'string' && value.trim() === '') ||
      (typeof value !== 'boolean' && !value.toString().trim())
    ) {
      continue;
    }

    const isArrayQuery = Array.isArray(value);
    if (isArrayQuery) {
      value.forEach((item) => {
        if (item !== null && item !== undefined) {
          queryParams.append(key, item.toString());
        }
      });
    } else if (value instanceof Date) {
      queryParams.append(key, dateLib.format(value, 'yyyy-MM-dd'));
    } else {
      queryParams.append(key, value.toString());
    }
  }

  return queryParams.toString();
};
