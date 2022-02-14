const CheckURL = (props, queryStr) => {
  let id = null;
  if (!queryStr.startsWith("https") && !queryStr.startsWith("toyhou.se")) {
    props.setHasError("Please paste in a valid Toyhouse link!");
    return null;
  } else if (queryStr.startsWith("toyhou.se")) {
    id = queryStr.split("/")[1];
    return id;
  } else if (queryStr.startsWith("https://toyhou.se")) {
    id = queryStr.split("/")[3];
    return id;
  } else {
    props.setHasError("Please paste in a valid Toyhouse link!");
    return null;
  }
};

export default CheckURL;
