export class ApiError extends Error {
  public readonly status: number;
  public readonly code: string;
  public readonly details?: unknown;

  public constructor(status: number, code: string, message: string, details?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export function notFound(message = "Resource not found") {
  return new ApiError(404, "not_found", message);
}

export function badRequest(message: string, details?: unknown) {
  return new ApiError(400, "bad_request", message, details);
}

export function methodNotAllowed(message = "Method not allowed") {
  return new ApiError(405, "method_not_allowed", message);
}
