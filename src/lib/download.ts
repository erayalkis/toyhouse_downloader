import { useMessageStore } from "@/stores/message"; 
import { backendConfig } from "@/config/backendConfig";
import { useErrorStore } from "@/stores/error";
import type { GalleryImage } from "./interfaces/toyhouse";
import { promiseify } from "./promise";

const fetchCharacter = async (id: string) => {
  const { setError, clearError } = useErrorStore();
  const { clearMessage } = useMessageStore();
  const backendUrl = backendConfig.backendUrl;

  try {
    console.log(id);
    const characterJSONString = await fetch(`${backendUrl}/character/${id}/gallery`);
    // Parse received json string into a POJO
    const res = await characterJSONString.json();
    return res;
  } catch(e) {
    clearMessage();
    setError("Something went wrong while fetching the gallery!");
    console.error(e);
    setTimeout(() => {
      clearError();
    }, 2000)    
  }
}

const promiseifyGallery = async (gallery: Array<GalleryImage>) => {
  const promises = gallery.map(image => promiseify(image));
  // Put this part into parantheses so we await the .allSettled() function first
  const blobs = (await Promise.allSettled(promises))
    // The `value` property only exists on fulfilled promises, 
      // so we use the && operator to evaluate and return the `value` property only if the status is fulfilled
    .map(result => result.status === 'fulfilled' && result.value);
  return blobs;
}

export const downlaodCharacter = async (id: string) => {
  if(!id) return null;
  const { setMessage } = useMessageStore();

  setMessage("Fetching gallery...");
  const characterObj = await fetchCharacter(id);
  setMessage("Gallery fetched!");
  const blobs = await promiseifyGallery(characterObj.gallery);
  console.log(blobs);
}