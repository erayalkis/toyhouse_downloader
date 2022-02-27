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

        console.log(response.gallery.length);
        response.gallery.forEach((link, idx) => {
          console.log("Creating promise!!!!!");
          const linkPromise = CreatePromise(link);

          if (linkPromise !== null) promises.push(linkPromise);

          if (idx === response.gallery.length - 1) {
            setLoading("Saving files...");

            console.log(promises);
            Promise.all(promises)
              .then((data) => {
                data.forEach((blob, idx) => {
                  if (blob) zip.file(`${idx}.${blob.type}`, blob.data);
                });
              })
              .then((data) => {
                setLoading(null);
                console.log("Saving files...");
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
