import { useErrorStore } from "@/stores/error";

const isValidUrl = (url: string) => url && (url.startsWith("https://toyhou.se") || url.startsWith("toyhou.se"));

export const getIdFromUrl = (url: string): string => {
  if (!isValidUrl(url)) { 
    const { setError, clearError } = useErrorStore();
    setError("Invalid URL!");

    setTimeout(() => {
      clearError();
    }, 1200)
    
    return "";
  }

  const splitUrl = url.split("/");

  let id;

  if (splitUrl.at(-1)?.includes("gallery")) { id = splitUrl.at(-2) } else { id = splitUrl.at(-1) };
  if(!id) return "";

  // Use regex later on if other inconsistencies pop up in character ID's
  if (id?.includes("#")) {
    console.log(id);
    const poundIndex = id.indexOf("#");
    const newId = id.slice(0, poundIndex);
    console.log(newId);
    return newId;
  }

  return id;
}