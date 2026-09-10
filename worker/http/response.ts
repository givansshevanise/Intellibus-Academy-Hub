import type { ApiFailure, ApiSuccess } from "../../src/models/api";

import { ApiError } from "./errors";

const defaultHeaders = {
  "content-type": "application/json; charset=utf-8",
  "x-content-type-options": "nosniff"
};

export function jsonResponse<T>(
  body: ApiSuccess<T>,
  init: ResponseInit = {}
): Response {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      ...defaultHeaders,
      "cache-control": "public, max-age=60, stale-while-revalidate=300",
      ...init.headers
    }
  });
}

export function errorResponse(error: unknown): Response {
  const apiError =
    error instanceof ApiError
      ? error
      : new ApiError(500, "internal_error", "An unexpected error occurred");

  const body: ApiFailure = {
    error: {
      code: apiError.code,
      message: apiError.message,
      details: apiError.details
    }
  };

  return new Response(JSON.stringify(body), {
    status: apiError.status,
    headers: {
      ...defaultHeaders,
      "cache-control": "no-store"
    }
  });
}
