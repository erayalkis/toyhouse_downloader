import { saveAs } from "file-saver";

const DownloadZip = async (zip, response) => {
  const content = await zip.generateAsync({ type: "blob" });

  saveAs(content, `${response.name}-gallery.zip`);
};

export default DownloadZip;
