import { describe, expect, it } from "vitest";

import type { ApiFailure, ApiSuccess } from "../src/models/api";
import type { NewsArticle } from "../src/models/content";
import { handleApiRequest } from "../worker/api/handler";
import type { ContentRepository } from "../worker/services/contentRepository";
import type { MediaStorage } from "../worker/storage/r2Storage";
import type { Env } from "../worker/types";

const now = "2026-04-22T12:00:00.000Z";

const repository: ContentRepository = {
  async listNews(input) {
    return {
      data: [
        {
          id: "news-one",
          slug: "foundation-preview",
          title: "Foundation Preview",
          excerpt: "Public foundation article.",
          body: "Article body",
          coverImageKey: null,
          coverImageAlt: null,
          category: input.category ?? "Announcements",
          author: "Intellibus Academy",
          publishedAt: now,
          status: "published",
          createdAt: now,
          updatedAt: now
        }
      ],
      meta: { page: input.page, pageSize: input.pageSize, total: 1 }
    };
  },
  async getNewsBySlug(slug) {
    if (slug !== "foundation-preview") {
      return null;
    }

    return {
      id: "news-one",
      slug,
      title: "Foundation Preview",
      excerpt: "Public foundation article.",
      body: "Article body",
      coverImageKey: null,
      coverImageAlt: null,
      category: "Announcements",
      author: "Intellibus Academy",
      publishedAt: now,
      status: "published",
      createdAt: now,
      updatedAt: now
    };
  },
  async listEvents(input) {
    return { data: [], meta: { page: input.page, pageSize: input.pageSize, total: 0 } };
  },
  async getEventBySlug() {
    return null;
  },
  async listParticipants() {
    return [];
  },
  async listFaqs() {
    return [];
  },
  async listAlbums() {
    return [];
  },
  async getAlbumBySlug() {
    return null;
  },
  async listPhotosByAlbumSlug() {
    return [];
  },
  async listExternalLinks() {
    return [];
  }
};

const storage: MediaStorage = {
  getPublicImageUrl(key) {
    return `https://media.example.com/${key}`;
  },
  async getObjectResponse() {
    return new Response("media", {
      headers: { "cache-control": "public, max-age=31536000, immutable" }
    });
  }
};

const env = {
  APP_ENV: "local",
  PUBLIC_MEDIA_BASE_URL: "https://media.example.com"
} as Env;

function apiRequest(path: string, init?: RequestInit) {
  return handleApiRequest(
    new Request(`https://academy.example.test${path}`, init),
    env,
    { repository, storage }
  );
}

describe("Worker API", () => {
  it("returns paginated news in a consistent response envelope", async () => {
    const response = await apiRequest("/api/news?page=1&pageSize=2");
    const body = (await response.json()) as ApiSuccess<NewsArticle[]>;

    expect(response.status).toBe(200);
    expect(body.data).toHaveLength(1);
    expect(body.meta).toEqual({ page: 1, pageSize: 2, total: 1 });
  });

  it("validates slugs server-side", async () => {
    const response = await apiRequest("/api/news/BadSlug");
    const body = (await response.json()) as ApiFailure;

    expect(response.status).toBe(400);
    expect(body.error.code).toBe("bad_request");
  });

  it("returns 404 for missing records", async () => {
    const response = await apiRequest("/api/news/missing-news");
    const body = (await response.json()) as ApiFailure;

    expect(response.status).toBe(404);
    expect(body.error.code).toBe("not_found");
  });

  it("rejects public write methods", async () => {
    const response = await apiRequest("/api/news", { method: "POST" });
    const body = (await response.json()) as ApiFailure;

    expect(response.status).toBe(405);
    expect(body.error.code).toBe("method_not_allowed");
  });
});
