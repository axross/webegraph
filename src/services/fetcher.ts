import { cheerio } from "https://deno.land/x/cheerio@1.0.4/mod.ts";
import { FETCHER_USER_AGENT, IMMUTABLE_MAX_AGE } from "../constants.ts";
import { Snapshot } from "../models/snapshot.ts";

export async function fetchSnapshot(url: string): Promise<Snapshot> {
  const response = await fetch(url, {
    headers: {
      "user-agent": FETCHER_USER_AGENT,
      accept: "text/html",
      "accept-language": "en-US,en;q=0.9",
    },
  });

  const contentType = response.headers.get("content-type");

  if (!contentType) {
    throw new Error();
  }

  const contentTypeParts = contentType.split(/[ ;]+/);
  const mimeType = contentTypeParts[0];
  const charset =
    contentTypeParts
      .find((p) => p.startsWith("charset="))
      ?.substring(8)
      .toLowerCase() ?? "utf-8";

  const snapshot: Snapshot = {
    url,
    resolvedUrl: response.url,
    html: null,
    dimension: null,
    maxAgeInSeconds: getMaxAge(response),
  };

  if (mimeType === "text/html" && charset === "utf-8") {
    const partialSnapshot = extractSummaryFromHtml(
      await response.text(),
      response.url
    );

    for (const [key, value] of Object.entries(partialSnapshot)) {
      if (value) {
        (snapshot as any)[key] = value;
      }
    }
  }

  return snapshot;
}

function getMaxAge(response: Response): number {
  const cacheControl = response.headers.get("cache-control");

  if (!cacheControl) {
    return 0;
  }

  const parts = cacheControl.split(",").map((part) => part.trim());

  if (
    parts.includes("private") ||
    parts.includes("no-store") ||
    parts.includes("no-cache")
  ) {
    return 0;
  }

  if (parts.includes("immutable")) {
    return IMMUTABLE_MAX_AGE;
  }

  const staleWhileRevalidate = parts.find((part) =>
    part.startsWith("stale-while-revalidate=")
  );
  if (staleWhileRevalidate) {
    return parseInt(staleWhileRevalidate.substring(23));
  }

  const sMaxAge = parts.find((part) => part.startsWith("s-maxage="));
  if (sMaxAge) {
    return parseInt(sMaxAge.substring(9));
  }

  const maxAge = parts.find((part) => part.startsWith("max-age="));
  if (maxAge) {
    return parseInt(maxAge.substring(8));
  }

  return 0;
}

function extractSummaryFromHtml(html: string, url: string): Partial<Snapshot> {
  const $ = cheerio.load(html);
  const authenticUrl =
    $("meta[property='og:url']").attr("content") || undefined;

  const title =
    $("meta[property='og:title']").attr("content")?.trim() ||
    $("title").text()?.trim() ||
    null;
  const description =
    $("meta[property='og:description']").attr("content")?.trim() ||
    $("meta[name='description']").attr("content")?.trim() ||
    $("html").text().trim().substring(0, 256) ||
    null;
  let thumbnailImageUrl =
    $("meta[property='og:image:secure_url']").attr("content")?.trim() ||
    $("meta[property='og:image']").attr("content")?.trim() ||
    $("link[rel='apple-touch-icon-precomposed'][sizes='180x180']").attr(
      "href"
    ) ||
    $("link[rel='apple-touch-icon-precomposed'][sizes='144x144']").attr(
      "href"
    ) ||
    $("link[rel='apple-touch-icon-precomposed'][sizes='114x114']").attr(
      "href"
    ) ||
    $("link[rel='apple-touch-icon-precomposed'][sizes='72x72']").attr("href") ||
    $("link[rel='apple-touch-icon-precomposed']").attr("href") ||
    $("link[rel='apple-touch-icon'][sizes='180x180']").attr("href") ||
    $("link[rel='apple-touch-icon'][sizes='144x144']").attr("href") ||
    $("link[rel='apple-touch-icon'][sizes='114x114']").attr("href") ||
    $("link[rel='apple-touch-icon'][sizes='72x72']").attr("href") ||
    $("link[rel='apple-touch-icon']").attr("href") ||
    $("link[rel='shortcut icon']").attr("href") ||
    $("link[rel='icon']").attr("href") ||
    null;

  if (thumbnailImageUrl && !thumbnailImageUrl.startsWith("http")) {
    const baseUrl = $("base").attr("href") ?? new URL(url).origin;

    thumbnailImageUrl = new URL(thumbnailImageUrl, baseUrl).href;
  }

  return {
    resolvedUrl: authenticUrl,
    html: { title, description, thumbnailImageUrl },
  };
}
