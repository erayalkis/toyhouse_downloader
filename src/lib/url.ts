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

  let splitUrl = url.split("/");
  // Here, we remove the /gallery part from the url to keep things easy
  splitUrl = splitUrl.filter(ele => !ele.startsWith("gallery"));

  const startUrl = splitUrl.indexOf("toyhou.se");
  // After removing the gallery, since all character ID's come after the `toyhou.se` part in the url, we collect them into an array
  const charIds = splitUrl.slice(startUrl + 1);

  // Here, we join the ID's back together with a /, so that we have an ID the API can use
  // Eg. a url like: "https:/toyhou.se/3949-character-one/49829393-tab-one" will return `3949-character-one/49829393-tab-one`
  return charIds.join("/");
}