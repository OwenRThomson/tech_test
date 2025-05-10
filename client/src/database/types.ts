export type NetworkSuccess<T> = {
  data: T;
  error: null;
  status: number;
  headers?: Headers;
};

export type NetworkErrorDetails = {
  status: number;
  statusText: string;
  message: string;
  details?: unknown;
};

export type NetworkError = {
  data: null;
  error: NetworkErrorDetails;
};

export type NetworkResult<T> = NetworkSuccess<T> | NetworkError;
