import "../config";

const MakeRequest = async (id, opts) => {
  let res;

  try {
    const url =
      `${global.config.backend_url}/character/${id}` +
      (opts.galleryOnly
        ? "/gallery"
        : opts.detailsOnly
        ? "/details"
        : "");

    res = await fetch(url);
  } catch (err) {
    return null;
  }

  const json = await res.json();

  return json;
};

export default MakeRequest;
