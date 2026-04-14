export const basePath =
  process.env.NODE_ENV === "production" ? "/aylar-plastik" : "";

export function withBasePath(path: string) {
  if (!path) return path;
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
