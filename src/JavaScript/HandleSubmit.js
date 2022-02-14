import JSZip from "jszip";
import { saveAs } from "file-saver";
import CheckURL from "./CheckURL";

const HandleSubmit = async (props, queryStr) => {
  props.setHasError(false);

  let id = CheckURL(props, queryStr);
  if (!id) return;

  props.setLoading("Downloading images...");
  fetch(
    `https://toyhouse-rails-api.herokuapp.com/character/?id=${id}&gallery_only=true`
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.status === 422 || response.status === 404) {
        props.setLoading(null);
        props.setHasError(response.msg);
      } else {
        props.setLoading("Handling the gallery...");
        let zip = new JSZip();
        const promises = [];

        response.gallery.forEach(async (link, idx) => {
          const linkPromise = new Promise(async (resolve, reject) => {
            let response = null;
            try {
              response = await fetch(link);
            } catch (err) {
              console.log(err);
            }
            const blob = await response.blob();
            let dataType = link.split(".")[3];
            if (dataType.length > 4) {
              dataType = dataType.split("?")[0];
            }
            resolve({ data: blob, type: dataType });
          });
          promises.push(linkPromise);

          if (idx === response.gallery.length - 1) {
            props.setLoading("Saving files...");
            Promise.all(promises)
              .then((data) => {
                data.forEach((blob, idx) =>
                  zip.file(`${idx}.${blob.type}`, blob.data)
                );
              })
              .then((data) => {
                props.setLoading(null);
                zip.generateAsync({ type: "blob" }).then((content) => {
                  saveAs(content, `${response.name}-gallery.zip`);
                });
              });
          }
        });
      }
    });
};

export default HandleSubmit;
