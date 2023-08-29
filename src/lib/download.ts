import type { GalleryImage } from "./interfaces/toyhouse";
import type { ImageBlob } from "./interfaces/zip";

import JSZip from "jszip";
import { useMessageStore } from "@/stores/message";
import { backendConfig } from "@/config/backendConfig";
import { useErrorStore } from "@/stores/error";
import { promiseify } from "./promise";
import { saveAs } from "file-saver";
import { useQueueStore } from "@/stores/queue";

const fetchCharacterGallery = async (id: string) => {
  const { setError, clearError } = useErrorStore();
  const { clearMessage } = useMessageStore();
  const backendUrl = backendConfig.backendUrl;

  try {
    const characterJSONString = await fetch(
      `${backendUrl}/character/${id}/gallery`
    );
    // Parse received json string into a POJO
    const res = await characterJSONString.json();
    return res;
  } catch (e) {
    clearMessage();
    setError("Something went wrong while fetching the gallery!");
    console.error(e);
    setTimeout(() => {
      clearError();
    }, 1200);
  }
};

export const fetchCharacterDetails = async (id: string) => {
  const { setError, clearError } = useErrorStore();
  const { clearMessage } = useMessageStore();
  const backendUrl = backendConfig.backendUrl;

  try {
    const characterJSONString = await fetch(
      `${backendUrl}/character/${id}/details`
    );
    // Parse received json string into a POJO
    const res = await characterJSONString.json();
    return res;
  } catch (e) {
    clearMessage();
    setError("Something went wrong while fetching the character!");
    console.error(e);
    setTimeout(() => {
      clearError();
    }, 1200);
  }
};

const promiseifyGallery = async (gallery: Array<GalleryImage>) => {
  const promises = gallery.map((image) => promiseify(image));
  // Put this part into parantheses so we await the .allSettled() function first
  const blobs = (await Promise.allSettled(promises))
    // The `value` property only exists on fulfilled promises,
    // so we use the && operator to evaluate and return the `value` property only if the status is fulfilled
    .map((result) => result.status === "fulfilled" && result.value);

  return blobs;
};

const downloadZip = async (zip: JSZip, id: string) => {
  const blob = await zip.generateAsync({ type: "blob" });
  saveAs(blob, `${id}.zip`);
};

const zipBlobs = async (blobs: (false | ImageBlob)[]): Promise<JSZip> => {
  const zip = new JSZip();

  let artists = "";
  let metadata = "";

  blobs.forEach((blob, idx) => {
    if (!blob || !blob.type) return;

    if (blob.artists) {
      artists += `\n${idx}: `;
      blob.artists.forEach(
        (artist) => (artists += `[${artist.name}, ${artist.link}] `)
      );
      artists += "\n";
    }

    if (blob.metadata) {
      const mtd = blob.metadata;
      metadata += `\n${idx}: \n\tDate: ${mtd.date}\n`;
      if (mtd.description) {
        metadata += "\tDescription: ";
        const parsed_description = mtd.description
          .replace("Caption", "")
          .trim();
        metadata += parsed_description;
        metadata += "\n";
      } else {
        metadata += "\tDescription: N/A \n";
      }

      metadata += `\tTagged Characters: `;
      mtd.tagged_characters.forEach(
        (char) => (metadata += `[${char.name}, ${char.link}] `)
      );
      metadata += "\n";
    }

    zip.file(`${idx}.${blob.type}`, blob.blob);
  });

  zip.file("credits.txt", artists);
  zip.file("metadata.txt", metadata);
  return zip;
};

export const downloadCharacter = async (id: string) => {
  if (!id) return null;
  const { setMessage, clearMessage } = useMessageStore();
  const { setError, clearError } = useErrorStore();

  setMessage("Fetching gallery...");
  const characterObj = await fetchCharacterGallery(id);
  if (!characterObj.gallery) {
    clearMessage();
    setError("Character is invalid!");
    setTimeout(() => {
      clearError();
    }, 1200);
    return;
  }
  setMessage("Parsing gallery...");
  const blobs = await promiseifyGallery(characterObj.gallery);
  setMessage("Creating zip...");
  const zip = await zipBlobs(blobs);
  setMessage("Downloading gallery...");
  downloadZip(zip, id);
  setMessage("Gallery downloaded!");
  setTimeout(() => {
    clearMessage();
  }, 1200);
};

export const downloadQueue = async () => {
  const { queue, removeCharacter } = useQueueStore();

  for (const char of queue) {
    await downloadCharacter(char.id);
    removeCharacter(char.id);
  }
};
