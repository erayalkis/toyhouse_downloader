
const isValidUrl = (url: string) => url.startsWith("https://toyhou.se") || url.startsWith("toyhou.se");

export const getIdFromUrl = (url: string) => {
  if (!isValidUrl(url)) return null;

  const splitUrl = url.split("/");

  if (splitUrl.at(-1) === "gallery") return splitUrl.at(-2);
  return splitUrl.at(-1);
}