import { notFound } from "../http/errors";

export interface ImageUrlOptions {
  width?: number;
  format?: "avif" | "webp" | "jpg" | "png";
}

export interface MediaStorage {
  getPublicImageUrl(key: string, options?: ImageUrlOptions): string;
  getObjectResponse(key: string): Promise<Response>;
}

export class R2MediaStorage implements MediaStorage {
  public constructor(
    private readonly bucket: R2Bucket,
    private readonly publicBaseUrl: string
  ) {}

  public getPublicImageUrl(key: string, options: ImageUrlOptions = {}): string {
    const url = new URL(`${this.publicBaseUrl.replace(/\/$/, "")}/${key}`);

    if (options.width) {
      url.searchParams.set("w", String(options.width));
    }

    if (options.format) {
      url.searchParams.set("format", options.format);
    }

    return url.toString();
  }

  public async getObjectResponse(key: string): Promise<Response> {
    const object = await this.bucket.get(key);

    if (!object) {
      throw notFound("Media file not found");
    }

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set("etag", object.httpEtag);
    headers.set("cache-control", "public, max-age=31536000, immutable");

    return new Response(object.body, { headers });
  }
}
