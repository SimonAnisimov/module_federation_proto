export interface QueryParams {
  query?: string;
  offset?: number;
  limit?: number;
}

export interface AuthToken {
  access: string;
  refresh: string;
}
