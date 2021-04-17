interface Snapshot {
  url: string;
  resolvedUrl: string;
  html: {
    title: string | null;
    description: string | null;
    thumbnailImageUrl: string | null;
  } | null;
  image: {
    dimension: {
      width: number;
      height: number;
    } | null;
  } | null;
  expiresIn: number;
}
