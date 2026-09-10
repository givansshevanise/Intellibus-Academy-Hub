import { z } from "zod";

import { badRequest } from "./errors";

const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).max(1000).default(1),
  pageSize: z.coerce.number().int().min(1).max(50).default(12)
});

export interface PaginationInput {
  page: number;
  pageSize: number;
  offset: number;
}

export function parsePagination(searchParams: URLSearchParams): PaginationInput {
  const parsed = paginationSchema.safeParse({
    page: searchParams.get("page") ?? undefined,
    pageSize: searchParams.get("pageSize") ?? undefined
  });

  if (!parsed.success) {
    throw badRequest("Invalid pagination parameters", parsed.error.flatten());
  }

  const { page, pageSize } = parsed.data;
  return {
    page,
    pageSize,
    offset: (page - 1) * pageSize
  };
}
