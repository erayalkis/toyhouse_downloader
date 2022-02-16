const CheckURL = (queryStr) => {
  let id = null;
  if (!queryStr.startsWith("https") && !queryStr.startsWith("toyhou.se")) {
    return null;
  } else if (queryStr.startsWith("toyhou.se")) {
    id = queryStr.split("/")[1];
    return id;
  } else if (queryStr.startsWith("https://toyhou.se")) {
    id = queryStr.split("/")[3];
    return id;
  } else {
    return null;
  }
};

export default CheckURL;
