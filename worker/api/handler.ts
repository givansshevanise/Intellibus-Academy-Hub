import { D1ContentRepository } from "../db/d1ContentRepository";
import { ApiError, badRequest, methodNotAllowed, notFound } from "../http/errors";
import { parsePagination } from "../http/pagination";
import { errorResponse, jsonResponse } from "../http/response";
import { parseOptionalToken, parseSlug } from "../http/validation";
import { ContentService } from "../services/contentService";
import type { ContentRepository } from "../services/contentRepository";
import { R2MediaStorage, type MediaStorage } from "../storage/r2Storage";
import type { Env } from "../types";

interface HandlerDependencies {
  repository: ContentRepository;
  storage: MediaStorage;
}

export function createDependencies(env: Env): HandlerDependencies {
  return {
    repository: new D1ContentRepository(env.ACADEMY_DB),
    storage: new R2MediaStorage(env.ACADEMY_MEDIA, env.PUBLIC_MEDIA_BASE_URL)
  };
}

export async function handleApiRequest(
  request: Request,
  env: Env,
  dependencies = createDependencies(env)
): Promise<Response> {
  try {
    const url = new URL(request.url);

    if (request.method !== "GET" && request.method !== "HEAD") {
      throw methodNotAllowed("Only read-only GET requests are supported");
    }

    if (url.pathname === "/health") {
      return jsonResponse(
        {
          data: {
            ok: true,
            environment: env.APP_ENV,
            timestamp: new Date().toISOString()
          }
        },
        { headers: { "cache-control": "no-store" } }
      );
    }

    if (url.pathname.startsWith("/media/")) {
      const key = decodeURIComponent(url.pathname.replace("/media/", ""));
      validateMediaKey(key);
      return dependencies.storage.getObjectResponse(key);
    }

    if (!url.pathname.startsWith("/api/")) {
      throw notFound();
    }

    const service = new ContentService(dependencies.repository);
    const segments = url.pathname.split("/").filter(Boolean);
    const resource = segments[1];
    const slug = segments[2];
    const child = segments[3];

    switch (resource) {
      case "news":
        return await handleNews(service, url, slug, child);
      case "events":
        return await handleEvents(service, url, slug, child);
      case "participants":
        return jsonResponse({
          data: await service.listParticipants({
            cohort: parseOptionalToken(url.searchParams, "cohort")
          })
        });
      case "faqs":
        return jsonResponse({
          data: await service.listFaqs({
            category: parseOptionalToken(url.searchParams, "category")
          })
        });
      case "albums":
        return await handleAlbums(service, url, slug, child);
      case "external-links":
        return jsonResponse({
          data: await service.listExternalLinks(
            parseOptionalToken(url.searchParams, "location")
          )
        });
      default:
        throw notFound();
    }
  } catch (error) {
    if (!(error instanceof ApiError) || error.status >= 500) {
      console.error("API request failed", {
        path: new URL(request.url).pathname,
        error
      });
    }

    return errorResponse(error);
  }
}

async function handleNews(
  service: ContentService,
  url: URL,
  slug?: string,
  child?: string
) {
  if (child) {
    throw notFound();
  }

  if (slug) {
    return jsonResponse({ data: await service.getNewsBySlug(parseSlug(slug)) });
  }

  const pagination = parsePagination(url.searchParams);
  const result = await service.listNews({
    ...pagination,
    category: parseOptionalToken(url.searchParams, "category")
  });
  return jsonResponse({ data: result.data, meta: result.meta });
}

async function handleEvents(
  service: ContentService,
  url: URL,
  slug?: string,
  child?: string
) {
  if (child) {
    throw notFound();
  }

  if (slug) {
    return jsonResponse({ data: await service.getEventBySlug(parseSlug(slug)) });
  }

  const pagination = parsePagination(url.searchParams);
  const result = await service.listEvents({
    ...pagination,
    status: parseOptionalToken(url.searchParams, "status")
  });
  return jsonResponse({ data: result.data, meta: result.meta });
}

async function handleAlbums(
  service: ContentService,
  url: URL,
  slug?: string,
  child?: string
) {
  if (slug && child === "photos") {
    return jsonResponse({
      data: await service.listPhotosByAlbumSlug(parseSlug(slug))
    });
  }

  if (child) {
    throw notFound();
  }

  if (slug) {
    return jsonResponse({ data: await service.getAlbumBySlug(parseSlug(slug)) });
  }

  return jsonResponse({
    data: await service.listAlbums({
      cohort: parseOptionalToken(url.searchParams, "cohort")
    })
  });
}

function validateMediaKey(key: string) {
  if (!key || key.includes("..") || key.startsWith("/") || key.length > 512) {
    throw badRequest("Invalid media key");
  }
}
