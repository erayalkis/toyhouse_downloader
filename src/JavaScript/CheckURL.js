const useURLCheck = async (queryStr) => {
  let id = null;
  if (!queryStr.startsWith("https") && !queryStr.startsWith("toyhou.se")) {
    return null;
  }

  const split = queryStr.split("/");

  if (queryStr.startsWith("toyhou.se")) {
    id =
      split[1] +
      (split[2] != null && split[2] !== "gallery" ? `/${split[2]}` : ""); // If tab ID exists, append it to the current id
    return id;
  } else if (queryStr.startsWith("https://toyhou.se")) {

    id =
      split[3] +
      (split[4] != null && split[4] !== "gallery" ? `/${split[4]}` : ""); // Same as above
    return id;
  } else {
    return null;
  }
};

export default useURLCheck;
