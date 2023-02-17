import type { GalleryImage } from "./interfaces/toyhouse";
import type { ImageBlob } from "./interfaces/zip";

import JSZip from 'jszip';
import { useMessageStore } from "@/stores/message"; 
import { backendConfig } from "@/config/backendConfig";
import { useErrorStore } from "@/stores/error";
import { promiseify } from "./promise";
import { saveAs } from 'file-saver';
import { useQueueStore } from "@/stores/queue";

const fetchCharacterGallery = async (id: string) => {
  const { setError, clearError } = useErrorStore();
  const { clearMessage } = useMessageStore();
  const backendUrl = backendConfig.backendUrl;

  try {
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

export const fetchCharacterDetails = async (id: string) => {
  const { setError, clearError } = useErrorStore();
  const { clearMessage } = useMessageStore();
  const backendUrl = backendConfig.backendUrl;

  try {
    const characterJSONString = await fetch(`${backendUrl}/character/${id}/details`);
    // Parse received json string into a POJO
    const res = await characterJSONString.json();
    return res;
  } catch(e) {
    clearMessage();
    setError("Something went wrong while fetching the character!");
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
    .map(result => result.status === 'fulfilled' && result.value)

  return blobs;
}

const downloadZip = async (zip: JSZip, id: string) => {
  const blob = await zip.generateAsync({type: 'blob'});
  saveAs(blob, `${id}.zip`)
};

const zipBlobs = async (blobs: (false | ImageBlob)[]): Promise<JSZip> => {
  const zip = new JSZip();

  let artists = "";

  blobs.forEach((blob, idx) => {
    if(!blob || !blob.type) return;

    blob.artists.forEach(artist => artists += `${idx}: ${artist.name} | ${artist.profile}\n`);

    zip.file(`${idx}.${blob.type}`, blob.blob);
  })

  console.log(artists);
  zip.file("credits.txt", artists);
  return zip;
}

export const downloadCharacter = async (id: string) => {
  if(!id) return null;
  const { setMessage, clearMessage } = useMessageStore();
  const { setError, clearError } = useErrorStore();

  setMessage("Fetching gallery...");
  const characterObj = await fetchCharacterGallery(id);
  if(!characterObj.gallery) {
    clearMessage();
    setError("Character is invalid!");
    setTimeout(() => {
      clearError();
    }, 1200)
    return
  }
  setMessage("Parsing gallery...");
  const blobs = await promiseifyGallery(characterObj.gallery);
  setMessage("Creating zip...");
  const zip = await zipBlobs(blobs);
  setMessage("Downloading gallery...");
  downloadZip(zip, id);
  setMessage("Gallery downloaded!");
  setTimeout(() => {
    clearMessage()
  }, 1500);
}

export const downloadQueue = async () => {
  const { queue, removeCharacter } = useQueueStore();

  for(let char of queue) {
    console.log("downloading", char.id);
    await downloadCharacter(char.id);
    removeCharacter(char.id);
  }
}