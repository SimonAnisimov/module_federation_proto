import { dateLib } from '@shared/lib';

const ISO_DATE_FORMAT = /^(\d{4}-\d{2}-\d{2})(T\d{2}:\d{2}:\d{2}(?:\.\d*)?(?:[-+]\d{2}:?\d{2}|Z)?)?$/;

function isIsoDateString(value: unknown): boolean {
  return value && typeof value === 'string' && ISO_DATE_FORMAT.test(value);
}

export const getDateConversion = (body: unknown) => {
  if (body === null || body === undefined || typeof body !== 'object') return body;

  for (const key of Object.keys(body)) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const value = body[key];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (isIsoDateString(value)) body[key] = new Date(value);
    else if (typeof value === 'object') getDateConversion(value);
  }

  return body;
};

const conversionAllType = (data: unknown) => {
  if (Array.isArray(data)) {
    return arrayConversion(data);
  }
  if (data instanceof Date) {
    return dateConversion(data);
  }
  if (typeof data === 'object' && data && !(data instanceof FormData)) {
    return objectConversion(data as { [key: string]: unknown });
  }

  return data;
};

const dateConversion = (date: Date) => {
  return dateLib.format(date, 'yyyy-MM-dd');
};

const arrayConversion = (arr: unknown[]): unknown[] => {
  return arr.map((item) => conversionAllType(item));
};

const objectConversion = (obj: { [key: string]: unknown }) => {
  const updatedObj: { [key: string]: unknown } = {};

  for (const key in obj) {
    const value = obj[key];

    updatedObj[key] = conversionAllType(value);
  }

  return updatedObj;
};

export const postDateConversion = (body: unknown) => {
  return conversionAllType(body);
};
