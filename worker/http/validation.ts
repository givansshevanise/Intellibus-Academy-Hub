import { z } from "zod";

import { badRequest } from "./errors";

const slugSchema = z
  .string()
  .trim()
  .min(1)
  .max(120)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

export function parseSlug(value: string | undefined, label = "slug") {
  const parsed = slugSchema.safeParse(value);

  if (!parsed.success) {
    throw badRequest(`Invalid ${label}`, parsed.error.flatten());
  }

  return parsed.data;
}

export function parseOptionalToken(
  searchParams: URLSearchParams,
  key: string
): string | undefined {
  const value = searchParams.get(key);

  if (!value) {
    return undefined;
  }

  const parsed = z.string().trim().min(1).max(80).safeParse(value);

  if (!parsed.success) {
    throw badRequest(`Invalid ${key}`, parsed.error.flatten());
  }

  return parsed.data;
}
