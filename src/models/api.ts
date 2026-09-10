export interface PaginationMeta {
  page: number;
  pageSize: number;
  total?: number;
}

export interface ApiSuccess<T> {
  data: T;
  meta?: PaginationMeta | Record<string, unknown>;
}

export interface ApiFailure {
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}

export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;
