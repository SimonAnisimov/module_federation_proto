import { AxiosError } from 'axios';

type Errors = { [key: string]: string | string[] };
type ErrorData = { [key: string]: string[] };

export function serverValidationErrorHandler(error: AxiosError) {
  if (!error?.response?.data) return error;

  const responseErrorData = error?.response?.data;

  if (typeof responseErrorData === 'object' && 'message' in responseErrorData) {
    return responseErrorData.message;
  }
  if (typeof error.response.data === 'string') return error.response.data;
  if (Array.isArray(error.response.data)) return error.response;

  const errorData = error.response.data as ErrorData;
  const errors: Errors = {};

  for (const key in errorData) {
    const adaptedKey = key.replace('models.', '');
    errors[adaptedKey] = errorData[key as keyof typeof errorData].map((errorMessage: string) => errorMessage.trim());
  }

  return errors;
}
