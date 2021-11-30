import JSZip from "jszip";
import { saveAs } from 'file-saver';
import { useState } from "react";

const AppForm = (props) => {
  const [queryStr, setQueryStr] = useState("");

  const handleSubmit = () => {
    props.setHasError(false)

    let id = null;
    if(!queryStr.startsWith('https') && !queryStr.startsWith('toyhou.se')) {
      props.setHasError(true)
      return
    } else if(queryStr.startsWith('toyhou.se')) {
      id = queryStr.split("/")[1]
    } else if(queryStr.startsWith('https') && queryStr.includes('toyhou.se')) {
      id = queryStr.split("/")[3]
    }

    fetch(`http://127.0.0.1:3001/character/?id=${id}&gallery_only=true`)
      .then(response => response.json())
      .then(response => {
        if(response.status !== 402 || response.status !== 404) {
          let zip = new JSZip();
          console.log(response);
          const promises = [];

        //   let imgFetch = new Promise((resolve, reject) => {
        //     response.gallery.forEach((link, idx) => {
        //     fetch(link)
        //       .then(res => res.blob())
        //       .then(res => {
        //         const fileType = link.split(".")[3]
        //         console.log(res)
        //         res.lastModifiedDate = new Date();
        //         zip.file(`${response.name}/${idx}.${fileType}`, res)
        //         console.log("saved!");
        //         if (idx === response.gallery.length -1) resolve();
        //       })
        //   })
        // })

        response.gallery.forEach(async (link, idx) => {
          const linkPromise = new Promise(async (resolve, reject) => {
            const response = await fetch(link);
            const blob = await response.blob();
            resolve({data: blob, type: link.split(".")[3]});
          });
          promises.push(linkPromise);

          if(idx === response.gallery.length - 1 ) {
            Promise.all(promises)
            .then(data => {
              console.log(data);
              data.forEach((blob, idx) => zip.file(`${idx}.${blob.type}`, blob.data))
            })
            .then(data => {
              zip.generateAsync({type:"blob"})
                .then(content => {
                  saveAs(content, `${response.name}-images.zip`)
                })
            })
          }
        });

        console.log(promises);




          // imgFetch.then(() => {
          //   console.log("downloading!");
          //   zip.generateAsync({type:"blob"})
          //   .then(content => {
          //     saveAs(content, `${response.name}-images.zip`)
          //     console.log("downloaded!");
          //   });
          // })

        } 
      });
  };

  return(
    <div className="input-group mb-3">
      <input type="text" className="form-control form-control-lg" placeholder="Toyhouse Link"
        value={queryStr} onChange={(e) => setQueryStr(e.target.value)} />
      <div className="input-group-append">
        <button className="btn btn-outline-primary btn-lg" type="button" onClick={handleSubmit}>Button</button>
      </div>
    </div>
  )
};

export default AppForm;