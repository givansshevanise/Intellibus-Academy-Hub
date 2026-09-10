import { handleApiRequest } from "./api/handler";
import type { Env } from "./types";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/") || url.pathname === "/health") {
      return handleApiRequest(request, env);
    }

    if (url.pathname.startsWith("/media/")) {
      return handleApiRequest(request, env);
    }

    return env.ASSETS.fetch(request);
  }
};
