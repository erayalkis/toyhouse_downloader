import "../config";

const MakeRequest = async (id, opts) => {
  let res;

  try {
    const url =
      `${global.config.backend_url}/character/?id=${id}` +
      (opts.galleryOnly
        ? "&gallery_only=true"
        : opts.detailsOnly
        ? "&details_only=true"
        : "");
    console.log(url);

    console.log(global.config.backend_url);
    res = await fetch(url);
  } catch (err) {
    console.log(err);
    return null;
  }

  const json = await res.json();

  return json;
};

export default MakeRequest;
