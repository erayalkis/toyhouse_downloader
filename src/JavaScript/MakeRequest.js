const MakeRequest = async (
  setHasError,
  setLoading,
  id,
  detailsOnly = false
) => {
  setLoading("Fetching character data...");
  let res;
  try {
    const url =
      `https://toyhouse-rails-api.herokuapp.com/character/?id=${id}` +
      (detailsOnly ? "&details_only=true" : "");
    res = await fetch(url);
  } catch (err) {
    setHasError("Something went wrong! :( Check the console for details!");
    console.log(err);
  }

  const json = await res.json();

  return json;
};

export default MakeRequest;
