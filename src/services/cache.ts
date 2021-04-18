import { v5 } from "https://deno.land/std@0.93.0/uuid/mod.ts";
import {
  connect as connectToRedis,
  parseURL,
} from "https://deno.land/x/redis@v0.21.0/mod.ts";
import { Snapshot } from "../models/snapshot.ts";
import { REDIS_CACHE_URL } from "../constants.ts";

function toCacheKey(url: string): string {
  return v5
    .generate({
      value: url,
      namespace: "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
    })
    .toString();
}

export async function getSnapshotCache(
  originalUrl: string
): Promise<Snapshot | null> {
  if (!REDIS_CACHE_URL) {
    return null;
  }

  const redis = await connectToRedis(parseURL(REDIS_CACHE_URL));
  const key = toCacheKey(originalUrl);

  const [stringValue, expiresIn] = await Promise.all([
    redis.get(key),
    redis.ttl(key),
  ]);

  if (stringValue && expiresIn >= 1) {
    const cache = JSON.parse(stringValue);

    if (cache.schemaVersion === 1) {
      const snapshot = { ...cache };

      delete snapshot.schemaVersion;

      return snapshot;
    }
  }

  return null;
}

export async function cacheSnapshot(snapshot: Snapshot): Promise<void> {
  if (!REDIS_CACHE_URL) {
    return;
  }

  const redis = await connectToRedis(parseURL(REDIS_CACHE_URL));
  const key = toCacheKey(snapshot.url);

  await Promise.all([
    redis.set(key, JSON.stringify({ ...snapshot, schemaVersion: 1 })),
    redis.expire(key, snapshot.expiresIn),
  ]);
}
