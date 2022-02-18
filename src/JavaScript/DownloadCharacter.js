import CreatePromise from "./CreatePromise";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const DownloadCharacter = (id, setQueue) => {
  console.log(`Fetching ${id}`);
  fetch(
    `https://toyhouse-rails-api.herokuapp.com/character/?id=${id}&gallery_only=true`
  )
    .then((response) => {
      console.log(`Response received for ${id}`);
      return response.json();
    })
    .then((response) => {
      if (response.status === 422 || response.status === 404) {
        console.log("Something went wrong :(");
      } else {
        console.log(`Zipping ${id}`);
        let zip = new JSZip();
        const promises = [];

        response.gallery.forEach((link, idx) => {
          console.log(`Creating promises for ${id}`);
          const linkPromise = CreatePromise(link);
          promises.push(linkPromise);

          if (idx === response.gallery.length - 1) {
            Promise.all(promises)
              .then((data) => {
                data.forEach((blob, idx) =>
                  zip.file(`${idx}.${blob.type}`, blob.data)
                );
              })
              .then((data) => {
                console.log(`Saving ${id}`);
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
