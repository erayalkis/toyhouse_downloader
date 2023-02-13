
const isValidUrl = (url: string) => url.startsWith("https://toyhou.se") || url.startsWith("toyhou.se");

export const getIdFromUrl = (url: string): string => {
  if (!isValidUrl(url)) return "";

  const splitUrl = url.split("/");

  let id;

  if (splitUrl.at(-1) === "gallery") { id = splitUrl.at(-2) } else { id = splitUrl.at(-1) };
  if(!id) return "";

  // Use regex later on if other inconsistencies pop up in character ID's
  if (id?.includes("#")) {
    const poundIndex = id.indexOf("#");
    const newId = id.slice(0, poundIndex);
    return newId;
  }

  return id;
}