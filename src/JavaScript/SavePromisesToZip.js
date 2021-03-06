import JSZip from "jszip";

const SavePromisesToZip = async (promises) => {
  let promise = new Promise(async (resolve) => {
    const data = await Promise.all(promises);
    let zip = new JSZip();

    let str = data.reduce((str, blob, idx) => {
      if (blob) {
        zip.file(`${idx}.${blob.type}`, blob.data);
        console.log(blob);
        str += `${idx}. ${blob.artist.name} [ ${blob.artist.profile} ]\n`;
      }

      return str;
    }, "");

    zip.file("credits.txt", str);
    resolve(zip);
  });

  return promise;
};

export default SavePromisesToZip;
