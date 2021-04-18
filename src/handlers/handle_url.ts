import {
  RouterMiddleware,
  Status,
} from "https://deno.land/x/oak@v7.0.0/mod.ts";
import { FALLBACK_MAX_AGE } from "../constants.ts";
import { cacheSnapshot, getSnapshotCache } from "../services/cache.ts";
import { fetchSnapshot } from "../services/fetcher.ts";

export const handleUrl: RouterMiddleware<{ url: string }> = async (context) => {
  const url = context.params.url;

  const snapshotCache = await getSnapshotCache(url);

  if (snapshotCache) {
    context.response.status = Status.OK;
    context.response.headers.set(
      "content-type",
      "application/json; charset=utf-8"
    );
    context.response.headers.set(
      "cache-control",
      `max-age=${snapshotCache.expiresIn}, public`
    );
    context.response.body = JSON.stringify(snapshotCache);

    return;
  }

  const snapshot = await fetchSnapshot(url);

  context.response.status = Status.OK;
  context.response.headers.set(
    "content-type",
    "application/json; charset=utf-8"
  );
  context.response.headers.set(
    "cache-control",
    `max-age=${
      snapshot.expiresIn > 0 ? snapshot.expiresIn : FALLBACK_MAX_AGE
    }, public`
  );
  context.response.body = JSON.stringify(snapshot);

  cacheSnapshot(snapshot);
};
