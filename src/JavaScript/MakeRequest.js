const MakeRequest = async (id, opts) => {
  let res;

  try {
    const url =
      `https://toyhouse-rails-api.herokuapp.com/character/?id=${id}` +
      (opts.galleryOnly
        ? "&gallery_only=true"
        : opts.detailsOnly
        ? "&details_only=true"
        : "");

    res = await fetch(url);
  } catch (err) {
    console.log(err);
    return null;
  }

  const json = await res.json();

  return json;
};

export default MakeRequest;
