export interface Env {
  ACADEMY_DB: D1Database;
  ACADEMY_MEDIA: R2Bucket;
  ASSETS: Fetcher;
  APP_ENV: "local" | "preview" | "production";
  PUBLIC_MEDIA_BASE_URL: string;
}
