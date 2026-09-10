import { describe, expect, it } from "vitest";

import { D1ContentRepository } from "../worker/db/d1ContentRepository";

function createMockDb(captured: string[]): D1Database {
  return {
    prepare(query: string) {
      captured.push(query);
      return {
        bind() {
          return {
            async all() {
              return { results: [], success: true, meta: {} };
            },
            async first() {
              return null;
            }
          };
        },
        async all() {
          return { results: [], success: true, meta: {} };
        },
        async first() {
          return null;
        }
      };
    }
  } as unknown as D1Database;
}

describe("D1ContentRepository", () => {
  it("filters public participant records by publication and consent", async () => {
    const captured: string[] = [];
    const repository = new D1ContentRepository(createMockDb(captured));

    await repository.listParticipants({});

    expect(captured[0]).toContain("published = 1");
    expect(captured[0]).toContain("consent_status = 'approved'");
  });

  it("filters public photographs by album, publication and consent", async () => {
    const captured: string[] = [];
    const repository = new D1ContentRepository(createMockDb(captured));

    await repository.listPhotosByAlbumSlug("development-community-moments");

    expect(captured[0]).toContain("albums.slug = ?");
    expect(captured[0]).toContain("photographs.published = 1");
    expect(captured[0]).toContain("photographs.consent_status = 'approved'");
  });
});
