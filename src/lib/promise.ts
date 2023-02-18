import type { GalleryImage } from "./interfaces/toyhouse";
import type { ImageBlob } from "./interfaces/zip";

export const promiseify = async (image: GalleryImage): Promise<ImageBlob> => {
  const imagePromise = new Promise<ImageBlob>(async (resolve) => {
    try {
      let url = image.link;
      if (url?.includes("?")) {
        const qMarkIndex = url.indexOf("?");
        url = url.slice(0, qMarkIndex);
      }

      const mediaType = url.split(".")?.at(-1);
      const res = await fetch(url);
      const blob = await res.blob();

      const imgBlob: ImageBlob = {
        blob,
        type: mediaType,
        artists: image.artists,
        metadata: image.image_metadata,
      };
      resolve(imgBlob);
    } catch (e) {
      resolve({ blob: new Blob(), type: null, artists: [], metadata: null });
    }
  });

  return imagePromise;
};
