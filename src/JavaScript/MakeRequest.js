const MakeRequest = async (setHasError, setLoading, id) => {
  setLoading("Fetching character data...");
  let res;
  try {
    res = await fetch(
      `https://toyhouse-rails-api.herokuapp.com/character/?id=${id}`
    );
  } catch (err) {
    setHasError("Something went wrong! :( Check the console for details!");
    console.log(err);
  }

  const json = await res.json();

  return json;
};

export default MakeRequest;
