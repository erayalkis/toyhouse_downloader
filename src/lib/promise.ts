import type { GalleryImage } from "./interfaces/toyhouse";
import type { ImageBlob } from "./interfaces/zip";

export const promiseify = async (image: GalleryImage): Promise<ImageBlob> => {
  const imagePromise = new Promise<ImageBlob>(async (resolve, reject) => {
    try {
      const url = image.link;
      const mediaType = url.split(".")?.at(-1);
      const res = await fetch(url);
      const blob = await res.blob();

      const imgBlob: ImageBlob = {blob, type: mediaType};
      resolve(imgBlob);
    }
    catch(e) {
      resolve({blob: null, type: null});
    }
  })

  return imagePromise;
}