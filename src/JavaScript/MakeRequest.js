const MakeRequest = async (setHasError, setLoading, id) => {
  const res = await fetch(
    `https://toyhouse-rails-api.herokuapp.com/character/?id=${id}`
  );

  const json = await res.json();

  return json;
};

export default MakeRequest;
