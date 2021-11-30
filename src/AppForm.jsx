import JSZip from "jszip";
import { saveAs } from 'file-saver';
import { useState } from "react";

const AppForm = (props) => {
  const [queryStr, setQueryStr] = useState("");

  const handleSubmit = () => {
    props.setHasError(false)

    let id = null;
    if(!queryStr.startsWith('https') && !queryStr.startsWith('toyhou.se')) {
      props.setHasError("Please paste in a valid Toyhouse link!")
      return
    } else if(queryStr.startsWith('toyhou.se')) {
      id = queryStr.split("/")[1]
    } else if(queryStr.startsWith('https://toyhou.se')) {
      id = queryStr.split("/")[3]
    } else {
      props.setHasError("Please paste in a valid Toyhouse link!")
      return
    }

    props.setLoading("Downloading images...")
    fetch(`http://127.0.0.1:3001/character/?id=${id}&gallery_only=true`)
      .then(response => { 
        return response.json()
      })
      .then(response => {
        if(response.status === 422 || response.status === 404) {
          props.setLoading(null);
          props.setHasError(response.msg);
        } else {
          props.setLoading("Handling the gallery...")
          let zip = new JSZip();
          const promises = [];

        response.gallery.forEach(async (link, idx) => {
          const linkPromise = new Promise(async (resolve, reject) => {
            let response = null;
            try {
              response = await fetch(link);
            } catch(err) {
              console.log(err);
            }
            const blob = await response.blob();
            let dataType = link.split(".")[3]
            if(dataType.length > 4) {
              dataType = dataType.split("?")[0]
            }
            resolve({data: blob, type: dataType });
          });
          promises.push(linkPromise);

          if(idx === response.gallery.length - 1 ) {
            props.setLoading("Saving files...")
            Promise.all(promises)
            .then(data => {
              data.forEach((blob, idx) => zip.file(`${idx}.${blob.type}`, blob.data))
            })
            .then(data => {
              props.setLoading(null);
              zip.generateAsync({type:"blob"})
                .then(content => {
                  saveAs(content, `${response.name}-gallery.zip`)
                })
            })
          }
        });
      }
      });
  };

  return(
    <div className="input-group mb-3">
      <input type="text" className="form-control form-control-lg" placeholder="Toyhouse Link"
        value={queryStr} onChange={(e) => setQueryStr(e.target.value)} />
      <div className="input-group-append">
        <button className="btn btn-outline-primary btn-lg" type="button" onClick={handleSubmit}>Download</button>
      </div>
    </div>
  )
};

export default AppForm;