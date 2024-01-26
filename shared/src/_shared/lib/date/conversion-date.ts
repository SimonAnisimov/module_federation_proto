import * as dateLib from './index';

export const getDataWithDateWithoutUTC = (data: unknown) => {
  if (Array.isArray(data)) {
    return arrayConversion(data);
  }
  if (data instanceof Date) {
    return getDateWithoutUTC(data);
  }
  if (typeof data === 'object' && data && !(data instanceof FormData)) {
    return objectConversion(data as { [key: string]: unknown });
  }

  return data;
};

export const getDateWithoutUTC = (date: Date) => {
  const utc = date.getTimezoneOffset();

  return dateLib.addMinutes(date, utc);
};

const arrayConversion = (arr: unknown[]): unknown[] => {
  return arr.map((item) => getDataWithDateWithoutUTC(item));
};

const objectConversion = (obj: { [key: string]: unknown }) => {
  const updatedObj: { [key: string]: unknown } = {};

  for (const key in obj) {
    const value = obj[key];

    updatedObj[key] = getDataWithDateWithoutUTC(value);
  }

  return updatedObj;
};
