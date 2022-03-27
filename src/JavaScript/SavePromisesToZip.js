import JSZip from "jszip";

const SavePromisesToZip = async (promises) => {
  let promise = new Promise(async (resolve) => {
    let zip = new JSZip();
    const data = await Promise.all(promises);

    data.forEach((blob, idx) => {
      if (blob) zip.file(`${idx}.${blob.type}`, blob.data);
    });

    resolve(zip);
  });

  return promise;
};

export default SavePromisesToZip;
