import CreatePromise from "./CreatePromise";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import "../config";

const DownloadCharacter = (id, setQueue) => {
  fetch(`${global.config.backend_url}/character/?id=${id}&gallery_only=true`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.status === 422 || response.status === 404) {
      } else {
        let zip = new JSZip(); // Create a new zip file for downloading
        const promises = [];

        response.gallery.forEach((link, idx) => {
          // Creates a promise that either resolves to a blob or a null value
          const linkPromise = CreatePromise(link);
          if (linkPromise !== null) promises.push(linkPromise); // If promise resolved to a blob, add it to the promises array

          if (idx === response.gallery.length - 1) {
            Promise.all(promises) // If we're at the last index, add each blob to the zip and download it
              .then((data) => {
                data.forEach((blob, idx) => {
                  if (blob !== null) zip.file(`${idx}.${blob.type}`, blob.data);
                });
              })
              .then((data) => {
                zip.generateAsync({ type: "blob" }).then((content) => {
                  saveAs(content, `${response.name}-gallery.zip`);
                  setQueue((old) =>
                    old.filter((character) => character.id !== id)
                  );
                });
              });
          }
        });
      }
    });
};

export default DownloadCharacter;
