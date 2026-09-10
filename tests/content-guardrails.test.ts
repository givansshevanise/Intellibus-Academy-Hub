import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

import { footerNavigation, primaryNavigation } from "../src/app/navigation";

const routePatterns = [
  "/",
  "/news",
  "/events",
  "/community",
  "/community/cohort",
  "/community/photos",
  "/about"
];

describe("content guardrails", () => {
  it("keeps primary navigation limited to approved destinations", () => {
    expect(primaryNavigation.map((item) => item.label)).toEqual([
      "Home",
      "News",
      "Events",
      "Community",
      "About"
    ]);

    for (const item of primaryNavigation) {
      expect(routePatterns).toContain(item.href);
      expect(item.href).not.toBe("#");
      expect(item.href).not.toBe("");
    }
  });

  it("does not expose unresolved footer links as active links", () => {
    const unavailable = footerNavigation.filter((item) => item.unavailable);

    expect(unavailable.length).toBeGreaterThan(0);
    expect(unavailable.every((item) => item.href !== "#" && item.href !== "")).toBe(
      true
    );
  });

  it("requires image alt text in the D1 schema without seeding invented images", () => {
    const migration = readFileSync(
      resolve(process.cwd(), "migrations/0001_initial_schema.sql"),
      "utf8"
    );
    const seed = readFileSync(resolve(process.cwd(), "seed/development.sql"), "utf8");

    expect(migration).toContain("alt_text TEXT NOT NULL");
    expect(seed).not.toMatch(/\.(avif|webp|jpe?g|png)/i);
    expect(seed).not.toContain("INSERT INTO photographs");
  });
});
