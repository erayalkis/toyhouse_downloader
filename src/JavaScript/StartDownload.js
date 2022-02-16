import CreatePromise from "./CreatePromise";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const StartDownload = (setHasError, setLoading, setQueryStr, id) => {
  fetch(
    `https://toyhouse-rails-api.herokuapp.com/character/?id=${id}&gallery_only=true`
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.status === 422 || response.status === 404) {
        setLoading(null);
        setHasError(response.msg);
      } else {
        setLoading("Handling the gallery...");
        let zip = new JSZip();
        const promises = [];

        response.gallery.forEach(async (link, idx) => {
          const linkPromise = CreatePromise(link);
          promises.push(linkPromise);

          if (idx === response.gallery.length - 1) {
            setLoading("Saving files...");
            Promise.all(promises)
              .then((data) => {
                data.forEach((blob, idx) =>
                  zip.file(`${idx}.${blob.type}`, blob.data)
                );
              })
              .then((data) => {
                setLoading(null);
                zip.generateAsync({ type: "blob" }).then((content) => {
                  saveAs(content, `${response.name}-gallery.zip`);
                  setQueryStr("");
                });
              });
          }
        });
      }
    });
};

export default StartDownload;
